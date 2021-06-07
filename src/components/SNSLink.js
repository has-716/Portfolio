import React from "react"

import { css } from "@emotion/react"

import { GlobalStyle } from "../styles/GlobalStyle"
import { size } from "../styles/Size"
import { baseColor, color, typography } from "../styles/Theme"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import GitHubIcon from "../../contents/images/icon/SNS/GitHub.svg"

const root = css`
    background: ${color.surface.primary};
    margin-top: 32px;
    padding: 104px 64px;
    @media (max-width: 768px) {
        padding: 24px 16px 32px;
        margin-top: 24px;
        flex-direction: column;
    }
`

const title = css`
    color: ${color.text.highEmphasis};
    ${typography.headline2}
`

const linkWrapper = css`
    overflow-x: auto;
    white-space: nowrap;
    margin-top: 32px;
    @media (max-width: 768px) {
        margin-top: 24px;
        flex-direction: column;
        grid-template-columns: repeat(1,12fr);
    }
`

const linkItem = css`
    display: inline-block;
    padding: 16px;
    text-align: center;
    :not(:first-child){
        margin-left: 8px;
    }
`

const linkTitle = css`
    ${typography.body}
    color: ${color.text.middleEmphasis};
`
const linkDescription = css`
    ${typography.overline}
    color: ${color.text.lowEmphasis};
`

const icon = css`
    border-radius: 50%;
    padding: 24px;
    width: 88px;
`

const github = css`
    background: #171516;
    fill: #fff;
`

export const SNSLink = () => (
    <section css={root}>
        <h2 css={title}>links</h2>
        <div css={linkWrapper}>
            <Link css={linkItem} to="/">
                <GitHubIcon css={[icon, github]} />
                <h3 css={linkTitle}>Link Title</h3>
                <p css={linkDescription}>Description</p>
            </Link>
            <Link css={linkItem} to="/">
                <GitHubIcon css={[icon, github]} />
                <h3 css={linkTitle}>Link Title</h3>
                <p css={linkDescription}>Description</p>
            </Link>
            <Link css={linkItem} to="/">
                <GitHubIcon css={[icon, github]} />
                <h3 css={linkTitle}>Link Title</h3>
                <p css={linkDescription}>Description</p>
            </Link>
        </div>
    </section>
)