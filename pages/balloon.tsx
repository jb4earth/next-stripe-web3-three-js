import { Suspense } from "react"


import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import { App } from "../components/Clump"

const IndexPage: NextPage = () => {
  return (

    <>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </>

  )
}

export default IndexPage
