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
`

const logo = css`
    fill: ${baseColor.primary[80]};
`

export const Header = () => (
    <header css={root}>
        <Link to="/">
            <Icon css={logo}/>
        </Link>
    </header>
)