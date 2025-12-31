import { style, keyframes } from '@vanilla-extract/css'

export const home = style({
  display: 'flex',
  flex: 1,
  backgroundColor: '#191d21',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '460px',
  height: '100vh',
  position: 'relative',
})

export const homeContent = style({
  flexDirection: 'column',
  width: '100%',
  maxWidth: '800px',
  display: 'flex',
  padding: '0 2rem',
  gap: '2rem',
})

export const homeName = style({
  color: 'rgb(117, 242, 139)',
})

export const homeMainCopy = style({
  color: 'white',
  fontSize: '1.5rem',
  lineHeight: 1.5,
})

export const homeLinks = style({
  display: 'flex',
  alignItems: 'center',
})

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

export const homeLink = style({
  color: 'rgb(117, 242, 139)',
  textDecoration: 'none',
  marginRight: '1rem',
  opacity: 0,
  transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
  selectors: {
    '&:last-child': {
      marginRight: 0,
    },
    '&:hover': {
      color: 'rgb(60, 124, 72)',
      cursor: 'pointer',
      transform: 'scale(1.1)',
    },
  },
})

export const homeLinkVisible1 = style({
  animation: `${fadeIn} 0.4s ease-out forwards`,
  animationDelay: '0s',
})

export const homeLinkVisible2 = style({
  animation: `${fadeIn} 0.4s ease-out forwards`,
  animationDelay: '0.15s',
})

export const homeLinkVisible3 = style({
  animation: `${fadeIn} 0.4s ease-out forwards`,
  animationDelay: '0.3s',
})

export const homeFooter = style({
  color: 'white',
  bottom: '1rem',
  fontSize: '0.8rem',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
})

