import { NextApiRequest, NextApiResponse } from 'next'
import { redirect } from 'next/dist/server/api-utils'
import { NextPage } from 'next'
import Link from 'next/link'
import Head from "next/head";
import { CWload } from '../../../components/CWload';

import { setDoc,doc,collection, getFirestore, Timestamp, getDoc } from '@firebase/firestore';


import { firestore } from '../../../components/firebase/client';


import Stripe from 'stripe'
import { timeStamp } from 'console'
import Cookies from 'cookies'


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27',
})
import {
  useNetwork,
  useAddress,
} from '@thirdweb-dev/react';
import { AddressContext } from '../../../contexts/Address';
import { counter } from '@fortawesome/fontawesome-svg-core';
import { useContext } from 'react';
import React from 'react';





export default async function handler(req,res) {
  const cookies = new Cookies(req,res);
  


  const sessionId: string = req.query.session_id as string
  const address = cookies.get('Current_Address');
  console.log(address)
  
  

  
  
  // const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  try {
      
    const checkout_session: Stripe.Checkout.Session =
      await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['payment_intent'],
      })
      if(checkout_session.status === 'complete')
      {
        
        const timestamp = Date.now().toString();    
             setDoc(doc(firestore, "SuccessfulPayments", String(timestamp)), {
              address:String(address),
              data:checkout_session
        });
       const quantity = checkout_session.amount_total/9000 
       console.log(quantity)
        const docRef = doc(firestore, "Quantity_counter", "soldNFT");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data().Total_sold);
          const Total_sold = parseInt(docSnap.data().Total_sold) + quantity;
          
          setDoc(doc(firestore, "Quantity_counter", 'soldNFT'), {
            timestamp:String(timestamp),
            Total_sold:String(Total_sold)
      });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }
      else
      {
        console.log('almost there')
      }      
    
    //  res.status(200).json(checkout_session)
      res.writeHead(302, { Location: '/thanks' }).end()
   
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'Internal server error'
    res.status(500).json({ statusCode: 500, message: errorMessage })
    console.log("error")
  }
}