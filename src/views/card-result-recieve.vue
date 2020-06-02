<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2 mb-8">결제결과 수신</h1>

        <article class="mb-12">
            <!-- <h2>[내용 제목]</h2>
            <v-divider class="my-6"></v-divider> -->
            <p>
                결제결과를 콜백함수로 수신하는 경우에는 아래 절차가 필요 없습니다.
            </p>
            <p>
                콜백함수를 이용하지 않는 경우에는 아래 소스코드를 가맹점 결제완료 페이지에 추가하고 가맹점 환경에 맞는 개발언어로 수정해주세요.
            </p>
            <p>
                자세한 내용은 order_result.html 샘플을 참고하시면 됩니다.
            </p>
        </article>

        <article class="mb-12">
            <!-- <h2>[내용 제목]</h2>
            <v-divider class="my-6"></v-divider> -->
            <vue-code-highlight language="php">
                {{ code_1 }}
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
                                PCD_AUTH_KEY
                            </td>
                            <td>
                                a688ccb3...
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
                                RmFBWWFBTWNS9qNTgzU2xdd2XRNHR2
                            </td>
                            <td>
                                결제생성후 승인을 위한 키
                            </td>
                        </tr>
                        <tr>
                            <td>
                                PCD_PAY_COFURL
                            </td>
                            <td>
                                <a href="https://cpay.payple.kr/php/PayConfirmAct.php">https://cpay.payple.kr/php/PayConfirmAct.php</a>
                            </td>
                            <td>
                                결제생성, 승인 후 리턴 URL
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
                                PCD_PAY_WORK
                            </td>
                            <td>
                                CERT
                            </td>
                            <td>
                                결제요청방식(CERT/PAY)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                PCD_PAYER_ID
                            </td>
                            <td>
                                NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09
                            </td>
                            <td>
                                결제 키
                            </td>
                        </tr>
                        <tr>
                            <td>
                                PCD_PAYER_NO
                            </td>
                            <td>
                                1234
                            </td>
                            <td>
                                결제고객 고유번호
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
                        <tr>
                            <td>
                                PCD_PAY_YEAR
                            </td>
                            <td>
                                2019
                            </td>
                            <td>
                                결제 구분 년
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
<? php
    $PCD_PAY_RST = (isset($_POST['PCD_PAY_RST'])) ? $_POST['PCD_PAY_RST'] : ""; 
    $PCD_PAY_MSG = (isset($_POST['PCD_PAY_MSG'])) ? $_POST['PCD_PAY_MSG'] : ""; 
    $PCD_AUTH_KEY = (isset($_POST['PCD_AUTH_KEY'])) ? $_POST['PCD_AUTH_KEY'] : "";
    $PCD_PAY_REQKEY = (isset($_POST['PCD_PAY_REQKEY'])) ? $_POST['PCD_PAY_REQKEY'] : "";
    $PCD_PAY_COFURL = (isset($_POST['PCD_PAY_COFURL'])) ? $_POST['PCD_PAY_COFURL'] : "";
    $PCD_PAY_OID = (isset($_POST['PCD_PAY_OID'])) ? $_POST['PCD_PAY_OID'] : "";         
    $PCD_PAY_TYPE = (isset($_POST['PCD_PAY_TYPE'])) ? $_POST['PCD_PAY_TYPE'] : "";      
    $PCD_PAY_WORK = (isset($_POST['PCD_PAY_WORK'])) ? $_POST['PCD_PAY_WORK'] : "";      
    $PCD_PAYER_ID = (isset($_POST['PCD_PAYER_ID'])) ? $_POST['PCD_PAYER_ID'] : "";      
    $PCD_PAYER_NO = (isset($_POST['PCD_PAYER_NO'])) ? $_POST['PCD_PAYER_NO'] : "";      
    $PCD_REGULER_FLAG = (isset($_POST['PCD_REGULER_FLAG'])) ? $_POST['PCD_REGULER_FLAG'] : "";
    $PCD_PAY_YEAR = (isset($_POST['PCD_PAY_YEAR'])) ? $_POST['PCD_PAY_YEAR'] : ""; 
    $PCD_PAY_MONTH = (isset($_POST['PCD_PAY_MONTH'])) ? $_POST['PCD_PAY_MONTH'] : "";
    $PCD_PAY_GOODS = (isset($_POST['PCD_PAY_GOODS'])) ? $_POST['PCD_PAY_GOODS'] : "";
    $PCD_PAY_TOTAL = (isset($_POST['PCD_PAY_TOTAL'])) ? $_POST['PCD_PAY_TOTAL'] : "";
    $PCD_PAY_BANK = (isset($_POST['PCD_PAY_BANK'])) ? $_POST['PCD_PAY_BANK'] : "";
    $PCD_PAY_BANKNAME = (isset($_POST['PCD_PAY_BANKNAME'])) ? $_POST['PCD_PAY_BANKNAME'] : "";
    $PCD_PAY_BANKNUM = (isset($_POST['PCD_PAY_BANKNUM'])) ? $_POST['PCD_PAY_BANKNUM'] : "";
    $PCD_PAY_TIME = (isset($_POST['PCD_PAY_TIME'])) ? $_POST['PCD_PAY_TIME'] : "";         
    $PCD_TAXSAVE_RST = (isset($_POST['PCD_TAXSAVE_RST'])) ? $_POST['PCD_TAXSAVE_RST'] : "";   
?>
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
                    text: "결제결과 수신",
                    disabled: true,
                }
            ]
        };
    }
};
</script>
