import React from 'react'
import { css } from '@emotion/react'
import { Link,　useStaticQuery, graphql } from 'gatsby'
import { color, typography } from '../styles/Theme'
import { StaticImage } from "gatsby-plugin-image"
import { size } from '../styles/Size'

const root = css`
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

const content = css`
    margin-top: ${size[8]};
    padding: ${size[8]};
    @media (max-width: 768px) {
        padding: 0;
    }
`

const infomation = css`
    ${typography.overline}
    color: ${color.text.disable};
    display: flex;
    justify-content: space-between;
`

const genre = css`
    display: inline-grid;
    grid-gap: 8px;
    :not(:first-child) {
        margin-left: ${size[8]};
    }
`

const title = css`
    margin-top: ${size[4]};
`

const description = css`
    color: ${color.text.lowEmphasis};
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
            <StaticImage src="../../contents/images/dummy.jpg" />
            <div css={content}>
                <div css={infomation}>
                    <div>
                        <span css={genre}>{edge.node.frontmatter.tags}</span>
                    </div>
                    <span>{edge.node.frontmatter.date}</span>
                </div>
                <h3 css={title}>{edge.node.frontmatter.title}</h3>
                <p css={description}></p>
            </div>
        </Link>
    ))
}
  