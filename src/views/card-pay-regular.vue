<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-12">정기결제</h1>
        <blockquote class="mb-12 blockquote body-1">
            결제창을 호출해서 카드등록을 받고 재결제시에는 발급받은 빌링키로 REST API 를 통해 결제요청을 할 수 있는 서비스입니다. <br />
            페이플에서 제공하는 정기결제는 스케줄링(예약)을 거는 방식이 아닌 결제가 필요할때마다 가맹점에서 실시간으로 결제요청을 진행하여 결제승인이 나는
            방식입니다.<br />
            다시 말해, 가맹점에서 언제 해당유저의 빌링키로 결제가 나야하는지 내부로직을 구성하셔야 합니다.<br />
            가맹점의 고객 입장에서는 한번 카드등록 후에 별도의 인증작업없이 결제가 일어나는 것으로 인식하게 됩니다.
        </blockquote>

        <article class="mb-12">
            <h2 class="">
                첫결제(카드 등록)
            </h2>

            <v-card max-width="1000" raised class="pa-2 ma-4 mb-12">
                <v-img :src="require('../../src/assets/c-7-1@2x.png')" cover class="grey darken-4 "></v-img>
            </v-card>

            <v-alert border="left" colored-border type="error" elevation="2" class="mx-4">
                결제요청을 위한 선행단계로 가맹점 인증 단계를 거쳐야 합니다. <br />
                정기결제에 필요한 가맹점 인증요청 방법은 <router-link to="/card/install/auth">이곳</router-link>을 확인해보세요.<br />
                월 중복결제 방지기능(PCD_REGULER_FLAG)을 사용하려면 <router-link to="/card/install/auth">이곳</router-link>을 확인하여 인증 단계를 확인해주세요.
            </v-alert>

            <h3 class="pl-4 mt-12">
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
                                PCD_CPAY_VER
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
                                1.0.1
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 창 버전
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
                                20
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
                                PCD_PAY_WORK
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                20
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                CERT
                            </td>
                            <td colspan="1" rowspan="1">결제요청 방식 - AUTH: 빌링키등록<br />- CERT: 결제요청 재컨펌 (CERT)<br />- PAY: 즉시결제</td>
                        </tr>
                        <!-- <tr>
                            <td colspan="1" rowspan="1">
                                PCD_SIMPLE_FLAG
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
                                간편결제 구분 (비밀번호 결제: Y)
                            </td>
                        </tr> -->
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_CARD_VER
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                2
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                01
                            </td>
                            <td colspan="1" rowspan="1">
                                01: 빌링키결제
                            </td>
                        </tr>
                        <!-- <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_AUTHTYPE
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                pwd
                            </td>
                            <td colspan="1" rowspan="1">
                                비밀번호 결제 인증방식 (PCD_SIMPLE_FLAG: 'Y' 일 때 필수 비밀번호: pwd)
                            </td>
                        </tr> -->
                        <!-- <tr>
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
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                d0to...
                            </td>
                            <td colspan="1" rowspan="1">
                                카드등록 후 리턴받은 빌링키 (PCD_SIMPLE_FLAG: 'Y' 일 때 필수)
                            </td>
                        </tr> -->
                        <!-- <tr>
                            <td colspan="1" rowspan="1">
                                PCD_REGULER_FLAG
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
                                N
                            </td>
                            <td colspan="1" rowspan="1">
                                월 중복결제 방지  (사용: Y, 그 외: N)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_YEAR
                            </td>
                            <td colspan="1" rowspan="1">
                                Number
                            </td>
                            <td colspan="1" rowspan="1">
                                4
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                2020
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 구분 년도 (PCD_REGULER_FLAG: 'Y' 일 때 필수)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_MONTH
                            </td>
                            <td colspan="1" rowspan="1">
                                Number
                            </td>
                            <td colspan="1" rowspan="1">
                                2
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                03
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 구분 월 (PCD_REGULER_FLAG: 'Y' 일 때 필수)
                            </td>
                        </tr> -->
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_OID
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
                                test099942200156938
                            </td>
                            <td colspan="1" rowspan="1">
                                주문번호 (미입력 시 자동생성)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_NO
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
                                1234
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점에서 사용하는 회원번호
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_NAME
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                80
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                홍길동
                            </td>
                            <td colspan="1" rowspan="1">
                                결제고객 이름 *특정제휴카드의 경우 카드소유주의 실명을 인증하며, 실패할 경우 승인이 거절됩니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_HP
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                20
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                01012345678
                            </td>
                            <td colspan="1" rowspan="1">
                                결제고객 핸드폰번호를 전송하시면 고객의 승인문자 민원을 방지하기 위한 알림톡이 발송됩니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_EMAIL
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                100
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                dev@payple.kr
                            </td>
                            <td colspan="1" rowspan="1">
                                해당 이메일 주소로 결제 안내메일이 발송됩니다.
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
                                카드결제  요청금액 (최소 100원)
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
                                11
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                10
                            </td>
                            <td colspan="1" rowspan="1">
                                복합과세(과세+면세) 주문건에 필요한 금액이며 가맹점에서 전송한 값을 부가세로 설정합니다.과세 또는 비과세의 경우 사용하지
                                않습니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1" :class="[$vuetify.theme.dark ? 'table-high-light-bg-dm':'table-high-light-bg']">
                                PCD_RST_URL
                            </td>
                            <td colspan="1" rowspan="1" :class="[$vuetify.theme.dark ? 'table-high-light-bg-dm':'table-high-light-bg']">
                                String
                            </td>
                            <td colspan="1" rowspan="1" :class="[$vuetify.theme.dark ? 'table-high-light-bg-dm':'table-high-light-bg']">
                                -
                            </td>
                            <td colspan="1" rowspan="1" :class="[$vuetify.theme.dark ? 'table-high-light-bg-dm':'table-high-light-bg']">
                                O
                            </td>
                            <td colspan="1" rowspan="1" :class="[$vuetify.theme.dark ? 'table-high-light-bg-dm':'table-high-light-bg']">
                                /result/..
                            </td>
                            <td colspan="1" rowspan="1" :class="[$vuetify.theme.dark ? 'table-high-light-bg-dm':'table-high-light-bg']">
                                1. 결제(요청)결과 RETURN URL <br />
                                결제결과를 URL로 수신할 수 있습니다.<br />
                                콜백함수(callbackFunction)를 사용하면 PCD_RST_URL에 설정한 URL로 결과를 수신할 수 없습니다.<br /><br />

                                2. 결제창 호출방식 설정<br />
                                경로를 상대경로로 지정하면 팝업방식으로,<br />
                                절대경로로 지정하면 다이렉트 방식으로 호출합니다.<br /><br />

                                더 상세한 설명은 <router-link to="/faq/pay/callback" target="_blank">여기</router-link> 에서 확인 할 수 있습니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1" :class="[$vuetify.theme.dark ? 'table-high-light-bg-dm':'table-high-light-bg']">
                                callbackFunction
                            </td>
                            <td colspan="1" rowspan="1" :class="[$vuetify.theme.dark ? 'table-high-light-bg-dm':'table-high-light-bg']"></td>
                            <td colspan="1" rowspan="1" :class="[$vuetify.theme.dark ? 'table-high-light-bg-dm':'table-high-light-bg']">
                                -
                            </td>
                            <td colspan="1" rowspan="1" :class="[$vuetify.theme.dark ? 'table-high-light-bg-dm':'table-high-light-bg']">
                                -
                            </td>
                            <td colspan="1" rowspan="1" :class="[$vuetify.theme.dark ? 'table-high-light-bg-dm':'table-high-light-bg']">
                                getResult
                            </td>
                            <td colspan="1" rowspan="1" :class="[$vuetify.theme.dark ? 'table-high-light-bg-dm':'table-high-light-bg']">
                                PCD_RST_URL대신 결제결과를 받을 수 있는 callback 함수를 설정할 수 있습니다.<br /><br />

                                더 상세한 설명은 <router-link to="/faq/pay/callback" target="_blank">여기</router-link> 에서 확인 할 수 있습니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                payple_auth_file
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                /auth/..
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 인증 파일
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_USER_DEFINE1
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                2048
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 사용 필드 1 <br />
                                (가맹점에 제공하는 메모기능입니다. 가맹점에서 해당 필드값에 넣은 값은 결제 완료 후 그대로 리턴됩니다.)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_USER_DEFINE2
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                2048
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 사용 필드 2 <br/>
                                (가맹점에 제공하는 메모기능입니다. 가맹점에서 해당 필드값에 넣은 값은 결제 완료 후 그대로 리턴됩니다.)
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <h3 class="pl-4">
                샘플코드
            </h3>

            <v-tabs background-color="indigo" grow dark>
                <v-tab color="purple darken-1">
                    <div class=" font-weight-bold">
                        PHP 샘플코드
                    </div>
                </v-tab>
                <v-tab>
                    <div class="font-weight-bold">
                        Java 샘플코드
                    </div>
                </v-tab>
                <v-tab>
                    <div class="font-weight-bold">
                        Node 샘플코드
                    </div>
                </v-tab>

                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-php" target="_blank">
                                    <v-icon left>
                                        mdi-github
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="php">
                            {{ code_1_1 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-java" target="_blank">
                                    <v-icon left>
                                        mdi-github
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="javascript">
                            {{ code_1_2 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-nodeJS" target="_blank">
                                    <v-icon left>
                                        mdi-github
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="javascript">
                            {{ code_1_3 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
            </v-tabs>

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
                                결제요청 결과(success|error)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_MSG
                            </td>
                            <td colspan="1" rowspan="1">
                                카드인증완료
                            </td>
                            <td colspan="1" rowspan="1">
                                결제요청 결과 메시지
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_WORK
                            </td>
                            <td colspan="1" rowspan="1">
                                CERT
                            </td>
                            <td colspan="1" rowspan="1">
                                결제요청방식
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_AUTH_KEY
                            </td>
                            <td colspan="1" rowspan="1">
                                a688ccb355...
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 후 리턴 받은 토큰키
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_REQKEY
                            </td>
                            <td colspan="1" rowspan="1">
                                abcd..
                            </td>
                            <td colspan="1" rowspan="1">
                                CERT - 결제생성 후 승인을 위한 키
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_COFURL
                            </td>
                            <td colspan="1" rowspan="1">
                                http://test..
                            </td>
                            <td colspan="1" rowspan="1">
                                CERT - 결제승인 후 리턴 URL
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_OID
                            </td>
                            <td colspan="1" rowspan="1">
                                test099942200156938
                            </td>
                            <td colspan="1" rowspan="1">
                                주문번호
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
                                ‘card’ – 고정 값
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
                                카드결제 완료금액
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_TAXTOTAL
                            </td>
                            <td colspan="1" rowspan="1">
                                10
                            </td>
                            <td colspan="1" rowspan="1">
                                복합과세(과세+면세) 주문건에 필요한 금액이며 가맹점에서 전송한 값을 부가세로 설정합니다.과세 또는 비과세의 경우 사용하지
                                않습니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_ISTAX
                            </td>
                            <td colspan="1" rowspan="1">
                                Y
                            </td>
                            <td colspan="1" rowspan="1">
                                과세설정 (Default: Y 이며,  과세:Y, 복합과세:Y, 비과세: N)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_EMAIL
                            </td>
                            <td colspan="1" rowspan="1">
                                dev@payple.kr
                            </td>
                            <td colspan="1" rowspan="1">
                                결제자 이메일
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_YEAR
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 구분 년도
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_MONTH
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 구분 월
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDNAME
                            </td>
                            <td colspan="1" rowspan="1">
                                BC 카드
                            </td>
                            <td colspan="1" rowspan="1">
                                카드사명
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDNUM
                            </td>
                            <td colspan="1" rowspan="1">
                                1111 * * * * * * * * 4444
                            </td>
                            <td colspan="1" rowspan="1">
                                카드번호(중간 8자리 * 처리)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDTRADENUM
                            </td>
                            <td colspan="1" rowspan="1">
                                2020031413203326920
                            </td>
                            <td colspan="1" rowspan="1">
                                거래 키
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDAUTHNO
                            </td>
                            <td colspan="1" rowspan="1">
                                98123445
                            </td>
                            <td colspan="1" rowspan="1">
                                승인번호
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDRECEIPT
                            </td>
                            <td colspan="1" rowspan="1">
                                https://www.danal..
                            </td>
                            <td colspan="1" rowspan="1">
                                매출전표 출력 링크
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_TIME
                            </td>
                            <td colspan="1" rowspan="1">
                                20200301140130
                            </td>
                            <td colspan="1" rowspan="1">
                                결제시간
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_REGULER_FLAG
                            </td>
                            <td colspan="1" rowspan="1">
                                N
                            </td>
                            <td colspan="1" rowspan="1">
                                월 중복결제 방지 (사용: Y, 그 외: N)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_RST_URL
                            </td>
                            <td colspan="1" rowspan="1">
                                /result/..
                            </td>
                            <td colspan="1" rowspan="1">
                                결제(요청)결과 RETURN URL
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_USER_DEFINE1
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 입력 값 1
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 사용 필드 1
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_USER_DEFINE2
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 입력 값 2
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 사용 필드 2
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_NAME
                            </td>
                            <td colspan="1" rowspan="1">
                                홍길동
                            </td>
                            <td colspan="1" rowspan="1">
                                결제고객 이름
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>
        </article>
        <v-divider class="mb-12"></v-divider>

        <article class="mb-12">
            <h2 class="">
                결제요청 재컨펌 (PCD_PAY_WORK : CERT)
            </h2>
            <blockquote class="mb-8 blockquote body-1">
                최종 결제요청을 위해 REST API를 통해 결제를 요청할 수 있습니다.
            </blockquote>
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
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                test
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
                                abcd1234567890
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
                                255
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
                                PCD_PAY_REQKEY
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
                                Vnx...
                            </td>
                            <td colspan="1" rowspan="1">
                                최종 승인요청용 키
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
                                카드등록 후 리턴받은 빌링키 (PCD_CARD_VER:01 일 때 필수)
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <h3 class="pl-4">
                샘플코드
            </h3>

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

        <article class="mb-12">
            <h2 class="">
                재결제
            </h2>
            <v-card max-width="1000" raised class="pa-2 ma-4 mb-12">
                <v-img :src="require('../../src/assets/c-7-2@2x.png')" cover class="grey darken-4 "></v-img>
            </v-card>

            <v-alert border="left" colored-border type="error" elevation="2" class="mx-4">
                결제요청을 위한 선행단계로 가맹점 인증 단계를 거쳐야 합니다.<br />
                정기결제에 필요한 가맹점 인증요청 방법은 <router-link to="/card/install/auth">이곳</router-link>을 확인해보세요.<br />
                월 중복결제 방지기능(PCD_REGULER_FLAG)을 사용하려면 <router-link to="/card/install/auth">이곳</router-link>을 확인하여 인증 단계를 확인해주세요
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
                                255
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
                                255
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
                                PCD_PAY_TYPE
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                20
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
                                PCD_PAYER_NO
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
                                1234
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점에서 사용하는 회원번호
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
                                PCD_SIMPLE_FLAG
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                1
                            </td>
                            <td colspan="1" rowspan="2">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                Y
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 인증요청시 요청변수에 PCD_SIMPLE_FLAG를 사용할 경우 필수
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_REGULER_FLAG
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                1
                            </td>
                            <!-- <td colspan="1" rowspan="1">
                                -
                            </td> -->
                            <td colspan="1" rowspan="1">
                                Y
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 인증요청시 요청변수에 PCD_REGULER_FLAG를 사용할 경우 필수
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_YEAR
                            </td>
                            <td colspan="1" rowspan="1">
                                Number
                            </td>
                            <td colspan="1" rowspan="1">
                                4
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                2020
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 구분 년도 (PCD_REGULER_FLAG: 'Y' 일 때 필수) (PCD_REGULER_FLAG: ‘N’이거나 요청변수에서 사용하지 않을 때는 사용하지
                                않습니다.)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_MONTH
                            </td>
                            <td colspan="1" rowspan="1">
                                Number
                            </td>
                            <td colspan="1" rowspan="1">
                                2
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                03
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 구분 월 (PCD_REGULER_FLAG: 'Y' 일 때 필수) (PCD_REGULER_FLAG: ‘N’이거나 요청변수에서 사용하지 않을 때는 사용하지 않습니다.)
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
                                PCD_PAY_OID
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
                                test099942200156938
                            </td>
                            <td colspan="1" rowspan="1">
                                주문번호 (미입력 시 자동생성)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_NAME
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                80
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                홍길동
                            </td>
                            <td colspan="1" rowspan="1">
                                결제고객 이름 *특정제휴카드의 경우 카드소유주의 실명을 인증하며, 실패할 경우 승인이 거절됩니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_HP
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                20
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                01012345678
                            </td>
                            <td colspan="1" rowspan="1">
                                결제고객 핸드폰번호를 전송하시면 고객의 승인문자 민원을 방지하기 위한 알림톡이 발송됩니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_EMAIL
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                100
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                dev@payple.kr
                            </td>
                            <td colspan="1" rowspan="1">
                                해당 이메일 주소로 결제 안내메일이 발송됩니다.
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
                                11
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                10
                            </td>
                            <td colspan="1" rowspan="1">
                                복합과세(과세+면세) 주문건에 필요한 금액이며 가맹점에서 전송한 값을 부가세로 설정합니다.과세 또는 비과세의 경우 사용하지
                                않습니다.
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

                <Prism language="javascript">
                    {{ code_3_1 }}
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
                                결제요청 결과(success|error)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_MSG
                            </td>
                            <td colspan="1" rowspan="1">
                                결제완료
                            </td>
                            <td colspan="1" rowspan="1">
                                결제요청 결과 메시지
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_OID
                            </td>
                            <td colspan="1" rowspan="1">
                                test099942200156938
                            </td>
                            <td colspan="1" rowspan="1">
                                주문번호
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
                                ‘card’ – 고정 값
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
                                PCD_PAYER_NAME
                            </td>
                            <td colspan="1" rowspan="1">
                                홍길동
                            </td>
                            <td colspan="1" rowspan="1">
                                결제고객 이름
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_HP
                            </td>
                            <td colspan="1" rowspan="1">
                                01012345678
                            </td>
                            <td colspan="1" rowspan="1">
                                결제고객 핸드폰번호
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_EMAIL
                            </td>
                            <td colspan="1" rowspan="1">
                                dev@payple.kr
                            </td>
                            <td colspan="1" rowspan="1">
                                결제고객 이메일
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_YEAR
                            </td>
                            <td colspan="1" rowspan="1">
                                2020
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 구분 년도 (PCD_REGULER_FLAG 사용시 응답)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_MONTH
                            </td>
                            <td colspan="1" rowspan="1">
                                03
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 구분 월 (PCD_REGULER_FLAG 사용시 응답)
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
                                카드결제 완료금액
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_TAXTOTAL
                            </td>
                            <td colspan="1" rowspan="1">
                                10
                            </td>
                            <td colspan="1" rowspan="1">
                                복합과세(과세+면세) 주문건에 필요한 금액이며 가맹점에서 전송한 값을 부가세로 설정합니다.과세 또는 비과세의 경우 사용하지
                                않습니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_ISTAX
                            </td>
                            <td colspan="1" rowspan="1">
                                Y
                            </td>
                            <td colspan="1" rowspan="1">
                                과세설정 (Default: Y 이며,  과세:Y, 복합과세:Y, 비과세: N)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_TIME
                            </td>
                            <td colspan="1" rowspan="1">
                                20200301140130
                            </td>
                            <td colspan="1" rowspan="1">
                                결제시간
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDNAME
                            </td>
                            <td colspan="1" rowspan="1">
                                BC 카드
                            </td>
                            <td colspan="1" rowspan="1">
                                카드사명
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDNUM
                            </td>
                            <td colspan="1" rowspan="1">
                                12345678****1234
                            </td>
                            <td colspan="1" rowspan="1">
                                카드번호(중간 8자리 * 처리)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDTRADENUM
                            </td>
                            <td colspan="1" rowspan="1">
                                2020031413203326920
                            </td>
                            <td colspan="1" rowspan="1">
                                거래 키
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDAUTHNO
                            </td>
                            <td colspan="1" rowspan="1">
                                98123445
                            </td>
                            <td colspan="1" rowspan="1">
                                승인번호
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDRECEIPT
                            </td>
                            <td colspan="1" rowspan="1">
                                https://www.danal..
                            </td>
                            <td colspan="1" rowspan="1">
                                매출전표 출력 링크
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_SIMPLE_FLAG
                            </td>
                            <td colspan="1" rowspan="1">
                                Y
                            </td>
                            <td colspan="1" rowspan="1">
                                ‘Y’ 고정
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_REGULER_FLAG
                            </td>
                            <td colspan="1" rowspan="1">
                                Y
                            </td>
                            <td colspan="1" rowspan="1">
                                월 중복결제 방지 (PCD_REGULER_FLAG 사용시 응답)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_USER_DEFINE1
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 입력 값 1
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 사용 필드 1
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_USER_DEFINE2
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 입력 값 2
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 사용 필드 2
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

                <Prism language="javascript">
                    {{ code_3_2 }}
                </Prism>
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
                    text: "카드결제",
                    disabled: true,
                },
                {
                    text: "빌링키방식",
                    disabled: true,
                },
                {
                    text: "정기결제",
                    disabled: true,
                },
            ],
            code_1_1: `
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">< /script>
    <!-- payple js 호출. 테스트/운영 선택 -->
    <script src="https://testcpay.payple.kr/js/cpay.payple.1.0.1.js">< /script> <!-- 테스트 -->
    <script src="https://cpay.payple.kr/js/cpay.payple.1.0.1.js">< /script> <!-- 운영 -->
    
    <script>  
    $(document).ready( function () {    	
        $('#payAction').on('click', function (event) {
            var obj = new Object();
            obj.PCD_CPAY_VER = "1.0.1";
            obj.PCD_PAY_TYPE = "card";       	
            obj.PCD_PAY_WORK = "CERT";

            /* 01 : 빌링키결제 */
            obj.PCD_CARD_VER = "01"
            
            
            /* 가맹점 인증요청 */
            obj.payple_auth_file = "가맹점 인증요청 파일 URL";
            

            obj.PCD_PAYER_NO = 1234;
            obj.PCD_PAYER_NAME = "홍길동";
            obj.PCD_PAYER_HP = "01012345678";
            obj.PCD_PAYER_EMAIL = "dev@payple.kr";
            obj.PCD_PAY_GOODS = "상품1";
            obj.PCD_PAY_TOTAL = 100;
            obj.PCD_PAY_ISTAX = "Y";
            obj.PCD_PAY_TAXTOTAL = 10;

            /* 결과를 콜백 함수로 받고자 하는 경우 함수 설정 추가 */
            //obj.callbackFunction = getResult;  // getResult : 콜백 함수명
                            
            obj.PCD_RST_URL = "결제 결과 받을 파일 URL";
            
            PaypleCpayAuthCheck(obj);
            
            event.preventDefault(); 	
        });  
    });
    < /script>
    <button id="payAction">정기결제</button>
`,
            code_1_2: `
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">< /script>
    <!-- payple js 호출. 테스트/운영 선택 -->
    <script src="https://testcpay.payple.kr/js/cpay.payple.1.0.1.js">< /script> <!-- 테스트 -->
    <script src="https://cpay.payple.kr/js/cpay.payple.1.0.1.js">< /script> <!-- 운영 -->
    
    <script>  
    $(document).ready( function () {    	
        $('#payAction').on('click', function (event) {
            var obj = new Object();
            obj.PCD_CPAY_VER = "1.0.1";
            obj.PCD_PAY_TYPE = "card";       	
            obj.PCD_PAY_WORK = "CERT";

            /* 01 : 빌링키결제 */
            obj.PCD_CARD_VER = "01"
            
            /* 
            가맹점 인증요청
            @RequestMapping 의 URL
            */
            obj.payple_auth_file = "http://localhost:8080/auth";
            

            obj.PCD_PAYER_NO = 1234;
            obj.PCD_PAYER_NAME = "홍길동";
            obj.PCD_PAYER_HP = "01012345678";
            obj.PCD_PAYER_EMAIL = "dev@payple.kr";
            obj.PCD_PAY_GOODS = "상품1";
            obj.PCD_PAY_TOTAL = 100;
            obj.PCD_PAY_ISTAX = "Y";
            obj.PCD_PAY_TAXTOTAL = 10;

            /* 결과를 콜백 함수로 받고자 하는 경우 함수 설정 추가 */
            //obj.callbackFunction = getResult;  // getResult : 콜백 함수명
                            
            /* 
            @RequestMapping 의 URL
            */
            obj.PCD_RST_URL = "/order_result";
            
            PaypleCpayAuthCheck(obj);
            
            event.preventDefault(); 	
        });  
    });
    < /script>
    <button id="payAction">정기결제</button>
`,
            code_1_3: `
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">< /script>
    <!-- payple js 호출. 테스트/운영 선택 -->
    <script src="https://testcpay.payple.kr/js/cpay.payple.1.0.1.js">< /script> <!-- 테스트 -->
    <script src="https://cpay.payple.kr/js/cpay.payple.1.0.1.js">< /script> <!-- 운영 -->
    
    <script>  
    $(document).ready( function () {    	
        $('#payAction').on('click', function (event) {
            var obj = new Object();
            obj.PCD_CPAY_VER = "1.0.1";
            obj.PCD_PAY_TYPE = "card";       	
            obj.PCD_PAY_WORK = "CERT";

            /* 01 : 빌링키결제 */
            obj.PCD_CARD_VER = "01"
            
            
            /* 가맹점 인증요청 파일 */
            obj.payple_auth_file = "app.post의 path";
            

            obj.PCD_PAYER_NO = 1234;
            obj.PCD_PAYER_NAME = "홍길동";
            obj.PCD_PAYER_HP = "01012345678";
            obj.PCD_PAYER_EMAIL = "dev@payple.kr";
            obj.PCD_PAY_GOODS = "상품1";
            obj.PCD_PAY_TOTAL = 100;
            obj.PCD_PAY_ISTAX = "Y";
            obj.PCD_PAY_TAXTOTAL = 10;

            /* 결과를 콜백 함수로 받고자 하는 경우 함수 설정 추가 */
            //obj.callbackFunction = getResult;  // getResult : 콜백 함수명
                            
            obj.PCD_RST_URL = 'app.post의 path';
            
            PaypleCpayAuthCheck(obj);
            
            event.preventDefault(); 	
        });  
    });
    < /script>
    <button id="payAction">정기결제</button>
`,
            code_2_1: `
/* 결제요청 후 리턴받은 PCD_PAY_COFURL 로 결제요청 재컨펌 (CERT)(CERT)  */
POST /php/PayCardConfirmAct.php?ACT_=PAYM HTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Cache-Control: no-cache
{
    "PCD_CST_ID": "test",										
    "PCD_CUST_KEY": "abcd1234567890",								
    "PCD_AUTH_KEY": "결제요청 후 리턴받은 PCD_AUTH_KEY", 
    "PCD_PAY_REQKEY": "결제요청 후 리턴받은 PCD_PAY_REQKEY",					
    "PCD_PAYER_ID": "결제요청 후 리턴받은 PCD_PAYER_ID"
}
`,
            code_3_1: `
/* 
    * 재결제 요청
    * TEST : https://testcpay.payple.kr
    * REAL : https://cpay.payple.kr
    */
    POST 가맹점 인증 후 리턴받은 PCD_PAY_URL HTTP/1.1
    Host: 가맹점 인증 후 리턴받은 PCD_PAY_HOST
    Content-Type: application/json
    Cache-Control: no-cache
        
    {
        "PCD_CST_ID" : "가맹점 인증 후 리턴받은 cst_id",
        "PCD_CUST_KEY" : "가맹점 인증 후 리턴받은 custKey",
        "PCD_AUTH_KEY" : "가맹점 인증 후 리턴받은 AuthKey",
        "PCD_PAY_TYPE": "card",	
        "PCD_PAYER_ID": "d0to...",		
        "PCD_PAY_GOODS": "상품1",	
        "PCD_PAY_TOTAL": 100,
        "PCD_SIMPLE_FLAG": "Y"
    }
`,
            code_3_2: `
{
      "PCD_PAY_RST" => "success|error",
      "PCD_PAY_CODE" => "SPCD0000",
	  "PCD_PAY_MSG" => "카드결제완료|카드결제실패",
	  "PCD_PAY_OID" => "test201804000001",		
	  "PCD_PAY_TYPE" => "card",			
	  "PCD_PAYER_NO" => "",
	  "PCD_PAYER_ID" => "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09",		
      "PCD_PAYER_NAME" => "홍길동",
      "PCD_PAYER_HP":"",
      "PCD_PAYER_EMAIL":"",
	  "PCD_PAY_GOODS" => "상품1",
      "PCD_PAY_TOTAL" => 100,	
      "PCD_PAY_TAXTOTAL":"",
      "PCD_PAY_ISTAX":"Y",
	  "PCD_PAY_TIME" => "20200323130201",
	  "PCD_PAY_CARDNANE" => "BC 카드",	
	  "PCD_PAY_CARDNUM" => "12345678****1234",	
	  "PCD_PAY_CARDTRADENUM" => "201904141320332692022400",
      "PCD_PAY_CARDAUTHNO" => "98123445",
      "PCD_PAY_CARDRECEIPT":"https://www.danalpay..",
	  "PCD_SIMPLE_FLAG" => "Y",
	  "PCD_USER_DEFINE1" => "가맹점 사용 필드 1"	
	  "PCD_USER_DEFINE2" => "가맹점 사용 필드 2"	
}
`,
        };
    },
};
</script>
