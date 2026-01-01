import { style, keyframes } from '@vanilla-extract/css'

const green = 'rgb(117, 242, 139)'
const greenDark = 'rgb(60, 124, 72)'
const greenGlow = 'rgba(117, 242, 139, 0.2)'
const bg = '#191d21'
const bgLight = '#1e2328'
const bgLighter = '#252a30'
const textPrimary = '#ffffff'
const textSecondary = 'rgba(255, 255, 255, 0.6)'
const textMuted = 'rgba(255, 255, 255, 0.4)'

export const page = style({
  minHeight: '100vh',
  position: 'relative',
  width: '100%',
})

export const backgroundLayer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: bg,
  zIndex: -1,
})

// Creates scroll space - one "section" per experience entry
export const scrollContainer = style({
  position: 'relative',
  width: '100%',
})

export const scrollSection = style({
  height: '100vh',
  width: '100%',
})

export const fixedContainer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
})

export const layout = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4rem',
  width: '100%',
  maxWidth: '900px',
  padding: '0 2rem',
  pointerEvents: 'auto',
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
      gap: '2rem',
      padding: '0 1.5rem',
    },
  },
})

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  padding: '1.5rem 2rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  zIndex: 100,
  background: `linear-gradient(to bottom, ${bg} 0%, ${bg} 50%, transparent 100%)`,
  pointerEvents: 'auto',
})

export const backButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '8px',
  background: bgLight,
  color: green,
  textDecoration: 'none',
  transition: 'all 0.2s ease',
  selectors: {
    '&:hover': {
      background: bgLighter,
      transform: 'translateX(-2px)',
    },
  },
})

export const headerContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.125rem',
})

export const headerTitle = style({
  fontSize: '1.25rem',
  fontWeight: 400,
  color: textPrimary,
})

export const headerSubtitle = style({
  fontSize: '0.75rem',
  color: textSecondary,
})

// Timeline styles
export const timeline = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  position: 'relative',
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
  },
})

export const timelineTrack = style({
  position: 'absolute',
  right: '7px', // Centered through the dots
  top: '22px',
  bottom: '22px',
  width: '2px',
  background: bgLighter,
  '@media': {
    '(max-width: 768px)': {
      right: 'auto',
      top: 'auto',
      bottom: 'auto',
      left: '22px',
      width: 'auto',
      height: '2px',
    },
  },
})

export const timelineProgress = style({
  position: 'absolute',
  right: '7px', // Centered through the dots
  top: '22px',
  bottom: '22px', // Match track dimensions
  width: '2px',
  background: green,
  transformOrigin: 'top',
  '@media': {
    '(max-width: 768px)': {
      right: 'auto',
      top: 'auto',
      left: '22px',
      height: '2px',
      transformOrigin: 'left',
    },
  },
})

export const timelineItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
  padding: '0.875rem 0',
  cursor: 'pointer',
  position: 'relative',
  transition: 'all 0.2s ease',
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
      padding: '0 0.75rem',
      gap: '0.5rem',
    },
  },
})

export const timelineDate = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  minWidth: '50px',
  transition: 'all 0.2s ease',
  '@media': {
    '(max-width: 768px)': {
      alignItems: 'center',
      order: 2,
    },
  },
})

export const timelineMonth = style({
  fontSize: '0.625rem',
  color: textMuted,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  transition: 'color 0.3s ease',
})

export const timelineYear = style({
  fontSize: '0.875rem',
  color: textSecondary,
  fontWeight: 500,
  transition: 'color 0.3s ease',
})

export const timelineDotWrapper = style({
  position: 'relative',
  zIndex: 2,
  flexShrink: 0,
  '@media': {
    '(max-width: 768px)': {
      order: 1,
    },
  },
})

export const timelineDotSvg = style({
  display: 'block',
})

// Card styles
export const cardContainer = style({
  position: 'relative',
  width: '100%',
  maxWidth: '500px',
  minHeight: '320px',
  '@media': {
    '(max-width: 768px)': {
      maxWidth: '100%',
    },
  },
})

// Wrapper for the animated gradient border
export const cardWrapper = style({
  position: 'absolute',
  top: '50%',
  left: 0,
  right: 0,
  transform: 'translateY(-50%)',
  borderRadius: '24px',
  padding: '1px', // Border thickness
  overflow: 'hidden',
})

const rotateBorder = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

// Animated conic gradient that rotates around the card
export const cardBorderGradient = style({
  position: 'absolute',
  inset: '-50%', // Extend beyond card to ensure full coverage during rotation
  background: `conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 60deg,
    rgba(117, 242, 139, 0.1) 90deg,
    rgba(117, 242, 139, 0.5) 120deg,
    ${green} 180deg,
    rgba(117, 242, 139, 0.5) 240deg,
    rgba(117, 242, 139, 0.1) 270deg,
    transparent 300deg,
    transparent 360deg
  )`,
  pointerEvents: 'none',
  animation: `${rotateBorder} 4s linear infinite`,
})

export const card = style({
  position: 'relative',
  borderRadius: '23px', // Slightly smaller than wrapper for border effect
  padding: '2rem',
  pointerEvents: 'auto',
  overflow: 'hidden',
  // Liquid glass background - layered gradients for depth
  background: `
    linear-gradient(
      180deg,
      rgba(117, 242, 139, 0.06) 0%,
      rgba(117, 242, 139, 0.01) 20%,
      rgba(30, 35, 40, 0.98) 100%
    ),
    linear-gradient(
      135deg,
      rgba(60, 124, 72, 0.12) 0%,
      transparent 40%,
      rgba(60, 124, 72, 0.08) 100%
    ),
    radial-gradient(
      ellipse 80% 50% at 50% 0%,
      rgba(117, 242, 139, 0.08) 0%,
      transparent 60%
    ),
    ${bgLight}
  `,
  backdropFilter: 'blur(20px)',
  // Inner glow and shadow effects
  boxShadow: `
    inset 0 1px 0 0 rgba(117, 242, 139, 0.1),
    inset 0 0 20px 0 rgba(117, 242, 139, 0.03),
    0 4px 16px -4px rgba(0, 0, 0, 0.4),
    0 0 40px -10px rgba(117, 242, 139, 0.2)
  `,
})

// Top highlight bar for glass reflection effect
export const cardHighlight = style({
  position: 'absolute',
  top: 0,
  left: '10%',
  right: '10%',
  height: '1px',
  background: `linear-gradient(
    90deg,
    transparent 0%,
    rgba(117, 242, 139, 0.3) 30%,
    rgba(117, 242, 139, 0.5) 50%,
    rgba(117, 242, 139, 0.3) 70%,
    transparent 100%
  )`,
  pointerEvents: 'none',
})

export const cardHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '0.75rem',
})

export const cardLabel = style({
  fontSize: '0.6875rem',
  color: green,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontWeight: 500,
})

export const cardStep = style({
  fontSize: '0.6875rem',
  color: textMuted,
  fontWeight: 500,
})

export const cardTitle = style({
  fontSize: '1.375rem',
  fontWeight: 400,
  color: textPrimary,
  lineHeight: 1.4,
  marginBottom: '0.875rem',
})

export const cardDescription = style({
  fontSize: '0.9375rem',
  color: textSecondary,
  lineHeight: 1.7,
  marginBottom: '1.5rem',
})

export const cardTags = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
})

export const cardTag = style({
  padding: '0.3rem 0.75rem',
  borderRadius: '4px',
  background: bgLighter,
  color: textSecondary,
  fontSize: '0.6875rem',
  fontWeight: 500,
  transition: 'all 0.2s ease',
  selectors: {
    '&:hover': {
      background: greenDark,
      color: textPrimary,
    },
  },
})

// Scroll hint
const bounce = keyframes({
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-4px)' },
})

export const scrollHint = style({
  position: 'fixed',
  bottom: '2rem',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
  color: textMuted,
  fontSize: '0.6875rem',
  animation: `${bounce} 2s ease-in-out infinite`,
  transition: 'opacity 0.3s ease',
  pointerEvents: 'none',
  zIndex: 50,
})

export const scrollHintHidden = style({
  opacity: 0,
})
