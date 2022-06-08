import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage: NextPage = () => {
  return (
    <Layout title="ArchiDAO">
      <ul className="card-list">
        <li>
          <Link href="https://discord.gg/ngh5huRNsg">
            <a className="whitelist-div cart-style-background">
              <h2 className="">𝕝𝕚𝕤𝕥𝕖𝕕</h2>
              <p>Pop into our Discord and let us know you're on the list.</p>
            </a>

          </Link>
          <Link href="/shop">
          <a className="whitelist-div cart-style-background">
              <h2 className="">𝕊𝕙𝕠𝕡</h2>
              <p>Go into our shoping page and get your ℕ𝔽𝕋</p>
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default IndexPage
