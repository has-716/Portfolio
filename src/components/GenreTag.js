import React from "react"

import { css } from "@emotion/react"

import { color, typography } from "../styles/Theme"

const root = css`
`

const genre = css`
    background: ${color.surface.secondary};
    display: inline-block;
    margin-bottom: 4px;
    text-transform: uppercase;
    :not(:last-child) {
        margin-right: 8px;
    }
`

const infomation = css`
    ${typography.overline}
    color: ${color.text.middleEmphasis};
`

export const GenreTag = ({ tags, ...props }) => {
    const tagitems = tags.map((tag) => <span css={genre} key={tag}>{tag.fieldValue || tag } </span>)
    return (
        <p {...props}>
            <span css={infomation}>
                {tagitems}
            </span>
        </p>
    )
}