import React from "react"

import { css } from "@emotion/react"

import { baseColor, color, typography } from "../styles/Theme"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import GitHubIcon from "../../contents/images/icon/SNS/GitHub.svg"
import TwitterIcon from "../../contents/images/icon/SNS/Twitter.svg"

const root = css`
    align-items: center;
    background: ${baseColor.gray[80]};
    color: ${baseColor.white[100]};
    display: flex;
    flex-direction: column;
    padding: 2.4em 0;
    margin-top: 8em;
    @media (max-width: 768px) {
    }
`

const copyright = css`
    ${typography.overline}
`

export const Footer = () => (
    <header css={root}>
        <small css={copyright}>2021 Daisuke Hasegawa</small>
    </header>
)