<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-12">결제결과 조회</h1>
        <blockquote class="mb-12 blockquote body-1">
            빌링키(PCD_PAYER_ID)가 제대로 생성되었는지 확인할 수 있는 API입니다.
        </blockquote>
        <v-alert border="left" colored-border type="error" elevation="2" class="mx-4">
            요청을 위한 선행단계로 가맹점 인증 단계를 거쳐야 합니다. 해당 내용은 이곳에서 확인하실 수 있습니다.
        </v-alert>

        <article class="mb-12">
            <h2 class="">
                등록카드 해지
            </h2>

            <h3 class="pl-4">
                요청 메시지
            </h3>
            <v-card class="temp_table ma-4 mb-12">
                <v-simple-table class="table-hover-disable">
                    <tbody>
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
                                결과조회 여부(Y|N)
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
                                월 중복결제 방지 (사용: Y, 그 외: N)
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
                                2020
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 구분 년도 (PCD_REGULER_FLAG: 'Y' 일 때 필수)
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
                                03
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 구분 월 (PCD_REGULER_FLAG: 'Y' 일 때 필수)
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
                                20200320
                            </td>
                            <td colspan="1" rowspan="1">
                                결제요청일자 (YYYYMMDD)
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                <div class="d-flex align-center pa-4">
                    <div class="font-italic font-weight-bold">
                        REST REQUEST
                    </div>
                </div>
                <Prism language="php">
                    {{ code_1_1 }}
                </Prism>
            </v-card>

            <h3 class="pl-4">
                응답 메시지
            </h3>
            <v-card class="temp_table ma-4 mb-12">
                <v-simple-table class="table-hover-disable">
                    <tbody>
                        <tr>
                            <td colspan="1" rowspan="1">
                                응답변수
                            </td>
                            <td colspan="1" rowspan="1">
                                예시
                            </td>
                            <td colspan="1" rowspan="1">
                                설명
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_RST
                            </td>
                            <td colspan="1" rowspan="1">
                                success
                            </td>
                            <td colspan="1" rowspan="1">
                                결제요청 결과 (success|error)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CODE
                            </td>
                            <td colspan="1" rowspan="1">
                                PCHK0000
                            </td>
                            <td colspan="1" rowspan="1">
                                요청 결과코드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_MSG
                            </td>
                            <td colspan="1" rowspan="1">
                                전송완료
                            </td>
                            <td colspan="1" rowspan="1">
                                결제결과 메시지 (전송완료|실패 등)
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
                                1234
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점에서 사용하는 회원번호
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_ID
                            </td>
                            <td colspan="1" rowspan="1">
                                NS9qNTgzU2…
                            </td>
                            <td colspan="1" rowspan="1">
                                계좌등록 후 리턴 받은 결제 빌링키
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_EMAIL
                            </td>
                            <td colspan="1" rowspan="1">
                                dev@payple.kr
                            </td>
                            <td colspan="1" rowspan="1">
                                결제자 이메일
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_YEAR
                            </td>
                            <td colspan="1" rowspan="1">
                                2020
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 구분 년도 (PCD_REGULER_FLAG 사용시 응답)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_MONTH
                            </td>
                            <td colspan="1" rowspan="1">
                                03
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 구분 월 (PCD_REGULER_FLAG 사용시 응답)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_GOODS
                            </td>
                            <td colspan="1" rowspan="1">
                                상품1
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
                                PCD_PAY_ISTAX
                            </td>
                            <td colspan="1" rowspan="1">
                                Y
                            </td>
                            <td colspan="1" rowspan="1">
                                과세설정 (Default: Y 이며,  과세:Y, 복합과세:Y, 비과세: N)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_TAXTOTAL
                            </td>
                            <td colspan="1" rowspan="1">
                                10
                            </td>
                            <td colspan="1" rowspan="1">
                                복합과세(과세+면세) 주문건에 필요한 금액이며 가맹점에서 전송한 값을 부가세로 설정합니다.과세 또는 비과세의 경우 사용하지
                                않습니다.
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
                                은행코드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_BANKNAME
                            </td>
                            <td colspan="1" rowspan="1">
                                KEB하나은행
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
                                123- ******** -021
                            </td>
                            <td colspan="1" rowspan="1">
                                계좌번호
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_TIME
                            </td>
                            <td colspan="1" rowspan="1">
                                2020-03-20 19:50:00
                            </td>
                            <td colspan="1" rowspan="1">
                                결제완료 시간
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
                                월 중복결제 방지 (PCD_REGULER_FLAG 사용시 응답)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_TAXSAVE_FLAG
                            </td>
                            <td colspan="1" rowspan="1">
                                Y
                            </td>
                            <td colspan="1" rowspan="1">
                                현금영수증 발행여부 (발행: Y, 미발행: N)
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
                                현금영수증 발행결과 (성공: Y, 실패: N) (PCD_TAXSAVE_FLAG:Y 일 때 응답)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_TAXSAVE_MGTNUM
                            </td>
                            <td colspan="1" rowspan="1">
                                G...
                            </td>
                            <td colspan="1" rowspan="1">
                                현금영수증 국세청 발행번호 (PCD_TAXSAVE_FLAG:Y 일 때 응답)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_NAME
                            </td>
                            <td colspan="1" rowspan="1">
                                홍길동
                            </td>
                            <td colspan="1" rowspan="1">
                                결제고객 이름
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                <div class="d-flex align-center pa-4">
                    <div class="font-italic font-weight-bold">
                        REST RESPONSE
                    </div>
                </div>
                <Prism language="php">
                    {{ code_2_1 }}
                </Prism>
            </v-card>
        </article>
        <v-divider class="mb-12"></v-divider>

        <v-row class="mb-12 pt-12">
            <v-col col="12" sm="4">
                <v-card>
                    <v-list-item>
                        <v-list-item-avatar color="pink darken-1">
                            <v-icon color="white">
                                mdi-frequently-asked-questions
                            </v-icon>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title class=" mb-2">FAQ</v-list-item-title>
                            <v-list-item-subtitle>높은 빈도의 문의를 모아봤어요</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn fab text color="blue accent-4">
                                <v-icon>
                                    mdi-vector-link
                                </v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-card>
            </v-col>
            <v-col col="12" sm="4">
                <v-card>
                    <v-list-item>
                        <v-list-item-avatar color="indigo darken-4">
                            <v-icon color="white">
                                mdi-git
                            </v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class=" mb-2">GITHUB</v-list-item-title>
                            <v-list-item-subtitle>페이플 오픈 소스에 참여 하세요</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn fab text color="blue accent-4">
                                <v-icon>
                                    mdi-vector-link
                                </v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-card>
            </v-col>
            <v-col col="12" sm="4">
                <v-card>
                    <v-list-item>
                        <v-list-item-avatar color="teal accent-4">
                            <v-icon color="white">
                                mdi-email-send-outline
                            </v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class=" mb-2">MAIL</v-list-item-title>
                            <v-list-item-subtitle>페이플 개발팀에 문의해보세요</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn fab text color="blue accent-4">
                                <v-icon>
                                    mdi-pencil
                                </v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-php";
import Prism from "vue-prism-component";

export default {
    components: {
        Prism,
    },
    data() {
        return {
            toolTipShow: false,
            subNavi: [
                {
                    text: "홈",
                    disabled: false,
                    to: "/",
                },
                {
                    text: "카드결제",
                    disabled: false,
                    to: "/card/outline",
                },
                {
                    text:"222",
                    disabled: true,
                },
                {
                    text: "결제 창 호출",
                    disabled: true,
                },
            ],
            code_1_1: `
POST 가맹점 인증 후 리턴받은 PCD_PAY_URL HTTP/1.1
Host: 가맹점 인증 후 리턴받은 PCD_PAY_HOST
Content-Type: application/json
Cache-Control: no-cache
{
   "PCD_CST_ID": "가맹점 인증 후 리턴받은 cst_id"
   "PCD_CUST_KEY": "가맹점 인증 후 리턴받은 custKey"
   "PCD_AUTH_KEY": "가맹점 인증 후 리턴받은 AuthKey",
   "PCD_PAYCHK_FLAG": "Y",
   "PCD_PAY_TYPE": "transfer",
   "PCD_PAY_OID": "test201804000001",
   "PCD_PAY_DATE": “20200320”
}
`,
            code_2_1: `
{
   "PCD_PAY_RST": "success",
   “PCD_PAY_CODE”: “PCHK0000”,
   "PCD_PAY_MSG": "전송완료",
   "PCD_PAY_OID": "test201804000001",
   "PCD_PAY_TYPE": "transfer",
   "PCD_PAYER_NO": "1234",
   "PCD_PAYER_ID": "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09",
   "PCD_PAY_YEAR": "2020",
   "PCD_PAY_MONTH": "03",
   "PCD_PAY_GOODS": "상품1",
   "PCD_PAY_TOTAL": "1000",
   "PCD_PAY_BANK": "081",
   "PCD_PAY_BANKNAME": "KEB하나은행",
   "PCD_PAY_BANKNUM: "123- ******** -021",
   "PCD_PAY_TIME" => "2020-03-20...",
   “PCD_REGULER_FLAG” => “N”,
   “PCD_TAXSAVE_FLAG” => “Y”,
   "PCD_TAXSAVE_RST": "Y",
   "PCD_TAXSAVE_MGTNUM": "G...",
   “PCD_PAYER_NAME” => “홍길동”
}
`,
        };
    },
};
</script>
