<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2 mb-8">등록카드 조회</h1>

        <article class="mb-12">
            <h2>[내용 제목]</h2>
            <v-divider class="my-6"></v-divider>
            <p>
                해당 REST API를 통해 가맹점에서는 언제든 등록된 카드정보를 수신 가능합니다.
            </p>
        </article>

        <article class="mb-12">
            <h2>등록카드 조회 요청(REQUEST)</h2>
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
                            <strong>설명</strong>
                        </td>
                        <td>
                            <strong>비고</strong>
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
                            O
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
                            요청결과 (success/error)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            PCD_PAY_CODE
                        </td>
                        <td>
                            0000
                        </td>
                        <td>
                            요청결과 코드 (0000: 성공/실패코드)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            PCD_PAY_MSG
                        </td>
                        <td>
                            카드조회 성공
                        </td>
                        <td>
                            요청결과 메시지 (카드조회 성공 등)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            PCD_PAY_TYPE
                        </td>
                        <td>
                            card
                        </td>
                        <td>
                            결제수단
                        </td>
                    </tr>
                    <tr>
                        <td>
                            PCD_PAYER_ID
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
                            PCD_PAYER_HP
                        </td>
                        <td>
                            010- * * * * -3333
                        </td>
                        <td>
                            휴대폰번호
                        </td>
                    </tr>
                    <tr>
                        <td>
                            PCD_PAY_CARDNAME
                        </td>
                        <td>
                            BC카드
                        </td>
                        <td>
                            카드사명
                        </td>
                    </tr>
                    <tr>
                        <td>
                            PCD_PAY_CARDNUM
                        </td>
                        <td>
                            1111- ******** -2222
                        </td>
                        <td>
                            카드번호
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
    "PCD_PAY_MSG": "카드조회 성공",
    "PCD_PAY_TYPE": "card",
    "PCD_PAY_BANKACCTYPE": "개인",
    "PCD_PAYER_ID" => "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09",
    "PCD_PAYER_NAME": "홍길동",
    "PCD_PAYER_HP": "010-****-3333",
    "PCD_PAY_CARDNAME": "BC카드",
    "PCD_PAY_CARDNUM": "1111-****-****-1111"
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
                    text: "등록카드 조회",
                    disabled: true,
                }
            ]
        };
    }
};
</script>

