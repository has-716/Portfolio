import React from 'react'
import { css } from '@emotion/react'
import { Link,　useStaticQuery, graphql } from 'gatsby'
import { baseColor, color, typography } from '../styles/Theme'
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
import { size } from '../styles/Size'
import { GenreTag } from './GenreTag'

const root = css`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        :nth-child(even) {
            flex-direction: column;
        }
        :hover {
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

const title = css`
    ${typography.headline3}
`

const description = css`
    ${typography.body.normal}
    color: ${color.text.middleEmphasis};
    margin-top: 3em;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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

export const Card = () => {
    const data = useStaticQuery(graphql`
    query {
        allMdx {
          edges {
            node {
                id
                slug
                frontmatter {
                    title
                    description
                    date(formatString: "YYYY, MM")
                    slug
                    tags
                    hero {
                        childImageSharp {
                            gatsbyImageData(width: 611, quality: 75, layout: CONSTRAINED)
                        }
                    }
                }
                excerpt
            }
          }
        }
      }
      
  `)
    return data.allMdx.edges.map(edge => (
        <Link to={edge.node.slug} key={edge.node.id} css={root}>
            <GatsbyImage image={edge.node.frontmatter.hero.childImageSharp.gatsbyImageData} css={image} />
            <div css={content}>
                <h3 css={title}>{edge.node.frontmatter.title}</h3>
                <p css={description}>{edge.node.frontmatter.description}</p>
                <GenreTag tags={edge.node.frontmatter.tags} css={genre}/>
            </div>
        </Link>
    ))
}