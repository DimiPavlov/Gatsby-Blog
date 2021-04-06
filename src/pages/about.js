import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>Anything you would like to know </h1>
      <p>
        Hi I am Dimi and I am here to help you navigate with ease while visiting
        my blog site.
      </p>
      <p>
        <Link to="/contact">Contact me Here</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
