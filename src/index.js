import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import useScript from './hooks/useScript'

const  YenePayCheckoutButton = ({
  ipnUrl,
  successUrl,
  merchantOrderId,
  itemId,
  itemName,
  unitPrice,
  quantity
}) => {
  useScript('https://www.yenepay.com/bundles/sdk/js/v1/sdk.min.js')
  const setting = {
    merchantId: '000',
    forceWhenDuplicate: true,
    useSandbox: false
  }

  const [paymentRequest, setPaymentRequest] = useState()

  const pay = () => {
    new window.YenePay(setting)
      .process(paymentRequest)
      .then(function (data) {
        console.log('Success payment called')
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  useEffect(() => {
    setPaymentRequest({
      process: 'Express',
      ipnUrl, // (optional) Your IPN callback url
      successUrl, // (optional) Your Payment Success callback url
      merchantOrderId,
      itemId, // (optional) Item id
      itemName, // Item Name
      unitPrice, // Item unit price
      quantity, // Item quantity
      currency: 'ETB'
    })
  }, [])

  return (
    <button className={styles.btn} onClick={pay}>
      <img className={styles.img} src='https://yenepay.com/images/logo.png' />
    </button>
  )
}

export default YenePayCheckoutButton;
