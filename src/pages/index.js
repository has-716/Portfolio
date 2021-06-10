import * as React from "react"

import { css } from "@emotion/react"
import { StaticImage } from 'gatsby-plugin-image'
import { MainVisual } from "../components/MainVisual"
import Layout from "../components/Layout"
import { Works } from "../components/Works"
import { About } from "../components/About"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <MainVisual />
        <Works />
        <About />
      </Layout>
    </>
  )
}

export default IndexPage