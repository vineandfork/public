// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---src-pages-404-js": preferDefault(require("/Users/athomsen/git/public/src/pages/404.js")),
  "page-component---src-pages-index-js": preferDefault(require("/Users/athomsen/git/public/src/pages/index.js")),
  "page-component---src-pages-page-2-js": preferDefault(require("/Users/athomsen/git/public/src/pages/page-2.js"))
}

exports.json = {
  "404.json": require("/Users/athomsen/git/public/.cache/json/404.json"),
  "index.json": require("/Users/athomsen/git/public/.cache/json/index.json"),
  "page-2.json": require("/Users/athomsen/git/public/.cache/json/page-2.json"),
  "404-html.json": require("/Users/athomsen/git/public/.cache/json/404-html.json")
}

exports.layouts = {
  "index": preferDefault(require("/Users/athomsen/git/public/src/layouts/index"))
}