<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2 mb-8">재결제 개요</h1>

        <!-- <article class="mb-12">
            <h2>결제생성 후 승인(PCD_PAY_WORK: CERT)</h2>
            <v-divider class="my-6"></v-divider>
            <p>
                가맹점의 최종 승인 후에 결제를 진행하며 REST REQUEST방식으로 진행합니다.
            </p>
        </article>

        <article class="mb-12">
            <h2>결제생성 후 승인 요청(REQUEST)</h2>
            <v-divider class="my-6"></v-divider>
            <vue-code-highlight language="java">
                {{ code_1 }}
            </vue-code-highlight>
        </article> -->

        <article class="mb-12">
            <h2>계좌결제 요청변수</h2>
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
                                    transfer
                                </td>
                                <td>
                                    결제수단
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
                                    간편결제 여부<br />
                                    (간편결제: Y, 단건결제: N)
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
                                    간편결제 인증방식<br />
                                    - PCD_SIMPLE_FLAG(간편결제) : 'Y' 일 때 필수
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
                                    결제요청 방식 - AUTH: 본인인증+계좌등록<br />
                                    - CERT: 가맹점 최종승인 후 본인인증+계좌등록+결제 진행<br />
                                    - PAY: 가맹점 최종승인없이 본인인증+계좌등록+결제 진행
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
                                    -
                                </td>
                                <td>
                                    https://aaa.com/sub/fv1….
                                </td>
                                <td>
                                    결제(요청)결과 RETURN URL<br />
                                    - 결제결과를 콜백함수가 아닌 URL로 수신할 경우만 해당<br />
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
                                    10
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    2324
                                </td>
                                <td>
                                    가맹점 회원 고유번호. 사용자 필드, 결과에 그대로 리턴 (선택)
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
                                    고객 휴대폰번호를 전송하시면 자동결제 안내문자로 인한 민원을 방지하기 위해 페이플에서 무료로 고객에게 알림톡을
                                    발송해드립니다.
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
                                    상품명
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
                                    1000
                                </td>
                                <td>
                                    출금 요청금액(최소 1000원)
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
                                    복합과세 주문건(과세+면세)에 필요한 금액이며 가맹점에서 전송한 값을 부가세로 설정합니다.
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
                                    주문번호 (미입력 시 자동생성)
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
                                    현금영수증 발행 여부 (발행: Y, 미 발행: N)
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card>
        </article>

        <article class="mb-12">
            <h2>결제생성 후 승인(PCD_PAY_WORK: CERT)</h2>
            <v-divider class="my-6"></v-divider>
            <p>
                가맹점의 최종 승인 후에 결제를 진행하며 REST REQUEST방식으로 진행합니다.
            </p>
            <vue-code-highlight language="java">
                {{ code_1 }}
            </vue-code-highlight>
        </article>

        <article class="mb-12">
            <h2>즉시 승인(PCD_PAY_WORK: PAY)</h2>
            <v-divider class="my-6"></v-divider>
            <p>
                가맹점의 최종 승인없이 즉시 결제를 진행하며 별도 REQUEST는 없습니다.
            </p>
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
                                    PCD_PAY_REQKEY
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
                                    RmFBWWFB…
                                </td>
                                <td>
                                    최종 승인요청용 키
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
<!—- 라이브러리 호출 -->

<scropt src="https://testcpay.payple.kr/js/cpay.payple.1.0.1.js"></scropt> <!—테스트 -->

<scropt src="https://cpay.payple.kr/js/cpay.payple.1.0.1.js"></scropt> <!—운영 -->


<!-- 가맹점 주문페이지 '결제하기' 버튼 액션 -->

<scropt>

$(document).ready( function () {


        var getResult = function(res){

                alert("callback : " + res.PCD_PAY_MSG);

        }


        $('#payAction').on('click', function (event) {

        

                         var pay_ver = "1.0.1";         

                var pay_type = "transfer";  

                    var pay_work = "PAY";

                var buyer_no = 1;

                var buyer_name = "홍길동";

                var buyer_hp = "01012345678";

                var buyer_email = "dev@payple.kr";

                var buy_goods = "휴대폰";

                var buy_total = 1000;

                var order_num = "test0553941001540967923";

                var is_reguler = "N";

                var pay_year = "";  

                var pay_month = "";

                var is_taxsave = "Y";

                var simple_flag = "N";

                var auth_type = "pwd";

                        var pcd_rst_url = "http://agent.payple.kr/index.php";



                //요청변수

                var obj = new Object();


                obj.PCD_CPAY_VER = "1.0.1";                                        // (필수) 결제창 버전 (Default : 1.0.0)

                        obj.PCD_PAY_TYPE = pay_type;                                // (필수) 결제 방법 (transfer | card)

                        obj.PCD_PAY_WORK = pay_work;                                // (필수) 결제요청 업무구분 (AUTH : 본인인증+계좌등록, CERT: 본인인증+계좌등록+결제요청등록(최종 결제승인요청 필요), PAY: 본인인증+계좌등록+결제완료)

                        

                //PAY 본인인증+계좌등록+결제요청

                        obj.PCD_PAYER_NO = buyer_no;                                // (선택) 가맹점 회원 고유번호 (결과전송 시 입력값 그대로 RETURN)

                obj.PCD_PAYER_NAME = buyer_name;                        // (선택) 결제자 이름

                obj.PCD_PAYER_HP = buyer_hp;                                // (선택) 결제자 휴대폰 번호

                obj.PCD_PAYER_EMAIL = buyer_email;                        // (선택) 결제자 Email

                obj.PCD_PAY_GOODS = buy_goods;                                 // 상품명

                obj.PCD_PAY_TOTAL = buy_total;                                // 결제금액

                obj.PCD_PAY_OID = order_num;                                 // 가맹점 주문번호

                //obj.PCD_REGULER_FLAG = is_reguler;                        // (선택) 정기결제 여부 (Y|N)

                //obj.PCD_PAY_YEAR = pay_year;                               //        정기결제 구분 년

                //obj.PCD_PAY_MONTH = pay_month;                                //  정기결제 구분 월

                obj.PCD_TAXSAVE_FLAG = is_taxsave;                         // (선택) 현금영수증 발행여부



                        obj.payple_auth_file = 'http://agent.payple.kr/cPayPayple/auth.php'; // (필수) /절대경로/payple_auth_file (node.js => [app.js] app.post('/pg/auth', ...) {..}

                        obj.PCD_PAYER_AUTHTYPE = auth_type;                        // (선택) [간편결제/정기결제] 본인인증 방식 (sms : 문자인증 | pwd : 패스워드 인증)

                        //obj.PCD_RST_URL = pcd_rst_url;                        // (필수) 결제(요청)결과 RETURN URL

                        obj.callbackFunction = getResult;                        // (선택) 결과를 받고자 하는 callback 함수명 (callback함수를 설정할 경우 PCD_RST_URL 이 작동하지 않음)

                        

                        PaypleCpayAuthCheck(obj);


        });

});

</scropt>

<button id="payaction">가맹점 인증 후 계좌등록</button>
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
                    disabled: true
                }
            ]
        };
    }
};
</script>
