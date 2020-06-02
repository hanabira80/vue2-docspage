<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2 mb-8">재결제 개요</h1>

        <article class="mb-12">
            <h2>결제생성 후 승인(PCD_PAY_WORK: CERT)</h2>
            <v-divider class="my-6"></v-divider>
            <p>
                가맹점의 최종 승인 후에 결제를 진행하며 REST REQUEST방식으로 진행합니다.
            </p>
        </article>

        <article class="mb-12">
            <h2>결제생성 후 승인 요청(REQUEST)</h2>
            <v-divider class="my-6"></v-divider>
            <vue-code-highlight language="java">
                {{ code_1 }}
            </vue-code-highlight>
        </article>

        <article class="mb-12">
            <h2>요청변수</h2>
            <v-divider class="my-6"></v-divider>
            <v-card>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <td>
                                    요청변수
                                </td>
                                <td>
                                    타입
                                </td>
                                <td>
                                    길이
                                </td>
                                <td>
                                    필수
                                </td>
                                <td>
                                    값
                                </td>
                                <td>
                                    설명
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    PCD_CST_ID
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    8
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    UFVN...
                                </td>
                                <td>
                                    가맹점 인증 후 리턴 받은 cst_id Token
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_CUST_KEY
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    255
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    T3Jz...
                                </td>
                                <td>
                                    가맹점 인증 후 리턴 받은 custKey Token
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_AUTH_KEY
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    20
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    a688c...
                                </td>
                                <td>
                                    가맹점 인증 후 리턴 받은 인증 Token
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_REQKEY
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    255
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    RmFBWWFB&hellip;
                                </td>
                                <td>
                                    최종 승인요청용 키
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAYER_ID
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    255
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    d0to...
                                </td>
                                <td>
                                    계좌등록 후 리턴 받은 결제(빌링) KEY
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card>
        </article>

        <article class="mb-12">
            <h2>즉시 승인(PCD_PAY_WORK: PAY)</h2>
            <v-divider class="my-6"></v-divider>
            <p>
                가맹점의 최종 승인없이 즉시 결제를 진행하며 별도 REQUEST는 없습니다.
            </p>
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
                    disabled: true,
                }
            ]
        };
    }
};
</script>
