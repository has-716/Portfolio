import React from 'react'
import { css } from '@emotion/react'
import { GlobalStyle } from '../styles/GlobalStyle'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const root = css`
    margin: 0 auto;
    padding:0 6vw ;
`

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <main css={root}>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout