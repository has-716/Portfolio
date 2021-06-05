import React from "react"

import { css } from "@emotion/react"

import { GlobalStyle } from "../styles/GlobalStyle"
import { size } from "../styles/Size"
import { baseColor, color, typography } from "../styles/Theme"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const root = css`
    background: ${color.surface.primary};
    width: 100vw;
    margin: ${size[56]} calc(50% - 50vw);
    padding: 104px ${size[24]};
    @media (max-width: 768px) {
        padding: ${size[32]} ${size[16]};
    }
`

const title = css`
    ${typography.headline2}
`

const cardWrapper = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(288px,1fr));
  grid-auto-rows: 1fr;
  grid-gap: ${size[16]};
`
const card = css`
    margin-top: 32px;
    padding: ${size[24]};
    @media (max-width: 768px) {
        padding: 0;
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
    margin-top: ${size[8]};
`
const cardDescription = css`
    color: ${color.text.lowEmphasis};
`


export const Works= () => (
    <section css={root}>
        <h2 css={title}>Works</h2>
        <Link css={cardWrapper} to="/">
            <div css={card}>
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
            </div>
            <div css={card}></div>
            <div css={card}></div>
        </Link>
    </section>
)