import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I am Dimi, a junior web developer living in Bucharest</h2>

      <p>
        Need a developer?<Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
