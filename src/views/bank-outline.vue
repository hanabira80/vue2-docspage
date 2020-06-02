<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2 mb-8">계좌결제 개요</h1>
        <p class="mb-12">
            페이플 계좌결제는 최초 1회 계좌등록 후 결제 가능한 서비스입니다.<br />
            ARS인증 혹은 SMS인증만으로 계좌등록과 결제가 완료되기 때문에 별도 앱 설치, 보안카드, 공인인증서 등이 필요 없습니다.<br />
            실시간계좌이체를 대체하는 단건결제, 정기결제, 링크결제 서비스를 제공하고 있습니다.
        </p>

        <article class="mb-12">
            <v-alert border="left" colored-border color="deep-purple accent-4" elevation="2" class="mb-8">
                <h3 class="mb-4">특징</h3>
                <p class="pl-2">
                    <b>회원가입 없이 결제가능</b><br />
                    별도의 회원가입 절차 없이 결제가 가능합니다.
                </p>
                <p class="pl-2">
                    <b>빠른개발</b><br />
                    페이플에서 제공하는 javascript 라이브러리와 샘플코드를 통해 손쉬운 개발이 가능합니다.
                </p>
                <p class="pl-2">
                    <b>비밀번호를 등록 후 간편결제 가능</b><br />
                    첫 결제 시 비밀번호를 등록하면 재결제를 할 때 비밀번호 입력만으로 결제가 가능합니다.
                </p>
            </v-alert>

            <v-alert border="left" colored-border color="deep-purple accent-4" elevation="2" class="mb-8">
                <h3 class="mb-4">서비스 종류</h3>
                <p class="pl-2">
                    <b>단건결제</b><br />
                    단 건으로 결제하는 것을 말합니다. 결제 시마다 새롭게 계좌정보 입력과 본인인증을 거칩니다.
                </p>
                <p class="pl-2">
                    <b>정기결제</b><br />
                    정기결제 서비스를 사용하는 경우 결제 연도와 월이 중복되지 않게 도와주는 결제 서비스입니다.<br />
                    예) A고객이 2020년 2월에 결제한 내역이 존재할 경우 2020년 2월에 중복으로 결제할 수 없습니다.
                </p>
                <p class="pl-2">
                    <b>간편결제</b><br />
                    단건결제와 정기결제를 통해 최초 1회 계좌등록 후 재결제시에는 비밀번호만으로 결제 가능한 서비스입니다.
                </p>
                <p class="pl-2">
                    <b>링크결제</b><br />
                    가맹점에서 생성한 링크를 통해 결제할 수 있는 서비스입니다. 고객은 친숙한 문자나 메신저에서 링크주소를 통해 바로 결제할 수 있습니다.
                </p>
            </v-alert>
        </article>

        <article class="mb-12">
            <h2>결제서비스 흐름도</h2>
            <v-divider class="my-6"></v-divider>
            <v-img :src="require('../../src/assets/test 1-1-1.png')" cover class="grey darken-4"></v-img>
        </article>

        <article class="mb-12">
            <h2>샘플 페이지</h2>
            <v-divider class="my-6"></v-divider>
            <p class="pl-4">
                참고 가능한 샘플 페이지 폴더입니다.
            </p>
            <p class="pl-4">
                호출을 위한 각 언어별 샘플을 확인해보세요.
            </p>
            <p class="pl-4">
                응답코드 샘플을 확인해보세요.
            </p>
        </article>

        <article class="mb-12">
            <h2>공통 정의사항</h2>
            <v-divider class="my-6"></v-divider>
            <p class="pl-4">
                인코딩: UTF-8
            </p>
            <p class="pl-4">
                SSL 보안통신 필수
            </p>
            <p class="pl-4">
                메시지 포맷: JSON
            </p>
        </article>

        <article class="mb-12">
            <h2>문의</h2>
            <v-divider class="my-6"></v-divider>
            <p class="pl-4">
                기술문의: dev@payple.kr 을 통해 보다 자세한 문의가 가능합니다.
            </p>
            <p class="pl-4">
                가입문의: 페이플 웹사이트 가입문의하기를 통하시면 가장 빠르게 안내받으실 수 있습니다.
            </p>
        </article>
    </div>
</template>

<script>
import { component as VueCodeHighlight } from "vue-code-highlight";
// import vchTheme from "../../node_modules/vue-code-highlight/themes/prism-coy.css";

export default {
    components: {
        VueCodeHighlight
    },
    data() {
        return {
            subNavi: [
                {
                    text: "홈",
                    disabled: false,
                    to: "/"
                },
                {
                    text: "계좌결제",
                    disabled: true
                }
            ]
        };
    }
};
</script>
