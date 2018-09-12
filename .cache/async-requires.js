// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "page-component---src-pages-404-js": require("gatsby-module-loader?name=page-component---src-pages-404-js!/Users/athomsen/git/public/src/pages/404.js"),
  "page-component---src-pages-index-js": require("gatsby-module-loader?name=page-component---src-pages-index-js!/Users/athomsen/git/public/src/pages/index.js"),
  "page-component---src-pages-page-2-js": require("gatsby-module-loader?name=page-component---src-pages-page-2-js!/Users/athomsen/git/public/src/pages/page-2.js")
}

exports.json = {
  "404.json": require("gatsby-module-loader?name=path---404!/Users/athomsen/git/public/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/athomsen/git/public/.cache/json/index.json"),
  "page-2.json": require("gatsby-module-loader?name=path---page-2!/Users/athomsen/git/public/.cache/json/page-2.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/athomsen/git/public/.cache/json/404-html.json")
}

exports.layouts = {
  "index": require("gatsby-module-loader?name=layout-component---index!/Users/athomsen/git/public/src/layouts/index")
}