<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2 mb-8">등록카드 해지</h1>

        <article class="mb-12">
            <!-- <h2>[내용 제목]</h2>
            <v-divider class="my-6"></v-divider> -->
            <p>
                결제 후 등록된 카드를 해지하는 REST API입니다.
            </p>
        </article>

        <article class="mb-12">
            <h2>등록카드 해지 요청(REQUEST)</h2>
            <v-divider class="my-6"></v-divider>
            <vue-code-highlight language="java">
                {{ code_1 }}
            </vue-code-highlight>
        </article>

        <article class="mb-12">
            <h2>요청변수</h2>
            <v-divider class="my-6"></v-divider>
            <v-card>
                <v-simple-table height="auto">
                    <thead>
                        <tr>
                            <td>
                                <strong>요청변수</strong>
                            </td>
                            <td>
                                <strong>타입</strong>
                            </td>
                            <td>
                                <strong>길이</strong>
                            </td>
                            <td>
                                <strong>필수</strong>
                            </td>
                            <td>
                                <strong>값</strong>
                            </td>
                            <td>
                                <strong>설명</strong>
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
                            <td></td>
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
                                PCD_PAYER_ID
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
                                d0to...
                            </td>
                            <td>
                                카드등록 후 리턴 받은 결제(빌링) KEY
                            </td>
                        </tr>
                        <tr>
                            <td>
                                PCD_PAYER_NO
                            </td>
                            <td>
                                Number
                            </td>
                            <td>
                                255
                            </td>
                            <td>
                                -
                            </td>
                            <td>
                                2324
                            </td>
                            <td>
                                사용자 필드, 결과에 그대로 리턴
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>
        </article>

        <article class="mb-12">
            <h2>등록카드 해지 응답(RESPONSE)</h2>
            <v-divider class="my-6"></v-divider>
            <vue-code-highlight language="java">
                {{ code_2 }}
            </vue-code-highlight>
        </article>

        <article class="mb-12">
            <h2>응답변수</h2>
            <v-divider class="my-6"></v-divider>
            <v-card>
                <v-simple-table height="auto">
                    <thead>
                        <tr>
                            <td>
                                <strong>응답변수</strong>
                            </td>
                            <td>
                                <strong>값</strong>
                            </td>
                            <td>
                                <strong>설명</strong>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                PCD_PAY_RST
                            </td>
                            <td>
                                success
                            </td>
                            <td>
                                계좌해지 요청 결과(success/error)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                PCD_PAY_MSG
                            </td>
                            <td>
                                계좌해지완료
                            </td>
                            <td>
                                계좌해지 요청 결과 메시지 (계좌해지완료/실패)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                PCD_PAY_TYPE
                            </td>
                            <td>
                                Card
                            </td>
                            <td>
                                결제수단
                            </td>
                        </tr>
                        <tr>
                            <td>
                                PCD_PAY_WORK
                            </td>
                            <td>
                                PUSERDEL(해지)
                            </td>
                            <td>
                                업무구분
                            </td>
                        </tr>
                        <tr>
                            <td>
                                PCD_PAYER_ID
                            </td>
                            <td>
                                NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09
                            </td>
                            <td>
                                결제 키
                            </td>
                        </tr>
                        <tr>
                            <td>
                                PCD_PAYER_NO
                            </td>
                            <td>
                                2324
                            </td>
                            <td>
                                가맹점의 결제고객 고유번호
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>
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
<!-- 가맹점 인증 -->
POST /php/auth.php HTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Cache-Control: no-cache
{
    "cst_id": "test",
    "custKey": "abcd1234567890",
    "PCD_PAY_WORK": "PUSERDEL"
}
 
<!-- 해지 요청  -->
POST /php/cPayUser/api/cPayUserAct.php?ACT_=PUSERDEL HTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Cache-Control: no-cache
{
    "PCD_CST_ID": "test",
    "PCD_CUST_KEY": "abcd1234567890",
    "PCD_AUTH_KEY": "a688ccb3555c25cd722483f03e23065c3d0251701ad6da895eb2d830bc06e34d",
    "PCD_PAYER_ID": "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09",
    "PCD_PAYER_NO": 2324
}
`,
            code_2: `
{
    "PCD_PAY_RST" => "success",
    "PCD_PAY_MSG" => "해지완료",
    "PCD_PAY_TYPE" => "card",
    "PCD_PAY_WORK" => "PUSERDEL",
    "PCD_PAYER_ID" => "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09",
    "PCD_PAYER_NO" => 2324
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
                    text: "등록카드 해지",
                    disabled: true,
                }
            ]
        };
    }
};
</script>
