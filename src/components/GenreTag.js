import React from "react"

import { css } from "@emotion/react"

import { baseColor, color, typography } from "../styles/Theme"

const root = css`
`

const genre = css`
    background: ${color.surface.secondary};
    text-transform: uppercase;
    :not(:first-child) {
        margin-left: 8px;
    }
`

export const GenreTag = ({ tags }) => {
    const tagitems = tags.map((tag) => <span css={genre} key={tag}>{tag}</span>)
    return (
        <div>
            <p css={root}>
                {tagitems}
            </p>
        </div>
    )
}