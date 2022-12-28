import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import useScript from './hooks/useScript'

const YenePayCheckoutButton = ({
  ipnUrl,
  successUrl,
  merchantOrderId,
  itemId,
  itemName,
  unitPrice,
  quantity,
  forceWhenDuplicate,
  useSandbox,
  merchantId,
  onSuccess
}) => {
  useScript('https://yenepay.com/bundles/sdk/js/v1/sdk.min.js')

  const paymentRequest = {
    process: 'Express',
    ipnUrl, // (optional) Your IPN callback url
    successUrl, // (optional) Your Payment Success callback url
    merchantOrderId,
    itemId, // (optional) Item id
    itemName, // Item Name
    unitPrice, // Item unit price
    quantity, // Item quantity
    currency: 'ETB'
  }
  const setting = {
    merchantId,
    forceWhenDuplicate,
    useSandbox
  }
  const pay = () => {
    new window.YenePay(setting)
      .process(paymentRequest)
      .then(function (data) {
        onSuccess(data);
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  return (
    <button className={styles.btn} onClick={pay}>
      <img className={styles.img} src='https://yenepay.com/images/logo.png' />
    </button>
  )
}

export default YenePayCheckoutButton
