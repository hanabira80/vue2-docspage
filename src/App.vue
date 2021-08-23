<template>
    <v-app :dark="!!(isDark === 'dark')">
        <v-app-bar app clipped-left color="#5C539D">
            <v-toolbar-items
                :class="{ 'justify-space-between mo-res--tool-bar pl-0': $vuetify.breakpoint.mdAndDown, 'pl-2': $vuetify.breakpoint.mdAndUp }"
                class="d-flex align-center py-5"
            >
                <div class="d-flex align-center">
                    <v-app-bar-nav-icon class="hidden-lg-and-up" color="#fff" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    <router-link to="/">
                        <v-img :src="require('./assets/header-logo-api--wh.svg')" alt="" class="shrink" contain transition="scale-transition" width="140" />
                    </router-link>
                </div>

                <v-divider vertical color="#bbb" class="ml-3 hidden-md-and-down"></v-divider>

                <v-btn text id="mode-switcher" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
                    <v-icon :color="$vuetify.theme.dark ? 'blue accent-2' : 'yellow accent-4'">
                        {{ $vuetify.theme.dark ? "mdi-weather-night" : "mdi-white-balance-sunny" }}
                    </v-icon>
                    <span class="pl-2 hidden-xs-only white--text">
                        {{ $vuetify.theme.dark ? "다크모드" : "라이트모드" }}
                    </span>
                </v-btn>
            </v-toolbar-items>

            <v-spacer class="hidden-md-and-down"></v-spacer>

            <v-toolbar-items class="hidden-md-and-down py-5">
                <v-btn text class="font-weight-bold" color="white" href="https://www.payple.kr/" target="_blank">
                    HOME
                </v-btn>
                <v-divider vertical color="#bbb"></v-divider>
                <v-btn text class="font-weight-bold" color="white" href="https://www.payple.kr/?ACT_=demo" target="_blank">
                    DEMO
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>

        <div
            :class="{ xs: $vuetify.breakpoint.xs, sm: $vuetify.breakpoint.sm, md: $vuetify.breakpoint.md, lg: $vuetify.breakpoint.lgAndUp }"
            class="guide--dark-mode active
        "
        >
            <v-img :src="require('../src/assets/guide--dark-mode-05.svg')" alt="" contain width="200" class="hidden-md-and-down pc-img" />
            <v-img
                :src="require('../src/assets/guide--dark-mode-04.svg')"
                alt=""
                contain
                width="200"
                class="hidden-lg-and-up mo-img"
                :class="{ 'modify-position': $vuetify.breakpoint.xs }"
            />
        </div>

        <v-navigation-drawer v-model="drawer" app clipped>
            <v-list dense>
                <v-treeview :items="navi" openOnClick>
                    <template slot="label" slot-scope="props">
                        <router-link :to="props.item.to" v-if="props.item.to" class="d-block">
                            {{ props.item.name }}
                        </router-link>
                        <span v-else>{{ props.item.name }}</span>
                    </template>
                </v-treeview>
            </v-list>

            <template v-slot:append>
                <div class="hidden-lg-and-up text-center">
                    <v-btn x-large tile depressed width="50%" class="white--text" color="#5C539D" href="https://www.payple.kr/" target="_blank">
                        HOME
                    </v-btn>

                    <v-btn x-large tile depressed width="50%" class="white--text" color="#5C539D" href="https://www.payple.kr/?ACT_=demo" target="_blank">
                        DEMO
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>

        <v-main>
            <v-container style="max-width:1000px;">
                <v-card class="mt-6 ani-gradient-change">
                    <div class="d-flex align-center justify-space-between flex-column flex-sm-row px-sm-6">
                        <div>
                            <v-card-title class="white--text font-weight-bold text-h5">
                                New! Payple API 가이드!
                            </v-card-title>
                            <v-card-text class="white--text ">
                                Payple API 가이드가 더욱 이해하기 쉽고 보기 편하도록 새롭게 바뀌었습니다.<br />
                                새로운 API 가이드를 확인하시려면 <b>바로가기</b> 버튼을 클릭해주세요.
                            </v-card-text>
                        </div>

                        <div>
                            <v-card-actions>
                                <v-spacer class="d-none d-md-block"></v-spacer>
                                <v-btn large outlined class="white--text font-weight-bold " color="white" href="https://developer.payple.kr">
                                    바로가기
                                    <v-icon>
                                        mdi-chevron-double-right
                                    </v-icon>
                                </v-btn>
                            </v-card-actions>
                        </div>
                    </div>
                </v-card>
                <router-view></router-view>
                <v-divider class="mb-6"></v-divider>
                <v-row class="mb-12 pt-6">
                    <v-col col="12" sm="4">
                        <router-link class="no-style-link" to="/faq">
                            <v-card>
                                <v-list-item>
                                    <v-list-item-avatar color="pink darken-1">
                                        <v-icon color="white">
                                            mdi-frequently-asked-questions
                                        </v-icon>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title class=" mb-2">FAQ</v-list-item-title>
                                        <v-list-item-subtitle>높은 빈도의 문의를 확인하세요.</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </router-link>
                    </v-col>
                    <v-col col="12" sm="4">
                        <a class="no-style-link" href="https://github.com/PAYPLECORP" target="_blank">
                            <v-card>
                                <v-list-item>
                                    <v-list-item-avatar color="indigo darken-4">
                                        <v-icon color="white">
                                            mdi-github
                                        </v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title class=" mb-2">GITHUB</v-list-item-title>
                                        <v-list-item-subtitle>페이플 오픈 소스에 참여하세요</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </a>
                    </v-col>
                    <v-col col="12" sm="4">
                        <a class="no-style-link" href="mailto:dev@payple.kr">
                            <v-card>
                                <v-list-item>
                                    <v-list-item-avatar color="teal accent-4">
                                        <v-icon color="white">
                                            mdi-email-send-outline
                                        </v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title class=" mb-2">MAIL</v-list-item-title>
                                        <v-list-item-subtitle>페이플 개발팀에 문의하세요.</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </a>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>

        <v-footer app inset absolute align-center class="pa-4">
            &copy; Payple Inc. All rights reserved.
        </v-footer>

        <v-dialog v-model="dialog" persistent max-width="600">
            <v-card>
                <v-card-actions class="align-center" style="background:#5C539D;">
                    <p class="text-h6 mb-0 mr-2 white--text">
                        신규 Payple API 가이드 출시!
                    </p>
                    <v-spacer></v-spacer>
                    <v-icon
                        large
                        color="white"
                        @click="
                            setCookie();
                            dialog = false;
                        "
                    >
                        mdi-close-circle-outline
                    </v-icon>
                </v-card-actions>
                <v-card-text class="text-center mt-6">
                    <p class="text-h5 text--primary mb-0 mr-2 font-weight-bold">
                        Payple API 가이드가 새롭게 바뀌었습니다!
                    </p>
                </v-card-text>
                <v-card-text class="text-center mt-2">
                    <p class="text-body-1" color="grey darken-4">
                        아래 버튼을 클릭 하시면<br />
                        New Payple API 가이드로 이동합니다.<br />
                        <i class="font-weight-bold">(또는 5초 후 자동으로 이동합니다.)</i>
                    </p>
                </v-card-text>

                <v-card-actions class="justify-space-around">
                    <v-btn x-large color="deep-purple accent-3 white--text font-weight-black" href="https://developer.payple.kr">
                        <span class="text-decoration-underline-ex text-capitalize">New Payple API 가이드</span>
                        <v-icon right>
                            mdi-open-in-new
                        </v-icon>
                    </v-btn>
                </v-card-actions>
                <v-card-actions class="justify-space-around mt-2">
                    <v-btn
                        text
                        class="text-decoration-underline text-caption"
                        color="grey lighten-1"
                        @click="
                            setCookie();
                            dialog = false;
                        "
                        >아니요, 그냥 기존 가이드로 볼래요.</v-btn
                    >
                </v-card-actions>
                <v-divider></v-divider>
                <v-card-actions class="justify-end">
                    <v-btn
                        text
                        @click="
                            setCookie();
                            dialog = false;
                        "
                    >
                        <v-icon left>
                            mdi-checkbox-blank-outline
                        </v-icon>
                        오늘 하루 창 닫기
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
import VueCookies from "vue-cookies";

export default {
    name: "App",
    data: () => ({
        v0: true,
        // snackbar: true,
        // text: 'Lorem ipsum dolor sit amet',
        // vertical: false,
        drawer: null,
        group: null,
        hidden: false,
        dialog: false,
        navi: [
            {
                id: 6,
                name: "버전",
                to: "/docs-ver",
            },
            {
                id: 7,
                name: "용어사전",
                to: "/dic",
            },
            {
                id: 8,
                name: "FAQ",
                to: "/faq",
            },
            {
                id: 5,
                name: "샘플코드",
                to: "/sample-code",
            },
            {
                id: 1,
                name: "카드결제",
                children: [
                    {
                        id: 1 - 0,
                        name: "카드결제 개요",
                        to: "/card/outline",
                    },
                    {
                        id: 1 - 1,
                        name: "환경설정",
                        children: [
                            { id: 1 - 1 - 1, name: "환경설정 개요", to: "/card/install/outline" },
                            { id: 1 - 1 - 2, name: "상황별 인증 요청 방식", to: "/card/install/auth" },
                            { id: 1 - 1 - 3, name: "계정발급", to: "/card/install/account" },
                        ],
                    },
                    {
                        id: 1 - 2,
                        name: "빌링키방식",
                        children: [
                            { id: 1 - 2 - 0, name: "빌링키방식 개요", to: "/card/pay/outline" },
                            { id: 1 - 2 - 1, name: "비밀번호 간편결제", to: "/card/pay/simple-pin" },
                            { id: 1 - 2 - 2, name: "일회성 간편결제", to: "/card/pay/simple-once" },
                            { id: 1 - 2 - 3, name: "정기(구독)결제", to: "/card/pay/regular" },
                        ],
                    },
                    {
                        id: 1 - 3,
                        name: "기타방식",
                        children: [
                            { id: 1 - 3 - 0, name: "URL 링크결제", to: "/card/pay/link" },
                            { id: 1 - 3 - 1, name: "앱카드결제", to: "/card/pay/app-card" },
                        ],
                    },
                    { id: 1 - 5, name: "승인취소", to: "/card/pay/cancel" },
                    { id: 1 - 7, name: "등록카드 조회", to: "/card/regist/search" },
                    { id: 1 - 6, name: "등록카드 해지", to: "/card/regist/cancel" },
                    { id: 1 - 8, name: "결제결과 조회", to: "/card/result/search" },
                    { id: 1 - 9, name: "응답코드", to: "/card/code/response" },
                    { id: 1 - 10, name: "정책", to: "/card/policy" },
                ],
            },
            {
                id: 2,
                name: "계좌이체",
                children: [
                    {
                        id: 2 - 0,
                        name: "계좌이체 개요",
                        to: "/bank/outline",
                    },
                    {
                        id: 2 - 1,
                        name: "환경설정",
                        children: [
                            { id: 2 - 1 - 1, name: "환경설정 개요", to: "/bank/install/outline" },
                            { id: 2 - 1 - 2, name: "상황별 인증 요청 방식", to: "/bank/install/auth" },
                            { id: 2 - 1 - 3, name: "계정발급", to: "/bank/install/account" },
                        ],
                    },
                    {
                        id: 2 - 2,
                        name: "빌링키방식",
                        children: [
                            { id: 2 - 2 - 0, name: "빌링키방식 개요", to: "/bank/pay/outline" },
                            { id: 2 - 2 - 1, name: "비밀번호 간편결제", to: "/bank/pay/simple-pin" },
                            { id: 2 - 2 - 2, name: "일회성 간편결제", to: "/bank/pay/simple-once" },
                            { id: 2 - 2 - 3, name: "정기(구독)결제", to: "/bank/pay/regular" },
                        ],
                    },
                    {
                        id: 2 - 3,
                        name: "기타방식",
                        children: [{ id: 2 - 3 - 0, name: "URL 링크결제", to: "/bank/pay/link" }],
                    },
                    { id: 2 - 5, name: "계좌이체 환불", to: "/bank/pay/cancel" },
                    {
                        id: 2 - 4,
                        name: "현금영수증",
                        children: [
                            { id: 2 - 4 - 1, name: "현금영수증 발행요청", to: "/bank/recipt/request" },
                            { id: 2 - 4 - 2, name: "현금영수증 취소요청", to: "/bank/recipt/cancel" },
                        ],
                    },
                    { id: 2 - 7, name: "등록계좌 조회", to: "/bank/regist/search" },
                    { id: 2 - 6, name: "등록계좌 해지", to: "/bank/regist/cancel" },
                    { id: 2 - 9, name: "결제결과 조회", to: "/bank/result/search" },
                    { id: 2 - 10, name: "응답코드", to: "/bank/code/response" },
                    { id: 2 - 11, name: "정책", to: "/bank/policy" },
                ],
            },
            {
                id: 4,
                name: "웹훅(Webhook) URL 설정",
                to: "/webhook",
            },
        ],
    }),
    computed: {
        isDark() {
            return this.$vuetify.theme.dark ? "dark" : "light";
        },
    },
    watch: {
        dialog(val) {
            if (!val) {
                clearTimeout(this.timeOut);
            } else {
                this.timeOut = setTimeout(() => {
                    location.href='https://developer.payple.kr'
                }, 7000);
            }
        },
        group() {
            this.drawer = false;
        },
        top(val) {
            this.bottom = !val;
        },
        right(val) {
            this.left = !val;
        },
        bottom(val) {
            this.top = !val;
        },
        left(val) {
            this.right = !val;
        },
    },
    methods: {
        getTest: () => {
            if (VueCookies.isKey("test")) {
                alert(VueCookies.get("test"));
            } else {
                alert("값 없음");
            }
        },
        setCookie: () => {
            VueCookies.set("guide", new Date());
            // alert("셋팅");
        },
        resetCookie: () => {
            VueCookies.remove("test");
            alert("삭제됨");
        },
        dialogOn: function() {
            this.dialog = true;
        },
        dialogOff: function() {
            this.dialog = false;
        },
    },
    mounted() {
        if (VueCookies.isKey("guide")) {
            this.dialogOff();
        } else {
            this.dialogOn();
        }
    },
};
</script>

<style scoped>
.v-treeview a {
    color: rgba(0, 0, 0, 0.87);
    text-decoration: none;
}
.v-treeview a.router-link-active {
    color: #1867c0;
}
.theme--dark .v-treeview a {
    color: #fff;
}
.theme--dark .v-treeview a.router-link-active {
    color: #1867c0;
}
</style>

<style>
* {
    font-family: "Noto Sans KR", sans-serif !important;
}
table {
    white-space: normal;
    text-align: center;
    word-break: keep-all;
    min-width: 100%;
}
table td {
    border: 1px solid rgba(0, 0, 0, 0.06);
}
table th {
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-collapse: collapse;
    font-weight: 700;
    font-size: 1rem !important;
    text-align: center !important;
}
@media screen and (min-width: 0px) and (max-width: 720px) {
    table {
        white-space: nowrap;
        text-align: center;
        word-break: keep-all;
    }
}
.limit table {
    white-space: normal;
    max-width: 100%;
}
.temp_table.no_th th {
    display: none !important;
}
.table-high-light-bg {
    background: #d1c4e9;
}
.table-high-light-bg-dm {
    background: #7986cb;
}
.half-bg--payple {
    position: relative;
    display: inline;
}
.half-bg--payple:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 60%;
    background: rgba(120, 82, 232, 0.4);
    z-index: 0;
    border-radius: 4px;
}
.half-bg--tooltip {
    position: relative;
    display: inline;
}
.half-bg--tooltip:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 60%;
    background: rgba(41, 98, 255, 0.4);
    z-index: 0;
    border-radius: 4px;
}
.white-space-normal {
    white-space: normal !important;
}
.word-break-keep-all {
    word-break: keep-all !important;
}
.word-break-break-all {
    word-break: break-all !important;
}
pre {
    margin: 0 !important;
    padding: 0 !important;
}
code {
    width: 100%;
    margin: 0;
    padding: 0 1rem;
    font-weight: 400 !important;
}
.tree-gutter {
    display: inline-block;
    width: 20px;
}
.cursor-pointer {
    cursor: pointer;
}
.indent--hyphen {
    padding-left: 1rem;
    position: relative;
}
.indent--hyphen:before {
    content: "-";
    width: 1rem;
    line-height: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1rem;
    text-align: center;
}
.no-style-link {
    color: inherit !important;
    text-decoration: none !important;
}
.guide--dark-mode {
    position: fixed;
    z-index: 10000;
    animation: bounce_bottom 7s ease;
    animation-iteration-count: 1;
    opacity: 0;
    visibility: hidden;
}
.guide--dark-mode.lg {
    position: fixed;
    top: 60px;
    left: 210px;
    z-index: 10000;
}
.guide--dark-mode.md,
.guide--dark-mode.sm {
    position: fixed;
    top: 60px;
    right: 95px;
    z-index: 10000;
}
.guide--dark-mode.xs {
    position: fixed;
    top: 60px;
    right: 20px;
    z-index: 10000;
}
@keyframes bounce_bottom {
    0% {
        transform: translate3d(0, 0, 0);
        opacity: 1;
        visibility: visible;
    }
    4% {
        transform: translate3d(0, 12px, 0);
    }
    8% {
        transform: translate3d(0, 0, 0);
    }
    12% {
        transform: translate3d(0, 6px, 0);
    }
    16% {
        transform: translate3d(0, 0, 0);
    }
    45% {
        transform: translate3d(0, 0, 0);
    }
    49% {
        transform: translate3d(0, 12px, 0);
    }
    53% {
        transform: translate3d(0, 0, 0);
    }
    57% {
        transform: translate3d(0, 6px, 0);
    }
    61% {
        transform: translate3d(0, 0, 0);
    }
    90% {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
    99% {
        transform: translate3d(0, -40px, 0);
        opacity: 0;
        visibility: visible;
    }
    100% {
        visibility: hidden;
    }
}

/* .mo-navi--header {
    position: relative;
    background: #7c4dff !important;
}
.mo-navi--header:after {
    content: "";
    display: block;
    position: absolute;
    top: 20%;
    bottom: 20%;
    left: calc(50% - 1px);
    width: 3px;
    background: #512da8;
    border-radius: 4px;
} */
.mo-res--tool-bar {
    width: 100%;
}
.v-banner__wrapper {
    padding: 0 !important;
}
.v-banner__actions {
    position: absolute;
    right: 12px;
}
.v-snack__content {
    padding: 0 !important;
    overflow: hidden;
    margin-right: 0 !important;
}

.v-ms-img {
    margin: 0;
    padding: 0;
    border: none;
    vertical-align: middle;
}
.v-application--is-ltr .v-banner--is-mobile .v-banner__content {
    padding-right: 0 !important;
}
.text-shadow-400 {
    text-shadow: -1px -1px 1px rgb(0 0 0 / 10%), 1px 1px 1px rgb(0 0 0 / 50%);
}
.v-toolbar__content {
    padding: 4px 4px !important;
}
.v-navigation-drawer__append {
    height: 54px;
}
.ani-gradient-change {
    /* filter: hue-rotate(0deg);
    background: linear-gradient(43deg, #fff, #f7abee);
    background-size: 400% 400%;
    animation: hue 10000ms infinite linear; */
    /* animation: AnimationName 59s ease infinite; */
    background: linear-gradient(-45deg, #FFAB40, #FF80AB, #7C4DFF, #82B1FF);
	background-size: 400% 400%;
	animation: gradient 30s ease infinite;
}
@keyframes AnimationName {
    0%{background-position:91% 0%}
    50%{background-position:10% 100%}
    100%{background-position:91% 0%}
}
@keyframes hue{
  0%{filter: hue-rotate(0deg);}
  100%{filter:hue-rotate(360deg);}
  
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

</style>
