import { css } from '@emotion/react'

export const baseColor = {
    primary: {
        100:'#315E68',
        90:'#3E8194',
        80:'#4595AD',
        70:'#4EA9C8',
        60:'#55B9DB',
        50:'#59C3E4',
        40:'#8FDCF4',
        30:'#8FDCF4',
        20:'#BAEAF9',
        10:'#E3F6FD',
    },
    accent: {
        100:'#00512A',
        90:'#006D45',
        80:'#007D52',
        70:'#008D60',
        60:'#009A6C',
        50:'#2AAA7F',
        40:'#50B994',
        30:'#82CDB2',
        20:'#B3E1D0',
        10:'#E0F3EC',
    },
    gray: {
        alpha: {
            90:'#08151AE6',
            80:'#08151ACC',
            70:'#08151AB3',
            60:'#08151A9E',
            50:'#08151A80',
            40:'#08151A66',
            30:'#08151A4D',
            20:'#08151A33',
            10:'#08151A1A',
            5:'#08151A0D',
        },
        100:'#08151A',
        90:'#202D30',
        80:'#394447',
        70:'#525B5E',
        60:'#636B6E',
        50:'#838A8C',
        40:'#9CA2A3',
        30:'#B5B9BA',
        20:'#CDD0D1',
        10:'#E6E8E8',
        5:'#F3F3F4',
    },
    white: {
        100: '#fff',
    },
}

export const color = {
    text: {
        highEmphasis: baseColor.gray[100],
        middleEmphasis: baseColor.gray[70],
        lowEmphasis: baseColor.gray[50],
        accentPrimary: baseColor.primary[100],
        accentSecondary: baseColor.accent[80],
        disable: baseColor.gray[30],
    },
    background: baseColor.gray[5],
    surface: {
        primary: baseColor.white,
        secondary: baseColor.gray[5],
        teriary: baseColor.gray[10],
    },
}

 const headline1 = css`
    font-size: 64px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: .01em;
    @media (max-width: 768px) {
        font-size: 32px;
    }
`

 const headline2 = css`
    font-size: 40px;
    line-height: 1.5;
    letter-spacing: .02em;
`

 const headline3 = css`
    font-size: 24px;
    line-height: 1.5;
    letter-spacing: .02em;
`

 const bodyNormal = css`
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: .01em;
`

 const bodyBold = css`
    ${bodyNormal}
    font-weight: bold;
`

 const overline = css`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: .02em;
`

export const typography = {
    headline1: headline1,
    headline2: headline2,
    headline3: headline3,
    body: {
        normal: bodyNormal,
        bold: bodyBold,
    },
    overline: overline,
}

