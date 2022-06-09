import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage: NextPage = () => {
  return (
    <Layout title="NovaDAO">

      <ul className="card-list">
        <li>
          
         <video src='/video.mp4'  width="900" muted autoPlay={true}></video>
          
          <Link href="/whitelist">
            <a className="landing" >  
              <h2 className="bottom">Join the whitelist</h2>
            </a>            
          </Link>
          <br/>
      <div className='whiteDescription' >
         <img src='/novadaoT.png' className='novaText'/>
         <div className='textContent'>
           <p className=''>
           NovaDAO is a DAO governed fundraising and incubation platform for Web 3.0 builders with three primary aims: • To bring early stage opportunities to the people. These opportunities are currently only available to a select few whales. • To liquify and hence create secondary markets for these opportunities. • To leverage community in order to aid founders build great projects and solve the problems people face! Total supply of NFTs will be 7,500 which will receive back 60% of mint price in $NOVA!
         </p>
         </div>
          <br/>
          <img src='VisionN.png' className='novaText'/>
          <div className='textContent'>
          Our vision is to have a global group of builders and enthusiasts come together to communally synthesize, ideate and help execute the production of creative endeavours across the globe.
          </div>
          <br/>
          <img src='/whitelistNova.png' className='novaText'/>
          <div className='textContent'>
            A whitelist (allowlist) is a cybersecurity strategy that approves a list of email addresses, IP addresses, domain names or applications, while denying all others. IT administrators use a whitelist as a quick and easy way to help safeguard computers and networks from potentially harmful threats or inappropriate material on local networks or across the internet.
          </div>
          <br/>
         
               </div>
        </li>
        
      </ul>
      {/* <div className='nft-container'>
        Join Us
      </div> */}
    </Layout>
    
  )
  
}

export default IndexPage
