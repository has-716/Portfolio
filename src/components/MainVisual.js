import React from "react"

import { css } from "@emotion/react"

import { GlobalStyle } from "../styles/GlobalStyle"
import { size } from "../styles/Size"
import { baseColor, color, typography } from "../styles/Theme"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const root = css`
    position: relative;
    width: 100vw;
    margin: 0 calc(50% - 50vw);
`

const title = css`
    color: ${color.text.accentPrimary};
    ${typography.headline1};
    line-height: 1.2;
    position: absolute;
	top: 50%;
	transform: translate(0, -50%);
    padding-left: 10%;
`
const titleLabel = css`
    background-color:${baseColor.white[100]};
    display: inline-block;
    :not(:first-child) {
        margin-top: 0.2em;  
    }
`

export const MainVisual= () => (
    <div css={root}>
        <StaticImage src="../../images/mainVisual.jpg" layout="fullWidth" />
        <h1 css={title}>
            <span css={titleLabel}>osk</span><br/>
            <span css={titleLabel}>portfolio</span>
        </h1>
    </div>
)