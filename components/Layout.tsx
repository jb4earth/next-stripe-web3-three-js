import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { library } from "@fortawesome/fontawesome-svg-core";
import Canvas3 from './Canvas3'
import { fab,faTwitter,faDiscord,faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fortawesome/fontawesome-free-solid'


library.add(faTwitter,faDiscord,faGithub);
type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = 'ArchiDAO',
}: Props) => (
  <>
  <div className="backdrop"><Canvas3 /></div>

    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ArchiDAO" />
      <meta name="twitter:title" content="ArchiDAO" />
      <meta
        name="twitter:description"
        content="The DAO for Architecture"
      />
      <meta
        name="twitter:image"
        content="https://ipfs.io/ipfs/QmPYAPNFB373TrM9TJN59RDuZgSpUDW9qvqBktaSS4vDEH?filename=nft_.png"
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
          <Link href="/shop">
            <a className="logox">
              shop
            </a>
          </Link>

        </div>

      </header>
      {children}
    </div>

    <div className="banner">
      <span>
         Chat with us on&nbsp;
         <a
           href="https://github.com/archiDAO"
           target="_blank"
           rel="noopener noreferrer"
         >
            Discord&nbsp;<FontAwesomeIcon icon={['fab', 'discord']} />
         </a>
         {' or view our code on '}
         <a
           href="https://github.com/archiDAO"
           target="_blank"
           rel="noopener noreferrer"
         >
           GitHub&nbsp;<FontAwesomeIcon icon={["fab", "github"]} />
         </a>.
      </span>

    </div>
  </>
)

export default Layout
