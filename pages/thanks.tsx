// @ts-nocheck
import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import Head from "next/head";
import { CWload } from '../components/CWload';
import { setDoc,doc,collection, getFirestore } from '@firebase/firestore';
import { useEffect,useState } from 'react';
import { firestore } from '../components/firebase/client';
import { fetchGetJSON } from '../utils/api-helpers'
import useSWR from 'swr'
import Cart from '../components/Cart'
import ClearCart from '../components/ClearCart'
import PrintObject from '../components/PrintObject'
import { useRouter } from 'next/router'
import React from "react"

import {
  useNetwork,
  useAddress,
} from '@thirdweb-dev/react';


const addPurchasex = async (address) => {
      // alert(String(address))
      
};

const IndexPage: NextPage = (req,res) => {
  CWload('CWload')
  const addressx = useAddress()
  const router = useRouter()
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    fetch('api/nft_count')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  if(data)
  {
    console.log(data)
  }

    
  // if (error) return <div>failed to load</div>
  
  
  return (
    <Layout title="NovaDAO">
    <div className='Thanks_holder'>
      <h1>𝕋𝕙𝕒𝕟𝕜𝕤 𝕗𝕠𝕣 𝕡𝕦𝕣𝕔𝕙𝕒𝕤𝕚𝕟𝕘!</h1>
      <h2>𝕋𝕙𝕖  ℕ𝔽𝕋 𝕨𝕚𝕝𝕝 𝕓𝕖 𝕕𝕚𝕤𝕥𝕣𝕚𝕓𝕦𝕥𝕖𝕕 𝕚𝕟 𝕥𝕙𝕖 𝕟𝕖𝕩𝕥 𝟜𝟠 𝕙𝕠𝕦𝕣𝕤.</h2>
      <h3>𝕀𝕗 𝕥𝕙𝕖 𝕒𝕕𝕕𝕣𝕖𝕤𝕤 𝕤𝕙𝕠𝕨𝕟 𝕒𝕥 𝕥𝕠𝕡 𝕣𝕚𝕘𝕙𝕥 𝕚𝕤 𝕟𝕠𝕥 𝕔𝕠𝕣𝕣𝕖𝕔𝕥, 𝕡𝕝𝕖𝕒𝕤𝕖 𝕙𝕚𝕥 𝕦𝕤 𝕦𝕡 𝕚𝕟 𝔻𝕚𝕤𝕔𝕠𝕣𝕕!</h3>
      <h2>𝕋𝕠𝕥𝕒𝕝 𝕟𝕦𝕞𝕓𝕖𝕣 𝕠𝕗 𝕠𝕗𝕗𝕚𝕔𝕚𝕒𝕝𝕝𝕪 𝕡𝕦𝕣𝕔𝕙𝕒𝕤𝕖𝕕 ℕ𝔽𝕋<span> - {data?.Total}  </span></h2>    
    </div>
    </Layout>
  ) }



export default IndexPage


