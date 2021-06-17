import React from "react"

import { css } from "@emotion/react"

import { GlobalStyle } from "../styles/GlobalStyle"
import { size } from "../styles/Size"
import { baseColor, color, typography } from "../styles/Theme"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Logo from "../../contents/images/icon/oskworks.svg"
import GitHubIcon from "../../contents/images/icon/SNS/GitHub.svg"
import TwitterIcon from "../../contents/images/icon/SNS/Twitter.svg"

const root = css`
    align-items: center;
    display: flex;
    height: 88px;
    justify-content: space-between;
    mix-blend-mode: difference;
    padding: 0 6vw ;
    position: sticky;
    top: 0;
    z-index: 2147483647;
    @media (max-width: 768px) {
    }
`

const logo = css`
    fill: ${baseColor.primary[80]};
`

const navigation = css`
    display: block;
`

const icon = css`
    margin-left: 1vw;
    padding: 8px;
    height: 48px;
    width: 48px;
    :hover {
        background-color: ${color.surface.teriary};
        border-radius: 4px;
    }
`

const github = css`
    fill: #171516;
    @media (max-width: 768px) {
        display: none;
    }
`

const twitter = css`
    fill: #1da1f2;
`

export const Header = () => (
    <header css={root}>
        <Link to="/">
            <Logo css={logo}/>
        </Link>
        <nav css={navigation}>
        </nav>
    </header>
)