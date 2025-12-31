import { globalStyle } from '@vanilla-extract/css'

globalStyle('*', {
  margin: 0,
  padding: 0,
  border: 0,
})

globalStyle('html, body, #__next', {
  display: 'flex',
  height: '100%',
  width: '100%',
  fontFamily: "'Josefin Sans', sans-serif",
})
