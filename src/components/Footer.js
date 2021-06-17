import React from "react"

import { css } from "@emotion/react"

import { baseColor, color, typography } from "../styles/Theme"
import { Link } from "gatsby"
import GitHubIcon from "../../contents/images/icon/SNS/GitHub.svg"
import TwitterIcon from "../../contents/images/icon/SNS/Twitter.svg"

const root = css`
    align-items: center;
    background: ${baseColor.gray[80]};
    color: ${baseColor.white[100]};
    display: flex;
    flex-direction: column;
    padding: 3.2rem 0;
    margin-top: 8rem;
    @media (max-width: 768px) {
    }
`

const copyright = css`
    margin-top: 0.8rem;
    ${typography.overline}
`

const navigation = css`
    display: flex;
    gap: 8px;
`

const link = css`
    display: block;
    padding: 8px;
`

const icon = css`
    height: 24px;
    fill: ${baseColor.white[100]};
`

export const Footer = () => (
    <footer css={root}>
        <nav css={navigation}>
            <Link to="https://twitter.com/dev_osk" css={link}>
                <TwitterIcon css={icon} />
            </Link>
            <Link to="https://github.com/has-716" css={link}>
                <GitHubIcon css={icon} />
            </Link>
        </nav>
        <small css={copyright}>2021 Daisuke Hasegawa</small>
    </footer>
)