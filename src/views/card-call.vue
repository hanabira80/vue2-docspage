<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2 mb-8">결제 창 호출</h1>

        <article class="mb-12">
            <h2>정기 - 카드등록(AUTHREG)</h2>
            <v-divider class="my-6"></v-divider>
            <v-img
              :src="require('../../src/assets/card-call-1.png')"
              cover
              class="grey darken-4"
            ></v-img>
        </article>

        <article class="mb-12">
            <h2>정기결제, 단건결제(PAY, CERT)</h2>
            <v-divider class="my-6"></v-divider>
            <v-img
              :src="require('../../src/assets/card-regular-1.png')"
              cover
              class="grey darken-4"
            ></v-img>
        </article>

        <article class="mb-12">
            <h2>간편결제(PAY, CERT)</h2>
            <v-divider class="my-6"></v-divider>
            <v-img
              :src="require('../../src/assets/card-simple-1.png')"
              cover
              class="grey darken-4"
            ></v-img>
        </article>

        <article class="mb-12">
            <h2>일반결제(PAY, CERT) – 앱카드 등</h2>
            <v-divider class="my-6"></v-divider>
            <v-img
              :src="require('../../src/assets/card-normal-1.png')"
              cover
              class="grey darken-4"
            ></v-img>
        </article>

        <article class="mb-12">
            <h2>링크결제(LINKREG)</h2>
            <v-divider class="my-6"></v-divider>
            <v-img
              :src="require('../../src/assets/card-link-1.png')"
              cover
              class="grey darken-4"
            ></v-img>
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
                    text: "카드결제",
                    disabled: false,
                    to: "/card/outline"
                },
                {
                    text: "최초결제",
                    disabled: true,
                },
                {
                    text: "결제 창 호출",
                    disabled: true,
                }
            ]
        };
    }
};
</script>
