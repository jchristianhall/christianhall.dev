import { style } from '@vanilla-extract/css';

export const home = style({
  display: 'flex',
  flex: 1,
  backgroundColor: '#191d21',
  justifyContent: 'center',
  alignItems: 'center',
});

export const homeContent = style({
  flexDirection: 'column',
  width: '50%',
  display: 'flex',
  gap: '2rem',
});

export const homeNameContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.5rem',
});

export const homeName = style({
  fontFamily: "'Josefin Sans', sans-serif",
  color: 'rgb(117, 242, 139)',
  display: 'block',
  fontSize: '1.5rem',
});

export const homeMainCopy = style({
  fontFamily: "'Josefin Sans', sans-serif",
  color: 'white',
  fontSize: '1.5rem',
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
  left: '50%',
  transform: 'translateX(-50%)',
});
