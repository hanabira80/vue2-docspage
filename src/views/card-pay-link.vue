<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-12">URL 링크결제</h1>
        <blockquote class="mb-12 blockquote body-1">
            URL링크의 생성은 가맹점관리자페이지에서도 수기로 생성이 가능합니다.<br />
            이 문서에서는 대량생성등의 사유로 API를 통해 링크를 생성하는 방법에 대해 안내합니다.
        </blockquote>

        <article class="mb-12">
            <h2 class="">
                URL 링크결제
            </h2>

            <v-card max-width="1000" raised class="pa-2 ma-4 mb-12">
                <v-img :src="require('../../src/assets/test-1.png')" cover class="grey darken-4 "></v-img>
            </v-card>

            <v-alert border="left" colored-border type="error" elevation="2" class="mx-4">
                결제요청을 위한 선행단계로 가맹점 인증 단계를 거쳐야 합니다. 해당 내용은 이곳에서 확인하실 수 있습니다.
            </v-alert>

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
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                a688c...
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 인증 후 리턴 받은 토큰키
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_WORK
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                LINKREG
                            </td>
                            <td colspan="1" rowspan="1">
                                링크결제 요청방식
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
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                card
                            </td>
                            <td colspan="1" rowspan="1">
                                결제수단
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_GOODS
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                2048
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                상품1
                            </td>
                            <td colspan="1" rowspan="1">
                                - 이모티콘을 제외한 상품명을 입력해주세요.<br />- 이모티콘으로 인해 일부 카드사에서 승인거절이  발생할 수 있습니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_TOTAL
                            </td>
                            <td colspan="1" rowspan="1">
                                Number
                            </td>
                            <td colspan="1" rowspan="1">
                                20
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                100
                            </td>
                            <td colspan="1" rowspan="1">
                                카드결제 요청금액 (최소 100원)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_ISTAX
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
                                과세설정 (Default: Y 이며,  과세:Y, 복합과세:Y, 비과세: N) ISTAX:Y, TAXTOTAL:공란이면 페이플에서 10% 부가세를 자동으로
                                적용합니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_TAXTOTAL
                            </td>
                            <td colspan="1" rowspan="1">
                                Number
                            </td>
                            <td colspan="1" rowspan="1">
                                20
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                10
                            </td>
                            <td colspan="1" rowspan="1">
                                과세 및 복합과세(과세+면세) 주문건에 필요한 금액이며 가맹점에서 전송한 값을 부가세로 설정합니다.비과세의 경우 사용하지 않습니다.
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                <div class="d-flex align-center pa-4">
                    <div class="font-italic font-weight-bold">
                        요청예시
                    </div>
                </div>

                <Prism language="javascript">
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
                                값
                            </td>
                            <td colspan="1" rowspan="1">
                                설명
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_LINK_RST
                            </td>
                            <td colspan="1" rowspan="1">
                                success
                            </td>
                            <td colspan="1" rowspan="1">
                                링크생성 요청 결과(success|error)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_LINK_MSG
                            </td>
                            <td colspan="1" rowspan="1">
                                링크생성이 완료되었습니다.
                            </td>
                            <td colspan="1" rowspan="1">
                                링크생성 요청 결과 메시지
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_TYPE
                            </td>
                            <td colspan="1" rowspan="1">
                                card
                            </td>
                            <td colspan="1" rowspan="1">
                                결제수단
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
                                100
                            </td>
                            <td colspan="1" rowspan="1">
                                결제금액
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_TAXSAVE_FLAG
                            </td>
                            <td colspan="1" rowspan="1">
                                N
                            </td>
                            <td colspan="1" rowspan="1">
                                현금영수증 발행요청
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_LINK_EXPIREDATE
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                링크결제 만료시간
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_LINK_KEY
                            </td>
                            <td colspan="1" rowspan="1">
                                Mj...
                            </td>
                            <td colspan="1" rowspan="1">
                                링크요청 키
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_LINK_URL
                            </td>
                            <td colspan="1" rowspan="1">
                                https://..
                            </td>
                            <td colspan="1" rowspan="1">
                                생성된 링크 URL
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                <div class="d-flex align-center pa-4">
                    <div class="font-italic font-weight-bold">
                        요청예시
                    </div>
                </div>

                <Prism language="javascript">
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
#링크생성 요청
POST 가맹점 인증 후 리턴받은 PCD_PAY_URL HTTP/1.1
Host: 가맹점 인증 후 리턴받은 PCD_PAY_HOST
Content-Type: application/json
Cache-Control: no-cache
{
 
  "PCD_CST_ID": "가맹점 인증 후 리턴받은 cst_id",
  "PCD_CUST_KEY": "가맹점 인증 후 리턴받은 custKey",
  "PCD_AUTH_KEY": "가맹점 인증 후 리턴받은 AuthKey",  
  "PCD_PAY_WORK": "LINKREG",
  "PCD_PAY_TYPE": "card",
  "PCD_PAY_GOODS": "상품1",
  "PCD_PAY_TOTAL": 100
}
`,
            code_2_1: `
{
  "PCD_LINK_RST":"success",
  "PCD_LINK_MSG":"링크생성이 완료되었습니다.",
  "PCD_PAY_TYPE":"card",
  "PCD_PAY_GOODS":"상품1",
  "PCD_PAY_TOTAL":100,
  "PCD_TAXSAVE_FLAG":"N",
  "PCD_LINK_EXPIREDATE":"",
  "PCD_LINK_MEMO":"",
  "PCD_LINK_KEY":"Mjox...",
  "PCD_LINK_URL":"https:..."
}
`,
        };
    },
};
</script>
