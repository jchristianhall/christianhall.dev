import { style } from '@vanilla-extract/css';

export const home = style({
  position: 'relative',
  display: 'flex',
  flex: 1,
  backgroundColor: '#191d21',
});

export const homeContent = style({
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  display: 'flex',
  flex: 1,
  zIndex: 1,
});

export const homeName = style({
  fontFamily: "'Josefin Sans', sans-serif",
  color: 'rgb(117, 242, 139)',
  display: 'block',
  paddingBottom: '0.5rem',
});

export const homeByline = style({
  fontFamily: "'Josefin Sans', sans-serif",
  color: 'white',
  paddingBottom: '1.5rem',
});

export const homeBio = style({
  fontFamily: "'Josefin Sans', sans-serif",
  color: 'white',
  display: 'block',
  width: '90%',
  paddingBottom: '1.5rem',
  lineHeight: 1.5,
  fontSize: '1rem',
  textAlign: 'center',
});

export const homeLinks = style({
  display: 'flex',
  alignItems: 'center',
});

export const homeLink = style({
  color: 'rgb(117, 242, 139)',
  textDecoration: 'none',
  fontFamily: "'Josefin Sans', sans-serif",
  marginRight: '1rem',
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
});

export const homeFooter = style({
  fontFamily: "'Josefin Sans', sans-serif",
  color: 'white',
  bottom: '1rem',
  fontSize: '0.8rem',
  position: 'absolute',
});