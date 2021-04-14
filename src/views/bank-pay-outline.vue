<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="">빌링키 방식 - 개요</h1>
        <blockquote class="mb-12 blockquote body-1">
            민감한 개인/금융정보인 계좌정보를 교환하는 경우 보안상 문제가 발생할 수 있습니다. <br/>
            이 문제를 예방하기 위해서 페이플에서는 계좌정보와 매칭되는 고유식별정보를 암호화한 키값을 생성하여 가맹점에 제공합니다. <br/>
            이 암호화된 키값을 빌링키(PCD_PAYER_ID)라고 하며, 이 프로세스를 ‘계좌 등록’이라고 합니다. <br/>
            빌링키는 설사 복호화되더라도 계좌정보를 알 수없어 안전합니다. <br/><br/>

            계좌이체에서는 이 빌링키가 필수적으로 사용됩니다. <br/>
            페이플에서 제공하는 결제창에서 고객에게 입력받은 계좌 정보를 페이플에서는 빌링키로 변환하여 가맹점에 전달합니다. <br/>
            이후 결제부터는 가맹점에서 빌링키를 페이플에 전달하여 처리하게 됩니다.
        </blockquote>

        <article class="mb-12">
            <h2 class="">
                빌링키 등록 및 결제요청 방식(PCD_PAY_WORK)
            </h2>
            <blockquote class="mb-8 blockquote body-1">
                빌링키 등록 및 결제요청 방식을 규정합니다.<br/><br/>
                <v-icon class="mr-1 purple--text text--accent-4">mdi-circle-small</v-icon><b>브라우저 안에서 결제데이터를 주고받는 ‘즉시결제(PAY)’ 방식</b><br/>
                <v-icon class="mr-1 purple--text text--accent-4">mdi-circle-small</v-icon><b>가맹점 서버에서 주고받는 ‘결제요청 재컨펌 (CERT)’ 방식</b><br/>
                <v-icon class="mr-1 purple--text text--accent-4">mdi-circle-small</v-icon><b>결제창을 호출하지 않고 REST_API를 통해 기등록된 빌링키로 결제를 요청하는 방식</b><br/><br/>
                이 있습니다.<br/><br/>
                <v-icon class="mr-1 purple--text text--accent-4">mdi-circle-small</v-icon><b>당장 결제를 내지 않고, 빌링키만 등록하는 빌링키 등록(AUTH) 방식</b><br/>
                도 지원합니다.<br/><br/>
                빌링키 등록 방식을 통해 가맹점은 결제수단별 빌링키를 사전에 발급받고, 추후 결제를 낼 수 있습니다.
            </blockquote>
            <v-card max-width="1000" raised class="pa-2 ma-4 mb-12">
                <v-img :src="require('../../src/assets/4-1.png')" cover class="white "></v-img>
            </v-card>

            <h2 class="">
                결제요청 방식 선택
            </h2>
            <blockquote class="mb-8 blockquote body-1">
                결제창을 호출하여 결제를 하는 경우 CERT와 PAY방식 중 하나를 선택해야 합니다.<br/>
                ( 간편결제, 정기결제(첫결제)에 모두 적용됩니다.)
            </blockquote>

            <h3 class="pl-4">
                1-1. 결제요청 재컨펌 (CERT)
                <v-avatar rounded size="28" color="deep-purple accent-2">
                    <span class="white--text caption">
                        권장
                    </span>
                </v-avatar>
            </h3>
            <blockquote class="blockquote body-1">
                브라우저(결제창)에서 결제요청과 승인을 모두 처리하는 PAY방식과 달리, CERT방식에서는 최종 결제요청이 브라우저가 아닌 페이플 서버를 통해
                이루어집니다.<br />
                이는 결제자의 PC/모바일 환경에 따라 브라우저의 오류가 발생할 경우에 나타날 수 있는 결제결과데이터 수신실패 케이스를 예방할 수 있다는 장점이
                있습니다.<br />
                또한 결제자가 결제정보를 입력하는 도중에 일어나는 재고(인벤토리)변화에 따라, 결제요청을 결제직전에 마지막으로 가맹점에서 확인하여야 하는 경우
                유용하게 쓸 수 있습니다.
            </blockquote>
            <v-card max-width="1000" raised class="pa-2 ma-4 mb-12">
                <v-img :src="require('../../src/assets/b-4-3@2x.png')" cover class="white "></v-img>
            </v-card>

            <h3 class="pl-4">
                1-2. 즉시 결제(PAY)
            </h3>
            <blockquote class="blockquote body-1">
                페이플 브라우저(결제창) 안에서 결제요청과 결제가 이루어지는 방식입니다.<br/>
                직관적이지만, 결제자의 PC/모바일 오류가 브라우저에 영향을 미칠시 결제결과데이터의 수신이 실패될 수 있습니다.<br/>
                즉시결제(PAY)를 선택한 경우 결제결과데이터 수신의 정합성을 담보하기 위해 웹훅(Webhook) URL을 등록하는 것을 권장합니다.<br/>
                관련 정보는 <router-link to="/webhook">여기</router-link> 에서 확인 할 수 있습니다.
            </blockquote>
            <v-card max-width="1000" raised class="pa-2 ma-4 mb-12">
                <v-img :src="require('../../src/assets/b-4-2@2x.png')" cover class="white "></v-img>
            </v-card>

            

            <h3 class="pl-4">
                2. 빌링키 등록(AUTH)
            </h3>
            <blockquote class="blockquote body-1">
                자바스크립트를 이용하여 결제를 하기 위해서는 PAY와 CERT방식중에 하나를 선택하여야 하지만 빌링키 생성을 위해 빌링키 등록(AUTH)만 수행할 경우에는 실제 결제가 일어나는 것이 아니므로 AUTH를 선택하여 빌링키만 발급받습니다.
            </blockquote>
            <v-card max-width="1000" raised class="pa-2 ma-4 mb-12">
                <v-img :src="require('../../src/assets/b-4-4@2x.png')" cover class="white "></v-img>
            </v-card>
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
                    text: "계좌이체",
                    disabled: true,
                },
                {
                    text: "빌링키방식",
                    disabled: true,
                },
                {
                    text: "빌링키방식 개요",
                    disabled: true,
                },
            ],
        };
    },
};
</script>
