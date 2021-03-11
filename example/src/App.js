import React from 'react'

import YenePayCheckoutButton from 'react-yenepay-express-checkout'
import 'react-yenepay-express-checkout/dist/index.css'

const App = () => {
  return <YenePayCheckoutButton
  ipnUrl="https://yourdomain.com/ipn"
  successUrl="https://yourdomain.com/success"
  merchantOrderId="OR01"
  itemId="IT1001"
  itemName="My Item"
  unitPrice={1}
  quantity={1}
  forceWhenDuplicate={false}
  useSandbox={true}
  merchantId="0220"
    />
}

export default App
