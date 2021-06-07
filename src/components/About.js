import React from "react"

import { css } from "@emotion/react"

import { GlobalStyle } from "../styles/GlobalStyle"
import { size } from "../styles/Size"
import { baseColor, color, typography } from "../styles/Theme"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Name from "../../contents/images/icon/osk.svg"

const root = css`
    background: ${color.surface.primary};
    display: flex;
    margin-top: 32px;
    padding: 104px 64px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(1,12fr);
        padding: 24px 16px 32px;
        margin-top: 24px;
        flex-direction: column;
    }
`
const image = css`
    @media (max-width: 768px) {
        margin-top: 32px;
        order: 1;
    }
`
const content = css`
    order: 2;
    margin-top: 16px;
    @media (max-width: 768px) {
        margin-top: 32px;
        text-align: center;
        align-items: center;
    }
`
const infomation = css`
    align-items: center;
    padding: ${size[24]};
    margin-left: 16px;
    @media (max-width: 768px) {
        display: contents;
    }
`
const title = css`
    ${typography.headline2}
    color: ${color.text.highEmphasis};
    
`
const name = css`
    fill: ${baseColor.primary[80]};
`
const role = css`
    color: ${color.text.lowEmphasis};
    margin-top: 4px;
`
const introduction = css`
    margin-top: 24px;
    text-align: left;
`

export const About = () => (
    <section css={root}>
        <StaticImage src="../../contents/images/dummy.jpg" css={image} />
        <div css={infomation}>
                <h2 css={title}>about</h2>
                    <div css={content}>
                        <Name css={name} />
                        <p css={role}>
                            <span>UI Designer</span>
                        </p>
                        <p css={introduction}>説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明</p>
                </div>
        </div>
    </section>
)