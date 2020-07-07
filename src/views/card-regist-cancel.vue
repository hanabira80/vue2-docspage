<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-12">등록카드 해지</h1>
        <blockquote class="mb-12 blockquote body-1">
            등록카드 해지API를 통해 해지요청 및 해지요청결과 수신을 받으실 수 있습니다.
        </blockquote>
        <v-alert border="left" colored-border type="error" elevation="2" class="mx-4">
            요청을 위한 선행단계로 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 단계를 거쳐야 합니다. 해당 내용은 이곳에서 확인하실 수 있습니다.
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
                                <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 후 리턴 받은 cst_id Token
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
                                <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 후 리턴 받은 custKey Token
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
                                <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 후 리턴 받은 인증 Token
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
                                카드등록 후 리턴받은 빌링키
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_NO
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                1234
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점에서 사용하는 회원번호
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
                                값
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
                                카드해지 요청 결과(success|error)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CODE
                            </td>
                            <td colspan="1" rowspan="1">
                                TSDL0000
                            </td>
                            <td colspan="1" rowspan="1">
                                카드해지 성공 코드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_MSG
                            </td>
                            <td colspan="1" rowspan="1">
                                카드해지완료
                            </td>
                            <td colspan="1" rowspan="1">
                                카드해지 요청 결과 메시지 (카드해지완료|실패)
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
                                ‘card’ - 고정값
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_WORK
                            </td>
                            <td colspan="1" rowspan="1">
                                PUSERDEL
                            </td>
                            <td colspan="1" rowspan="1">
                                ‘PUSERDEL’ 고정
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_ID
                            </td>
                            <td colspan="1" rowspan="1">
                                d0to...
                            </td>
                            <td colspan="1" rowspan="1">
                                카드등록 후 리턴받은 빌링키
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
#해지 요청
POST <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 후 리턴받은 PCD_PAY_URL HTTP/1.1
Host: <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 후 리턴받은 PCD_PAY_HOST
Content-Type: application/json
Cache-Control: no-cache
{
  "PCD_CST_ID": "<v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 후 리턴받은 cst_id",
  "PCD_CUST_KEY": "<v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 후 리턴받은 custKey",
  "PCD_AUTH_KEY": "<v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 후 리턴받은 AuthKey",
  "PCD_PAYER_ID": "d0to...",
  "PCD_PAYER_NO": “1234”
}
`,
            code_2_1: `
{
  "PCD_PAY_RST" => "success",
  “PCD_PAY_CODE” => “PUSER0000”,
  "PCD_PAY_MSG" => "카드해지완료",
  "PCD_PAY_TYPE" => "card",
  "PCD_PAY_WORK" => "PUSERDEL",
  "PCD_PAYER_ID" => "d0to...",
  "PCD_PAYER_NO" => “1234”
}
`,
        };
    },
};
</script>
