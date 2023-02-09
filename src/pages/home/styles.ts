import { Heading, Text, styled } from '@ignite-ui/react'

export const Container = styled('div', {
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  height: '100vh',
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: '$20',

  '@media screen and (max-width:1155px)': {
    gap: '$1',
  },

  '@media screen and (max-width:1080px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '$10',
  },
})

export const Hero = styled('div', {
  maxWidth: '480px',
  padding: '0 $10',

  [`> ${Heading}`]: {
    '@media(max-width: 780px)': {
      fontSize: '$6xl',
    },
  },

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray200',

    '@media(max-width: 780px)': {
      fontSize: '$md',
    },
  },
})

export const Preview = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  '@media(max-width: 780px)': {
    display: 'none',
  },
})
