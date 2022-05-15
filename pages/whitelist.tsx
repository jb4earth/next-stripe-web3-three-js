// @ts-nocheck
import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import Head from "next/head";
import { CWload } from '../components/CWload';
import { useRouter } from 'next/router'
import { useState } from 'react';
import React from "react"

import { setDoc,doc,collection, getFirestore,updateDoc, arrayUnion } from '@firebase/firestore';
import { firestore } from '../components/firebase/client';


import {
  useNetwork,
  useAddress,
} from '@thirdweb-dev/react';


const addPurchasex = async (address) => {
      // alert(String(address))
};

const IndexPage: NextPage = () => {
  const [values, setValues] = useState({
  	email: '',
  });
  const handleEmailInputChange = (event) => {
  	event.persist();
    values.email = event.target.value
  	setValues((values) => ({
  		...values,
  		email: event.target.value,
  	}));
  };


  var address = CWload('whitelist')
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
    const timestamp = Date.now().toString();

    updateDoc(doc(firestore, "crypto_logins", String(address)), {
            whitelist: arrayUnion(String(timestamp)), email: arrayUnion(String(values.email))  }).catch(()=>{ setDoc(doc(firestore, "crypto_logins", String(address)), {
            whitelist: arrayUnion(String(timestamp)), email: arrayUnion(String(values.email)) });})


    window.location.href = "/";
  // Send the form data to our forms API on Vercel and get a response.
}
if (address) {  return (
    <Layout title="ArchiDAO">
    <div className="whitelist-div">
    <form onSubmit={handleSubmit}>
      <input type="text" id="email" placeholder="email" name="email" value={values.email} onChange={handleEmailInputChange} required />
      <button type="submit">Submit</button>
    </form>
    </div>
    </Layout>
  )} else
{  return (
    <Layout title="ArchiDAO">
    <div className="whitelist-div">
      <h1>Please connect wallet to whitelist</h1>
    </div>
    </Layout>
  )}

}



export default IndexPage


// <button
//   className="cart-style-background"
//   onClick={() => addPurchasex()}
// >
//
//   <h2>Click to pre-Mint</h2>
// </button>
