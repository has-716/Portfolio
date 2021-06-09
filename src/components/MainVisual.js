import React from "react"

import { css } from "@emotion/react"

import { GlobalStyle } from "../styles/GlobalStyle"
import { size } from "../styles/Size"
import { baseColor, color, typography } from "../styles/Theme"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const root = css`
    position: relative;
    margin: 0 calc(50% - 50vw);
    width: 100vw;
`

const title = css`
    ${typography.headline1};
    color: ${color.text.accentPrimary};
    line-height: 1.2;
    padding: 0 6vw;
    position: absolute;
	top: 50%;
	transform: translate(0, -50%);
`
const titleLabel = css`
    background-color:${baseColor.white[100]};
    display: inline-block;
    padding-bottom: 2px;
    :not(:first-child) {
        margin-top: 0.2em;  
    }
`

export const MainVisual= () => (
    <div css={root}>
        <StaticImage src="../../contents/images/mainVisual.jpg" layout="fullWidth" />
        <h1 css={title}>
            <span css={titleLabel}>osk</span><br/>
            <span css={titleLabel}>portfolio</span>
        </h1>
    </div>
)