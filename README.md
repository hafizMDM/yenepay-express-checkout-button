# react-yenepay-express-checkout

> YenePay Express Checkout React Component

[![NPM](https://img.shields.io/npm/v/react-yenepay-express-checkout.svg)](https://www.npmjs.com/package/react-yenepay-express-checkout) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-yenepay-express-checkout
```
```bash
yarn react-yenepay-express-checkout -g
```
## Usage

```jsx
import React, { Component } from 'react'

import YenePayCheckoutButton from 'react-yenepay-express-checkout'
import 'react-yenepay-express-checkout/dist/index.css'

const ExampleComponent = () => {
    return 
     <YenePayCheckoutButton
        ipnUrl="https://yourdomain.com/ipn"
        successUrl="https://yourdomain.com/success"
        merchantOrderId="OR01"
        itemId="IT1001"
        itemName="My Item"
        unitPrice={1}
        quantity={1}
      />
}
```

## License

MIT © [hafizMDM](https://github.com/hafizMDM)
