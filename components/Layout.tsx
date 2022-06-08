//@ts-nocheck
import React, { ReactNode,useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { library } from "@fortawesome/fontawesome-svg-core";
import Canvas3 from './Canvas3'
import { fab,faTwitter,faDiscord,faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fortawesome/fontawesome-free-solid'
import { ConnectWallet } from '../components/ConnectWallet';
import { AddressContext } from "../contexts/Address"
import CookiesModal from '../components/CookiesModal'
import CookieConsent from 'react-cookie-consent';


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
  <div className="backdrop"><img src='/Bg.jpg' /></div>

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
        content="https://ipfs.io/ipfs/Qmb7k3AUhnNsjoak459vh8Z3RC1qdLx7J5ucFUPn6b7E44?filename=preview.png"
      />
    </Head>

    <div className="container">
      <header>
        <div className="header-content">
          <Link href="/">
            <a className="header-logo">
              <img src="/archidaoYO.png" />
            </a>
          </Link>
          <Link href="/faq">
            <a className="header-logo">
            {/* <img className='img-faq' src='FAQ.png'/> */}
            𝔽𝔸ℚ
            </a>
          </Link>
          <ConnectWallet />
        </div>

      </header>
      
      {children}
    </div>

    <div className="banner">
      <span>
         <a
           href="https://discord.gg/J9yAMgP3"
           target="_blank"
           color='yellow'
           rel="noopener noreferrer"
         >
            𝔻𝕚𝕤𝕔𝕠𝕣𝕕&nbsp;<FontAwesomeIcon icon={['fab', 'discord']} />
         </a>
         &nbsp;&nbsp;
         <a
           href="https://github.com/archiDAO"
           target="_blank"
           color='yellow'
           rel="noopener noreferrer"
         >
           𝔾𝕚𝕥ℍ𝕦𝕓&nbsp;<FontAwesomeIcon icon={["fab", "github"]} />
         </a>.
      </span>
    </div>
<CookiesModal/>
   </>
)

export default Layout
