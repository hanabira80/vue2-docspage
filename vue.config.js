// require = require("esm")(module);
// const { routes } = require("./src/router/index.js");

module.exports = {
    configureWebpack: {
        entry: ["babel-polyfill", "./src/main.js"],
    },
    productionSourceMap: false,
    // pluginOptions: {
    //     sitemap: {
    //         baseURL: "http://docs.payple.kr/",
    //         routes,
    //     },
    // },
};
