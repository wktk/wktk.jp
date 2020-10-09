import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = ({ rhythm, scale }, options, styles) => {
  const bg = '#fffffe'
  const text = '#334';
  const linkColor = '#251e67';
  const linkHover = '#0366d6';
  const head = '#251e47';

  return {
    "body": {
      color: text,
      backgroundColor: bg,
      fontFamily: `YuGothicM,YuGothic,"Yu Gothic","Hiragino Kaku Gothic ProN",Meiryo,sans-serif`,
    },
    "h1, h2, h3": {
      color: head,
      fontFamily: `YuGothicM,YuGothic,"Yu Gothic","Hiragino Kaku Gothic ProN",Meiryo,sans-serif`,
    },
    "a": {
      color: linkColor,
    },
    "a:hover, a:active": {
      color: linkHover,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "#bio, #bio *": {
      margin: 0,
    },
    "#bio": {
      color: text,
      boxShadow: `none`,
      margin: `3.5rem auto`,
    },
    "#bio .link": {
      color: linkColor,
    },
    "#bio .link:hover, #bio .link:active": {
      color: linkHover,
    },
    "#bio .mysocial": {
      color: text,
      marginRight: '0.5em',
      boxShadow: 'none',
    },
    "#bio .mysocial svg": {
      width: '1em',
    },
    "ul.tags": {
      display: `inline`,
      listStyle: `none`,
      marginLeft: 0,
    },
    "ul.tags li": {
      display: `inline`,
    },
    "ul.tags a": {
      display: `inline-block`,
      marginLeft: '4px',
      padding: `0 8px 0 20px`,
      borderRadius: '2px',
      background: `#444`,
      color: `white`,
      fontSize: '80%',
      textDecoration: `none`,
      position: 'relative',
      height: '24px',
      lineHeight: '24px',
      boxShadow: 'none',
      minWidth: '5em',
      textAlign: 'center',
    },
    "ul.tags a:before": {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      borderTop: `12px solid ${bg}`,
      borderRight: `12px solid #444`,
      borderBottom: `12px solid ${bg}`,
      width: '0',
      height: '24px',
    },
    "ul.tags a:after": {
      position: 'absolute',
      top: '9px',
      left: '8px',
      display: 'block',
      content: '""',
      width: '6px',
      height: '6px',
      backgroundColor: '#fff',
      borderRadius: '100%',
    },
    "#share": {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginLeft: '0',
    },
    "#share li": {
      listStyle: "none",
      margin: 0,
      padding: "0 0.25em",
    },
    "ul#after-post-nav": {
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `space-between`,
      listStyle: `none`,
      padding: 0,
    },
    ".gatsby-highlight": {
      margin: `${rhythm(1)} 0`,
    },
    '.gatsby-highlight pre[class*="language-"]': {
      marginBottom: 0,
    },
    "footer": {
      marginTop: rhythm(3),
    },
    "*[id^='twitter-widget-']": {
      margin: `${rhythm(1)} auto !important`,
    },
    ".adsbygoogle": {
      padding: 0,
      background: 'transparent',
    },
    ".google-auto-placed": {
      margin: `${rhythm(1)} auto`,
    },
    ".post-thumb": {
      float: 'right',
      margin: `0 ${rhythm(0.5)}`,
    },
    ".post-meta": {
      ...scale(-1 / 5),
      display: `block`,
      marginBottom: rhythm(1/3),
    },
    ".blog-post .post-meta": {
      marginTop: rhythm(-0.5),
    },

    ".post-item": {
      position: 'relative',
    },
    ".post-item h3": {
      marginBottom: rhythm(1 / 2),
    },
    ".post-item a": {
      boxShadow: 'none',
    },

    "#sidecol .tags": {
      ...scale(-1 / 5),
    },

    "#layout": {
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      position: 'relative',
    },

    "@media screen and (min-width: 59.5rem)": { // rhythm(24 + 5*2)
      "#bio-description": {
        minWidth: rhythm(4),
      },
      ".post-meta": {
        position: 'absolute',
        top: '0',
        left: rhythm(-5.5),
        width: rhythm(5),
        textAlign: 'right',
        height: '125%',
      },
      ".blog-post .post-meta": {
        top: rhythm(5),
        height: '100%',
      },
      ".post-meta-sticky": {
        position: 'sticky',
        top: 0,
        margin: 0,
        padding: 0,
      },
      ".blog-post .post-meta-sticky": {
        top: rhythm(2),
      },
      "#sidecol": {
        position: 'absolute',
        left: rhythm(24),
        top: rhythm(5),
        width: rhythm(5),
        height: '100%',
      },
      "#sidecol-sticky": {
        position: 'sticky',
        top: rhythm(2),
      },
      "#sidecol #bio": {
        margin: 0,
      },
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
