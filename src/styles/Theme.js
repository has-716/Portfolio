import { css } from '@emotion/react'
import 'fontsource-oswald'
import 'fontsource-oswald/200.css'
import 'fontsource-oswald/300.css'
import 'fontsource-oswald/400.css'
import 'fontsource-oswald/500.css'
import 'fontsource-oswald/600.css'
import 'fontsource-oswald/700.css'
import 'fontsource-noto-sans-jp'
import 'fontsource-noto-sans-jp/100.css'
import 'fontsource-noto-sans-jp/300.css'
import 'fontsource-noto-sans-jp/400.css'
import 'fontsource-noto-sans-jp/500.css'
import 'fontsource-noto-sans-jp/700.css'
import 'fontsource-noto-sans-jp/900.css'

const englishFont = css`
    font-family:
        'Oswald',
        'Noto Sans JP',
        sans-serif
    ;  
`

const japaneseFont = css`
    font-family:
        'Noto Sans JP',
        sans-serif
    ;  
`

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
            50:'#08151A94',
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
        50:'#70777A',
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
    background: baseColor.white[100],
    surface: {
        primary: baseColor.white[100],
        secondary: baseColor.gray.alpha[5],
        teriary: baseColor.gray.alpha[10],
    },
}

 const headline1 = css`
    ${englishFont}
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: .2em;
    line-height: 1.6em;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

 const headline2 = css`
    ${englishFont}
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: .4em;
    line-height: 1.6em;
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`

 const headline3 = css`
    ${englishFont}
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: .4em;
    line-height: 1.6em;
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`

 const bodyNormal = css`
    ${japaneseFont}
    font-size: 1.4rem;
    line-height: 2.2em;
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`

 const bodyBold = css`
    ${bodyNormal}
    font-weight: 700;
`

 const overline = css`
    ${englishFont}
    font-size: 1.2rem;
    letter-spacing: .2em;
    line-height: 1.5em;
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

