import React from "react"

import { css } from "@emotion/react"

import { GlobalStyle } from "../styles/GlobalStyle"
import { size } from "../styles/Size"
import { baseColor, color, typography } from "../styles/Theme"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Icon from "../../images/icon/oskworks.svg"

const root = css`
    align-items: center;
    background: ${baseColor.white[100]};
    border-bottom: 1px solid ${baseColor.gray.alpha[10]};
    display: flex;
    height: 136px;
    padding: ${size[24]};
    position: sticky;
    top: 0;
    z-index: 1;
    justify-content: space-between;
    @media (max-width: 768px) {
        height: 88px;
    }
`

const logo = css`
    fill: ${baseColor.primary[80]};
`

const navigation = css`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`
const navigationItem = css`
    padding: ${size[8]} ${size[24]};
    :hover {
        background-color: ${color.surface.teriary};
        border-radius: 4px;
    }
`
const navigationDivider = css`
    ${typography.headline3}
    color: ${color.text.disable};
    margin: 0 ${size[8]};
`

export const Header = () => (
    <header css={root}>
        <Link to="/">
            <Icon css={logo}/>
        </Link>
        <nav css={navigation}>
            <Link css={navigationItem} to="#works">
                <p>works</p>
            </Link>
            <span css={navigationDivider}>/</span>
            <Link css={navigationItem} to="#about">
                <p>about</p>
            </Link>
        </nav>
    </header>
)