import React from 'react'
import { css } from '@emotion/react'
import { Link,　useStaticQuery, graphql } from 'gatsby'
import { color, typography } from '../styles/Theme'
import { StaticImage } from "gatsby-plugin-image"
import { size } from '../styles/Size'

const root = css`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        :nth-child(even) {
            flex-direction: column;
        }
        :hover {
            background-color: ${color.surface.teriary};
            border-radius: 4px;
        }
    }
    @media (min-width: 769px) {
        align-items: center;
        :nth-child(even) {
            flex-direction: row-reverse;
        }
    }

`

const image = css`
    flex: 0 0 60%;
    @media (max-width: 768px) {
    }
`

const content = css`
    flex: 1 1 auto;
    padding: 0 5vw;
    @media (max-width: 768px) {
        margin-top: 2.6em;
        padding: 0;
    }
`

const infomation = css`
    ${typography.overline}
    display: flex;
    color: ${color.text.middleEmphasis};
    justify-content: space-between;
    margin-top: 2em;
    @media (max-width: 768px) {
        margin-top: 1.6em;
    }
`

const genre = css`
    background: ${color.surface.secondary};
`

const title = css`
    ${typography.headline3}
`

const description = css`
    ${typography.body.normal}
    color: ${color.text.middleEmphasis};
    margin-top: 3em;
    @media (max-width: 768px) {
        margin-top: 1.9em;
    }
`

export const Card = () => {
    const data = useStaticQuery(graphql`
    query {
        allMdx {
          edges {
            node {
                id
                frontmatter {
                    title
                    date(formatString: "YYYY, MM")
                    tags
                    slug
                }
                excerpt
            }
          }
        }
      }
      
  `)
    return data.allMdx.edges.map(edge => (
        <Link to='#' key={edge.node.id} css={root}>
            <StaticImage src="../../contents/images/dummy.jpg" css={image}/>
            <div css={content}>
                <h3 css={title}>{edge.node.frontmatter.title}</h3>
                <p css={description}>ここに作品の説明が入ります。２行以上は「…」表示になる予定。</p>
                <div css={infomation}>
                    <span css={genre}>{edge.node.frontmatter.tags}</span>
                    <span>{edge.node.frontmatter.date}</span>
                </div>
            </div>
        </Link>
    ))
}
  