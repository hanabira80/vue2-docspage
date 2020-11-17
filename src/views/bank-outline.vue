<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-4">계좌이체 개요</h1>
        <blockquote class="mb-12 blockquote body-1">
            페이플 카드결제 서비스는 간편결제, 정기결제와 같은<br />
            새로운 비즈니스모델과 서비스를 지원하기 위해 다양한 결제방식을 제공합니다.
        </blockquote>

        <article class="mb-12">
            <h2>조감도</h2>

            <v-card max-width="1000" raised class="pa-2 ma-4 mb-12">
                <!-- <div class="overline pa-2">첫결제 (빌링키 발급 전)</div> -->
                <v-img :src="require('../../src/assets/1-1.png')" cover class="white "></v-img>
            </v-card>

            <v-row class="mb-12 align-stretch">
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4" height="100%">
                        <v-card-text>
                            <p class="title text--primary">
                                비밀번호 자동결제
                            </p>
                            <div class="text--primary">
                                빌링키 등록시, 6자리 비밀번호를 설정하고 재결제시 비밀번호 인증을 받아 부정사용을 방지하는 결제방식입니다.
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4" height="100%">
                        <div class="overline pa-2">빌링키 등록 - 최초결제</div>
                        <v-img :src="require('../../src/assets/1-7.png')" cover class="white mx-auto"></v-img>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4" height="100%">
                        <div class="overline pa-2">비밀번호 인증 - 재결제</div>
                        <v-img :src="require('../../src/assets/1-3.png')" cover class="white mx-auto"></v-img>
                    </v-card>
                </v-col>
            </v-row>
            <!-- <v-divider class="my-8"></v-divider> -->

            <v-row class="mb-8 align-stretch">
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4" height="100%">
                        <v-card-text>
                            <p class="title text--primary">
                                일회성 간편결제
                            </p>
                            <div class="text--primary">
                                최초결제시에 빌링키 등록과 결제가 동시에 이루어지나 재결제시에 등록된빌키를 사용하지 않는 결제방식입니다. 매번 계좌 정보를
                                입력하여 결제를 하게 됩니다.
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4" height="100%">
                        <div class="overline pa-2">빌링키 등록 - 최초결제</div>
                        <v-img :src="require('../../src/assets/1-7.png')" cover class="white mx-auto"></v-img>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4" height="100%">
                        <div class="overline pa-2">빌링키 등록 - 재결제</div>
                        <v-img :src="require('../../src/assets/1-7.png')" cover class="white mx-auto"></v-img>
                    </v-card>
                </v-col>
            </v-row>
            <!-- <v-divider class="my-8"></v-divider> -->

            <v-row class="mb-8 align-stretch">
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4" height="100%">
                        <v-card-text>
                            <p class="title text--primary">
                                정기 결제
                            </p>
                            <div class="text--primary">
                                빌링키 등록 후, 다양한 결제주기에 맞춰 정기결제를 할 수 있는 서비스입니다.
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4" height="100%">
                        <div class="overline pa-2">빌링키 등록</div>
                        <v-img :src="require('../../src/assets/1-7.png')" cover class="white mx-auto"></v-img>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4" height="100%">
                        <div class="overline pa-2">재결제</div>
                        <v-img :src="require('../../src/assets/1-4.png')" cover class="white mx-auto"></v-img>
                    </v-card>
                </v-col>
            </v-row>
            <!-- <v-divider class="my-8"></v-divider> -->

            <!-- <v-row class="mb-8 align-stretch">
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4" height="100%">
                        <v-card-text>
                            <p class="title text--primary">
                                월 1회 정기결제
                            </p>
                            <div class="text--primary">
                                월1회만 결제를 낼 수 있도록 페이플에서 계좌당 월1회를 초과되는 결제시도를 차단하여, 중복결제를 방지합니다.
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4" height="100%">
                        <div class="overline pa-2">빌링키 등록</div>
                        <v-img :src="require('../../src/assets/1-1.png')" cover class="white mx-auto"></v-img>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4" height="100%">
                        <div class="overline pa-2">재결제</div>
                        <v-img :src="require('../../src/assets/1-8.png')" cover class="white mx-auto"></v-img>
                    </v-card>
                </v-col>
            </v-row> -->
            <!-- <v-divider class="my-8"></v-divider> -->

            <v-row class="mb-8 align-stretch">
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4" height="100%">
                        <v-card-text>
                            <p class="title text--primary">
                                URL링크결제
                            </p>
                            <div class="text--primary">
                                페이플에서 제공하는 관리자사이트에서 결제링크를 생성해 결제를 받는 방식입니다. 따라서 개발연동과정이 필요가 없습니다.
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4" height="100%">
                        <div class="overline pa-2">링크생성</div>
                        <v-img :src="require('../../src/assets/1-5.png')" cover class="white mx-auto"></v-img>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4" height="100%">
                        <div class="overline pa-2">링크 접속 후 결제</div>
                        <v-img :src="require('../../src/assets/1-7.png')" cover class="white mx-auto"></v-img>
                    </v-card>
                </v-col>
            </v-row>
            <!-- <v-divider class="my-8"></v-divider> -->

            <v-card class="temp_table ma-4 mb-12">
                <v-simple-table class="table-hover-disable">
                    <tbody>
                        <tr>
                            <td colspan="1" rowspan="2"></td>
                            <td colspan="2" rowspan="1">
                                간편결제
                            </td>
                            <td colspan="1" rowspan="2">
                                정기결제
                            </td>
                            <td colspan="2" rowspan="1">
                                기타
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                비밀번호 간편결제
                            </td>
                            <td colspan="1" rowspan="1">
                                일회성 간편결제
                            </td>
                            <td colspan="1" rowspan="1">
                                URL링크결제
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                빌링키 등록
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                △ (빌링키 등록은 되지만, 발급된 빌링키를 사용하지 않음)
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                △ (빌링키 등록은 되지만, 발급된 빌링키를 사용하지 않음)
                            </td>
                        </tr>
                        <!-- <tr>
                            <td colspan="1" rowspan="1">
                                빌링키등록 방식
                            </td>
                            <td colspan="1" rowspan="1">
                                계좌등록
                            </td>
                            <td colspan="1" rowspan="1">
                                계좌등록
                            </td>
                            <td colspan="1" rowspan="1">
                                계좌등록
                            </td>
                            <td colspan="1" rowspan="1">
                                X
                            </td>
                            <td colspan="1" rowspan="1">
                                X
                            </td>
                        </tr> -->
                        <tr>
                            <td colspan="1" rowspan="1">
                                최초결제 방식
                            </td>
                            <td colspan="1" rowspan="1">
                                결제창 호출 (javascript)
                            </td>
                            <td colspan="1" rowspan="1">
                                결제창 호출 (javascript)
                            </td>
                            <td colspan="1" rowspan="1">
                                1.빌링키 등록과 동시에 결제까지 진행시, 결제창 호출(javascript)<br/>
                                2. 빌링키 등록은 사전에 되어 있고, 최초결제만 진행시에는 REST API 사용
                            </td>
                            <td colspan="1" rowspan="1">
                                링크주소로 고객이 직접 접속하여 결제
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                재결제 방식
                            </td>
                            <td colspan="1" rowspan="1">
                                최초결제와 동일
                            </td>
                            <td colspan="1" rowspan="1">
                                최초결제와 동일
                            </td>
                            <td colspan="1" rowspan="1">
                                REST API
                            </td>
                            <td colspan="1" rowspan="1">
                                최초결제와 동일
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                월 중복결제 방지기능
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                X
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                비밀번호 설정기능
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                X
                            </td>
                            <td colspan="1" rowspan="1">
                                X
                            </td>
                            <td colspan="1" rowspan="1">
                                X
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                연동개발 필요
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                X
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
// import vchTheme from "../../node_modules/vue-code-highlight/themes/prism-coy.css";

export default {
    components: {
        VueCodeHighlight,
    },
    data() {
        return {
            toolTipShow: false,
            code_1: `
POST /php/auth.php HTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Cache-Control: no-cache //가맹점 인증 API를 요청하는 서버와 결제창을 띄우는 서버가 다른 경우 또는 AWS 이용 가맹점인 경우 REFERER
referer: https://가맹점 도메인

{
    "cst_id": "test",
    "custKey": "abcd1234567890"
}
`,
            subNavi: [
                {
                    text: "홈",
                    disabled: false,
                    to: "/",
                },
                {
                    text: "계좌결제",
                    disabled: true,
                },
                {
                    text: "계좌결제 개요",
                    disabled: true,
                },
            ],
        };
    },
};
</script>
