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

            기타 사유로 결제결과를 수신받지 못하는 경우 결제결과 조회 API를 통해 결과값을 조회할 수 있습니다. 일시적인 서버 통신 장애 등에 대응하기 위해
            페이플에서는 해당 API를 사용하는 것을 권장합니다. 해당 REST API를 통해 가맹점에서 결제결과를 수신 가능합니다.
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
                                PCD_PAYCHK_FLAG
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
                                결과조회 여부(Y/N)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                PCD_PAY_TYPE
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
                                card
                            </td>
                            <td>
                                결제수단
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
                                -
                            </td>
                            <td>
                                Y
                            </td>
                            <td>
                                Y=정기결제/N=단건결제
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
                                -
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
                                -
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
                                20200902
                            </td>
                            <td>
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
                    <thead>
                        <tr>
                            <td>
                                응답변수
                            </td>
                            <td>
                                예시
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
                                결제요청 결과 (success/error)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                PCD_PAY_MSG
                            </td>
                            <td>
                                카드결제 완료
                            </td>
                            <td>
                                결제요청 결과 메시지 (카드결제 완료/실패 등)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                PCD_PAY_OID
                            </td>
                            <td>
                                test201804000001
                            </td>
                            <td>
                                주문번호
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
                                NS9qNTgzU2&hellip;
                            </td>
                            <td>
                                카드등록 후 리턴 받은 결제(빌링) KEY
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
                                PCD_PAY_GOODS
                            </td>
                            <td>
                                정기구독
                            </td>
                            <td>
                                상품명
                            </td>
                        </tr>
                        <tr>
                            <td>
                                PCD_PAY_TOTAL
                            </td>
                            <td>
                                1000
                            </td>
                            <td>
                                결제금액
                            </td>
                        </tr>
                        <tr>
                            <td>
                                PCD_PAYER_EMAIL
                            </td>
                            <td>
                                dev@payple.kr
                            </td>
                            <td>
                                결제고객 이메일
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
                        <tr>
                            <td>
                                PCD_PAY_TIME
                            </td>
                            <td>
                                20180110152911
                            </td>
                            <td>
                                결제완료 시간
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
                                정기결제 여부(Y/N)
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
    "PCD_PAY_TYPE": "card",
    "PCD_REGULER_FLAG": "Y",							
    "PCD_PAY_YEAR": "2018",	
    "PCD_PAY_MONTH": "04",	
    "PCD_PAY_OID": "test201804000001",
    "PCD_PAY_DATE": 20180502
}
`,
            code_2: `
{
    "PCD_PAY_RST" => "success",
    "PCD_PAY_MSG" => "조회완료",
    "PCD_PAY_OID" => "test201804000001",
    "PCD_PAY_TYPE" => "card",
    "PCD_PAYER_NO" => "1234",
    "PCD_PAYER_ID" => "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09",
    "PCD_PAY_YEAR" => "2018",
    "PCD_PAY_MONTH" => "05",
    "PCD_PAY_GOODS" => "간편상품",
    "PCD_PAY_TOTAL" => "1000",
    "PCD_PAY_TIME" => "20180423130201",
    "PCD_REGULER_FLAG" => "Y",
    "PCD_PAYER_EMAIL" => "dev@payple.kr",
    "PCD_CARDNUM" => "12345678 ** ** 1234",
    "PCD_CARDNAME" => "BC카드",
    "PCD_CARDTRADENUM" => "201904141320332692022400"
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
                    text: "결제결과 조회",
                    disabled: true,
                }
            ]
        };
    }
};
</script>
