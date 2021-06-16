import { Link } from 'gatsby'
import React from 'react'

const ContentsList = ({ items }) => {
  return (
    <ul>
        {items.map((item) => {
            return <ContentsItem key={`${item.url}-item`} item={item} />
        })}
    </ul>
  )
}

const ContentsItem = ({ item }) => (
  <li>
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