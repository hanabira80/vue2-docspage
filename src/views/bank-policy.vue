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
                지원 은행 리스트
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
                            <td colspan="1" rowspan="1">
                                평일, 토요일
                            </td>
                            <td colspan="1" rowspan="1">
                                공휴일
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                국민은행
                            </td>
                            <td colspan="1" rowspan="1">
                                004
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                농협은행
                            </td>
                            <td colspan="1" rowspan="1">
                                011
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                신한은행
                            </td>
                            <td colspan="1" rowspan="1">
                                088
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                우리은행
                            </td>
                            <td colspan="1" rowspan="1">
                                020
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                기업은행
                            </td>
                            <td colspan="1" rowspan="1">
                                003
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                산업은행
                            </td>
                            <td colspan="1" rowspan="1">
                                002
                            </td>
                            <td colspan="1" rowspan="1">
                                00:00 ~ 03:00
                            </td>
                            <td colspan="1" rowspan="1">
                                00:00 ~ 03:00
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                KEB하나은행
                            </td>
                            <td colspan="1" rowspan="1">
                                081
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                우체국
                            </td>
                            <td colspan="1" rowspan="1">
                                071
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                새마을금고
                            </td>
                            <td colspan="1" rowspan="1">
                                045
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                신협중앙회
                            </td>
                            <td colspan="1" rowspan="1">
                                048
                            </td>
                            <td colspan="1" rowspan="1">
                                22:00 ~ 08:00
                            </td>
                            <td colspan="1" rowspan="1">
                                22:00 ~ 08:00
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                대구은행
                            </td>
                            <td colspan="1" rowspan="1">
                                031
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                광주은행
                            </td>
                            <td colspan="1" rowspan="1">
                                034
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                경남은행
                            </td>
                            <td colspan="1" rowspan="1">
                                039
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 06:00
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 06:00
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                수협중앙회
                            </td>
                            <td colspan="1" rowspan="1">
                                007
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                부산은행
                            </td>
                            <td colspan="1" rowspan="1">
                                032
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                            <td colspan="1" rowspan="1">
                                23:30 ~ 00:30
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <h2 class="">
                환불정책
            </h2>
            <blockquote class="mb-12 blockquote body-1">
                -개념: 계좌결제에서는 한번 출금된 거래건은 원복되지 않습니다. 다만 환불을 요청하는 고객들을 지원하기 위해서 페이플에서 환불대행서비스를 지원합니다.<br/><br/>
                가맹점에서 페이플로 환불요청을 하게 되면 페이플에서 고객에게 결제대금을 송금하며, 그 대금은 가맹점에 지급해야하는 정산예정금액에서 차감합니다.<br/><br/>
                -환불시간: 환불요청시 즉시 처리됩니다.<br/><br/>
                -서비스 오픈여부: 가맹점에 추가비용이 발생하여, 별도 신청시에 오픈하여 드립니다. help@payple.kr로 문의주세요.<br/><br/>
                -유의사항: 환불시에는 결제수수료가 원복되지 않으며, 환불대행수수료가 추가과금됩니다.<br/><br/>
                -환불의 제한: 결제완료된 건을 취소하게 되면 페이플에서 해당금액을 앞으로 가맹점에 정산할 예정금액에서 차감합니다. 차감될 정산예정금액이 남아 있지 않은 경우에는 취소가 불가합니다.
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
POST 가맹점 인증 후 리턴받은 PCD_PAY_URL HTTP/1.1
Host: 가맹점 인증 후 리턴받은 PCD_PAY_HOST
Content-Type: application/json
Cache-Control: no-cache
{
  "PCD_CST_ID": "가맹점 인증 후 리턴받은 cst_id",
  "PCD_CUST_KEY": "가맹점 인증 후 리턴받은 custKey",
  "PCD_AUTH_KEY": "가맹점 인증 후 리턴받은 AuthKey",
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
