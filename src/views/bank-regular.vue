<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2 mb-8">정기결제</h1>

        <article class="mb-12">
            <!-- <h2>[내용 제목]</h2>
            <v-divider class="my-6"></v-divider> -->
            <p>
                정기결제는 최초 한번만 결제창을 통해 등록하고, 재결제시에는 REST REQUEST 방식으로 결제합니다.
            </p>
        </article>

        <article class="mb-12">
            <h2>정기결제 요청(REQUEST)</h2>
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
                                    transfer
                                </td>
                                <td>
                                    ‘transfer’ – 고정 값
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
                                    계좌등록 후 리턴 받은 결제(빌링) KEY
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
                            <tr>
                                <td>
                                    PCD_PAYER_HP
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    20
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    01023457896
                                </td>
                                <td>
                                    고객 휴대폰번호를 전송하시면 고객의 승인문자 민원을 방지하기 위한 알림톡이 발송됩니다.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAYER_EMAIL
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    100
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    <a href="mailto:dev@payple.kr">dev@payple.kr</a>
                                </td>
                                <td>
                                    결과 발송 Email
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_GOODS
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    2048
                                </td>
                                <td>
                                    O
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
                                    PCD_PAY_TOTAL
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
                                    100
                                </td>
                                <td>
                                    계좌승인 요청금액(최소 1000원)
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
                                    PCD_TAXSAVE_FLAG
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
                                    Y=발행/N=미발행
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_TAXSAVE_TRADE
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    personal
                                </td>
                                <td>
                                    personal=소득공제(기본값)/company=지출증빙
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_TAXSAVE_IDNUM
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    40
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    01086477772
                                </td>
                                <td>
                                    휴대폰번호, 사업자번호
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
                                    ‘Y’ – 고정 값
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_USER_DEFINE1
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    2048
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    가맹점 입력 값 1
                                </td>
                                <td>
                                    가맹점 사용 필드 1
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_USER_DEFINE2
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    2048
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    가맹점 입력 값 2
                                </td>
                                <td>
                                    가맹점 사용 필드 2
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card>
        </article>

        <article class="mb-12">
            <h2>정기결제 응답(RESPONSE)</h2>
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
                                    정기결제 요청 결과(success/error)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_MSG
                                </td>
                                <td>
                                    결제완료
                                </td>
                                <td>
                                    링크생성 요청 결과 메시지(결제완료/실패)
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
                                    transfer
                                </td>
                                <td>
                                    결제수단
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
                                    계좌출금 요청금액(최소 1000원)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_BANK
                                </td>
                                <td>
                                    011
                                </td>
                                <td>
                                    은행코드
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_BANKNAME
                                </td>
                                <td>
                                    농협
                                </td>
                                <td>
                                    은행명
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_BANKNUM
                                </td>
                                <td>
                                    460- ******** -121
                                </td>
                                <td>
                                    계좌번호
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_TIME
                                </td>
                                <td>
                                    20180423130201
                                </td>
                                <td>
                                    결제시간
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
                                    PCD_PAYER_EMAIL
                                </td>
                                <td>
                                    <a href="mailto:dev@payple.kr">dev@payple.kr</a>
                                </td>
                                <td>
                                    결과 발송 Email
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
                                    PCD_TAXSAVE_RST
                                </td>
                                <td>
                                    Y
                                </td>
                                <td>
                                    현금영수증 발행 결과(Y/N)
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
                                    ‘Y’ – 고정 값
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    PCD_USER_DEFINE1
                                </td>
                                <td>
                                    가맹점 입력 값 1
                                </td>
                                <td>
                                    가맹점 사용 필드 1
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_USER_DEFINE2
                                </td>
                                <td>
                                    가맹점 입력 값 2
                                </td>
                                <td>
                                    가맹점 사용 필드 2
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
    "PCD_REGULER_FLAG": "Y"
}
 
<!-- 결제요청  -->
POST /php/RePayAct.php?ACT_=PAYM HTTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Cache-Control: no-cache
{
    "PCD_CST_ID": "리턴 받은 cst_id",
    "PCD_CUST_KEY": "리턴 받은 custKey",
    "PCD_AUTH_KEY": "a688ccb3555c25cd722483f03e23065c3d0251701ad6da895eb2d830bc06e34d",
    "PCD_PAY_TYPE": "transfer",		
    "PCD_PAYER_ID": "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09",
    "PCD_PAYER_NO": 2324,
    "PCD_PAYER_HP": "01023456789",
    "PCD_PAYER_EMAIL": "dev@payple.kr",
    "PCD_PAY_GOODS": "정기구독",
    "PCD_PAY_TOTAL": 1000,
    “PCD_PAY_ISTAX”: “Y”,
    “PCD_PAY_TAXTOTAL”: 10,
    "PCD_PAY_OID": "test201804000001",
    "PCD_PAY_YEAR": "2019",	
    "PCD_PAY_MONTH": "09",	
    "PCD_REGULER_FLAG": "Y",
    "PCD_USER_DEFINE1": ”가맹점 정의1”,
    “PCD_USER_DEFINE2”: ”가맹점 정의2”
}
`,
            code_2: `
{
    "PCD_PAY_RST" => "success|error",
    "PCD_PAY_MSG" => "완료|실패",
    "PCD_PAY_OID" => "test201804000001",
    "PCD_PAY_TYPE" => "transfer",
    "PCD_PAYER_NO" => "2324",
    "PCD_PAYER_ID" => "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09",
    "PCD_PAY_GOODS" => "정기구독",
    "PCD_PAY_TOTAL" => 1000,
    "PCD_PAY_BANK" => "011",
    "PCD_PAY_BANKNAME" => "농협",
    "PCD_PAY_BANKNUM" => "460-********-121",
    "PCD_PAY_TIME" => "20180423130201",
    "PCD_REGULER_FLAG" => "Y",
    "PCD_PAY_YEAR" => 2018,
    "PCD_PAY_MONTH" => 04,
    "PCD_TAXSAVE_RST" => "Y",
    "PCD_PAYER_EMAIL" => dev@payple.kr,
    "PCD_USER_DEFINE1” => “가맹점 정의1”,
    "PCD_USER_DEFINE2” => “가맹점 정의2”
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
                    text: "재결제",
                    disabled: false,
                    to: "/bank/repeat"
                },
                {
                    text: "정기결제",
                    disabled: true
                }
            ]
        };
    }
};
</script>
