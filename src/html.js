import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script defer async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" title="RSS2.0" />
        <script src="http://s.hatena.ne.jp/js/HatenaStar.js"></script>
        <script>
          Hatena.Star.Token = '961ceeb0dcd2fd0a3a1e021cc7819f462ace1e64';
          Hatena.Star.SiteConfig = {
            entryNodes: {
              'article': {
                uri: '.permalink',
                title: 'h1',
                container: 'h1'
              },
              '.article': {
                uri: 'h3 a',
                title: 'h3',
                container: 'h3'
              }
            }
          };
        </script>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
