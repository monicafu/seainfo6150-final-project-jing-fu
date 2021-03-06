import React from 'react'

import styles from "./OrderForm.module.css";


const OrderSummary = ({ magazine }) => {

  const tax = (Number(magazine.ourPrice) * 0.1).toFixed(2);
  const total = (Number(magazine.ourPrice) * 1.1).toFixed(2);

  return (
    <div className={styles.summary}>
      <h2 className={styles.title}>Order Summary</h2>
      <div className={styles.orderDetails}>
        <div className={styles.imageHolder}>
          <a href={`/product-detail/${magazine.categoryId}/${magazine.productId}`}>
            <img className={styles.productPic} src={magazine.image._url} alt={magazine.title} />
          </a>
        </div>
        <div className={styles.productDetail}>
          <div>
            <h3>
              <a className={styles.titleLink} href={`/product-detail/${magazine.categoryId}/${magazine.productId}`} >
                {magazine.name}
              </a>
            </h3>
            <div className={styles.desc}>
              <p>{magazine.oneYearIssues}</p>
              <p>New Subscription</p>
              <p>Quantity: 1</p>
              <p className={styles.priceLabel}>
                <strong className={styles.price}><span>${magazine.ourPrice}</span></strong>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.priceDetail}>
          <table className={styles.priceTable}>
            <tbody>
              <tr>
                <td className={styles.firstCol}>Subtotal:</td>
                <td className={styles.secCol}>${magazine.ourPrice}</td>
              </tr>
              <tr>
                <td>Total before tax:</td>
                <td>${magazine.ourPrice}</td>
              </tr>
              <tr>
                <td>Estimated Tax:</td>
                <td>${tax}</td>
              </tr>
              <tr>
                <td>Shipping:</td>
                <td>FREE</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className={styles.total}>
                <td className={styles.line}>Total:</td>
                <td className={styles.line}>${total}</td>
              </tr>
            </tfoot>
          </table>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default OrderSummary