import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = ({ rhythm }, options, styles) => {
  styles.a.color = '#e25d3e'
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "ul.tags": {
      display: `inline`,
      listStyle: `none`,
    },
    "ul.tags li": {
      display: `inline`,
    },
    "ul.tags a": {
      display: `inline-block`,
      marginLeft: `0.5em`,
      padding: `0 0.5em`,
      background: `black`,
      color: `white`,
      fontSize: `80%`,
      textDecoration: `none`,
    },
    "ul#after-post-nav": {
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `space-between`,
      listStyle: `none`,
      padding: 0,
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
