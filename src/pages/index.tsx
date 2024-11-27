import { FileUser } from 'lucide-react'
import BlueskyIcon from '../images/bluesky.svg'
import GithubIcon from '../images/github.svg'
import * as styles from './home.css'

function Home() {
  return (
    <main className={styles.home}>
      <div className="HomeBackground">
        <div className="HomeBackground-element HomeBackground-top1"></div>
        <div className="HomeBackground-element HomeBackground-top2"></div>
        <div className="HomeBackground-element HomeBackground-bottom1"></div>
        <div className="HomeBackground-element HomeBackground-bottom2"></div>
      </div>

      <div className={styles.homeContent}>
        <h1 className={styles.homeName}>Christian Hall</h1>
        <h2 className={styles.homeByline}>Staff Product Engineer</h2>

        <p className={styles.homeBio}>
          I’m a product-oriented software engineer who cares deeply for usable
          designs and sustainable development. Let’s build something together.
        </p>

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
