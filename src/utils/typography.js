import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = ({ rhythm }, options, styles) => {
  const linkColor = '#e25d3a'
  return {
    "body": {
      fontFamily: `YuGothicM,YuGothic,"Yu Gothic","Hiragino Kaku Gothic ProN",Meiryo,sans-serif`,
    },
    "h3": {
      fontFamily: `YuGothicM,YuGothic,"Yu Gothic","Hiragino Kaku Gothic ProN",Meiryo,sans-serif`,
    },
    "a": {
      color: linkColor,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "#bio, #bio *": {
      margin: 0,
    },
    "#bio": {
      display: `flex`,
      marginBottom: rhythm(1),
      color: `black`,
      boxShadow: `none`,
      margin: `3.5rem auto`,
    },
    "#bio .link": {
      color: linkColor,
    },
    "#bio .mysocial": {
      color: 'black',
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
      margin: rhythm(0.2),
      padding: `0 ${rhythm(0.2)} 0 ${rhythm(0.6)}`,
      borderRadius: rhythm(0.1),
      background: `#444`,
      color: `white`,
      fontSize: rhythm(0.5),
      textDecoration: `none`,
      position: 'relative',
      height: '24px',
      lineHeight: '24px',
      boxShadow: 'none',
    },
    "ul.tags a:before": {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      borderTop: `${rhythm(0.45)} solid white`,
      borderRight: `${rhythm(0.45)} solid #444`,
      borderBottom: `${rhythm(0.45)} solid white`,
      width: '0',
      height: '24px',
    },
    "ul.tags a:after": {
      position: 'absolute',
      top: '9px',
      left: '7px',
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
