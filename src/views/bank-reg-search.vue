<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2 mb-8">등록계좌 조회</h1>

        <article class="mb-12">
            <!-- <h2>[내용 제목]</h2>
            <v-divider class="my-6"></v-divider> -->
            <p>
                해당 REST API를 통해 가맹점에서는 언제든 등록된 계좌정보를 수신 가능합니다.
            </p>
        </article>

        <article class="mb-12">
            <h2>등록계좌 조회 요청(REQUEST)</h2>
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
                            <td colspan="1" rowspan="1">
                                요청변수
                            </td>
                            <td colspan="1" rowspan="1">
                                타입
                            </td>
                            <td colspan="1" rowspan="1">
                                길이
                            </td>
                            <td colspan="1" rowspan="1">
                                필수
                            </td>
                            <td colspan="1" rowspan="1">
                                설명
                            </td>
                            <td colspan="1" rowspan="1">
                                비고
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_CST_ID
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                8
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                UFVN...
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 인증 후 리턴 받은 cst_id Token
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_CUST_KEY
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                T3Jz...
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 인증 후 리턴 받은 custKey Token
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_AUTH_KEY
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                a688c...
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 인증 후 리턴 받은 인증 Token
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_ID
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                d0to...
                            </td>
                            <td colspan="1" rowspan="1">
                                계좌등록 후 리턴 받은 결제(빌링) KEY
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_NO
                            </td>
                            <td colspan="1" rowspan="1">
                                Number
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                2324
                            </td>
                            <td colspan="1" rowspan="1">
                                사용자 필드, 결과에 그대로 리턴
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>
        </article>

        <article class="mb-12">
            <h2>등록카드 조회 응답(RESPONSE)</h2>
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
                            <td colspan="1" rowspan="1">
                                응답변수
                            </td>
                            <td colspan="1" rowspan="1">
                                값
                            </td>
                            <td colspan="1" rowspan="1">
                                설명
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_RST
                            </td>
                            <td colspan="1" rowspan="1">
                                success
                            </td>
                            <td colspan="1" rowspan="1">
                                요청결과
                                (success/error)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CODE
                            </td>
                            <td colspan="1" rowspan="1">
                                0000
                            </td>
                            <td colspan="1" rowspan="1">
                                요청결과 코드
                                (0000: 성공/실패코드)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_MSG
                            </td>
                            <td colspan="1" rowspan="1">
                                계좌조회 성공
                            </td>
                            <td colspan="1" rowspan="1">
                                요청결과 메시지
                                (계좌조회 성공 등)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_TYPE
                            </td>
                            <td colspan="1" rowspan="1">
                                transfer
                            </td>
                            <td colspan="1" rowspan="1">
                                결제수단
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_ID
                            </td>
                            <td colspan="1" rowspan="1">
                                d0to...
                            </td>
                            <td colspan="1" rowspan="1">
                                계좌등록 후 리턴 받은 결제(빌링) KEY
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_NAME
                            </td>
                            <td colspan="1" rowspan="1">
                                홍길동
                            </td>
                            <td colspan="1" rowspan="1">
                                예금주명
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_HP
                            </td>
                            <td colspan="1" rowspan="1">
                                010- * * * * -3333
                            </td>
                            <td colspan="1" rowspan="1">
                                휴대폰번호
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_BANK
                            </td>
                            <td colspan="1" rowspan="1">
                                081
                            </td>
                            <td colspan="1" rowspan="1">
                                은행코드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_BANKNAME
                            </td>
                            <td colspan="1" rowspan="1">
                                KEB하나은행
                            </td>
                            <td colspan="1" rowspan="1">
                                은행명
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_BANKNUM
                            </td>
                            <td colspan="1" rowspan="1">
                                460- ******** -121
                            </td>
                            <td colspan="1" rowspan="1">
                                계좌번호
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
POST /php/auth.php HTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Cache-Control: no-cache
{
    "cst_id": "test",
    "custKey": "abcd1234567890",
    "PCD_PAY_WORK": "PUSERINFO"
}
 
POST /php/cPayUser/api/cPayUserAct.php?ACT_=PUSERINFO HTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Cache-Control: no-cache
{
    "PCD_CST_ID": RES.cst_id,                           
    "PCD_CUST_KEY": RES.custKey,                        
    "PCD_AUTH_KEY": RES.AuthKey,                        
    "PCD_PAYER_ID": "d0toSS9sT084bVJSNThScnFXQm9Gdz09", 
    "PCD_PAYER_NO": 122323                             
}
`,
            code_2: `
{
    "PCD_PAY_RST": "success",
    "PCD_PAY_CODE": "0000",
    "PCD_PAY_MSG": "계좌조회 성공",
    "PCD_PAY_TYPE": "transfer",
    "PCD_PAY_BANKACCTYPE": "개인",
    "PCD_PAYER_ID" => "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09",
    "PCD_PAYER_NAME": "홍길동",
    "PCD_PAYER_HP": "010-****-3333",
    "PCD_PAY_BANK": "081",
    "PCD_PAY_BANKNAME": "KEB하나은행",
    "PCD_PAY_BANKNUM": "123-********-021"
}
`,
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
                    text: "등록계좌 조회",
                    disabled: true
                }
            ]
        };
    }
};
</script>
