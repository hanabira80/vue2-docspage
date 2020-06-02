<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2 mb-8">현금영수증 발행요청</h1>

        <article class="mb-12">
            <h2>현금영수증 발행요청(REQUEST)</h2>
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
                                    PCD_PAY_OID
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
                                    test099942200156938
                                </td>
                                <td colspan="1" rowspan="1">
                                    주문번호
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_REGULER_FLAG
                                </td>
                                <td colspan="1" rowspan="1">
                                    String
                                </td>
                                <td colspan="1" rowspan="1">
                                    1
                                </td>
                                <td colspan="1" rowspan="1">
                                    -
                                </td>
                                <td colspan="1" rowspan="1">
                                    Y
                                </td>
                                <td colspan="1" rowspan="1">
                                    Y=정기결제/N=단건결제
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_TAXSAVE_TRADEUSE
                                </td>
                                <td colspan="1" rowspan="1">
                                    String
                                </td>
                                <td colspan="1" rowspan="1">
                                    -
                                </td>
                                <td colspan="1" rowspan="1">
                                    -
                                </td>
                                <td colspan="1" rowspan="1">
                                    personal
                                </td>
                                <td colspan="1" rowspan="1">personal=소득공제/company=지출증빙 <br />미입력 시 결제내역 정보 이용</td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_TAXSAVE_IDENTINUM
                                </td>
                                <td colspan="1" rowspan="1">
                                    String
                                </td>
                                <td colspan="1" rowspan="1">
                                    -
                                </td>
                                <td colspan="1" rowspan="1">
                                    -
                                </td>
                                <td colspan="1" rowspan="1">
                                    0103456789
                                </td>
                                <td colspan="1" rowspan="1">휴대폰번호, 사업자번호<br />미입력 시 결제내역 정보 이용</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card>
        </article>

        <article class="mb-12">
            <h2>현금영수증 발행 응답(RESPONSE)</h2>
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
                                    현금영수증 발행 결과
                                    (success/error)
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_PAY_MSG
                                </td>
                                <td colspan="1" rowspan="1">
                                    현금영수증 발행 완료
                                </td>
                                <td colspan="1" rowspan="1">
                                    현금영수증 발행 결과 메시지
                                    (현금영수증 발행 완료/실패)
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
                                    PCD_PAY_OID
                                </td>
                                <td colspan="1" rowspan="1">
                                    test201804000001
                                </td>
                                <td colspan="1" rowspan="1">
                                    주문번호
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_REGULER_FLAG
                                </td>
                                <td colspan="1" rowspan="1">
                                    Y
                                </td>
                                <td colspan="1" rowspan="1">
                                    정기결제 여부(Y/N)
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_TAXSAVE_AMOUNT
                                </td>
                                <td colspan="1" rowspan="1">
                                    15000
                                </td>
                                <td colspan="1" rowspan="1">
                                    현금영수증 발행 금액
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_TAXSAVE_MGTNUM
                                </td>
                                <td colspan="1" rowspan="1">
                                    test15424392310644
                                </td>
                                <td colspan="1" rowspan="1">
                                    국세청 발행 번호
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
    "PCD_PAY_WORK": "TSREG"
}
 
<!-- 현금영수증 발행요청  -->
POST PCD_PAY_URL HTTP/1.1
Host: PCD_PAY_HOST
Content-Type: application/json
Cache-Control: no-cache
{
    "PCD_CST_ID": "리턴받은 cst_id"
    "PCD_CUST_KEY": "리턴받은 custKey"
    "PCD_AUTH_KEY": "a688ccb3555c25cd722483f03e23065c3d0251701ad6da895eb2d830bc06e34d",
    "PCD_PAYER_ID": "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09",
    "PCD_PAY_OID": "test201804000001",
    "PCD_REGULER_FLAG": "Y",
    "PCD_TAXSAVE_TRADEUSE": "personal",
    "PCD_TAXSAVE_IDENTINUM": "01023456789",
}
`,
            code_2: `
{
    "PCD_PAY_RST" => "success",
    "PCD_PAY_MSG" => "현금영수증 발행 완료",
    "PCD_PAYER_ID" => "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09",
    "PCD_PAY_OID" => "test201804000001",
    "PCD_REGULER_FLAG" => "Y",
    "PCD_TAXSAVE_AMOUNT" => 15000,
    "PCD_TAXSAVE_MGTNUM" => "test15424392310644"
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
                    text: "현금영수증",
                    disabled: true
                },
                {
                    text: "현금영수증 발행요청",
                    disabled: true
                }
            ]
        };
    }
};
</script>
