import React from 'react'
import { css } from '@emotion/react'

const root = css`
    margin: 0 auto;
    max-width: 1280px;
`

const Layout = ({ children }) => {
    return (
        <main css={root}>
            {children}
        </main>
    )
}

export default Layout