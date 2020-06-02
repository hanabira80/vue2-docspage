<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2 mb-8">단건결제</h1>

        <article class="mb-12">
            <!-- <h2>[내용 제목]</h2>
            <v-divider class="my-6"></v-divider> -->
            <p>
                단건결제도 최초 1회 이후결제를 위해서는 1. 최초결제와 동일한 스크립트를 사용합니다.
            </p>
            <p>
                사용자는 매번 결제정보를 입력해야 하며, 매번 ARS인증/SMS인증을 통해서 결제합니다.
            </p>
        </article>

        <article class="mb-12">
            <!-- <h2>[이미지 제목]</h2>
            <v-divider class="my-6"></v-divider> -->
            <v-img
              :src="require('../../src/assets/bank-normal-1.png')"
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
                    text: "일반결제",
                    disabled: true,
                }
            ]
        };
    }
};
</script>
