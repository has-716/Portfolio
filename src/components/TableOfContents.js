import { Link } from 'gatsby'
import React from 'react'
import { css } from "@emotion/react"
import { color, typography } from '../styles/Theme'

const root = css`
  ${typography.overline}
  color: ${color.text.lowEmphasis};
  margin-left: 1em;
  list-style: none;
`

const listItem = css`
  margin-top: 8px;
`

const ContentsList = ({ items }) => {
  return (
    <ul css={root}>
        {items.map((item) => {
            return <ContentsItem key={`${item.url}-item`} item={item} />
        })}
    </ul>
  )
}

const ContentsItem = ({ item }) => (
  <li css={listItem}>
    <Link href={item.url}>{item.title}</Link>
    {item.items && item.items.length && (
      <ContentsList key={`${item.url}-list`} items={item.items} />
    )}
  </li>
)

export const Contents = ({ toc,...props }) => {
  if (!toc.items) {
    return null
  }

  return (
    <div {...props}>
      <ContentsList items={toc.items} key="toc-list"/>
    </div>
  )
}