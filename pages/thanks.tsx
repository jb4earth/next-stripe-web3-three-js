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
    <Layout title="ArchiDAO">
    <div className='Thanks_holder'>
      <h1>Thanks for purchasing!</h1>
      <h2>The ArchiDAO NFT will be distributed in the next 48 hours.</h2>
      <h3>If the address shown at top right is not correct, please hit us up in Discord!</h3>
      <h2>Total number of officially purchased NFT<span> - {data?.Total}  </span></h2>    
    </div>
    </Layout>
  ) }



export default IndexPage


