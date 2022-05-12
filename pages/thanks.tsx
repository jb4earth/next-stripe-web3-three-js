// @ts-nocheck
import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import Head from "next/head";
import { CWload } from '../components/CWload';

import { setDoc,doc,collection } from '@firebase/firestore';

import { useState } from 'react';
import { firestore } from '../components/firebase/client';

import React from "react"
import { AddressContext } from "../contexts/Address"

const addPurchasex = async (address) => {
  //  grab the state
    // const [ state, dispatch ] = React.useContext(AddressContext)
// shows in browser not console
    const timestamp:string = Date.now().toString();


    const jdoc = {
      address: address,
      time: timestamp
    }
// show state
    console.log(jdoc)
    // console.log('in thanks')
// set in DB (FAILS????)
    const res = firestore.collection('info_collect').doc(timestamp).set(jdoc);
    await setDoc(doc(firestore, 'info_collect', timestamp), jdoc);
};

const IndexPage: NextPage = () => {

  return (
    <Layout title="ArchiDAO">





              <button
                className="cart-style-background"
                onClick={() => addPurchasex(<CWload/>)}
              >
                <h2 ><CWload/> </h2>
                <h3>Click to pre-Mint with this address</h3>
                <h1>this is failing due to state / firestore issue</h1>
                <p>refactor or remove before sale</p>
              </button>




    </Layout>
  )

}

export default IndexPage
