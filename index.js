const url = require('url')
const getUrls = require('get-urls')

module.exports = function getUrlsHost(text, host) {
  let hostUrls = []

  // get the URLs from the text (into the array)
  getUrls(text).forEach(thisUrl => hostUrls.push(thisUrl))

  // now filter on the host
  return hostUrls.filter(thisUrl => {
    let u = url.parse(thisUrl)
    return u.host == host
  })
}
