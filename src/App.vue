<template>
    <v-app :dark="setTheme">
        <v-app-bar app clipped-left color="deep-purple darken-1" dark>
            <div class="d-flex align-center">
                <v-app-bar-nav-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <router-link to="/">
                    <v-img :src="require('../src/assets/header-logo.svg')" alt="" class="shrink mr-2" contain transition="scale-transition" width="32" />
                </router-link>
                <router-link to="/">
                    <v-img
                        :src="require('../src/assets/header-logo--txt-wh.svg')"
                        alt=""
                        class="shrink mr-2 hidden-sm-and-down"
                        contain
                        min-width="80"
                        width="80"
                    />
                </router-link>
                <router-link to="/">
                    <v-img :src="require('../src/assets/header-logo--docs.svg')" alt="" class="shrink " contain min-width="48" width="48" />
                </router-link>
            </div>

            <v-spacer></v-spacer>

            <v-btn text href="https://www.payple.kr/" target="_blank" class="mx-2 d-none d-sm-flex">
                <v-icon class="mr-2">mdi-home-outline</v-icon> 페이플 홈페이지
            </v-btn>
            <v-btn text href="https://www.payple.kr/?ACT_=demo" target="_blank" class="mx-2 d-none d-sm-flex">
                <v-icon class="mr-2">mdi-book-play-outline</v-icon> 페이플 데모
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app clipped>
            <v-list dense>
                <v-treeview :items="navi" openOnClick open-all>
                    <template slot="label" slot-scope="props">
                        <router-link :to="props.item.to" v-if="props.item.to">{{ props.item.name }}</router-link>
                        <span v-else>{{ props.item.name }}</span>
                    </template>
                </v-treeview>
            </v-list>

            <template v-slot:append>
                <div class="pa-2">
                    <v-switch :label="`어두운 테마`" v-model="goDark"></v-switch>
                </div>
            </template>
        </v-navigation-drawer>

        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>

        <v-footer app inset absolute align-center class=" pa-4"> &copy;{{ new Date().getFullYear() }} — <strong>PAYPLE</strong> </v-footer>
    </v-app>
</template>

<script>
export default {
    name: "App",
    opts: {
        theme: {
            dark: false,
        },
    },
    data: () => ({
        drawer: null,
        group: null,
        // drawer end
        goDark: false,
        // dark theme end
        hidden: false,
        // float button end
        navi: [
            {
                id: 1,
                name: "카드결제",
                children: [
                    {
                        id: 1 - 0,
                        name: "카드결제-개요",
                        to: "/card/outline",
                    },
                    {
                        id: 1 - 1,
                        name: "최초결제",
                        children: [
                            { id: 1 - 1 - 1, name: "가맹점 인증 요청 개요", to: "/card/auth" },
                            { id: 1 - 1 - 2, name: "결제 창 호출", to: "/card/call" },
                        ],
                    },
                    {
                        id: 1 - 2,
                        name: "재결제",
                        children: [
                            { id: 1 - 2 - 0, name: "재결제-개요", to: "/card/repeat" },
                            { id: 1 - 2 - 1, name: "간편결제", to: "/card/simple" },
                            { id: 1 - 2 - 2, name: "일반결제", to: "/card/normal" },
                            { id: 1 - 2 - 3, name: "정기결제", to: "/card/regular" },
                            { id: 1 - 2 - 4, name: "링크결제", to: "/card/link" },
                        ],
                    },
                    { id: 1 - 3, name: "승인취소", to: "/card/cancel" },
                    { id: 1 - 4, name: "등록카드 해지", to: "/card/reg-cancel" },
                    { id: 1 - 5, name: "등록카드 조회", to: "/card/reg-search" },
                    { id: 1 - 6, name: "결제결과 수신", to: "/card/result-recieve" },
                    { id: 1 - 7, name: "결제결과 조회", to: "/card/result-search" },
                    { id: 1 - 8, name: "응답오류 처리안내", to: "/card/error-code" },
                ],
            },
            {
                id: 2,
                name: "계좌결제",
                children: [
                    {
                        id: 2 - 0,
                        name: "계좌결제-개요",
                        to: "/bank/outline",
                    },
                    {
                        id: 2 - 1,
                        name: "최초결제",
                        children: [
                            { id: 2 - 1 - 1, name: "가맹점 인증 요청", to: "/bank/auth" },
                            { id: 2 - 1 - 2, name: "결제 창 호출", to: "/bank/call" },
                        ],
                    },
                    {
                        id: 2 - 2,
                        name: "재결제",
                        children: [
                            { id: 2 - 2 - 0, name: "재결제-개요", to: "/bank/repeat" },
                            { id: 2 - 2 - 1, name: "간편결제", to: "/bank/simple" },
                            { id: 2 - 2 - 2, name: "일반결제", to: "/bank/normal" },
                            { id: 2 - 2 - 3, name: "정기결제", to: "/bank/regular" },
                            { id: 2 - 2 - 4, name: "링크결제", to: "/bank/link" },
                        ],
                    },
                    {
                        id: 2 - 3,
                        name: "현금영수증",
                        children: [
                            { id: 2 - 3 - 1, name: "현금영수증 발행요청", to: "/bank/recipt-request" },
                            { id: 2 - 3 - 2, name: "현금영수증 취소요청", to: "/bank/recipt-cancel" },
                        ],
                    },
                    // { id: 2 - 4, name: "승인취소", to: "/bank/cancel" },
                    { id: 2 - 5, name: "등록계좌 해지", to: "/bank/reg-cancel" },
                    { id: 2 - 6, name: "등록계좌 조회", to: "/bank/reg-search" },
                    { id: 2 - 7, name: "결제결과 수신", to: "/bank/result-recieve" },
                    { id: 2 - 8, name: "결제결과 조회", to: "/bank/result-search" },
                    { id: 2 - 9, name: "응답오류 처리안내", to: "/bank/error-code" },
                ],
            },
        ],
    }),

    computed: {
        setTheme() {
            if (this.goDark == true) {
                return (this.$vuetify.theme.dark = true);
            } else {
                return (this.$vuetify.theme.dark = false);
            }
        },
    },

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
    font-family: 'Noto Sans KR', sans-serif !important;
}
table {
    white-space: nowrap;
    text-align:center;
}
table td {
    border: 1px solid rgba(0,0,0,.06);
}
table th {
    border: 1px solid rgba(0,0,0,.06);
    border-collapse: collapse;
    font-weight: 700;
    font-size:1rem !important;
    text-align: center !important;
}
</style>
