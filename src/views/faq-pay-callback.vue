<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-12">FAQ</h1>
        <h3 class="mb-12">
            PCD_RST_URL & Callback 함수의 설정
        </h3>

        <article class="mb-12">
            <div>
                <b>1. PCD_RST_URL의 역할은 크게 2가지입니다.</b>
            </div>
            <div class="mt-6 pl-4">
                (1) 결제(요청)결과 RETURN URL <br />
                PCD_RST_URL 요청변수에 가맹점에서 입력한 URL로 결제결과를 수신할 수 있습니다.<br /><br />

                (2) 결제창 호출방식 설정<br />
                (2-1) PCD_RST_URL의 경로를 상대경로로 지정하면 PC에서는 레이어팝업 방식으로, 모바일에서는 새탭(새창) 방식으로 결제창을 호출합니다.<br /><br />

                (2-2) PCD_RST_URL의 경로를 절대경로로 지정하면 PC, 모바일 모든 환경에서 다이렉트(현재창에서 바로 결제창을 호출) 방식을 사용할 수
                있습니다.<br /><br />
            </div>

            <v-alert border="left" colored-border type="error" elevation="2" class="mx-4">
                <b>상대경로</b>는 https:// 로 시작하지 않고, 중간경로( /sample/pay.html)를 표기한 URL입니다.<br />
                <b>절대경로</b>는 https:// 로 시작하는 전체경로(https://payple.kr/sample/pay.html)를 표기한 URL입니다.
            </v-alert>
            <div class="mt-6 pl-4">
                (2-3) 가맹점에서는 결제자(useragent)의 접속환경 정보를 파악하여 절대경로와 상대경로를 혼용하여 사용할 경우 환경별로 다른 결제창을 호출할 수
                있습니다.<br /><br />

                예를 들어 PC에서 접속하는 결제자에게는 레어어팝업방식을, 모바일에서 접속하는 결제자에게는 다이렉트 방식으로 연동하는 식입니다.<br /><br />

                접속환경별 호출방식의 특성은 다음과 같습니다.<br /><br />
                <v-simple-table class="table-hover-disable">
                    <colgroup>
                        <col />
                        <col width="40%" />
                        <col width="40%" />
                    </colgroup>
                    <thead>
                        <th class="pa-2"></th>
                        <th class="pa-2">PC</th>
                        <th class="pa-2">모바일</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pa-2">
                                상대경로
                            </td>
                            <td class="text-left pa-2" style="vertical-align:top">
                                <b>레이어팝업</b><br /><br />
                                PC환경에서 <span class="deep-purple--text">범용적</span>으로 사용하는 방식입니다.
                            </td>
                            <td class="text-left pa-2" style="vertical-align:top">
                                <b>새탭(새창)</b><br /><br />
                                1. 모바일 환경설정에 <span class="deep-purple--text">팝업차단 설정이 ON</span>되어 있으면 창이 열리지 않습니다. <br /><br />
                                2. 카카오톡,페이스북 등의 인앱 브라우저에서 결제가 발생하는 경우에는 다이렉트 방식을 사용 권장합니다.
                            </td>
                        </tr>
                        <tr>
                            <td class="pa-2">
                                절대경로
                            </td>
                            <td class="text-left pa-2" style="vertical-align:top">
                                <b>다이렉트</b><br /><br />
                                보통 PC에서는 레이어팝업을 사용하기에 <span class="deep-purple--text">고객에게 생소</span>할 수 있습니다
                            </td>
                            <td class="text-left pa-2" style="vertical-align:top">
                                <b>다이렉트</b><br /><br />
                                모바일 환경설정에 <span class="deep-purple--text">팝업차단 설정이 ON되어 있어도 결제</span> 할 수 있습니다.
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </div>
            <div class="mt-8">
                <b>2. callbackFuntion 기능</b>
            </div>
            <div class="mt-6 pl-4">
                callbackFuntion은 결과(요청)결과를 수신 받으실 수 있는 기능으로, <br />
                PCD_RST_URL의 (1)번 기능을 대체하여 사용할 수 있습니다.
            </div>
            <v-alert border="left" colored-border type="error" elevation="2" class="mt-6 mx-4">
                callbackFunction을 사용한다고 해서 PCD_RST_URL을 비워놓으시면 안됩니다.<br />
                PCD_RST_URL은 항상 필수로 입력되어야 하는 요청변수입니다.
            </v-alert>
        </article>
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
                    text: "faq",
                    disabled: false,
                    to: "/faq",
                },
                {
                    text: "PCD_RST_URL & Callback",
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
        };
    },
};
</script>
