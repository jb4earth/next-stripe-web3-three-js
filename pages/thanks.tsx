// @ts-nocheck
import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import Boxes from '../components/Boxes'
import React from "react"

import { doc,collection } from '@firebase/firestore/lite';
import Head from "next/head";
import { useState } from 'react';
import { firestore } from './firebase/client';

import { AddressContext } from "../contexts/Address"

const IndexPage: NextPage = () => {






  const addPurchasex = async () => {
      // get the current timestamp
      const [ state, dispatch ] = React.useContext(AddressContext)

      console.log('--------------------')
      console.log(state.address)
      console.log('thanks.jsx')
      const timestamp:string = Date.now().toString();
      // create a pointer to our document
      const purchase = await firestore.collection('info_collect').doc(`${timestamp}`)
      // console.log(firesore)
      console.log('-----xxx------------')
      console.log(`${timestamp}`)

      console.log(`${state.address}`)

      const jsondoc = {
        address: `${state.address}`,
        timestamp: timestamp,
      }
      console.log(jsondoc)
      console.log('--------------------------------')
      // const purchase = doc(firestore,`info_collect/${timestamp}`);
      // structure the todo data
      const metadata = {      };
      await firestore.collection('info_collect').doc(timestamp).set(jsondoc)
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });

  };
  addPurchasex();
  return (
    <Layout title="ArchiDAO">
      <ul className="card-list">
        <li>
          <Link href="/shop">
            <a className="card cart-style-background">
              <h2 className="bottom">Please pop back into discord to let us know you finished!</h2>
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default IndexPage
