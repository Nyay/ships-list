import { keyframes } from '@emotion/react'

export const colorsVariables = {
  globalTransparent: '#FFFFFF00',
  lightWhite: '#FFFFFF',
  darkWhite: '#9a9a9a',
  unselectedWhite: 'rgba(255, 255, 255, 0.3)',
  selectedTabGrey: '#4A4A4A',
  menuGrey: '#333333',
  lightBlack: '#101010',
  menuCyan: '#00cccc',
  menuCyanTransparent: '#00cccc50',
  mainBackgroundBlue: '#102031',
  buttonLightOrange: '#FD6200',
  buttonDarkOrange: '#E12E00'

}

export const timeoutVariables = {
  navTransitionTimeout: '200ms',
  shipImagesTimeout: '400ms'
}

export const fontSizeVariables = {
  fontSizeSmall: '16px',
  fontSizeMedium: '24px',
  fontSizeLarge: '32px',
  fontSizeXLarge: '64px'
}

export const displayKeyframe = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
