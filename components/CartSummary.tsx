import React, { useState, useEffect, useCallback } from 'react'
import {
  useNetwork,
  useAddress,
} from '@thirdweb-dev/react';
import Web3 from 'web3';
import StripeTestCards from '../components/StripeTestCards'
import { CWload } from '../components/CWload';
import { AddressContext } from "../contexts/Address"

import { useShoppingCart } from 'use-shopping-cart/react'
import { fetchPostJSON } from '../utils/api-helpers'
const CartSummary = () => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(true)
  const [cartEmpty, setCartEmpty] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const {
          formattedTotalPrice,
          cartCount,
          clearCart,
          cartDetails,
          redirectToCheckout,
        } = useShoppingCart()

  useEffect(() => setCartEmpty(!cartCount), [cartCount])
  // useEffect(() => setResult(!cartCount), [cartCount])

  const [ state, dispatch ] = React.useContext(AddressContext)
  console.log(state)
  console.log(state.address)
  console.log('cartsumm.jsx')


  const handleCheckout: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault()
    setLoading(true)
    setErrorMessage('')

    console.log(state.address)
    console.log('got hrere')


    const response = await fetchPostJSON(
      '/api/checkout_sessions/cart',
      cartDetails
    )

    if (response.statusCode > 399) {
      console.error(response.message)
      setErrorMessage(response.message)
      setLoading(false)
      return
    }

    redirectToCheckout({ sessionId: response.id })
  }
  console.log(state)
  console.log(state.active)
  console.log('CS pre retren')
  console.log(cartEmpty)
  if (CWload()){  return (
      <form className='cart' onSubmit={handleCheckout}>
        <CWload/>
        <h2>Cart summary</h2>
        {errorMessage ? (
          <p style={{ color: 'red' }}>Error: {errorMessage}</p>
        ) : null}
        {/* This is where we'll render our cart */}
        <p suppressHydrationWarning>
          <strong>Number of Items:</strong> {cartCount}
        </p>
        <p suppressHydrationWarning>
          <strong>Total:</strong> {formattedTotalPrice}
        </p>
        {/* Redirects the user to Stripe */}
        <button
          className="shop-button cart-style-background"
          type="submit"
          disabled={cartEmpty || !state.active }
        >
          Pay with Card
        </button>
        <button
          className="shop-button cart-style-background"

          disabled={true }
        >
          (coming soon) Pay with Crypto
        </button>
      </form>
    )}else{return(<h1>please connect wallet</h1>)}

}

export default CartSummary
