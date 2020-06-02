<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2 mb-8">승인취소</h1>

        <article class="mb-12">
            <!-- <h2>[내용 제목]</h2>
            <v-divider class="my-6"></v-divider> -->

            결제 후 승인취소를 요청하는 REST API입니다.
        </article>

        <article class="mb-12">
            <h2>승인취소 요청(REQUEST)</h2>
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
                                    PCD_REFUND_KEY
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
                                    a41c...
                                </td>
                                <td>
                                    취소요청 Token(관리자화면에서 확인 가능)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAYCANCEL_FLAG
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    1
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    Y
                                </td>
                                <td>
                                    'Y' &ndash; 고정 값
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_OID
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
                                    test099942200156938
                                </td>
                                <td>
                                    주문번호
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_REGULER_FLAG
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    1
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    Y
                                </td>
                                <td>
                                    &lsquo;Y&rsquo; &ndash; 고정 값
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_YEAR
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    4
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    2019
                                </td>
                                <td>
                                    결제 구분 년도
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_MONTH
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    2
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    09
                                </td>
                                <td>
                                    결제 구분 월
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_DATE
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
                                    20190801
                                </td>
                                <td>
                                    취소할 원거래일자
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_REFUND_TOTAL
                                </td>
                                <td>
                                    Number
                                </td>
                                <td>
                                    20
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    1000
                                </td>
                                <td>
                                    승인취소 신청금액(기존 결제금액보다 낮은 금액 입력 시 부분취소로 진행)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_TAXTOTAL
                                </td>
                                <td>
                                    Number
                                </td>
                                <td>
                                    20
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    10
                                </td>
                                <td>
                                    복합과세 주문건(과세+면세)에 필요한 항목이며 가맹점에서 전송한 값을 부가세로 설정합니다.
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
                                <td>
                                    응답변수
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
                                    PCD_PAY_RST
                                </td>
                                <td>
                                    success
                                </td>
                                <td>
                                    취소 결과(success/error)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_CODE
                                </td>
                                <td>
                                    PAYC0000
                                </td>
                                <td>
                                    취소 결과코드
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_MSG
                                </td>
                                <td>
                                    환불성공
                                </td>
                                <td>
                                    취소 결과 메시지
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
                                    &lsquo;card&rsquo; &ndash; 고정 값
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_OID
                                </td>
                                <td>
                                    test099942200156938
                                </td>
                                <td>
                                    주문번호
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
                                    사용자 필드, 결과에 그대로 리턴
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
                                    결제(빌링) KEY
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_YEAR
                                </td>
                                <td>
                                    2019
                                </td>
                                <td>
                                    결제 구분 년도
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_MONTH
                                </td>
                                <td>
                                    09
                                </td>
                                <td>
                                    결제 구분 월
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_REGULER_FLAG
                                </td>
                                <td>
                                    Y
                                </td>
                                <td>
                                    &lsquo;Y&rsquo; &ndash; 고정 값
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_REFUND_TOTAL
                                </td>
                                <td>
                                    1000
                                </td>
                                <td>
                                    취소금액
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_TAXTOTAL
                                </td>
                                <td>
                                    10
                                </td>
                                <td>
                                    복합과세 주문건(과세+면세)에 필요한 항목이며 가맹점에서 전송한 값을 부가세로 설정합니다.
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
Referer: http://localhost:8080
Cache-Control: no-cache
{
    "cst_id": "test",
    "custKey": "abcd1234567890",
    "PCD_PAYCANCEL_FLAG": "Y"
}
 
<!-- 승인취소 요청  -->
POST /php/PayChkAct.php HTTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Referer: http://localhost:8080
Cache-Control: no-cache	
{
    "PCD_CST_ID": "리턴받은 cst_id",
    "PCD_CUST_KEY": "리턴받은 custKey",
    "PCD_AUTH_KEY": "a688ccb3555c25cd722483f03e23065c3d0251701ad6da895eb2d830bc06e34d",  
    "PCD_REFUND_KEY": "a41ce010ede9fcbfb3be86b24858806596a9db68b79d138b147c3e563e1829a0",
    "PCD_PAYCANCEL_FLAG": "Y",
    "PCD_PAY_OID": "test201804000001",
    "PCD_REGULER_FLAG": "Y",
    "PCD_PAY_YEAR": "2019",
    "PCD_PAY_MONTH": "09",
    "PCD_PAY_DATE": 20180502,
    "PCD_REFUND_TOTAL": 1000,
    "PCD_PAY_TAXTOTAL": 10
}
`,
            code_2: `
{
    "PCD_PAY_RST" => "success",
    “PCD_PAY_CODE” => “PAYC0000”,
    "PCD_PAY_MSG" => "취소성공",
    "PCD_PAY_TYPE" => "card",			
    "PCD_PAY_OID" => "test201804000001",
    "PCD_PAYER_NO" => 1234,
    "PCD_PAYER_ID" => "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09",
    "PCD_PAY_YEAR" => "2019",
    "PCD_PAY_MONTH" => "09",
    "PCD_PAY_GOODS" => "정기구독",	
    "PCD_REGULER_FLAG" => "Y",
    "PCD_REFUND_TOTAL" => 1000,
    "PCD_PAY_TAXTOTAL" => 10
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
                    text: "승인취소",
                    disabled: true,
                }
            ]
        };
    }
};
</script>
