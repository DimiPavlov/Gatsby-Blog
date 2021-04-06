import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact me!!!</h1>
      <h2>
        You can contact me via{" "}
        <a href="https://www.linkedin.com/in/DimiPavlov" target="_blank">
          LinkedIn
        </a>{" "}
        on LinkedIn
      </h2>
    </Layout>
  )
}

export default ContactPage
