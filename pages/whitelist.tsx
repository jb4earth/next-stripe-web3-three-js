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
      console.log(address)
      console.log(timestamp)
      await updateDoc(doc(firestore, "whitelist", String(address)), {
              email: (String(values.email))  }).catch(()=>{ setDoc(doc(firestore, "whitelist", String(address)), {
              email: (String(values.email)) });})
      await updateDoc(doc(firestore, "crypto_logins", String(address)), {
              whitelist: arrayUnion(String(timestamp)), email: arrayUnion(String(values.email))  }).catch(()=>{ setDoc(doc(firestore, "crypto_logins", String(address)), {
              whitelist: (String(timestamp)), email: (String(values.email)) });})


              location.replace="/whitelist-thanks";  
              window.location.href = "/whitelist-thanks";
    // Send the form data to our forms API on Vercel and get a response.
  }
  if (address) {  return (
      <Layout title="ArchiDAO">
      <div className="whitelist-div">
      <form className="whitelist-form" onSubmit={handleSubmit}>
        <input type="text" className="whitelist-input" id="email" placeholder="email" name="email" value={values.email} onChange={handleEmailInputChange} required />
        <button className="whitelist-submit" type="submit"><a href='/whitelist-thanks'>send</a></button>
      </form>
      </div>
      <br/>
      <br/>
      <div className='whiteDescription'>
    <img src='/differentiation.png'/>
    As far as we know no other DAO focused on architectural research exists. There are some architectural themed DAOs, but mostly they focus on development and decentralized real estate ownership. We also have a unique starting project, which has potential to attract a lot of people.
    <br/>
    <img src='/team.png'/>
    Jiří Vele (architect, doing PhD at Faculty of architecture, CTU in Prague, topic of his research is: robotic concrete 3D printing)

Šimon Prokop (architect, doing PhD at Faculty of architecture, CTU in Prague, topic of his research is: acoustics )

Theo Dounas (architect, researcher, teacher, developer)
  </div>
      </Layout>
    )} else
  {  return (
      <Layout title="ArchiDAO">
      <div className="whitelist-div whiteDescription">
        <h1>Please connect wallet to whitelist</h1>
      </div>
      <br/>
      <br/>
      <img src='/w.png'/>
            What does it mean to be put on a whitelist?
            Often, a user or department requests access to a specific approved application or to a remote server or service not accessible from corporate devices or the corporate network. When a destination or application is put on a whitelist, it is considered safe, and access to the remote destination, application or service is granted.
        <br/>
        <img src='product.png'/>
        DAO creates parallel resources for supporting architectural research.

  DAO unites researchers, architects, developers and the general public to discuss the importance of innovations in architecture.

  DAO supports sustainable approaches in the architecture and building industry.

  DAO will organize idea / architecture competitions in order to come up with reasonable new requirements for technologies.
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