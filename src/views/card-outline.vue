<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2 mb-8">카드결제 개요</h1>
        <p class="mb-12">
            페이플 카드결제 서비스는 간편결제, 정기결제와 같은 새로운 비즈니스모델과 서비스를 지원하기 위해 다양한 결제방식을 제공합니다.
        </p>

        <article class="mb-12">
            <h2>결제서비스 흐름도</h2>

            <v-divider class="my-6"></v-divider>

            <v-img :src="require('../../src/assets/test-2.png')" max-width="600" cover class="grey darken-4 mx-auto mb-8"></v-img>
            <!-- <v-divider class="my-8"></v-divider> -->

            <v-row class="mb-8">
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4">
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
                    <v-card raised col="12" sm="4">
                        <div class="overline pa-2">빌링키 등록 - 최초결제</div>
                        <v-img :src="require('../../src/assets/test-1.png')" cover class="grey darken-4 mx-auto"></v-img>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4">
                        <div class="overline pa-2">비밀번호 인증 - 재결제</div>
                        <v-img :src="require('../../src/assets/test-1.png')" cover class="grey darken-4 mx-auto"></v-img>
                    </v-card>
                </v-col>
            </v-row>
            <!-- <v-divider class="my-8"></v-divider> -->

            <v-row class="mb-8">
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4">
                        <v-card-text>
                            <p class="title text--primary">
                                일회성 간편결제
                            </p>
                            <div class="text--primary">
                                최초결제시에 빌링키 등록과 결제가 동시에 이루어지나 재결제시에 등록된빌링키를 사용하지 않는 결제방식입니다. 매번 카드 정보를 입력하여 결제를 하게 됩니다.
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4">
                        <div class="overline pa-2">빌링키 등록 - 최초결제</div>
                        <v-img :src="require('../../src/assets/test-1.png')" cover class="grey darken-4 mx-auto"></v-img>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4">
                        <div class="overline pa-2">빌링키 등록 - 재결제</div>
                        <v-img :src="require('../../src/assets/test-1.png')" cover class="grey darken-4 mx-auto"></v-img>
                    </v-card>
                </v-col>
            </v-row>
            <!-- <v-divider class="my-8"></v-divider> -->

            <v-row class="mb-8">
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4">
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
                    <v-card raised col="12" sm="4">
                        <div class="overline pa-2">빌링키 등록</div>
                        <v-img :src="require('../../src/assets/test-1.png')" cover class="grey darken-4 mx-auto"></v-img>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4">
                        <div class="overline pa-2">재결제</div>
                        <v-img :src="require('../../src/assets/test-1.png')" cover class="grey darken-4 mx-auto"></v-img>
                    </v-card>
                </v-col>
            </v-row>
            <!-- <v-divider class="my-8"></v-divider> -->

            <v-row class="mb-8">
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4">
                        <v-card-text>
                            <p class="title text--primary">
                                월 1회 정기결제
                            </p>
                            <div class="text--primary">
                                월1회만 결제를 낼 수 있도록 페이플에서 카드당 월1회를 초과되는 결제시도를 차단하여, 중복결제를 방지합니다.
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4">
                        <div class="overline pa-2">빌링키 등록</div>
                        <v-img :src="require('../../src/assets/test-1.png')" cover class="grey darken-4 mx-auto"></v-img>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4">
                        <div class="overline pa-2">재결제</div>
                        <v-img :src="require('../../src/assets/test-1.png')" cover class="grey darken-4 mx-auto"></v-img>
                    </v-card>
                </v-col>
            </v-row>
            <!-- <v-divider class="my-8"></v-divider> -->

            <v-row class="mb-8">
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4">
                        <v-card-text>
                            <p class="title text--primary">
                                URL링크결제
                            </p>
                            <div class="text--primary">
                                페이플에서 제공하는 관리자사이트에서 결제링크를  생성해 결제를 받는 방식입니다. 따라서 개발연동과정이 필요가 없습니다.
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4">
                        <div class="overline pa-2">링크생성</div>
                        <v-img :src="require('../../src/assets/test-1.png')" cover class="grey darken-4 mx-auto"></v-img>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4">
                        <div class="overline pa-2">링크 접속 후 결제</div>
                        <v-img :src="require('../../src/assets/test-1.png')" cover class="grey darken-4 mx-auto"></v-img>
                    </v-card>
                </v-col>
            </v-row>
            <!-- <v-divider class="my-8"></v-divider> -->

            <v-row class="mb-8">
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4">
                        <v-card-text>
                            <p class="title text--primary">
                                앱카드결제
                            </p>
                            <div class="text--primary">
                                카드사에서 제공하는 앱카드로 결제하는 방식입니다. 빌링키 등록 단계가 없어, 결제할 때마다 같은 프로세스로 결제합니다.
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4">
                        <div class="overline pa-2">최초결제</div>
                        <v-img :src="require('../../src/assets/test-1.png')" cover class="grey darken-4 mx-auto"></v-img>
                    </v-card>
                </v-col>
                <v-col col="12" sm="4">
                    <v-card raised col="12" sm="4">
                        <div class="overline pa-2">재결제</div>
                        <v-img :src="require('../../src/assets/test-1.png')" cover class="grey darken-4 mx-auto"></v-img>
                    </v-card>
                </v-col>
            </v-row>
            <!-- <v-divider class="my-8"></v-divider> -->

            <v-card>
                <v-simple-table class="table-hover-disable">
                    <thead>
                        <tr>
                            <th colspan="1" rowspan="2"></th>
                            <th colspan="2" rowspan="1">
                                간편결제
                            </th>
                            <th colspan="1" rowspan="2">
                                정기결제
                            </th>
                            <th colspan="2" rowspan="1">
                                기타
                            </th>
                        </tr>
                        <tr>
                            <th colspan="1" rowspan="1">
                                비밀번호 간편결제
                            </th>
                            <th colspan="1" rowspan="1">
                                일회성 간편결제
                            </th>
                            <th colspan="1" rowspan="1">
                                URL링크결제
                            </th>
                            <th colspan="1" rowspan="1">
                                앱카드 결제
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="1" rowspan="1">
                                빌링키 등록
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                △<br />
                                (빌링키 등록은 되지만, 발급된 빌링키를 사용하지 않음)
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                △<br />
                                (빌링키 등록은 되지만, 발급된 빌링키를 사용하지 않음)
                            </td>
                            <td colspan="1" rowspan="1">
                                X
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                빌링키등록 방식
                            </td>
                            <td colspan="1" rowspan="1">
                                카드등록
                            </td>
                            <td colspan="1" rowspan="1">
                                카드등록
                            </td>
                            <td colspan="1" rowspan="1">
                                카드등록
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
                                최초결제 방식
                            </td>
                            <td colspan="1" rowspan="1">
                                결제창 호출 (javascript)
                            </td>
                            <td colspan="1" rowspan="1">
                                결제창 호출 (javascript)
                            </td>
                            <td colspan="1" rowspan="1">
                                1. 빌링키 등록과 동시에 결제까지 진행시, 결제창 호출(javascript)<br />
                                2. 빌링키 등록은 사전에 되어 있고, 최초결제만 진행시에는 REST API 사용
                            </td>
                            <td colspan="1" rowspan="1">
                                링크주소로 고객이 직접 접속하여 결제
                            </td>
                            <td colspan="1" rowspan="1">
                                결제창 호출 (javascript)
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
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <!-- <v-card color="#385F73" dark>
                <v-card-title class="headline">Unlimited music now</v-card-title>

                <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

                <v-card-actions>
                    <v-btn text>Listen Now</v-btn>
                </v-card-actions>
            </v-card>

            <v-card color="#1F7087" dark>
                <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title class="headline">
                            Supermodel
                        </v-card-title>

                        <v-card-subtitle>
                            Foster the People
                        </v-card-subtitle>
                    </div>

                    <v-avatar class="ma-3" size="125" tile>
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
                    </v-avatar>
                </div>
            </v-card>

            <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-4">OVERLINE</div>
                        <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                    <v-btn text>Button</v-btn>
                    <v-btn text>Button</v-btn>
                </v-card-actions>
            </v-card> -->
        </article>

        <article class="mb-12">
            <!-- <v-alert border="left" colored-border color="deep-purple accent-4" elevation="2" class="mb-8">
                <h3 class="mb-4">특징</h3>
                <p class="pl-2">가맹점인증 서버와 결제 서버가 동일해야 origin 오류 없이 진행하실 수 있습니다.</p>
                <p class="pl-2">테스트 URL에서는 실제로 결제가 되지 않으며 본인인증 100원 결제 후 30분 뒤 자동으로 취소됩니다.</p>
                <p class="pl-2">
                    테스트 계정으로 결제 후 부분취소 시 &lsquo;부분취소 불가한 가맹점입니다&rsquo; 응답메시지가 오는 것은 정상 리턴이며 부분취소는 실제 결제
                    서비스에서만 사용하실 수 있습니다.
                </p>
                <p class="pl-2">모든 요청 URL 에서는 최소금액 100원부터 결제가 가능하며 운영 URL 에서는 실제 결제가 이루어지니 주의바랍니다.</p>
                <p class="pl-2">일반결제의 경우 다날의 결제창을 연동하는 것으로 카드를 등록만 하는 것은 불가능합니다.</p>
            </v-alert> -->

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
                    단 건으로 결제하는 것을 말합니다.
                </p>
                <p class="pl-2">
                    <b>정기결제</b><br />
                    결제 연도와 월이 중복되지 않게 도와주는 결제 서비스입니다.<br />
                    <span>
                        예) A고객이 2020년 2월에 결제한 내역이 존재할 경우 2020년 2월에 중복 결제할 수 없습니다.
                    </span>
                </p>
                <p class="pl-2">
                    <b>간편결제</b><br />
                    단 건결제와 정기결제 모두 사용할 수 있으며 패스워드를 등록해서 사용하는 결제 서비스입니다.
                </p>
                <p class="pl-2">
                    <b>일반결제</b><br />
                    다날 결제창을 연동해 사용하는 결제 서비스입니다. 앱카드 등과 같은 결제고객이 사용할 수 있습니다.
                </p>
                <p class="pl-2">
                    <b>링크결제</b><br />
                    링크를 통해 사용자가 결제할 수 있는 서비스입니다. SNS 등에 사용할 수 있습니다.
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
        VueCodeHighlight,
    },
    data() {
        return {
            code_1: `
POST /php/auth.php HTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Cache-Control: no-cache //AWS 이용 가맹점인 경우 REFERER
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
                    text: "카드결제",
                    disabled: true,
                },
            ],
        };
    },
};
</script>
