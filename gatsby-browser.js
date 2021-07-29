// custom typefaces

// syntax highlight
require("prism-themes/themes/prism-vsc-dark-plus.css")

const appendScript = (url) => {
  const script = document.createElement('script')
  script.src = url
  script.defer = script.async = true
  document.head.appendChild(script)
}

const appendTwitter = () => {
  if (!document.querySelector('.twitter-tweet')) return
  if (window.twttr) return

  appendScript('https://platform.twitter.com/widgets.js')
}

const appendAdSense = () => {
  if (!document.querySelector('.adsbygoogle')) return
  if ((window.adsbygoogle || {}).loaded) return

  appendScript('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')
}

const isNarrowClient = () => true // document.body.offsetWidth < 950

const appendExternalScripts = () => {
  appendTwitter()
  appendAdSense()
  isNarrowClient() && window.removeEventListener('scroll', appendExternalScripts)
}

exports.onRouteUpdate = () => {
  isNarrowClient()
    ? window.addEventListener('scroll', appendExternalScripts)
    : appendExternalScripts()
}
