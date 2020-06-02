<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2 mb-8">간편결제</h1>

        <article class="mb-12">
            <!-- <h2>[내용 제목]</h2>
            <v-divider class="my-6"></v-divider> -->
            <p>
                최초 1회 이후 재결제를 위해서는 1. 최초결제와 동일한 스크립트를 사용합니다.
            </p>
            <p>
                사용자는 기존에 등록한 카드정보 확인 후 비밀번호 입력 단계로 진행합니다.
            </p>
            <p>
                비밀번호를 입력하면 결제가 완료되며, 마지막 현금영수증 발행 화면으로 이동합니다.
            </p>
        </article>

        <article class="mb-12">
            <!-- <h2>[이미지 제목]</h2>
            <v-divider class="my-6"></v-divider> -->
            <v-img :src="require('../../src/assets/bank-simple-1.png')" cover class="grey darken-4"></v-img>
        </article>

        <article class="mb-12">
            <!-- <h2>[이미지 제목]</h2>
            <v-divider class="my-6"></v-divider> -->
            <v-img :src="require('../../src/assets/bank-simple-2.png')" cover class="grey darken-4"></v-img>
        </article>

        <article class="mb-12">
            <!-- <h2>[이미지 제목]</h2>
            <v-divider class="my-6"></v-divider> -->
            <v-img :src="require('../../src/assets/bank-simple-3.png')" cover class="grey darken-4"></v-img>
        </article>
    </div>
</template>

<script>
import { component as VueCodeHighlight } from "vue-code-highlight";

export default {
    components: {
        VueCodeHighlight
    },
    data() {
        return {
            subNavi: [
                {
                    text: "홈",
                    disabled: false,
                    to: "/"
                },
                {
                    text: "계좌결제",
                    disabled: false,
                    to: "/bank/outline"
                },
                {
                    text: "재결제",
                    disabled: false,
                    to: "/bank/repeat"
                },
                {
                    text: "간편결제",
                    disabled: true,
                }
            ]
        };
    }
};
</script>
