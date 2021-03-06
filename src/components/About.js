import React from "react"

import { css } from "@emotion/react"

import { GlobalStyle } from "../styles/GlobalStyle"
import { size } from "../styles/Size"
import { baseColor, color, typography } from "../styles/Theme"
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { GenreTag } from "./GenreTag"
import { myData } from "../infomation/MyData"

const root = css`
    padding: 120px 8vw;
    @media (max-width: 768px) {
    padding: 60px 6vw;
    }
`

const about = css`
    display: flex;
    justify-content: space-between;
    margin-top: 6em;
    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 4em;
    }
`

const image = css`
    flex: 0 0 50%;
    @media (max-width: 768px) {
    }
`

const content = css`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    padding: 6rem 5vw;
    justify-content: center;
    @media (max-width: 768px) {
        margin-top: 2.6em;
        padding: 0;
    }
`

const title = css`
    ${typography.headline3}
    color: ${color.text.highEmphasis};
    text-align: center;
    @media (max-width: 768px) {
        text-align: left;
    }
`

const name = css`
    ${typography.headline3}
    color: ${color.text.highEmphasis};
    text-transform: uppercase;
`

const role = css`
    ${typography.overline}
    color: ${color.text.lowEmphasis};
    margin-top: 0.4em;
    text-transform: uppercase;
`

const introduction = css`
    ${typography.body.normal}
    color: ${color.text.middleEmphasis};
    margin-top: 3em;
    text-align: left;
    white-space: pre-wrap;
    @media (max-width: 768px) {
        margin-top: 1.9em;
    }
`

const genre = css`
    margin-top: 4em;
    @media (max-width: 768px) {
        margin-top: 1.6em;
    }
`

export const About = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx {
                group(field: frontmatter___tags) {
                    fieldValue
                }
                edges {
                    node {
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `)
    return (
        <section css={root}>
            <h2 css={title}>ABOUT</h2>
            <div css={about}>
                <StaticImage src="../../contents/images/profile.jpg" css={image} />
                <div css={content}>
                    <p css={name}>{myData.name.en}</p>
                    <p css={role}>{myData.role.en}</p>
                    <p css={introduction}>{myData.description}</p>
                    <GenreTag tags={data.allMdx.group} css={genre}/>
                </div>
            </div>
        </section>
    )
  }