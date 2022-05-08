import { NextPage } from 'next'
import Layout from '../components/Layout'

import Cart from '../components/Cart'
import CartSummary from '../components/CartSummary'
import Products from '../components/Products'
import { ConnectWallet } from '../components/ConnectWallet';

const DonatePage: NextPage = () => {
  return (
    <Layout title="Shopping Cart | Next.js + TypeScript Example">

      <div className="page-container">
        <h1>BUY NFT</h1>
        <p>
        Utility?
        </p>
        <Cart>
          <Products />
          <div>
            <ConnectWallet />
          </div>
          <CartSummary />

        </Cart>
      </div>
    </Layout>
  )
}

export default DonatePage
