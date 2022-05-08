import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import Boxes from '../components/Boxes'

const IndexPage: NextPage = () => {
  return (
    <Layout title="ArchiDAO">
    <Boxes />
      <ul className="card-list">
        <li>
          <Link href="/shop">
            <a className="card cart-style-background">
              <h2 className="bottom">thanks</h2>
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default IndexPage
