import React from 'react'
import { css } from '@emotion/react'

const root = css`
    margin: 0 auto;
    width: 88.88%;
    max-width: 1440px;
    @media (max-width: 768px) {
        width: 100%;
    }
`

const Layout = ({ children }) => {
    return (
        <main css={root}>
            {children}
        </main>
    )
}

export default Layout