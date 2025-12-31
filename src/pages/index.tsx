import { FileUser } from 'lucide-react'
import BlueskyIcon from '../images/bluesky.svg'
import GithubIcon from '../images/github.svg'
import * as styles from './home.css'
import { useScramble } from 'use-scramble'
import { useState } from 'react'

function Home() {
  const [name, setName] = useState('')
  const { ref: helloRef } = useScramble({
    text: 'Hello!',
    speed: 0.2,
    tick: 1,
    step: 1,
    overflow: false,
    overdrive: false,
    scramble: 4,
  })

  const { ref: preNameRef } = useScramble({
    text: 'My name is ',
    speed: 0.5,
    tick: 1,
    step: 1,
    scramble: 3,
    overflow: false,
    overdrive: false,
    onAnimationEnd: () => {
      setName('Christian Hall')
    },
  })

  const { ref: nameRef } = useScramble({
    text: name,
    speed: 0.5,
    tick: 1,
    step: 1,
    scramble: 3,
    overflow: false,
    overdrive: false,
  })

  const { ref: bioRef } = useScramble({
    text: 'I’m a product-oriented software engineer who cares deeply for usable designs and sustainable development. Let’s build something together.',
    speed: 2,
    tick: 1,
    step: 1,
    scramble: 2,
    overflow: false,
    overdrive: false,
  })

  return (
    <main className={styles.home}>
      <div className={styles.homeContent}>
        <p className={styles.homeMainCopy} ref={helloRef} />
        <p className={styles.homeMainCopy}>
          <span ref={preNameRef}></span>
          <span className={styles.homeName} ref={nameRef} />
        </p>
        <p className={styles.homeMainCopy} ref={bioRef} />

        <div className={styles.homeLinks}>
          <a
            href="/Christian Hall Resume.pdf"
            className={styles.homeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div role="img" aria-label="Resume">
              <FileUser color="currentColor" size={24} />
            </div>
          </a>
          <a
            href="https://bsky.app/profile/christianhall.dev"
            className={styles.homeLink}
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
            className={styles.homeLink}
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
