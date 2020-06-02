<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2 mb-8">등록계좌 해지</h1>

        <article class="mb-12">
            <!-- <h2>[내용 제목]</h2>
            <v-divider class="my-6"></v-divider> -->
            <p>
                결제 후 등록된 계좌를 해지하는 REST API입니다.
            </p>
            <p>
                해지된 사용자가 다시 결제할 때는 ARS 인증을 진행하고 계좌를 재 등록합니다.
            </p>
        </article>

        <article class="mb-12">
            <h2>등록계좌 해지 요청(REQUEST)</h2>
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
                                    20
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
                                    -
                                </td>
                                <td colspan="1" rowspan="1">
                                    2324
                                </td>
                                <td colspan="1" rowspan="1">
                                    사용자 필드, 결과에 그대로 리턴
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card>
        </article>

        <article class="mb-12">
            <h2>승인취소 응답(RESPONSE)</h2>
            <v-divider class="my-6"></v-divider>
            <vue-code-highlight language="java">
                {{ code_2 }}
            </vue-code-highlight>
        </article>

        <article class="mb-12">
            <h2>응답변수</h2>
            <v-divider class="my-6"></v-divider>
            <v-card>
                <v-simple-table>
                    <template v-slot:default>
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
                                    계좌해지 요청 결과(success/error)
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_PAY_MSG
                                </td>
                                <td colspan="1" rowspan="1">
                                    계좌해지완료
                                </td>
                                <td colspan="1" rowspan="1">
                                    계좌해지 요청 결과 메시지
                                    (계좌해지완료/실패)
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_PAY_TYPE
                                </td>
                                <td colspan="1" rowspan="1">
                                    Transfer
                                </td>
                                <td colspan="1" rowspan="1">
                                    결제수단
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_PAY_WORK
                                </td>
                                <td colspan="1" rowspan="1">
                                    PUSERDEL(계좌해지)
                                </td>
                                <td colspan="1" rowspan="1">
                                    업무구분
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_PAYER_ID
                                </td>
                                <td colspan="1" rowspan="1">
                                    NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09
                                </td>
                                <td colspan="1" rowspan="1">
                                    결제 키
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_PAYER_NO
                                </td>
                                <td colspan="1" rowspan="1">
                                    2324
                                </td>
                                <td colspan="1" rowspan="1">
                                    가맹점의 결제고객 고유번호
                                </td>
                            </tr>
                        </tbody>
                    </template>
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
 
<!-- 계좌 해지요청  -->
POST PCD_PAY_URL HTTP/1.1
Host: PCD_PAY_HOST
Content-Type: application/json
Cache-Control: no-cache
{
    "PCD_CST_ID": "test",	또는 인코딩 된 "PCD_CST_ID": "UFVNNVZpZk4reWo5UFRualUwcGV4dz09"
    "PCD_CUST_KEY": "abcd1234567890", 또는 인코딩 된 "PCD_CUST_KEY": "T3JzRkp5L1FTcEFDa1FQdHo5Um1UZz09"
    "PCD_AUTH_KEY": "a688ccb3555c25cd722483f03e23065c3d0251701ad6da895eb2d830bc06e34d",
    "PCD_PAYER_ID": "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09",				
    "PCD_PAYER_NO": "2324"
}
`,
            code_2: `
{
    "PCD_PAY_RST" => "success",
    "PCD_PAY_MSG" => "계좌해지완료",
    "PCD_PAY_TYPE" => "transfer",
    "PCD_PAY_WORK" => "PUSERDEL",
    "PCD_PAYER_ID" => "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09",
    "PCD_PAYER_NO" => "2324"
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
                    text: "승인취소",
                    disabled: true
                }
            ]
        };
    }
};
</script>
