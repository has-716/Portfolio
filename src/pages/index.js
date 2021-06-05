import * as React from "react"

import { css } from "@emotion/react"
import { StaticImage } from 'gatsby-plugin-image'

import { GlobalStyle } from "../styles/GlobalStyle"
import { size } from "../styles/Size"
import { color, typography } from "../styles/Theme"
import { Header } from "../components/Header"
import { MainVisual } from "../components/MainVisual"
import Layout from "./Layout"

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Layout>
        <MainVisual />
      </Layout>
    </>
  )
}

export default IndexPage