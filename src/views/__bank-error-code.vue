<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2 mb-8">응답코드 처리안내</h1>

        <article class="mb-12">
            <h2>CORS(origin) 처리안내</h2>
            <v-divider class="my-6"></v-divider>

            <p>
                페이플은 API에서 CROS Allow를 처리하지 않습니다. 따라서 ajax 등의 javascript 통신은 오류가 발생합니다. 또한 가맹점 인증이 요청된 서버를 기준으로
                결과가 리턴됩니다. 만약 가맹점 인증요청 서버와 업무처리요청 서버가 다른 경우 결과를 수신 받지 못하게 되며 origin 오류가 발생하게 됩니다.
            </p>

            <p>
                원인1) 결제결과를 수신 받지 못하는 경우 해결) 가맹점인증요청 도메인과 결제요청을 보낸 도메인을 같게 설정해야 합니다. # Origin 오류 도메인 설정
                예시 -가맹점인증요청 서버: api.aaa.com -결제요청 서버: www.aaa.com 위와 같이 2차 도메인이 다른 경우에도 오류가 발생합니다.
            </p>

            <p></p>
            <p>
                원인2) 결제창이 호출된 후 창이 닫히지 않는 경우 해결) ‘원인1’의 해결방법과 같습니다.
            </p>
            <p>
                원인3) AWS등의 클라우드 서버의 일부에서 도메인정보가 전송되지 않는 경우 해결) 가맹점인증요청 파일의 ‘header’에 ‘referer’를 추가해야 합니다.
            </p>
        </article>

        <article class="mb-12">
            <h2>페이스북, 카카오톡 등 외부 앱에 연동되는 인앱브라우저 PCD_RST_URL 처리 방법</h2>
            <v-divider class="my-6"></v-divider>
            <p>
                /sub/fv123fa356a…. (x)<br />
                https://payple.com/sub/fv123fa356a…. (o)
            </p>
        </article>

        <article class="mb-12">
            <h2>특수문자처리 정책</h2>
            <v-divider class="my-6"></v-divider>
            <v-card>
                <v-simple-table height="auto"> 
                    
                </v-simple-table>
            </v-card>

            <p>
                아래의 특수문자는 오류발생 이슈로 사용 할 수 없습니다.
            </p>
        </article>

        <article class="mb-12">
            <h2>서비스가능 은행 및 점검시간</h2>
            <v-divider class="my-6"></v-divider>
            <v-card>
                <v-simple-table height="auto">
                    <thead>
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
                    </thead>
                    <tbody>
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
                                농협
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
                                신협
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
                                수협
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
        </article>

        <article class="mb-12">
            <h2>문의</h2>
            <v-divider class="my-6"></v-divider>
            <v-card>
                <v-simple-table height="auto"> </v-simple-table>
            </v-card>

            <p>
                아래의 특수문자는 오류발생 이슈로 사용 할 수 없습니다.
            </p>
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
            toolTipShow: false,
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
                    text: "계좌결제",
                    disabled: false,
                    to: "/bank/outline"
                },
                {
                    text: "응답코드 처리",
                    disabled: true
                }
            ]
        };
    }
};
</script>
