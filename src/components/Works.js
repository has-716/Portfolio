import React from "react"

import { css } from "@emotion/react"

import { GlobalStyle } from "../styles/GlobalStyle"
import { size } from "../styles/Size"
import { baseColor, color, typography } from "../styles/Theme"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { About } from "./About"
import { Card } from "./Card"

const root = css`
    background: ${color.surface.primary};
    margin: 120px 8vw;
    @media (max-width: 768px) {
    margin: 60px 6vw;
    }
`

const title = css`
    ${typography.headline2}
    color: ${color.text.highEmphasis};
    text-align: center;
    @media (max-width: 768px) {
        text-align: left;
    }
`

const cardWrapper = css`
    display: grid;
    grid-gap: 80px;
    margin-top: 6em;
    @media (max-width: 768px) {
        grid-gap: 60px;
    }
`

export const Works= () => (
    <>
        <section css={root} id="work">
            <h2 css={title}>WORK</h2>
            <div css={cardWrapper}>
                <Card />
            </div>
        </section>
        <About/>
    </>
)