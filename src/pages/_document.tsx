import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const gosquaredSnippet = `!function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(
  arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];
  d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
  insertBefore(d,q)}(window,document,'script','_gs');

  _gs('GSN-329410-F');
  _gs('set', 'anonymizeIP', true);`

  return (
    <Html>
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
