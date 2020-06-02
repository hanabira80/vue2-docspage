<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2 mb-8">환경설정</h1>

        <article class="mb-12">
            <h2>공통 정의사항 </h2>
            <v-divider class="my-6"></v-divider>
            <p>
                UTF-8 인코딩<br/>
                SSL 보안 통신 필수<br/>
                JSON(JavaScript Object Notation) 메시지 포맷<br/>
            </p>
        </article>

        <article class="mb-12">
            <h2>개요</h2>
            <v-divider class="my-6"></v-divider>

            <p>
                첫 결제 시 가맹점 인증 요청을 위해서는 가맹점 계약을 통한 인증이 필요하며, 계약 완료 후 페이플에서 가맹점에 별도의 키를 발급합니다. 계약 전에는
                테스트 계정을 통해 개발진행이 가능합니다.
            </p>

            <v-alert border="left" colored-border color="deep-purple accent-4" elevation="2" class="mb-8">
                <h3>주의</h3>

                <p class="pl-2">가맹점인증 서버와 결제 서버가 동일해야 origin 오류 없이 진행하실 수 있습니다.</p>
                <p class="pl-2">테스트 URL에서는 실제로 결제가 되지 않으며 본인인증 100원 결제 후 30분 뒤 자동으로 취소됩니다.</p>
                <p class="pl-2">
                    테스트 계정으로 결제 후 부분취소 시 &lsquo;부분취소 불가한 가맹점입니다&rsquo; 응답메시지가 오는 것은 정상 리턴이며 부분취소는 실제 결제
                    서비스에서만 사용하실 수 있습니다.
                </p>
                <p class="pl-2">모든 요청 URL 에서는 최소금액 100원부터 결제가 가능하며 운영 URL 에서는 실제 결제가 이루어지니 주의바랍니다.</p>
                <p class="pl-2">일반결제의 경우 다날의 결제창을 연동하는 것으로 카드를 등록만 하는 것은 불가능합니다.</p>
            </v-alert>

            <v-alert border="left" colored-border color="deep-purple accent-4" elevation="2" class="mb-8">
                <h3>특징</h3>

                <p class="pl-2">카드 정기결제는 최초 결제시에 AUTHREG 방식을 사용해 결제없이 카드를 등록할 수 있습니다.</p>
            </v-alert>

            <v-alert border="left" colored-border color="deep-purple accent-4" elevation="2" class="">
                <h3>설명</h3>

                <p class="pl-2">가맹점 인증요청시 별도의 auth 파일 생성 후 cst_id와 custKey변수를 JSON 형태로 넣고 불러옵니다.</p>
            </v-alert>
        </article>

        <article class="mb-12">
            <h2>가맹점인증 요청변수</h2>
            <v-divider class="my-6"></v-divider>

            <v-card class="mb-8">
                <v-simple-table height="auto">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <td>
                                    요청변수
                                </td>
                                <td>
                                    테스트계정
                                </td>
                                <td>
                                    운영계정
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    cst_id
                                </td>
                                <td>
                                    test
                                </td>
                                <td>
                                    가맹점 운영 ID
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    8
                                </td>
                                <td>
                                    Y
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    custKey
                                </td>
                                <td>
                                    abcd1234567890
                                </td>
                                <td>
                                    가맹점 Key
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    255
                                </td>
                                <td>
                                    Y
                                </td>
                            </tr>
                        </tbody>
                    </template></v-simple-table
                >
            </v-card>

            <v-alert border="top" colored-border type="error" elevation="2">
                계약 후 발급됩니다.
            </v-alert>
        </article>  

        <article class="mb-12">
            <h2>/php/auth.php 가맹점 인증요청</h2>
            <v-divider class="my-6"></v-divider>
            <p>가맹점 인증요청시 별도의 auth 파일 생성 후 cst_id와 custKey변수를 JSON 형태로 넣고 불러옵니다.</p>
            <vue-code-highlight>
                {{ code_1 }}
            </vue-code-highlight>
        </article>

        <article class="mb-12">
            <h2>/php/auth.php 가맹점 응답</h2>
            <v-divider class="my-6"></v-divider>
            <vue-code-highlight class="mb-8">
                {{ code_2 }}
            </vue-code-highlight>

            <v-alert border="top" colored-border type="info" elevation="2">
                AWS(아마존 웹서비스)에서 AUTH0004 오류 발생 시 가맹점 서버 <a href="https://www.naver.com/">도메인의 REFERER</a> 추가가 필요할 수 있습니다.
                카페24, 가비아 등 서버 호스팅 이용 시 호스팅 사에 페이플 URL(테스트, 운영) 방화벽 오픈을 요청해야 사용하실 수 있습니다.
            </v-alert>
        </article>

        <article class="mb-12">
            <h2>개발소스 예제</h2>
            <v-divider class="my-6"></v-divider>
            <p>*obj.payple_auth_file = ‘/pg/auth/파일이름’; 에 설정 할 가맹점 인증 요청 파일을 생성합니다.</p>
            <vue-code-highlight language="html">
                {{ code_3 }}
            </vue-code-highlight>
        </article>

        <article class="mb-12">
            <h2>카드등록(가맹점인증) 요청(REQUEST)</h2>
            <v-divider class="my-6"></v-divider>
            <vue-code-highlight language="java">
                {{ code_4 }}
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
                                    PCD_CPAY_VER
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    1.0.1
                                </td>
                                <td>
                                    결제 창 버전
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
                                    -
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
                                    PCD_PAY_WORK
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    AUTH
                                </td>
                                <td>
                                    결제요청 방식 - AUTH: 카드등록만 진행(정기결제만 해당)<br />
                                    - CERT: 가맹점 최종승인 후 결제 진행<br />
                                    - PAY: 가맹점 최종승인없이 결제 진행
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAYER_AUTHTYPE
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
                                    pwd
                                </td>
                                <td>
                                    간편결제 인증방식 - PCD_SIMPLE_FLAG: 'Y' 일 때 필수
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_CARD_VER
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
                                    02
                                </td>
                                <td>
                                    - 01: 정기결제<br />
                                    - 02: 일반결제
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_RST_URL
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    https://aaa.com/sub/fv1&hellip;.
                                </td>
                                <td>
                                    결제(요청)결과 RETURN URL - 결제결과를 콜백함수가 아닌 URL로 수신할 경우만 해당<br />
                                    - 모바일에서 팝업방식은 상대경로, 다이렉트 방식은 절대경로로 설정
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
                            <tr>
                                <td>
                                    PCD_PAYER_NAME
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    80
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    홍길동
                                </td>
                                <td>
                                    결제고객 이름
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
                                    255
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
                                    255
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
                                    상품1
                                </td>
                                <td>
                                    - 이모티콘을 제외한 상품명을 입력해주세요.<br />
                                    - 이모티콘으로 인해 일부 카드사에서 오류가 발생할 수 있습니다.
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
                                    카드등록 요청금액 (최소 100원)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_ISTAX
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
                                    과세설정(Default: Y, 비과세: N)
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
                                    -
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
                                    -
                                </td>
                                <td>
                                    Y
                                </td>
                                <td>
                                    정기결제 여부 (정기: Y, 그 외: N)
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
                                    결제 구분 년도 (PCD_REGULER_FLAG: 'Y' 일 때 필수)
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
                                    결제 구분 월 (PCD_REGULER_FLAG: 'Y' 일 때 필수)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_SIMPLE_FLAG
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
                                    간편결제 여부(간편결제: Y, 단건결제: N)
                                </td>
                            </tr>
                        </tbody>
                    </template></v-simple-table
                >
            </v-card>
        </article>

        <article class="mb-12">
            <h2>카드등록(가맹점인증) 응답(RESPONSE)</h2>
            <v-divider class="my-6"></v-divider>
            <vue-code-highlight language="java">
                {{ code_5 }}
            </vue-code-highlight>
        </article>

        <v-card>
                <v-simple-table height="auto">
                    <template v-slot:default>
                        <tbody>
                            <tr>
                                <td>
                                    구분
                                </td>
                                <td>
                                    요청 URL
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    테스트
                                </td>
                                <td>
                                    <v-btn small color="info" href="https://testcpay.payple.kr/php/auth.php" dark>
                                        https://testcpay.payple.kr/php/auth.php
                                    </v-btn>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    운영
                                </td>
                                <td>
                                    <v-btn small color="info" href="https://cpay.payple.kr/php/auth.php" dark>
                                        https://cpay.payple.kr/php/auth.php
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card>
    </div>
</template>

<script>
import { component as VueCodeHighlight } from "vue-code-highlight";
// import vchTheme from "../../node_modules/vue-code-highlight/themes/prism-coy.css";

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
Cache-Control: no-cache //AWS 이용 가맹점인 경우 REFERER
referer: https://가맹점 도메인

{
    "cst_id": "test",
    "custKey": "abcd1234567890"
}
`,
            code_2: `
{
    "server_name” => 요청 url
    "result” => 결과확인,
    “result_msg” => 결과 메시지,
    “cst_id” => 가맹점 아이디,
    “custKey” => 가맹점 키,
    “AuthKey” => 빌링키,
    “PCD_PAY_HOST” => 결제요청 도메인,
    “PCD_PAY_URL” => 결제요청 url,
    “return_url” => 결과 리턴 url
}
`,
            code_3: `
<!-- payple js 호출. 테스트/운영 선택 -->
<scropt src="https://testcpay.payple.kr/js/cpay.payple.1.0.1.js"></scropt> <!-- 테스트 -->
<scropt src="https://cpay.payple.kr/js/cpay.payple.1.0.1.js"></scropt> <!-- 운영 -->

<!-- 가맹점 주문페이지 '결제하기' 버튼 액션 -->
<scropt>
$(document).ready( function () {
    $('#payAction').on('click', function (event) {
        var pay_work = "CERT";
        var payple_payer_id = "d0toSS9sT084bVJSNThScnFXQm9Gdz09";
        var buyer_no = "2335";
        var buyer_name = "홍길동";
        var buyer_hp = "01023457896";
        var buyer_email = "dev@payple.kr";
        var buy_goods = "상품1";
        var buy_total = "1000";
        var pay_istax = "";
        var pay_taxtotal = "10";
        var order_num = "test0553941001540967923";
        var is_reguler = "N";
        var pay_year = "";
        var pay_month = "";
        var obj = new Object();

        obj.PCD_CPAY_VER = "1.0.1";
        obj.PCD_PAY_TYPE = 'card';
        obj.PCD_PAY_WORK = pay_work;
        obj.PCD_CARD_VER = "02"
        /* (필수) 가맹점 인증요청 파일 (Node.JS : auth => [app.js] app.post('/pg/auth', ...) */
        obj.payple_auth_file = '/pg/auth/파일이름'; //절대경로 포함 파일명 (예: /절대경로/payple_auth_file)
        /* End : 가맹점 인증요청 파일 */

        /* 결과를 콜백 함수로 받고자 하는 경우 함수 설정 추가 */
        obj.callbackFunction = getResult;  // getResult : 콜백 함수명
        /* End : 결과를 콜백 함수로 받고자 하는 경우 함수 설정 추가 */

        /* 결과를 콜백 함수가 아닌 URL로 받고자 하는 경우 */
        obj.PCD_RST_URL = '/order_result.html';
        /* End : 결과를 콜백 함수가 아닌 URL로 받고자 하는 경우 */

        obj.PCD_PAYER_NO = buyer_no;
        obj.PCD_PAYER_NAME = buyer_name;
        obj.PCD_PAYER_HP = buyer_hp;
        obj.PCD_PAYER_EMAIL = buyer_email;
        obj.PCD_PAY_GOODS = buy_goods;
        obj.PCD_PAY_TOTAL = buy_total;
        obj.PCD_PAY_ISTAX = pay_istax;
        obj.PCD_PAY_TAXTOTAL = pay_taxtotal;
        obj.PCD_PAY_OID = order_num;
        obj.PCD_REGULER_FLAG = is_reguler;
        obj.PCD_PAY_YEAR = pay_year;
        obj.PCD_PAY_MONTH = pay_month;

        PaypleCpayAuthCheck(obj);
        event.preventDefault();
    });
});
</scropt>
`,
            code_4: `
POST /php/auth.php HTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Cache-Control: no-cache
*AWS 이용 가맹점인 경우 REFERER
Referer: https://가맹점 도메인
{
    "cst_id": "test",
    "custKey": "abcd1234567890",
    "PCD_PAY_TYPE": "card"
}

<!-- 결제요청  -->
POST /php/RePayCardAct.php?ACT_=PAYM HTTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Cache-Control: no-cache
{
    "PCD_CPAY_VER": "1.0.1"
    "PCD_PAY_TYPE": "card",
    "PCD_PAY_WORK": “AUTH",
    “PCD_RST_URL”: “https://aaa.com/sub/fv1….”,
    "PCD_PAYER_ID": "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09",
    "PCD_PAYER_NO": 2324,
    "PCD_PAY_GOODS": "상품1",
    "PCD_PAY_TOTAL": 1000,
    "PCD_TAXSAVE_FLAG": "Y"
}
`,
            code_5: `
{
    "result": "success",
    "result_msg": "카드등록이 완료되었습니다.",
    "cst_id": "UFVNNVZpZk4reWo5UFRualUwcGV4dz09",
    "custKey": "T3JzRkp5L1FTcEFDa1FQdHo5Um1UZz09",
    "AuthKey": "a688ccb3555c25cd722483f03e23065c3d0251701ad6da895eb2d830bc06e34d",
    " PCD_PAY_HOST ": "https://testcpay.payple.kr",
    " PCD_PAY_URL ": "/index.php?ACT_=PAYM",
    "return_url": "https://testcpay.payple.kr/index.php?ACT_=PAYM", 
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
                    text: "최초결제",
                    disabled: true,
                },
                {
                    text: "가맹점 인증 요청 개요",
                    disabled: true,
                }
            ]
        };
    }
};
</script>
