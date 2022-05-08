import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Boxes from './Boxes'



type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = 'ArchiDAO',
}: Props) => (
  <>
  <div className="backdrop"><Boxes /></div>

    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ArchiDAO" />
      <meta name="twitter:title" content="ArchiDAO Twitter" />
      <meta
        name="twitter:description"
        content="The DAO for Architecture"
      />
      <meta
        name="twitter:image"
        content="https://nextjs-typescript-react-stripe-js.vercel.app/social_card.png"
      />
    </Head>

    <div className="container">
      <header>
        <div className="header-content">
          <Link href="/">
            <a className="logo">
              <img src="/archidao.png" />
            </a>
          </Link>
        </div>

      </header>
      {children}
    </div>

    <div className="banner">
      <span>
        {' View code on '}
        <a
          href="https://github.com/archiDAO"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </span>

    </div>
  </>
)

export default Layout
