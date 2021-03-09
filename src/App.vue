<template>
    <v-app :dark="!!(isDark === 'dark')">
        <v-app-bar app clipped-left :color="$vuetify.theme.dark ? 'grey darken-4' : 'white'">
            <div :class="{ 'justify-space-between mo-res--tool-bar': $vuetify.breakpoint.mdAndDown }" class="d-flex align-center">
                <div class="d-flex align-center">
                    <v-app-bar-nav-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    <router-link to="/">
                        <!-- <v-img :src="$vuetify.theme.dark ? '@/assets/header-logo--bk.svg' : '/assets/header-logo--wh.svg'" alt="" class="shrink" contain transition="scale-transition" width="160" /> -->
                        <!-- <v-img :src="require('./assets/header-logo--bk.svg')" alt="" class="shrink" contain transition="scale-transition" width="160" /> -->
                        <v-img
                            :src="require($vuetify.theme.dark ? './assets/header-logo--wh.svg' : './assets/header-logo--bk.svg')"
                            alt=""
                            class="shrink"
                            contain
                            transition="scale-transition"
                            width="160"
                        />
                    </router-link>
                </div>

                <div class="ml-4">
                    <!-- <v-tooltip right open-delay="500">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon id="mode-switcher" @click="$vuetify.theme.dark = !$vuetify.theme.dark" v-bind="attrs" v-on="on">
                                <v-icon :color="$vuetify.theme.dark ? 'blue accent-2' : 'yellow darken-3'">
                                    {{ $vuetify.theme.dark ? "mdi-weather-night" : "mdi-white-balance-sunny" }}
                                </v-icon>
                            </v-btn>
                        </template>
                        <span>
                            <v-img :src="require('../src/assets/guide--dark-mode.svg')" alt="" contain width="480" />
                        </span>
                    </v-tooltip> -->
                    <v-btn
                        id="mode-switcher"
                        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
                        :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-5'"
                    >
                        <!-- <v-btn id="mode-switcher" @click="$vuetify.theme.dark = !$vuetify.theme.dark" color="deep-purple accent-2"> -->
                        <!-- <v-icon :color="$vuetify.theme.dark ? 'blue accent-2' : 'yellow darken-3'"> -->
                        <v-icon :color="$vuetify.theme.dark ? 'blue accent-2' : 'yellow accent-4'">
                            {{ $vuetify.theme.dark ? "mdi-weather-night" : "mdi-white-balance-sunny" }}
                        </v-icon>
                        <span class="pl-2 hidden-xs-only">
                            {{ $vuetify.theme.dark ? "다크모드" : "라이트모드" }}
                        </span>
                    </v-btn>
                </div>
            </div>

            <v-spacer class="hidden-md-and-down"></v-spacer>

            <div class="hidden-md-and-down">
                <v-btn class="mx-2 white--text" color="deep-purple accent-2" href="https://www.payple.kr/" target="_blank">
                    <v-icon class="mr-2">mdi-home-outline</v-icon> 홈
                </v-btn>
                <v-btn class="mx-2 white--text" color="deep-purple accent-2" href="https://www.payple.kr/?ACT_=demo" target="_blank">
                    <v-icon class="mr-2">mdi-file-code-outline</v-icon> 데모
                </v-btn>
            </div>
        </v-app-bar>

        <div 
            :class="{ 'xs': $vuetify.breakpoint.xs, 'sm': $vuetify.breakpoint.sm, 'md': $vuetify.breakpoint.md, 'lg': $vuetify.breakpoint.lgAndUp }" 
            class="guide--dark-mode active
        ">
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
            <template v-slot:prepend>
                <!-- <div class="hidden-lg-and-up text-center pa-2">
                    <v-btn class="mx-1" color="deep-purple lighten-4" href="https://www.payple.kr/" target="_blank" >
                        <v-icon class="mr-2">mdi-home-outline</v-icon> 홈
                    </v-btn>
                    <v-btn class="mx-1" color="deep-purple lighten-4" href="https://www.payple.kr/?ACT_=demo" target="_blank" >
                        <v-icon class="mr-2">mdi-file-code-outline</v-icon> 데모
                    </v-btn>
                </div> -->
                <div class="hidden-lg-and-up text-center">
                    <v-row col="12" class="mo-navi--header">
                        <v-col col="6" class="pa-0">
                            <v-btn x-large tile depressed block class="white--text" color="deep-purple accent-2" href="https://www.payple.kr/" target="_blank">
                                <v-icon class="mr-2">mdi-home-outline</v-icon> 홈
                            </v-btn>
                        </v-col>
                        <v-col col="6" class="pa-0">
                            <v-btn
                                x-large
                                tile
                                depressed
                                block
                                class="white--text"
                                color="deep-purple accent-2"
                                href="https://www.payple.kr/?ACT_=demo"
                                target="_blank"
                            >
                                <v-icon class="mr-2">mdi-file-code-outline</v-icon> 데모
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>
                <!-- <v-divider></v-divider> -->
                <!-- <div class="hidden-lg-and- up">
                    <v-btn color="warning" fab dark>
                        <v-icon>mdi-account-circle</v-icon>
                    </v-btn>
                    <v-btn text color="grey darken-3" href="https://www.payple.kr/" target="_blank"> <v-icon class="mr-2">mdi-home-outline</v-icon> 홈 </v-btn>
                    <v-btn text color="grey darken-3" href="https://www.payple.kr/?ACT_=demo" target="_blank">
                        <v-icon class="mr-2">mdi-file-code-outline</v-icon> 데모
                    </v-btn>
                    <v-divider></v-divider>
                </div> -->
            </template>
            <v-list dense>
                <v-treeview :items="navi" openOnClick>
                    <template slot="label" slot-scope="props">
                        <router-link :to="props.item.to" v-if="props.item.to">{{ props.item.name }}</router-link>
                        <span v-else>{{ props.item.name }}</span>
                    </template>
                </v-treeview>
                <!-- <template slot="label" slot-scope="props">
                    <router-link :to="props.item.to">
                    <v-treeview :items="navi" openOnClick>
                        <div v-if="props.item.to">{{ props.item.name }}</div>
                        <span v-else>{{ props.item.name }}</span>
                    </v-treeview>
                    </router-link>
                </template> -->
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <v-container style="max-width:1000px;">
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
                                    <!-- <v-list-item-action>
                                        <v-btn fab text color="blue accent-4">
                                            <v-icon>
                                                mdi-vector-link
                                            </v-icon>
                                        </v-btn>
                                    </v-list-item-action> -->
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
                                    <!-- <v-list-item-action>
                                        <v-btn fab text color="blue accent-4">
                                            <v-icon>
                                                mdi-vector-link
                                            </v-icon>
                                        </v-btn>
                                    </v-list-item-action> -->
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
                                    <!-- <v-list-item-action>
                                        <v-btn fab text color="blue accent-4">
                                            <v-icon>
                                                mdi-pencil
                                            </v-icon>
                                        </v-btn>
                                    </v-list-item-action> -->
                                </v-list-item>
                            </v-card>
                        </a>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>

        <v-footer app inset absolute align-center class="pa-4">
            <!-- &copy;{{ new Date().getFullYear() }} — <strong>PAYPLE</strong>  -->
            &copy; Payple Inc. All rights reserved.
        </v-footer>
    </v-app>
</template>

<script>
window.addEventListener("load", function(event) {
    // let el = document.getElementsByClassName("guide--dark-mode");
    // setTimeout(() => {
    //     el.classList.remove('active')
    // }, 3000)
});
export default {
    name: 'App',    
    // metaInfo() {
    //     return { 
    //         title: "Epiloge - Build your network in your field of interest",
    //         meta: [
    //             { name: 'description', content:  'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'},
    //             { property: 'og:title', content: "Epiloge - Build your network in your field of interest"},
    //             { property: 'og:site_name', content: 'Epiloge'},
    //             {property: 'og:type', content: 'website'},    
    //             {name: 'robots', content: 'index,follow'} 
    //         ]
    //     }
    // },
    created() {
        this.$cookies.set("test", "Hello world!", 1);
    },
    // create() {
    //     window.addEventListener("load", this.onWindowLoad);
    // },
    // methods: {
    //     onWindowLoad() {
    //         console.log("window load event");
    //     },
    // },
    name: "App",
    // opts: {
    //     theme: {
    //         dark: false,
    //     },
    // },

    data: () => ({
        drawer: null,
        group: null,
        // drawer end
        // goDark: false,
        // dark theme end
        hidden: false,
        // float button end
        navi: [
            {
                // id: 100,
                // name: "결제",
                // children: [
                //     {
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
                            { id: 1 - 2 - 3, name: "정기결제", to: "/card/pay/regular" },
                        ],
                    },
                    {
                        id: 1 - 3,
                        name: "기타방식",
                        children: [
                            { id: 1 - 3 - 0, name: "URL링크결제", to: "/card/pay/link" },
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
                            { id: 2 - 2 - 3, name: "정기결제", to: "/bank/pay/regular" },
                        ],
                    },
                    {
                        id: 2 - 3,
                        name: "기타방식",
                        children: [{ id: 2 - 3 - 0, name: "URL링크결제", to: "/bank/pay/link" }],
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
                    // { id: 2 - 8, name: "결제결과 수신", to: "/bank/result/recieve" },
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
            {
                id: 5,
                name: "샘플코드",
                to: "/sample-code",
            },
            {
                id: 6,
                name: "문서 버전 관리",
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
            //     ],
            // },
            // {
            //     id: 200,
            //     name: "송금",
            // },
        ],
    }),
    computed: {
        isDark() {
            return this.$vuetify.theme.dark ? "dark" : "light";
        },
    },

    // computed: {
    //     setTheme() {
    //         if (this.goDark == true) {
    //             // this.$propsVisible : false;
    //             // this.$props.isVisible;
    //             return (this.$vuetify.theme.dark = true);
    //         } else {
    //             return (this.$vuetify.theme.dark = false);
    //         }
    //     },
    // },

    watch: {
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
    // created: function(){

    //     var currentUrl = window.location.pathname;

    //     console.log(currentUrl);

    //   }
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
    background: #D1C4E9;
}
.table-high-light-bg-dm {
    background:#7986CB
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
    padding-left:1rem;
    position:relative;    
}
.indent--hyphen:before {
    content:"-";
    width:1rem;
    line-height: 1rem;
    position:absolute;
    top:0;
    left:0;
    font-size:1rem;
    text-align:center;
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
/* .guide--dark-mode .pc-img {
    position: fixed;
    top: 60px;
    left: 210px;
    z-index: 10000;
}
.guide--dark-mode .mo-img {
    position: fixed;
    top: 60px;
    right: 95px;
    z-index: 10000;
}
.guide--dark-mode .mo-img.modify-position {
    right: 20px;
} */

.mo-navi--header {
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
}
.mo-res--tool-bar {
    width: 100%;
}
</style>
