import React from "react"
import { graphql, PageProps } from "gatsby"
import { css } from "@emotion/react"
import { Layout } from "../components/Layout";
import { color, typography } from "../styles/Theme";
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default function PostPage({ data }) {
  const {
    body,
    frontmatter: { title },
  } = data.mdx;
  return (
    <>
      <div>{title}</div>
      <MDXRenderer>{body}</MDXRenderer>
    </>
  );
}

export const query = graphql`
    query WorkPostById($slug: String!) {
        mdx(slug: { eq: $slug }) {
          id
          slug
          body
          frontmatter {
              date
              title
          }
        }
    }  
`;