import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const items = [
  {title: '𝕎𝕠𝕣𝕜𝕤𝕙𝕠𝕡 ℙ𝕣𝕚𝕠𝕣𝕚𝕥𝕪', data: 'Get priority seats to upcoming six ArchiDAO workshops. We\'ve created educational content before!', link: true},
  {title: '𝕊𝕔𝕙𝕠𝕝𝕒𝕣𝕤𝕙𝕚𝕡', data: 'Help to make the difference in the democratisation of Architecture Technology.'},
  {title: '𝔼𝕩𝕙𝕚𝕓𝕚𝕥𝕚𝕠𝕟', data: 'Opportunity to show your work in ArchiDAO Gallery and Exhibitions.'},
  {title: '𝔽𝕦𝕟𝕕 𝕋𝕦𝕥𝕠𝕣𝕤', data: 'Sponsor instructors for next six workshops and make them accessible to holders for free.'},
  {title: '𝔹𝕠𝕟𝕦𝕤 ℍ𝕠𝕦𝕣𝕤', data: 'Bonus after hours with tutors for the six upcoming workshops.'},
  {title: '𝕍𝕠𝕥𝕚𝕟𝕘', data: 'Eligible to vote for future governance of educational initiatives.'},
]

const IndexPage: NextPage = () => {var i = 0
  return (
    <Layout title="ArchiDAO">
<div className="faq-div">
    <h1>𝕎𝕙𝕪 𝕚𝕤 𝕪𝕠𝕦𝕣 ℕ𝔽𝕋 𝕟𝕠𝕥 𝕛𝕦𝕤𝕥 𝕒 𝕙𝕪𝕡𝕖?</h1>
<p>ArchiDAO presents our wearable NFT! The wearable will be available for use in Decentraland.<br/>
Cherry on the top, our NFT has six additional utilities.
</p>
  <h1>  𝕎𝕙𝕒𝕥 𝕒𝕣𝕖 𝕥𝕙𝕖 𝕤𝕚𝕩 𝕦𝕥𝕚𝕝𝕚𝕥𝕚𝕖𝕤?</h1>
      <ul className="faq-list">

      {items.map((item) => {i += 1; if (item.link == true) {
        return(
          <li>
              <div className="faq-item cart-style-background">
                <h2>{i}. {item.title}</h2>
                <p>{item.data}</p>
                <a className="faq-a" href="https://youtube.com/channel/UCm08iRIcqpqzgIcva7gUFHg">Checkout our Youtube</a>
              </div>
          </li>
      )} else {return(
        <li>
            <div className="faq-item cart-style-background">
              <h2>{i}. {item.title}</h2>
              <p>{item.data}</p>
            </div>
        </li>
      )}
    })}
      </ul>
      </div>
    </Layout>
  )
}

export default IndexPage
