import React from "react"

import { css } from "@emotion/react"

import { baseColor, color, typography } from "../styles/Theme"

const root = css`
`

const genre = css`
    display: inline-block;
    background: ${color.surface.secondary};
    text-transform: uppercase;
    margin-bottom: 4px;
    :not(:last-child) {
        margin-right: 8px;
    }
`

const infomation = css`
    ${typography.overline}
    color: ${color.text.middleEmphasis};
    margin-top: 4em;
    @media (max-width: 768px) {
        margin-top: 1.6em;
    }
`

export const GenreTag = ({ tags }) => {
    const tagitems = tags.map((tag) => <span css={genre} key={tag}>{tag.fieldValue || tag } </span>)
    return (
        <p css={infomation}>
            {tagitems}
        </p>
    )
}