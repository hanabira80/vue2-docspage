<template>
    <div class="px-6 py-4">
        <v-row justify="center py-12">
            <v-img max-width="400" :src="require('../../src/assets/404.svg')" cover class="white "></v-img>
        </v-row>

        <h1 class="mt-2 text-center">
            페이지를 찾을 수 없습니다
        </h1>
        <p class="mt-4 mb-12 text-center">
            URL을 다시 확인해주세요.<br />
            아래의 버튼을 누르면 메인화면으로 이동합니다.
        </p>
        <v-row align="center" justify="space-around" class="mb-12">
            <v-btn large class="white--text" color="deep-purple accent-2" to="/">
                <v-icon left>
                    mdi-home
                </v-icon>
                메인화면으로
            </v-btn>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            subNavi: [
                {
                    text: "홈",
                    disabled: false,
                    to: "/",
                },
                {
                    text: "계좌결제",
                    disabled: true,
                },
                {
                    text: "계좌결제 개요",
                    disabled: true,
                },
            ],
        };
    },
};
</script>
