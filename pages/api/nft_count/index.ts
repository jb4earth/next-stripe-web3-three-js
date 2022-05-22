import {

    useAddress,
  
  } from '@thirdweb-dev/react';
  import { NextPage } from 'next'
  import Link from 'next/link'
  import Layout from '../../../components/Layout'
  import Head from "next/head";
  
  
  import { setDoc,doc,collection, getFirestore,updateDoc, arrayUnion, getDoc } from '@firebase/firestore';
  import { AddressContext } from "../../../contexts/Address"
  import { useState } from 'react';
  import { firestore } from '../../../components/firebase/client';
  
  import React from "react"
  

export default async function handler(req,res)
{
    const docRef = doc(firestore, "Quantity_counter", "soldNFT");
        const docSnap = await getDoc(docRef);
        let Total = null;
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data().Total_sold);
          const Total_sold = parseInt(docSnap.data().Total_sold)
          const Total = Total_sold
          console.log('Total number of sold ',Total)
          res.status(200).json({Total:Total})
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          res.status(405).end('method not allowed')
        }
        

    
}

