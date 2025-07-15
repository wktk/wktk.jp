import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = ({ rhythm, scale }, options, styles) => {
  const color = {
    bg: '#fbfbfb',
    text: '#334',
    link: '#251e67',
    linkHover: '#0366d6',
    head: '#251e47',
    foot: '#556',
    tag: '#444',
    tagText: '#fff',
    neutral: '#888',
  };
  const darkColor = {
    bg: '#323234',
    text: '#f9f9fa',
    link: '#f2fff8',
    linkHover: '#c2ffd8',
    head: '#fff',
    foot: '#9aa',
    tag: '#101015',
    tagText: '#eff',
    neutral: '#888',
  };

  return {
    "body": {
      color: color.text,
      backgroundColor: color.bg,
      fontFamily: `"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif`,
    },
    "h1, h2, h3": {
      fontFamily: `"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif`,
      color: color.head,
      fontWeight: 900,
    },
    ".blog-post main h1, .blog-post main h2, .blog-post main h3, .post-item h3": {
      fontWeight: "bold",
    },

    "a": {
      color: color.link,
      boxShadow: `none`,
      textDecoration: 'underline',
    },
    "a:hover, a:active": {
      color: color.linkHover,
      textDecoration: 'none',
    },
    "h1 a, h2 a, h3 a": {
      textDecoration: 'none',
    },
    "#bio, #bio *": {
      margin: 0,
    },
    "#bio": {
      color: color.text,
      boxShadow: `none`,
    },
    "#bio a": {
      textDecoration: 'none',
    },
    "#bio .link": {
      color: color.link,
    },
    "#bio .link:hover, #bio .link:active": {
      color: color.linkHover,
    },
    "#bio .mysocial a": {
      color: color.text,
      marginRight: '0.25em',
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
      background: color.tag,
      color: color.tagText,
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
      borderTop: `12px solid ${color.bg}`,
      borderRight: `12px solid ${color.tag}`,
      borderBottom: `12px solid ${color.bg}`,
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
      backgroundColor: color.bg,
      borderRadius: '100%',
    },
    "#share": {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderTop: `1px solid ${color.neutral}`,
      borderBottom: `1px solid ${color.neutral}`,
      padding: `1rem 0`,
      marginBottom: rhythm(0.5),
    },
    "#share ul": {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: '0',
      marginBottom: rhythm(0.5),
    },
    "#share li": {
      listStyle: "none",
      margin: 0,
      padding: "0 0.25em",
      height: '32px', /* workaround react-share buttons */
    },
    "#share small": {
      color: color.foot,
    },
    "ul#after-post-nav": {
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `space-between`,
      listStyle: `none`,
      padding: 0,
    },
    "hr": {
      background: color.neutral,
    },
    ".gatsby-highlight": {
      margin: `${rhythm(1)} 0`,
    },
    '.gatsby-highlight pre[class*="language-"]': {
      marginBottom: 0,
    },

    "footer": {
      marginTop: rhythm(3),
      color: color.foot,
    },
    "footer a": {
      color: color.foot,
    },
    "footer small": {
      float: 'right',
    },

    ".twitter-tweet": {
      margin: `${rhythm(1)} auto !important`,
    },
    "iframe[id^='twitter']": {
      marginBottom: 0,
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
      ...scale(-3 / 10),
      display: `block`,
      marginBottom: rhythm(1/3),
    },
    ".post-meta time": {
      display: 'inline-block',
      paddingRight: rhythm(1 / 4),
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

    "#bio-description a": {
      boxShadow: 'none',
    },

    "blockquote": {
      color: color.text,
      borderLeftColor: color.head,
      marginLeft: rhythm(3 / 4),
      fontSize: '1em',
    },
    "@media screen and (max-width: 480px)": {
      "blockquote": {
        marginLeft: 0,
      },
    },
    "ul, ol": {
      marginLeft: rhythm(1),
    },
    "li > ul": {
      marginBottom: rhythm(1 / 4),
      marginTop: rhythm(1 / 4),
    },
    "li": {
      marginBottom: rhythm(1 / 4),
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
        top: rhythm(3),
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
      "footer": {
        marginTop: rhythm(2),
      },
      "footer small": {
        float: 'left',
      },
    },
    "@media (prefers-color-scheme: dark)": {
      "body": {
        color: darkColor.text,
        backgroundColor: darkColor.bg,
      },
      "h1, h2, h3": {
        color: darkColor.head,
      },
      "a": {
        color: darkColor.link,
      },
      "a:hover, a:active": {
        color: darkColor.linkHover,
      },
      "#bio": {
        color: darkColor.text,
      },
      "#bio .link": {
        color: darkColor.link,
      },
      "#bio .link:hover, #bio .link:active": {
        color: darkColor.linkHover,
      },
      "#bio .mysocial a": {
        color: darkColor.text,
      },
      "ul.tags a": {
        background: darkColor.tag,
        color: darkColor.tagText,
      },
      "ul.tags a:before": {
        borderTop: `12px solid ${darkColor.bg}`,
        borderRight: `12px solid ${darkColor.tag}`,
        borderBottom: `12px solid ${darkColor.bg}`,
      },
      "ul.tags a:after": {
        backgroundColor: darkColor.bg,
      },
      "footer": {
        color: darkColor.foot,
      },
      "footer a": {
        color: darkColor.foot,
      },
      "#share": {
        borderTop: `1px solid ${darkColor.neutral}`,
        borderBottom: `1px solid ${darkColor.neutral}`,
      },
      "#share small": {
        color: darkColor.foot,
      },
      "hr": {
        background: darkColor.neutral,
      },
      "blockquote": {
        color: darkColor.text,
        borderLeftColor: darkColor.head,
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
