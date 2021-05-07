import 'babel-polyfill';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import VueGtag from "vue-gtag";
// import { routes } from "./routes.js";

Vue.config.productionTip = false;

Vue.use(VueGtag, {
    config: {
        id: "G-F1ZQQFQHP2",
    },
    includes: [
        {id: "UA-190087092-1"},
    ]
},router);

// Vue.use(router);
// const router = new Router({
//     mode: "history",
//     base: process.env.BASE_URL,
//     routes,
// });

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");