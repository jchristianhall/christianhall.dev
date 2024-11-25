import './global.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const gosquaredSnippet = `!function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(
  arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];
  d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
  insertBefore(d,q)}(window,document,'script','_gs');

  _gs('GSN-329410-F');
  _gs('set', 'anonymizeIP', true);`

  return (
    <>
      <Head>
        {process.env.NODE_ENV === 'production' && (
          <script
            key="gosquared"
            dangerouslySetInnerHTML={{ __html: gosquaredSnippet }}
          />
        )}
        <link
          href="https://fonts.googleapis.com/css?family=Josefin%20Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
