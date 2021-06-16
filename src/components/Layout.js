import React from 'react'
import { css } from '@emotion/react'
import { GlobalStyle } from '../styles/GlobalStyle'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const root = css`
    margin: 0 auto;
    max-width: 1440px;
`

export const Layout = ({children,...props}) => (
    <div>
        <GlobalStyle />
        <Header />
        <main css={root}>
            {children}
        </main>
        <Footer />
    </div>
)