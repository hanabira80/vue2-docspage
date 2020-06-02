<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2 mb-8">결제결과 조회</h1>

        <article class="mb-12">
            <!-- <h2>[내용 제목]</h2>
            <v-divider class="my-6"></v-divider> -->

            <p>
                해당 REST API를 통해 가맹점에서 결제결과를 수신 가능합니다.
            </p>
        </article>

        <article class="mb-12">
            <h2>결제결과 조회 요청(REQUEST)</h2>
            <v-divider class="my-6"></v-divider>
            <vue-code-highlight language="php">
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
                                PCD_PAYCHK_FLAG
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                1
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                Y
                            </td>
                            <td colspan="1" rowspan="1">
                                결과조회 여부(Y/N)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_TYPE
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
                                transfer
                            </td>
                            <td colspan="1" rowspan="1">
                                결제수단
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
                                PCD_PAY_YEAR
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                4
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                2019
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 구분 년도
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_MONTH
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                2
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                09
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 구분 월
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
                                PCD_PAY_DATE
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
                                20200902
                            </td>
                            <td colspan="1" rowspan="1">
                                결제요청일자(YYYYMMDD)
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>
        </article>

        <article class="mb-12">
            <h2>결제결과 조회 응답(RESPONSE)</h2>
            <v-divider class="my-6"></v-divider>
            <vue-code-highlight language="php">
                {{ code_2 }}
            </vue-code-highlight>
        </article>

        <article class="mb-12">
            <h2>요청변수</h2>
            <v-divider class="my-6"></v-divider>
            <v-card>
                <v-simple-table height="auto">
                    <table>
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
                                    결제요청 결과
                                    (success/error)
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_PAY_MSG
                                </td>
                                <td colspan="1" rowspan="1">
                                    출금이체 완료
                                </td>
                                <td colspan="1" rowspan="1">
                                    결제요청 결과 메시지
                                    (출금이체 완료/실패 등)
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
                                    PCD_PAYER_NO
                                </td>
                                <td colspan="1" rowspan="1">
                                    2324
                                </td>
                                <td colspan="1" rowspan="1">
                                    사용자 필드, 결과에 그대로 리턴
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_PAYER_ID
                                </td>
                                <td colspan="1" rowspan="1">
                                    NS9qNTgzU2&hellip;
                                </td>
                                <td colspan="1" rowspan="1">
                                    카드등록 후 리턴 받은 결제(빌링) KEY
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_PAY_YEAR
                                </td>
                                <td colspan="1" rowspan="1">
                                    2019
                                </td>
                                <td colspan="1" rowspan="1">
                                    결제 구분 년도
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_PAY_MONTH
                                </td>
                                <td colspan="1" rowspan="1">
                                    09
                                </td>
                                <td colspan="1" rowspan="1">
                                    결제 구분 월
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_PAY_GOODS
                                </td>
                                <td colspan="1" rowspan="1">
                                    정기구독
                                </td>
                                <td colspan="1" rowspan="1">
                                    상품명
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_PAY_TOTAL
                                </td>
                                <td colspan="1" rowspan="1">
                                    1000
                                </td>
                                <td colspan="1" rowspan="1">
                                    결제금액
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_PAY_BANK
                                </td>
                                <td colspan="1" rowspan="1">
                                    011
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
                                    농협
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
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_PAY_BANK
                                </td>
                                <td colspan="1" rowspan="1">
                                    081
                                </td>
                                <td colspan="1" rowspan="1">
                                    결제 은행코드
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_PAY_BANKNUM
                                </td>
                                <td colspan="1" rowspan="1">
                                    2881204040404
                                </td>
                                <td colspan="1" rowspan="1">
                                    결제 계좌번호
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_PAY_TIME
                                </td>
                                <td colspan="1" rowspan="1">
                                    20180110152911
                                </td>
                                <td colspan="1" rowspan="1">
                                    결제완료 시간
                                </td>
                            </tr>
                            <tr>
                                <td colspan="1" rowspan="1">
                                    PCD_TAXSAVE_RST
                                </td>
                                <td colspan="1" rowspan="1">
                                    Y
                                </td>
                                <td colspan="1" rowspan="1">
                                    현금영수증 발행 결과(Y/N)
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
                        </tbody>
                    </table>
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
    "PCD_PAYCHK_FLAG": "Y"
}
 
POST /php/PayChkAct.php HTTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Cache-Control: no-cache
{
    "PCD_CST_ID": "test", 또는 인코딩 된 "PCD_CST_ID": "UFVNNVZpZk4reWo5UFRualUwcGV4dz09"
    "PCD_CUST_KEY": "abcd1234567890", 또는 인코딩 된"PCD_CUST_KEY": "T3JzRkp5L1FTcEFDa1FQdHo5Um1UZz09"
    "PCD_AUTH_KEY": "a688ccb3555c25cd722483f03e23065c3d0251701ad6da895eb2d830bc06e34d",
    "PCD_PAYCHK_FLAG": "Y",
    "PCD_PAY_TYPE": "transfer",
    "PCD_REGULER_FLAG": "Y",							
    "PCD_PAY_YEAR": "2019",	
    "PCD_PAY_MONTH": "09",	
    "PCD_PAY_OID": "test201804000001",
    "PCD_PAY_DATE": 20190902
}
`,
            code_2: `
{
    "PCD_PAY_RST": "success",
    "PCD_PAY_MSG": "출금이체완료",
    "PCD_PAY_OID": "test201804000001",
    "PCD_PAY_TYPE": "transfer",
    "PCD_PAYER_NO": "1234",
    "PCD_PAYER_ID": "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09",
    "PCD_PAY_YEAR": "2019",
    "PCD_PAY_MONTH": "09",
    "PCD_PAY_GOODS": "정기구독",
    "PCD_PAY_TOTAL": "1000",
    "PCD_PAY_BANK": "011",
    "PCD_PAY_BANKNAME": "농협",
    "PCD_PAY_BANKNUM: "460- ******** -121",
    "PCD_PAY_TIME" => "20180423130201",
    "PCD_TAXSAVE_RST": "Y",
    "PCD_REGULER_FLAG": "Y"
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
                    text: "결제결과 조회",
                    disabled: true
                }
            ]
        };
    }
};
</script>
