// @ts-nocheck
import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import Boxes from '../components/Boxes'

import { doc,collection } from '@firebase/firestore/lite';
import Head from "next/head";
import { useState } from 'react';
import { firestore } from './firebase/client';


import {
  useNetwork,
  useAddress,
} from '@thirdweb-dev/react';

const IndexPage: NextPage = () => {


  const addPurchasex = async () => {
      // get the current timestamp
      var addressX = await useAddress()
      const timestamp:string = Date.now().toString();
      // create a pointer to our document
      const purchase = await firestore.collection('info_collect').doc(`${timestamp}`)
      // console.log(firesore)
      console.log(`${timestamp}`)
      console.log('wtf------------')
      console.log(`${addressX}`)
      const jsondoc = {
        address: `${addressX}`,
        timestamp: timestamp,
      }
      console.log(jsondoc)
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
