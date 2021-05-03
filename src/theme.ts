import { css } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  black: '#111111',
  gray: '#4F4F4F',
  darkgray: '#313131',
  lightGray: '#F2F2F2',
  red: '#D02128',
  redder: '#FF000A',
  pink: 'rgba(237, 28, 36, 0.3)',
  green: '#44CB39',
  lime: 'rgba(68, 203, 57, 0.3)',
  discord: '#7289DA',
  blue: '#393FCB',
}

export const gradients = {
  grayred:
    'linear-gradient(95.78deg, #636362 28.23%, #555555 52.12%, #7E4343 100%);',
  black:
    'linear-gradient(0deg, #313131 0%, #1F1F1F 50.3%, #141414 95.85%, #000000 104.74%);',
}

export const fontStyles = {
  H1: css`
    font-weight: bold;
    font-size: 70px;
    line-height: 95px;
  `,
  H1m: css`
    font-weight: bold;
    font-size: 35px;
    line-height: 47px;
  `,
  H2: css`
    font-weight: bold;
    font-size: 44px;
    line-height: 59px;
  `,
  H2m: css`
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
  `,
  H3: css`
    font-weight: bold;
    font-size: 19px;
    line-height: 26px;
  `,
  H3m: css`
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
  `,
  P: css`
    font-weight: normal;
    font-size: 21px;
    line-height: 28px;
  `,
  Pm: css`
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
  `,
  Tiny: css`
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
  `,
}

export const breakpoints = {
  sm: '450px',
  md: '768px',
  lg: '1200px',
  xl: '1680px',
}
