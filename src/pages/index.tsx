import { FileUser } from 'lucide-react'
import BlueskyIcon from '../images/bluesky.svg'
import GithubIcon from '../images/github.svg'
import * as styles from '../styles/home.css'
import { useScramble } from 'use-scramble'
import { useState } from 'react'

function Home() {
  const [preName, setPreName] = useState('')
  const [name, setName] = useState('')
  const [period, setPeriod] = useState('')
  const [bio, setBio] = useState('')
  const [showIcons, setShowIcons] = useState(false)

  const { ref: helloRef } = useScramble({
    text: 'Hello!',
    speed: 1,
    tick: 1,
    step: 1,
    overflow: false,
    overdrive: false,
    scramble: 4,
    onAnimationEnd: () => {
      setPreName('My name is ')
    },
  })

  const { ref: preNameRef } = useScramble({
    text: preName,
    speed: 1,
    tick: 1,
    step: 1,
    scramble: 3,
    overflow: false,
    overdrive: false,
    onAnimationEnd: () => {
      if (preName) setName('Christian Hall')
    },
  })

  const { ref: nameRef } = useScramble({
    text: name,
    speed: 1,
    tick: 1,
    step: 1,
    scramble: 3,
    overflow: false,
    overdrive: false,
    onAnimationEnd: () => {
      if (name) setPeriod('.')
    },
  })

  const { ref: periodRef } = useScramble({
    text: period,
    speed: 1,
    tick: 1,
    step: 1,
    scramble: 1,
    overflow: false,
    overdrive: false,
    onAnimationEnd: () => {
      if (period)
        setBio(
          'I’m a product-oriented software engineer who cares deeply for usable designs and sustainable development. Let’s build something together.'
        )
    },
  })

  const { ref: bioRef } = useScramble({
    text: bio,
    speed: 1,
    tick: 1,
    step: 1,
    scramble: 2,
    overflow: false,
    overdrive: false,
    onAnimationEnd: () => {
      if (bio) setShowIcons(true)
    },
  })

  return (
    <main className={styles.home}>
      <div className={styles.homeContent}>
        <p className={styles.homeMainCopy} ref={helloRef} />
        <p className={styles.homeMainCopy}>
          <span ref={preNameRef}></span>
          <span className={styles.homeName} ref={nameRef} />
          <span ref={periodRef} />
        </p>
        <p className={styles.homeMainCopy} ref={bioRef} />

        <div className={styles.homeLinks}>
          <a
            href="/Christian Hall Resume.pdf"
            className={`${styles.homeLink} ${showIcons ? styles.homeLinkVisible1 : ''}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div role="img" aria-label="Resume">
              <FileUser color="currentColor" size={24} />
            </div>
          </a>
          <a
            href="https://bsky.app/profile/christianhall.dev"
            className={`${styles.homeLink} ${showIcons ? styles.homeLinkVisible2 : ''}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BlueskyIcon
              alt="Bluesky"
              width={24}
              height={24}
              color="currentColor"
            />
          </a>
          <a
            href="https://github.com/jchristianhall"
            className={`${styles.homeLink} ${showIcons ? styles.homeLinkVisible3 : ''}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon
              alt="GitHub"
              width={24}
              height={24}
              color="currentColor"
            />
          </a>
        </div>

        <footer className={styles.homeFooter}>
          Crafted in Tennessee. &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </main>
  )
}

export default Home
