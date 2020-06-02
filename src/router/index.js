import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import notFound from "../components/404.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: { title: "페이플 Docs" },
    },
    {
        path: "/card/outline",
        name: "card-outline",
        meta: { title: "카드결제 개요" },
        component: () => import("../views/card-outline.vue"),
    },
    {
        path: "/card/auth",
        name: "card-auth",
        meta: { title: "카드결제 가맹점 인증요청" },
        component: () => import("../views/card-auth.vue"),
    },
    {
        path: "/card/call",
        name: "card-call",
        meta: { title: "카드결제 결제창 호출" },
        component: () => import("../views/card-call.vue"),
    },
    {
        path: "/card/cancel",
        name: "card-cancel",
        meta: { title: "카드결제 승인취소" },
        component: () => import("../views/card-cancel.vue"),
    },
    {
        path: "/card/error-code",
        name: "card-error-code",
        meta: { title: "카드결제 응답오류" },
        component: () => import("../views/card-error-code.vue"),
    },
    {
        path: "/card/link",
        name: "card-link",
        meta: { title: "카드결제 재결제 링크결제" },
        component: () => import("../views/card-link.vue"),
    },
    {
        path: "/card/normal",
        name: "card-normal",
        meta: { title: "카드결제 재결제 일반결제" },
        component: () => import("../views/card-normal.vue"),
    },
    {
        path: "/card/reg-cancel",
        name: "card-reg-cancel",
        meta: { title: "카드결제 등록카드 해지" },
        component: () => import("../views/card-reg-cancel.vue"),
    },
    {
        path: "/card/reg-search",
        name: "card-reg-search",
        meta: { title: "카드결제 등록카드 조회" },
        component: () => import("../views/card-reg-search.vue"),
    },
    {
        path: "/card/regular",
        name: "card-regular",
        meta: { title: "카드결제 재결제 정기결제" },
        component: () => import("../views/card-regular.vue"),
    },
    {
        path: "/card/result-recieve",
        name: "card-result-recieve",
        meta: { title: "카드결제 결제결과 수신" },
        component: () => import("../views/card-result-recieve.vue"),
    },
    {
        path: "/card/result-search",
        name: "card-result-search",
        meta: { title: "카드결제 결제결과 조회" },
        component: () => import("../views/card-result-search.vue"),
    },
    {
        path: "/card/repeat",
        name: "card-repeat-outline",
        meta: { title: "카드결제 재결제 개요" },
        component: () => import("../views/card-repeat-outline.vue"),
    },
    {
        path: "/card/simple",
        name: "card-simple",
        meta: { title: "카드결제 재결제 간편결제" },
        component: () => import("../views/card-simple.vue"),
    },
    // {
    //     path: "/url",
    //     name: "url-link",
    //     meta: {title: 'URL 링크결제'},
    //     component: () => import("../views/url-link.vue")
    // },
    // {
    //     path: "/faq",
    //     name: "faq",
    //     meta: {title: 'aaa'},
    //     component: () => import("../views/faq.vue")
    // },
    {
        path: "/bank/outline",
        name: "bank-outline",
        meta: { title: "계좌결제 개요" },
        component: () => import("../views/bank-outline.vue"),
    },
    {
        path: "/bank/auth",
        name: "bank-auth",
        meta: { title: "계좌결제 가맹점 인증요청" },
        component: () => import("../views/bank-auth.vue"),
    },
    {
        path: "/bank/call",
        name: "bank-call",
        meta: { title: "계좌결제 결제창 호출" },
        component: () => import("../views/bank-call.vue"),
    },
    {
        path: "/bank/cancel",
        name: "bank-cancel",
        meta: { title: "계좌결제 승인취소" },
        component: () => import("../views/bank-cancel.vue"),
    },
    {
        path: "/bank/error-code",
        name: "bank-error-code",
        meta: { title: "계좌결제 응답오류" },
        component: () => import("../views/bank-error-code.vue"),
    },
    {
        path: "/bank/link",
        name: "bank-link",
        meta: { title: "계좌결제 재결제 링크결제" },
        component: () => import("../views/bank-link.vue"),
    },
    {
        path: "/bank/normal",
        name: "bank-normal",
        meta: { title: "계좌결제 재결제 단건결제" },
        component: () => import("../views/bank-normal.vue"),
    },
    {
        path: "/bank/reg-cancel",
        name: "bank-reg-cancel",
        meta: { title: "계좌결제 등록계좌 해지" },
        component: () => import("../views/bank-reg-cancel.vue"),
    },
    {
        path: "/bank/reg-search",
        name: "bank-reg-search",
        meta: { title: "계좌결제 등록계좌 해지" },
        component: () => import("../views/bank-reg-search.vue"),
    },
    {
        path: "/bank/regular",
        name: "bank-regular",
        meta: { title: "계좌결제 재결제 정기결제" },
        component: () => import("../views/bank-regular.vue"),
    },
    {
        path: "/bank/result-recieve",
        name: "bank-result-recieve",
        meta: { title: "계좌결제 결제결과 수신" },
        component: () => import("../views/bank-result-recieve.vue"),
    },
    {
        path: "/bank/result-search",
        name: "bank-result-search",
        meta: { title: "계좌결제 결제결과 조회" },
        component: () => import("../views/bank-result-search.vue"),
    },
    {
        path: "/bank/repeat",
        name: "bank-repeat-outline",
        meta: { title: "계좌결제 재결제 개요" },
        component: () => import("../views/bank-repeat-outline.vue"),
    },
    {
        path: "/bank/simple",
        name: "bank-simple",
        meta: { title: "계좌결제 재결제 간편결제" },
        component: () => import("../views/bank-simple.vue"),
    },
    {
        path: "/bank/recipt-cancel",
        name: "bank-recipt-cancel",
        meta: { title: "계좌결제 현금영수증 취소" },
        component: () => import("../views/bank-recipt-cancel.vue"),
    },
    {
        path: "/bank/recipt-request",
        name: "bank-recipt-request",
        meta: { title: "계좌결제 현금영수증 발행" },
        component: () => import("../views/bank-recipt-request.vue"),
    },
];
// router.beforeEach((to, from, next) => {
//     document.title = meta.title
//     next()
// });
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

// router.afterEach((to, from) => {
//     Vue.nextTick(() => {
//       document.title = to.meta.title(to)
//     })
//   })

export default router;
