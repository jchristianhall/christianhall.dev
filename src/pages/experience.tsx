import { useRef } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as styles from '../styles/experience.css'

interface Experience {
  id: number
  month: string
  year: string
  label: string
  title: string
  description: string
  tags: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    month: 'Oct',
    year: '2025',
    label: 'Current Role',
    title: 'Founding Full-Stack Engineer at Granted',
    description:
      'Building the future of benefits administration as a founding engineer at an early-stage startup in the NYC metro area.',
    tags: ['Full-Stack', 'Startup', 'React'],
  },
  {
    id: 2,
    month: 'Oct',
    year: '2024',
    label: 'Staff Engineer',
    title: 'Staff Software Engineer at Explo',
    description:
      'Owned frontend architecture and infrastructure across the company. Cut hosting costs by 50% with build optimizations, increased dashboard rendering performance by ~70%, and led the transition to an Nx monorepo.',
    tags: ['TypeScript', 'Nx', 'Performance'],
  },
  {
    id: 3,
    month: 'Dec',
    year: '2023',
    label: 'Mobile Observability',
    title: 'Senior Frontend Engineer at bitdrift',
    description:
      'Hired as first outside employee for a team spun out of Lyft building mobile observability tools. Built the funnels feature, first-time user experience, and contributed to the Instant Insights launch.',
    tags: ['React', 'Data Viz', 'Onboarding'],
  },
  {
    id: 4,
    month: 'Apr',
    year: '2022',
    label: 'Data Visualization',
    title: 'Senior Software Engineer at Explo',
    description:
      'Built features and optimized frontend performance for dashboards, data visualizations, and data grids. Established design system foundations and set up mapping visualizations with MapBox.',
    tags: ['React', 'MapBox', 'Design Systems'],
  },
  {
    id: 5,
    month: 'Jun',
    year: '2021',
    label: 'Founding Engineer',
    title: 'Lead UI Engineer at Parade',
    description:
      'Founding engineer at a YC-backed design tool startup. Built the entire frontend using Next.js and Chakra UI within 3 months, serving 5000+ companies with AI-generated brands.',
    tags: ['Next.js', 'Chakra UI', 'Figma'],
  },
  {
    id: 6,
    month: 'Oct',
    year: '2020',
    label: 'E-Commerce',
    title: 'Senior Software Engineer at Tuft & Needle',
    description:
      'Migrated product display pages to Next.js to improve performance, SEO, and developer experience. Helped plan and implement early stages of a design system using Chakra UI as a foundation.',
    tags: ['Next.js', 'Chakra UI', 'SEO'],
  },
  {
    id: 7,
    month: 'Sep',
    year: '2016',
    label: 'EdTech',
    title: 'Senior Software Engineer at GoNoodle',
    description:
      'Led software development across web and mobile platforms with React and React Native, serving over a million users worldwide. Helped plan and implement major infrastructure overhauls including a migration from Marionette to React.',
    tags: ['React', 'React Native', 'Migration'],
  },
]

// Card component with scroll-linked animations
// Timing synced with dot fill:
// - Dot fills during second half of its section
// - Card fades IN during second half of its section (synced with dot)
// - Card fades OUT during first half of NEXT section (while line travels)
function ExperienceCard({
  exp,
  index,
  total,
  scrollYProgress,
}: {
  exp: Experience
  index: number
  total: number
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const sectionStart = index / total
  const sectionEnd = (index + 1) / total
  const sectionMid = (sectionStart + sectionEnd) / 2

  // Next section's midpoint (when next dot starts filling, this card should be gone)
  const nextSectionStart = sectionEnd
  const nextSectionMid = nextSectionStart + 1 / total / 2

  const isFirst = index === 0
  const isLast = index === total - 1

  // Card opacity synced with dot fill timing
  const opacity = useTransform(scrollYProgress, (progress) => {
    if (isFirst) {
      const fadeOutStart = nextSectionStart
      const fadeOutEnd = nextSectionMid
      if (progress <= fadeOutStart) return 1
      if (progress >= fadeOutEnd) return 0
      return 1 - (progress - fadeOutStart) / (fadeOutEnd - fadeOutStart)
    }

    if (isLast) {
      if (progress <= sectionMid) return 0
      if (progress >= sectionEnd) return 1
      return (progress - sectionMid) / (sectionEnd - sectionMid)
    }

    const fadeInStart = sectionMid
    const fadeInEnd = sectionEnd
    const fadeOutStart = nextSectionStart
    const fadeOutEnd = nextSectionMid

    if (progress <= fadeInStart) return 0
    if (progress < fadeInEnd) {
      return (progress - fadeInStart) / (fadeInEnd - fadeInStart)
    }
    if (progress <= fadeOutStart) return 1
    if (progress >= fadeOutEnd) return 0
    return 1 - (progress - fadeOutStart) / (fadeOutEnd - fadeOutStart)
  })

  return (
    <motion.div
      className={styles.cardWrapper}
      style={{
        opacity,
      }}
    >
      {/* Animated rotating gradient border */}
      <div className={styles.cardBorderGradient} />

      {/* Card content */}
      <div className={styles.card}>
        {/* Glass highlight reflection */}
        <div className={styles.cardHighlight} />

        <div className={styles.cardHeader}>
          <span className={styles.cardLabel}>{exp.label}</span>
          <span className={styles.cardStep}>
            {String(index + 1).padStart(2, '0')} /{' '}
            {String(total).padStart(2, '0')}
          </span>
        </div>

        <h2 className={styles.cardTitle}>{exp.title}</h2>

        <p className={styles.cardDescription}>{exp.description}</p>

        <div className={styles.cardTags}>
          {exp.tags.map((tag) => (
            <span key={tag} className={styles.cardTag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const total = experiences.length

  return (
    <div className={styles.page}>
      <div className={styles.backgroundLayer} />

      {/* Scroll container */}
      <div ref={containerRef} className={styles.scrollContainer}>
        {experiences.map((_, index) => (
          <div key={index} className={styles.scrollSection} />
        ))}
      </div>

      {/* Fixed content layer */}
      <div className={styles.fixedContainer}>
        <header className={styles.header}>
          <Link href="/" className={styles.backButton}>
            <ArrowLeft size={18} />
          </Link>
          <div className={styles.headerContent}>
            <h1 className={styles.headerTitle}>Experience</h1>
            <p className={styles.headerSubtitle}>My professional journey</p>
          </div>
        </header>

        <div className={styles.layout}>
          {/* Timeline */}
          <TimelineNav
            experiences={experiences}
            scrollYProgress={scrollYProgress}
            containerRef={containerRef}
          />

          {/* Card container */}
          <div className={styles.cardContainer}>
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                index={index}
                total={total}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Timeline navigation with progressive animations
function TimelineNav({
  experiences,
  scrollYProgress,
  containerRef,
}: {
  experiences: Experience[]
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
  containerRef: React.RefObject<HTMLDivElement | null>
}) {
  const total = experiences.length

  // Line progress timing:
  // - Section 0: line stays at 0 (first dot)
  // - Section i (i > 0):
  //   - First half: line travels from dot (i-1) to dot i
  //   - Second half: line pauses while dot i fills
  // - Line goes from 0 to 1 across (total-1) segments
  // Using scaleY for accurate positioning relative to track
  const lineScale = useTransform(scrollYProgress, (progress) => {
    // First section: line at 0
    if (progress <= 1 / total) {
      return 0
    }

    // For sections 1 through (total-1)
    // Each section has two phases: line moves, then dot fills
    const sectionSize = 1 / total
    const currentSection = Math.floor(progress * total)
    const progressInSection = (progress - currentSection / total) / sectionSize

    // Line should be at (currentSection - 1) / (total - 1) at start of section
    // and at currentSection / (total - 1) by middle of section
    const prevDotPosition = (currentSection - 1) / (total - 1)
    const currentDotPosition = currentSection / (total - 1)

    if (progressInSection < 0.5) {
      // First half: line traveling to current dot
      const lineProgress = progressInSection * 2 // 0 to 1 over first half
      const position =
        prevDotPosition + (currentDotPosition - prevDotPosition) * lineProgress
      return Math.min(position, 1)
    } else {
      // Second half: line paused at current dot while it fills
      return Math.min(currentDotPosition, 1)
    }
  })

  const scrollToSection = (index: number) => {
    if (!containerRef.current) return
    const sectionHeight = containerRef.current.scrollHeight / total
    const targetY = sectionHeight * index
    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    })
  }

  return (
    <nav className={styles.timeline}>
      <div className={styles.timelineTrack} />
      <motion.div
        className={styles.timelineProgress}
        style={{ scaleY: lineScale }}
      />

      {experiences.map((exp, index) => (
        <TimelineItem
          key={exp.id}
          exp={exp}
          index={index}
          total={total}
          scrollYProgress={scrollYProgress}
          onClick={() => scrollToSection(index)}
        />
      ))}
    </nav>
  )
}

// Individual timeline item with scroll-linked state
function TimelineItem({
  exp,
  index,
  total,
  scrollYProgress,
  onClick,
}: {
  exp: Experience
  index: number
  total: number
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
  onClick: () => void
}) {
  const sectionStart = index / total
  const sectionEnd = (index + 1) / total
  const isFirst = index === 0

  const monthColor = useTransform(
    scrollYProgress,
    isFirst
      ? [0, sectionEnd, sectionEnd + 0.05]
      : [sectionStart - 0.05, sectionStart, sectionEnd, sectionEnd + 0.05],
    isFirst
      ? ['rgb(117, 242, 139)', 'rgb(117, 242, 139)', 'rgba(255, 255, 255, 0.4)']
      : [
          'rgba(255, 255, 255, 0.4)',
          'rgb(117, 242, 139)',
          'rgb(117, 242, 139)',
          'rgba(255, 255, 255, 0.4)',
        ]
  )

  const yearColor = useTransform(
    scrollYProgress,
    isFirst
      ? [0, sectionEnd, sectionEnd + 0.05]
      : [sectionStart - 0.05, sectionStart, sectionEnd, sectionEnd + 0.05],
    isFirst
      ? ['#ffffff', '#ffffff', 'rgba(255, 255, 255, 0.6)']
      : [
          'rgba(255, 255, 255, 0.6)',
          '#ffffff',
          '#ffffff',
          'rgba(255, 255, 255, 0.6)',
        ]
  )

  return (
    <div className={styles.timelineItem} onClick={onClick}>
      <div className={styles.timelineDate}>
        <motion.span
          className={styles.timelineMonth}
          style={{ color: monthColor }}
        >
          {exp.month}
        </motion.span>
        <motion.span
          className={styles.timelineYear}
          style={{ color: yearColor }}
        >
          {exp.year}
        </motion.span>
      </div>
      <motion.div style={{ position: 'relative', zIndex: 2 }}>
        <ProgressiveDot
          scrollYProgress={scrollYProgress}
          index={index}
          total={total}
        />
      </motion.div>
    </div>
  )
}

// Dot with progressive fill from top to bottom
// Timing: dot fills during SECOND HALF of its section (after line reaches it)
function ProgressiveDot({
  scrollYProgress,
  index,
  total,
}: {
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
  index: number
  total: number
}) {
  const size = 16
  const sectionStart = index / total
  const sectionEnd = (index + 1) / total
  const sectionMid = (sectionStart + sectionEnd) / 2
  const isFirst = index === 0

  // Dot fill timing:
  // - First dot: always filled
  // - Other dots: fill during second half of their section (after line reaches them)
  const fillProgress = useTransform(scrollYProgress, (progress) => {
    if (isFirst) return 1

    // Dot fills during second half of its section
    if (progress < sectionMid) return 0
    if (progress >= sectionEnd) return 1

    // Progress through the fill phase (0 to 1)
    return (progress - sectionMid) / (sectionEnd - sectionMid)
  })

  const clipPath = useTransform(fillProgress, (p) => {
    const bottomInset = (1 - p) * 100
    return `inset(0% 0% ${bottomInset}% 0% round 50%)`
  })

  const filter = useTransform(fillProgress, (p) =>
    p > 0.3 ? 'drop-shadow(0 0 8px rgba(117, 242, 139, 0.5))' : 'none'
  )

  return (
    <motion.div
      className={styles.timelineDotSvg}
      style={{
        width: size,
        height: size,
        position: 'relative',
        filter,
      }}
    >
      {/* Background circle */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: '#191d21',
          border: '2px solid #1e2328',
        }}
      />
      {/* Fill circle - clips from top to bottom */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'rgb(117, 242, 139)',
          clipPath,
        }}
      />
    </motion.div>
  )
}

export default Experience
