import { FileUser } from 'lucide-react'
import BlueskyIcon from '../images/bluesky.svg'
import GithubIcon from '../images/github.svg'

function Home() {
  return (
    <main className="Home">
      <div className="HomeBackground">
        <div className="HomeBackground-element HomeBackground-top1"></div>
        <div className="HomeBackground-element HomeBackground-top2"></div>
        <div className="HomeBackground-element HomeBackground-bottom1"></div>
        <div className="HomeBackground-element HomeBackground-bottom2"></div>
      </div>

      <div className="Home-content">
        <h1 className="Home-name">Christian Hall</h1>
        <h2 className="Home-byline">Staff Product Engineer</h2>

        <p className="Home-bio">
          I’m a product-oriented software engineer who cares deeply for usable
          designs and sustainable development. Let’s build something together.
        </p>

        <div className="Home-links">
          <a href="/Christian Hall Resume.pdf" className="Home-link">
            <FileUser alt="Resume" color="currentColor" size={24} />
          </a>
          <a
            href="https://bsky.app/profile/christianhall.dev"
            className="Home-link"
          >
            <BlueskyIcon
              alt="Bluesky"
              width={24}
              height={24}
              color="currentColor"
            />
          </a>
          <a href="https://github.com/jchristianhall" className="Home-link">
            <GithubIcon
              alt="GitHub"
              width={24}
              height={24}
              color="currentColor"
            />
          </a>
        </div>

        <footer className="Home-footer">
          Crafted in Tennessee. &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </main>
  )
}

export default Home
