import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = ({ rhythm }, options, styles) => {
  const udFont = '"UD Shin Go Regular"'
  return {
    "main": {
      fontFamily: `${udFont},'Merriweather','Georgia',serif`,
    },
    "h1, h2, h3": {
      fontFamily: `Montserrat,${udFont},sans-serif`,
    },
    "a": {
      color: '#e25d3a',
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "a#bio, a#bio *": {
      margin: 0,
    },
    "a#bio": {
      display: `flex`,
      marginBottom: rhythm(1),
      color: `black`,
      boxShadow: `none`,
      margin: `3.5rem auto`,
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
      marginLeft: rhythm(0.2),
      padding: `0 ${rhythm(0.2)}`,
      borderRadius: rhythm(0.1),
      background: `black`,
      color: `white`,
      fontSize: rhythm(0.5),
      textDecoration: `none`,
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
