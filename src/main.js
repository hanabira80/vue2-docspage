import 'babel-polyfill';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import VueGtag from "vue-gtag";
import VueCookies from "vue-cookies";

Vue.config.productionTip = false;

Vue.use(
    VueGtag,
    {
        config: {
            id: "G-F1ZQQFQHP2",
        },
        includes: [{ id: "UA-190087092-1" }],
    },
    router,
    VueCookies,
);
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");
// Vue.$cookies.config("1d");