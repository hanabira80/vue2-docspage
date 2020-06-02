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
            <v-img :src="require('../../src/assets/card-simple-1.png')" cover class="grey darken-4"></v-img>
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
            code_1: `
<!-- 결제 승인요청 --> 
POST /php/PayCardConfirmAct.php?ACT_=PAYM HTTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Cache-Control: no-cache
{
    "PCD_CST_ID": "test",								
    "PCD_CUST_KEY": "abcd1234567890",						
    "PCD_AUTH_KEY": "a688ccb3555c25cd722483f03e23065c3d0251701ad6da895eb2d830bc06e34d", 
    "PCD_PAY_REQKEY": "RmFBWWFBTWNS9qNTgzU2xdd2XRNHR2",				
    "PCD_PAYER_ID": "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09"
}
`,
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
                    text: "재결제",
                    disabled: false,
                    to: "/card/repeat"
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
