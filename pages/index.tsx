import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage: NextPage = () => {
  return (
    <Layout title="ArchiDAO">

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
         <img src='/ARchiText.png'/>
         We are a group of architects, who want to create a DAO focused on funding architectural research.
         
          <br/>
          <img src='vision.png'/>
          ArchiDAO is dedicated to finding novel ways of connecting architecture and blockchain in order to make new findings and develop potential inventions. Real world architecture is a complex process with many stakeholders and parties, that’s why we believe using blockchain in this field might yield very interesting innovations connected to solid improvements of workflows currently used. The challenges of the 21st century will require more focus on evidence-based design and sustainability.
          <br/>
          <img src='/white.png'/>
          A whitelist (allowlist) is a cybersecurity strategy that approves a list of email addresses, IP addresses, domain names or applications, while denying all others. IT administrators use a whitelist as a quick and easy way to help safeguard computers and networks from potentially harmful threats or inappropriate material on local networks or across the internet.
          <br/>
         
               </div>
        </li>
        
      </ul>
      <div className='nft-container'>
        We Deserve to be minted
      </div>
    </Layout>
    
  )
  
}

export default IndexPage
