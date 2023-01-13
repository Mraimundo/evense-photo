const isURLExternal = (url, siteHost) => /tel:|http(s)?:\/\//.test(url) && !url.includes(siteHost)
export default isURLExternal
