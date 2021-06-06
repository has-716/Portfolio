import React from "react"

import { css } from "@emotion/react"

import { GlobalStyle } from "../styles/GlobalStyle"
import { size } from "../styles/Size"
import { baseColor, color, typography } from "../styles/Theme"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { About } from "./About"

const root = css`
    background: ${color.surface.primary};
    padding: 104px 24px;
    margin-top: 32px;
    @media (max-width: 768px) {
        padding: 24px 16px 32px;
        margin-top: 24px;
    }
`

const title = css`
    color: ${color.text.highEmphasis};
    ${typography.headline2}
`

const cardWrapper = css`
    display: grid;
    grid-template-columns: repeat(3,4fr);
    grid-gap: 16px;
    margin-top: 32px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(1,12fr);
        margin-top: 24px;
    }
`
const card = css`
    padding: ${size[24]};
    @media (max-width: 768px) {
        padding: 0;
        :not(:first-child) {
            margin-top: 16px;
        }
        :hover {
            background-color: ${color.surface.teriary};
            border-radius: 4px;
        }
    }
`
const cardContent = css`
    margin-top: ${size[8]};
    padding: ${size[8]};
    @media (max-width: 768px) {
        padding: 0;
    }
`
const cardInfomation = css`
    ${typography.overline}
    color: ${color.text.disable};
    display: flex;
    justify-content: space-between;
`
const cardGenreWrapper = css`
    
`
const cardGenre = css`
    :not(:first-child) {
        margin-left: ${size[8]};
    }
`
const cardDate = css`
    
`
const cardTitle = css`
    margin-top: ${size[4]};
`
const cardDescription = css`
    color: ${color.text.lowEmphasis};
`

const about = css`
    display: grid;
    grid-template-columns: repeat(2,6fr);
    grid-gap: 16px;
    margin-top: 32px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(1,12fr);
        margin-top: 24px;
    }
`
const aboutContent = css`

`
const aboutInfomation = css`

`


export const Works= () => (
    <>
        <section css={root} id="works">
            <h2 css={title}>works</h2>
            <div css={cardWrapper}>
                <Link css={card} to="/">
                    <StaticImage src="../../images/dummy.jpg" />
                    <div css={cardContent}>
                        <div css={cardInfomation}>
                            <p css={cardGenreWrapper}>
                                <span css={cardGenre}>Genre</span>
                                <span css={cardGenre}>Genre</span>
                            </p>
                            <p css={cardDate}>2021/01/01</p>
                        </div>
                        <h3 css={cardTitle}>Title</h3>
                        <p css={cardDescription}>Description</p>
                    </div>
                </Link>
                <div css={card}></div>
                <div css={card}></div>
            </div>
        </section>
        <About/>
    </>
)