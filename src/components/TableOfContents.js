import React from 'react'
import { css } from "@emotion/react"

const TableOfContents = ({ toc }) => {
    return <div dangerouslySetInnerHTML={{ __html: toc }} />
  }
export default TableOfContents