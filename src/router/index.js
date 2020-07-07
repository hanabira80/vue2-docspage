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
        path: "/card/install/outline",
        name: "card-installation",
        meta: { title: "환경설정 개요" },
        component: () => import("../views/card-install-outline.vue"),
    },
    {
        path: "/card/install/auth",
        name: "card-auth",
        meta: { title: "상황별 가맹점 인증 요청 방식" },
        component: () => import("../views/card-install-auth.vue"),
    },
    {
        path: "/card/pay/outline",
        name: "card-pay-outline",
        meta: { title: "빌링키 방식 개요" },
        component: () => import("../views/card-pay-outline.vue"),
    },
    {
        path: "/card/pay/simple-pin",
        name: "card-simple",
        meta: { title: "비밀번호 간편결제" },
        component: () => import("../views/card-pay-simple--pin.vue"),
    },
    {
        path: "/card/pay/simple-once",
        name: "card-normal",
        meta: { title: "일회성 간편결제" },
        component: () => import("../views/card-pay-simple--once.vue"),
    },
    {
        path: "/card/pay/regular",
        name: "card-regular",
        meta: { title: "정기결제" },
        component: () => import("../views/card-pay-regular.vue"),
    },
    {
        path: "/card/pay/link",
        name: "card-link",
        meta: { title: "카드결제 재결제 링크결제" },
        component: () => import("../views/card-pay-link.vue"),
    },
    {
        path: "/card/pay/app-card",
        name: "card-app-card",
        meta: { title: "카드결제 재결제 간편결제" },
        component: () => import("../views/card-pay-app--card.vue"),
    },
    {
        path: "/card/pay/cancel",
        name: "card-cancel",
        meta: { title: "카드결제 승인취소" },
        component: () => import("../views/card-pay-cancel.vue"),
    },
    {
        path: "/card/regist/cancel",
        name: "card-reg-cancel",
        meta: { title: "카드결제 등록카드 해지" },
        component: () => import("../views/card-regist-cancel.vue"),
    },
    {
        path: "/card/regist/search",
        name: "card-reg-search",
        meta: { title: "카드결제 등록카드 조회" },
        component: () => import("../views/card-regist-search.vue"),
    },
    {
        path: "/card/result/search",
        name: "card-result-search",
        meta: { title: "카드결제 결제결과 조회" },
        component: () => import("../views/card-result-search.vue"),
    },
    {
        path: "/card/policy",
        name: "card-policy",
        meta: { title: "카드결제 재결제 간편결제" },
        component: () => import("../views/card-policy.vue"),
    },
    {
        path: "/card/code/response",
        name: "card-code-response",
        meta: { title: "카드결제 재결제 간편결제" },
        component: () => import("../views/card-code-response.vue"),
    },
    // 
    // 계좌
    // 
    {
        path: "/bank/outline",
        name: "bank-outline",
        meta: { title: "계좌결제 개요" },
        component: () => import("../views/bank-outline.vue"),
    },
    {
        path: "/bank/install/outline",
        name: "bank-auth",
        meta: { title: "계좌결제 가맹점 인증요청" },
        component: () => import("../views/bank-install-outline.vue"),
    },
    {
        path: "/bank/install/auth",
        name: "bank-call",
        meta: { title: "계좌결제 결제창 호출" },
        component: () => import("../views/bank-install-auth.vue"),
    },
    {
        path: "/bank/pay/outline",
        name: "bank-repeat-outline",
        meta: { title: "계좌결제 재결제 개요" },
        component: () => import("../views/bank-pay-outline.vue"),
    },
    {
        path: "/bank/pay/simple-pin",
        name: "bank-simple",
        meta: { title: "계좌결제 재결제 간편결제" },
        component: () => import("../views/bank-pay-simple--pin.vue"),
    },
    {
        path: "/bank/pay/simple-once",
        name: "bank-pay/simple-once",
        meta: { title: "계좌결제 재결제 단건결제" },
        component: () => import("../views/bank-pay-simple--once.vue"),
    },
    {
        path: "/bank/pay/regular",
        name: "bank-regular",
        meta: { title: "계좌결제 재결제 정기결제" },
        component: () => import("../views/bank-pay-regular.vue"),
    },
    {
        path: "/bank/pay/link",
        name: "bank-link",
        meta: { title: "계좌결제 재결제 링크결제" },
        component: () => import("../views/bank-pay-link.vue"),
    },
    {
        path: "/bank/recipt-request",
        name: "bank-recipt-request",
        meta: { title: "계좌결제 현금영수증 발행" },
        component: () => import("../views/bank-recipt-request.vue"),
    },
    {
        path: "/bank/recipt-cancel",
        name: "bank-recipt-cancel",
        meta: { title: "계좌결제 현금영수증 취소" },
        component: () => import("../views/bank-recipt-cancel.vue"),
    },
    {
        path: "/bank/pay/cancel",
        name: "bank-cancel",
        meta: { title: "계좌결제 승인취소" },
        component: () => import("../views/bank-pay-cancel.vue"),
    },
    {
        path: "/bank/regist/cancel",
        name: "bank-reg-cancel",
        meta: { title: "계좌결제 등록계좌 해지" },
        component: () => import("../views/bank-regist-cancel.vue"),
    },
    {
        path: "/bank/regist/search",
        name: "bank-reg-search",
        meta: { title: "계좌결제 등록계좌 해지" },
        component: () => import("../views/bank-regist-search.vue"),
    },
    {
        path: "/bank/result/recieve",
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
        path: "/bank/policy",
        name: "bank-error-code",
        meta: { title: "계좌결제 응답오류" },
        component: () => import("../views/bank-policy.vue"),
    },
    {
        path: "/webhook",
        name: "card-webhook",
        meta: { title: "카드결제 재결제 간편결제" },
        component: () => import("../views/webhook.vue"),
    },
    {
        path: "/sample-code",
        name: "card-sample-code",
        meta: { title: "카드결제 재결제 간편결제" },
        component: () => import("../views/sample-code.vue"),
    },
    {
        path: "/docs-ver",
        name: "card-docs-ver",
        meta: { title: "카드결제 재결제 간편결제" },
        component: () => import("../views/docs-ver.vue"),
    },
    {
        path: "/faq",
        name: "card-faq",
        meta: { title: "카드결제 재결제 간편결제" },
        component: () => import("../views/faq.vue"),
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
