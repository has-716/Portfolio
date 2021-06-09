import * as React from "react"

import { css } from "@emotion/react"
import { StaticImage } from 'gatsby-plugin-image'

import { size } from "../styles/Size"
import { MainVisual } from "../components/MainVisual"
import Layout from "./Layout"
import { Works } from "../components/Works"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <MainVisual />
        <Works />
      </Layout>
    </>
  )
}

export default IndexPage