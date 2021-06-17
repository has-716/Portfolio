import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import { Layout } from "../components/Layout";
import { color, typography } from "../styles/Theme";
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Header } from "../components/Header";
import { WorkVisual } from "../components/MainVisual";
import { GatsbyImage } from "gatsby-plugin-image";
import { GenreTag } from "../components/GenreTag";
import { Contents} from "../components/TableOfContents";

const root = css`
html {
  scroll-behavior: smooth;
}
`

const image = css`
  position: relative;
  margin: 0 calc(50% - 50vw);
  width: 100vw;
`
const infomation = css`
  padding: 80px 8vw;
`
const headline1 = css`
  ${typography.headline1}
  color: ${color.text.highEmphasis};
  font-weight: bold;
`
const description = css`
  ${typography.body.normal}
  color: ${color.text.middleEmphasis};
  margin-top: 2em;
`
const genre = css`
  margin: 2em 0 2em 0;
`

const content = css`
  display: flex;
  gap: 80px;
  padding: 80px 8vw;
`
const index = css`
  height: 100%;
  flex: 30%;
  position: sticky;
  top: 168px;
  @media (max-width: 768px) {
    display: none;
  }
`

const body = css`
  flex: 70%;
  h2 {
    ${typography.headline3}
    color: ${color.text.highEmphasis};
    margin-top: 12em;
    :first-of-type {
      margin-top: 0em;
    }
  }
  h3 {
    ${typography.body.bold}
    color: ${color.text.middleEmphasis};
    margin-top: 6em;
  }
  h4 {
    ${typography.body.bold}
    color: ${color.text.lowEmphasis};
    margin-top: 3em;
  }
  p {
    ${typography.body.normal}
    color: ${color.text.middleEmphasis};
    margin-top: 3em;
  }
  p + p {
    margin-top: 2em;
  }
  ul {
    color: ${color.text.lowEmphasis};
    margin: 5.6em 0 0 2em;
  }
  p + ul {
    margin-top: 2em;
  }
  li {
    ${typography.overline}
    margin-top: 1em;
    ul {
      margin-top: 1em;
    }
  }
  p span {
    margin-bottom: 10em;
  }
`

const PostPage = ({ data }) => (
  <>
    <Layout css={root}>
      <GatsbyImage image={data.mdx.frontmatter.hero.childImageSharp.gatsbyImageData} css={image} />
      <section css={infomation}>
        <p>{data.mdx.frontmatter.date}</p>
        <h1 css={headline1}>{data.mdx.frontmatter.title}</h1>
        <p css={description}>{data.mdx.frontmatter.description}</p>
        <GenreTag tags={data.mdx.frontmatter.tags} css={genre}/>
      </section>
      <section css={content}>
        <article css={body}>
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </article>
        <Contents toc={data.mdx.tableOfContents} css={index}/>
      </section>
    </Layout>
  </>
)

export default PostPage

export const query = graphql`
    query WorkPostById($slug: String!) {
      mdx(slug: { eq: $slug }) {
        id
        slug
        body
        tableOfContents
        frontmatter {
          title
          description
          date(formatString: "YYYY, MM")
          tags
          hero {
            childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
      }
    } 
`;