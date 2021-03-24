import 'babel-polyfill';
import Vue from "vue";
import App from "./App.vue";
// import Gtm from "vue-gtm";
// import VueGtag from "vue-gtag";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
// import { component as VueCodeHighlight } from "vue-code-highlight";
// import "prismjs";
// import "prismjs/themes/prism-funky.css";
// import "prismjs/components/prism-scss.min";
// import "prismjs/plugins/autolinker/prism-autolinker.min";
// import "prismjs/plugins/autolinker/prism-autolinker.css";
// import Prism from "vue-prism-component";
// Vue.component("prism", Prism);
// import 'prism-es6/components/prism-markup-templating';
// import 'prism-es6/components/prism-php';
import VueCookies from "vue-cookies";
import VueAnalytics from "vue-analytics";
import VueMeta from "vue-meta";
import VueGtag from "vue-gtag";

Vue.use(VueMeta);
Vue.use(VueCookies);
Vue.$cookies.config("1y");

Vue.config.productionTip = false;

// const app = createApp(App);

// app.use(router);

// app.use(
//     createGtm({
//         id: "UA-190087092-1",
//         queryParams: {
//             gtm_auth: "AB7cDEf3GHIjkl-MnOP8qr",
//             gtm_preview: "env-4",
//             gtm_cookies_win: "x",
//         },
//         defer: false,
//         compatibility: false,
//         enabled: true,
//         debug: true,
//         loadScript: true,
//         vueRouter: router,
//         ignoredViews: ["homepage"],
//         trackOnNextTick: false,
//     })
// );

// Vue.use(VueGtag, {
//     config: { id: "UA-190087092-1" },
// });

// Vue.use(VueAnalytics, {
//     id: "UA-190087092-1",
//     router,
// });

Vue.use(VueGtag, {
    config: {
        id: "G-F1ZQQFQHP2",
    },
    includes: [
        {id: "UA-190087092-1"},
    ]
},router);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");