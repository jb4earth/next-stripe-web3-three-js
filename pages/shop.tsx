import { NextPage } from 'next'
import Layout from '../components/Layout'
import React, { useEffect, useState } from "react"
import Cart from '../components/Cart'
import CartSummary from '../components/CartSummary'
import Products from '../components/Products'
import { AddressContext } from "../contexts/Address"
import { useAddress } from '@thirdweb-dev/react'
import { useRouter } from 'next/router'
import { fetchGetJSON } from '../utils/api-helpers'
import useSWR from 'swr'
const DonatePage: NextPage = () => {

  return (
    <Layout title="ArchiDAO">
      <div className="nft-container">
        <Cart>
          <Products />
          <CartSummary />
        </Cart>
      </div>
    </Layout>
  )
}

export default DonatePage
