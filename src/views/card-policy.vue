<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-12">정책</h1>

        <article class="mb-12">
            <h2 class="">
                지원 카드사
            </h2>

            <v-card class="temp_table ma-4 mb-12">
                <v-simple-table class="table-hover-disable">
                    <tbody>
                        <tr>
                            <td colspan="1" rowspan="1">
                                은행명
                            </td>
                            <td colspan="1" rowspan="1">
                                코드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                신한카드
                            </td>
                            <td colspan="1" rowspan="1">
                                0100
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                BC 카드
                            </td>
                            <td colspan="1" rowspan="1">
                                0200
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                SC BC
                            </td>
                            <td colspan="1" rowspan="1">
                                0201
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                우리 BC
                            </td>
                            <td colspan="1" rowspan="1">
                                0202
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                경남 BC
                            </td>
                            <td colspan="1" rowspan="1">
                                0203
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                대구 BC
                            </td>
                            <td colspan="1" rowspan="1">
                                0204
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                NH BC
                            </td>
                            <td colspan="1" rowspan="1">
                                0205
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                기업 BC
                            </td>
                            <td colspan="1" rowspan="1">
                                0206
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                부산 BC
                            </td>
                            <td colspan="1" rowspan="1">
                                0207
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                하나 BC
                            </td>
                            <td colspan="1" rowspan="1">
                                0208
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                신한 BC
                            </td>
                            <td colspan="1" rowspan="1">
                                0209
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                국민 BC
                            </td>
                            <td colspan="1" rowspan="1">
                                0210
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                KB국민
                            </td>
                            <td colspan="1" rowspan="1">
                                0300
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                현대카드
                            </td>
                            <td colspan="1" rowspan="1">
                                0400
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                삼성카드
                            </td>
                            <td colspan="1" rowspan="1">
                                0500
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                롯데AMX
                            </td>
                            <td colspan="1" rowspan="1">
                                0701
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                하나카드
                            </td>
                            <td colspan="1" rowspan="1">
                                0600
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                하나(구외환)
                            </td>
                            <td colspan="1" rowspan="1">
                                0601
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                롯데카드
                            </td>
                            <td colspan="1" rowspan="1">
                                0700
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                NH채움
                            </td>
                            <td colspan="1" rowspan="1">
                                0800
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                씨티카드
                            </td>
                            <td colspan="1" rowspan="1">
                                0906
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                우리카드
                            </td>
                            <td colspan="1" rowspan="1">
                                0907
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                광주카드
                            </td>
                            <td colspan="1" rowspan="1">
                                0908
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                전북카드
                            </td>
                            <td colspan="1" rowspan="1">
                                0909
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                제주카드
                            </td>
                            <td colspan="1" rowspan="1">
                                0910
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                수협카드
                            </td>
                            <td colspan="1" rowspan="1">
                                0911
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                신협카드
                            </td>
                            <td colspan="1" rowspan="1">
                                0912
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                새마을금고
                            </td>
                            <td colspan="1" rowspan="1">
                                0913
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                우체국
                            </td>
                            <td colspan="1" rowspan="1">
                                0914
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                저축은행
                            </td>
                            <td colspan="1" rowspan="1">
                                0915
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                KDB산업
                            </td>
                            <td colspan="1" rowspan="1">
                                0916
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                평화카드
                            </td>
                            <td colspan="1" rowspan="1">
                                0917
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                한미
                            </td>
                            <td colspan="1" rowspan="1">
                                0918
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                신세계한미
                            </td>
                            <td colspan="1" rowspan="1">
                                0919
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                케이뱅크
                            </td>
                            <td colspan="1" rowspan="1">
                                0921
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                카카오뱅크체크
                            </td>
                            <td colspan="1" rowspan="1">
                                0922
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <h2 class="">
                결제내용에 대한 고객 알림톡 - 고객 휴대폰번호(옵션) 전달 시 발송
            </h2>
            <blockquote class="mb-12 blockquote body-1">
                페이플 카드결제는 다날과 함께하는 2차 PG이기 때문에 고객의 <v-tooltip v-model="toolTipShow" top>
                    <template v-slot:activator="{ on }">
                        <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">승인</span>
                    </template>
                    <template v-slot:default>
                        <span>
                            카드사에서 가맹점의 결제요청에 최종적으로 보내주는 결제완료상태값으로,<br/>
                            승인을 받았다는 것은 결제가 성공적으로 이루어졌다는 것을 의미합니다.
                        </span>
                    </template>
                </v-tooltip>문자에 <b>(주)페이플 또는 다날자동결제</b>로 표시됩니다. <br />
                이로인해 발생할 수 있는 민원을 방지하고자 아래와 같이 알림톡을 고객에게 발송합니다.
            </blockquote>

            <v-card max-width="1000" raised class="pa-2 ma-4 mb-12">
                <v-img :src="require('../../src/assets/test-1.png')" cover class="grey darken-4 "></v-img>
            </v-card>

            <v-alert border="left" colored-border type="error" elevation="2" class="mx-4">
                최초 카드 등록 시 카드 유효성 검증을 위해 100원 <v-tooltip v-model="toolTipShow" top>
                    <template v-slot:activator="{ on }">
                        <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">승인</span>
                    </template>
                    <template v-slot:default>
                        <span>
                            카드사에서 가맹점의 결제요청에 최종적으로 보내주는 결제완료상태값으로,<br/>
                            승인을 받았다는 것은 결제가 성공적으로 이루어졌다는 것을 의미합니다.
                        </span>
                    </template>
                </v-tooltip> 후 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip>가 진행됩니다.
            </v-alert>

            <h2 class="">
                <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip>정책
            </h2>
            <blockquote class="mb-12 blockquote body-1">
                개념: 카드사에서 거래건을 없던 것으로 되돌리는(원복) 행위입니다.<br /><br />
                -<v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip>수수료: 카드사에서 처리하며, 가맹점은 별도로 비용의 부담이 없습니다. (<v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip>시 결제수수료 원복)<br /><br />
                -<v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip>시간: <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip>요청시 즉시처리합니다. 다만 신용카드의 경우 카드결제일이 지난 경우와 체크카드의 경우 대금을 바로 고객 통장에서 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">출금</span>
            </template>
            <template v-slot:default>
                <span>
                    계좌결제에서 결제요청이 이루어지면 고객의 계좌에서 돈이 바로 빠져나가고,<br/>
                    이것을 출금이라고 합니다.<Br/>
                    거래가 확정되었다는 점에서 카드의 ‘승인’과 같지만,<br/>
                    신용카드의 승인시점은 신용카드 결제일(출금시점)과 다르다는 점에 차이점이 있습니다.
                </span>
            </template>
        </v-tooltip>하므로, <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">출금</span>
            </template>
            <template v-slot:default>
                <span>
                    계좌결제에서 결제요청이 이루어지면 고객의 계좌에서 돈이 바로 빠져나가고,<br/>
                    이것을 출금이라고 합니다.<Br/>
                    거래가 확정되었다는 점에서 카드의 ‘승인’과 같지만,<br/>
                    신용카드의 승인시점은 신용카드 결제일(출금시점)과 다르다는 점에 차이점이 있습니다.
                </span>
            </template>
        </v-tooltip>이
                완료된 건의 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip>는 카드사마다 처리하는데에 시간이 소요될 수 있습니다. 다만 신용카드의 경우 카드결제일이 지난 경우와 체크카드의 경우 대금을 바로
                고객 통장에서 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">출금</span>
            </template>
            <template v-slot:default>
                <span>
                    계좌결제에서 결제요청이 이루어지면 고객의 계좌에서 돈이 바로 빠져나가고,<br/>
                    이것을 출금이라고 합니다.<Br/>
                    거래가 확정되었다는 점에서 카드의 ‘승인’과 같지만,<br/>
                    신용카드의 승인시점은 신용카드 결제일(출금시점)과 다르다는 점에 차이점이 있습니다.
                </span>
            </template>
        </v-tooltip>하므로, <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">출금</span>
            </template>
            <template v-slot:default>
                <span>
                    계좌결제에서 결제요청이 이루어지면 고객의 계좌에서 돈이 바로 빠져나가고,<br/>
                    이것을 출금이라고 합니다.<Br/>
                    거래가 확정되었다는 점에서 카드의 ‘승인’과 같지만,<br/>
                    신용카드의 승인시점은 신용카드 결제일(출금시점)과 다르다는 점에 차이점이 있습니다.
                </span>
            </template>
        </v-tooltip>이 완료된 건의 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip>는 카드사마다 처리하는데에 시간이 소요될 수 있습니다.<br /><br />
                -서비스 오픈여부: 가맹점에 별도 비용이 들지 않으므로 기본(디폴트)으로 오픈하여 드립니다.<br /><br />
                -<v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip>의 제한: 결제완료된 건을 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip>하게 되면 페이플에서 해당금액을 앞으로 가맹점에 정산할 예정금액에서 차감합니다. 차감될 정산예정금액이 남아
                있지 않은 경우에는 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip>가 불가합니다.
            </blockquote>
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
