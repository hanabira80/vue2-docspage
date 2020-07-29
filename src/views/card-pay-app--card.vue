<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-12">앱카드결제</h1>
        <blockquote class="mb-12 blockquote body-1">
            카드사가 제공하는 앱카드 인증방식으로 결제를 내는 방식입니다.<Br/>
            빌링키(PCD_PAYER_ID)를 사용하지 않기 때문에 카드 등록 단계가 없습니다.<br/>
            또한, 앱카드결제 방법은 결제창 호출만으로 결제를 내기 때문에 REST_API를 사용하지 않습니다.
        </blockquote>

        <article class="mb-12">
            <h2 class="">
                앱카드결제
            </h2>

            <v-card max-width="1000" raised class="pa-2 ma-4 mb-12">
                <v-img :src="require('../../src/assets/c-9-1@2x.png')" cover class="grey darken-4 "></v-img>
            </v-card>

            <v-alert border="left" colored-border type="error" elevation="2" class="mx-4">
                결제요청을 위한 선행단계로 가맹점 인증 단계를 거쳐야 합니다. <br/>
                앱카드결제에 필요한 가맹점 인증요청 파일(payple_auth_file)에 담겨야 하는 정보는 <router-link to="/card/install/auth">이곳</router-link>을 확인해보세요.
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
                                PAY
                            </td>
                            <td colspan="1" rowspan="1">결제요청 방식<br />- CERT: 결제요청 재컨펌 (CERT)<br />- PAY: 즉시결제</td>
                        </tr>
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
                                02
                            </td>
                            <td colspan="1" rowspan="1">
                                02: 앱카드결제
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
                                카드결제 요청금액 (최소 100원)
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
                            <td colspan="1" rowspan="1">
                                PCD_RST_URL
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
                                https://aaa.com/sub/fv1..
                            </td>
                            <td colspan="1" rowspan="1">
                                결제(요청)결과 RETURN URL - 결제결과를 콜백함수가 아닌 URL로 수신할 경우만 해당<br />- 모바일에서 팝업방식은 상대경로, 다이렉트
                                방식은 절대경로로 설정
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
                                https://aaa.com/sub..
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 인증 파일 경로
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                callbackFunction
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                getResult
                            </td>
                            <td colspan="1" rowspan="1">
                                결제결과를 받을 수 있는 callback 함수 (PCD_RST_URL도 같이 사용합니다)
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
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
                                PCD_PAY_WORK
                            </td>
                            <td colspan="1" rowspan="1">
                                PAY
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 요청방식
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_CARD_VER
                            </td>
                            <td colspan="1" rowspan="1">
                                02
                            </td>
                            <td colspan="1" rowspan="1">
                                02: 앱카드결제
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
                                Qx...
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
                                https://...
                            </td>
                            <td colspan="1" rowspan="1">
                                CERT - 결제승인 후 리턴 URL
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
                                결제고객 핸드폰 번호
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
                                2019041413203326920
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
                                20190901140130
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
                                ‘N’ – 고정 값
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
                    </tbody>
                </v-simple-table>
            </v-card>

            <h3 class="pl-4">
                샘플코드
            </h3>

            <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                <div class="d-flex align-center pa-4">
                    <div class="font-italic font-weight-bold">
                        PHP 샘플코드
                    </div>

                    <div class="ml-auto">
                        <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-php" target="_blank">
                            <v-icon left>
                                mdi-gitlab
                            </v-icon>
                            Github
                        </v-btn>
                    </div>
                </div>
                <Prism language="php">
                    {{ code_1_1 }}
                </Prism>
            </v-card>

            <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                <div class="d-flex align-center pa-4">
                    <div class="font-italic font-weight-bold">
                        JAVA 샘플코드
                    </div>

                    <div class="ml-auto">
                        <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-java" target="_blank">
                            <v-icon left>
                                mdi-gitlab
                            </v-icon>
                            Github
                        </v-btn>
                    </div>
                </div>
                <Prism language="javascript">
                    {{ code_1_2 }}
                </Prism>
            </v-card>

            <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                <div class="d-flex align-center pa-4">
                    <div class="font-italic font-weight-bold">
                        Node 샘플코드
                    </div>

                    <div class="ml-auto">
                        <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-nodeJS" target="_blank">
                            <v-icon left>
                                mdi-gitlab
                            </v-icon>
                            Github
                        </v-btn>
                    </div>
                </div>
                <Prism language="javascript">
                    {{ code_1_3 }}
                </Prism>
            </v-card>
        </article>
        <v-divider class="mb-12"></v-divider>

        <article class="mb-12">
            <h2 class="">
                결제요청 재컨펌 (PCD_PAY_WORK : CERT)
            </h2>
            <blockquote class="mb-8 blockquote body-1">
                최종 결제요청을 위해 REST API를 통해 결제를 요청할 수 있습니다.<br/>
                PCD_PAY_WORK : PAY (즉시결제)의 경우와는 달리 CERT(결제요청 재컨펌 (CERT)) 방식에서는 최종 승인 요청을 별도로 주어야 합니다.<br/>
                결제요청 재컨펌 (CERT) 방식에 대한 설명은 <router-link to="/card/pay/outline">이곳</router-link>에서 확인하실 수 있습니다
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
                                -
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
                    {{ code_2_1 }}
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
                    text:"기타방식",
                    disabled: true,
                },
                {
                    text:"앱카드결제",
                    disabled: true,
                },
            ],
            code_1_1: `
<!-- payple js 호출. 테스트/운영 선택 -->
<script src="https://testcpay.payple.kr/js/cpay.payple.1.0.1.js">< /script> <!-- 테스트 -->
<script src="https://cpay.payple.kr/js/cpay.payple.1.0.1.js">< /script> <!-- 운영 -->
 
<script>	
$(document).ready( function () {        
    $('#payAction').on('click', function (event) {
        
var obj = new Object();
		obj.PCD_CPAY_VER = "1.0.1";
		obj.PCD_PAY_TYPE = "card";           
		obj.PCD_PAY_WORK = "PAY";

		/* 02 : 앱카드결제 */
		obj.PCD_CARD_VER = "02"
		
		/* 가맹점 인증요청 파일 */
		obj.payple_auth_file = "가맹점 인증요청 파일";
				

		obj.PCD_PAYER_NO = 1234;
		obj.PCD_PAYER_NAME = "홍길동";
		obj.PCD_PAYER_HP = "01011112222";
		obj.PCD_PAYER_EMAIL = "dev@payple.kr";
		obj.PCD_PAY_GOODS = "상품1";
		obj.PCD_PAY_TOTAL = 100;
		obj.PCD_PAY_ISTAX = "Y";
		obj.PCD_PAY_TAXTOTAL = 10;
		obj.PCD_PAY_OID = "";

		/* 결과를 콜백 함수로 받고자 하는 경우 함수 설정 추가 */
		//obj.callbackFunction = getResult;  // getResult : 콜백 함수명 
		/* End : 결과를 콜백 함수로 받고자 하는 경우 함수 설정 추가 */
			
		/* 결과를 콜백 함수가 아닌 URL로 받고자 하는 경우 */
		obj.PCD_RST_URL = '결제 결과 받을 페이지';
		/* End : 결과를 콜백 함수가 아닌 URL로 받고자 하는 경우 */
		
		PaypleCpayAuthCheck(obj);
		
		event.preventDefault();  

    });   
});
< /script>
<button id=”payAction”>앱카드 결제하기</button>
`,

            code_1_2: `
java
`,
            code_1_3: `
<script src="https://testcpay.payple.kr/js/cpay.payple.1.0.1.js">< /script> <!-- 테스트 -->
<script src="https://cpay.payple.kr/js/cpay.payple.1.0.1.js">< /script> <!-- 운영 -->
 
<script>	
$(document).ready( function () {        
    $('#payAction').on('click', function (event) {
        
var obj = new Object();
		obj.PCD_CPAY_VER = "1.0.1";
		obj.PCD_PAY_TYPE = "card";           
		obj.PCD_PAY_WORK = "PAY";

		/* 02 : 앱카드결제 */
		obj.PCD_CARD_VER = "02"
		
		/* 가맹점 인증요청 파일 */
		obj.payple_auth_file = "app.post의 path";
				

		obj.PCD_PAYER_NO = 1234;
		obj.PCD_PAYER_NAME = "홍길동";
		obj.PCD_PAYER_HP = "01011112222";
		obj.PCD_PAYER_EMAIL = "dev@payple.kr";
		obj.PCD_PAY_GOODS = "상품1";
		obj.PCD_PAY_TOTAL = 100;
		obj.PCD_PAY_ISTAX = "Y";
		obj.PCD_PAY_TAXTOTAL = 10;
		obj.PCD_PAY_OID = "";

		/* 결과를 콜백 함수로 받고자 하는 경우 함수 설정 추가 */
		//obj.callbackFunction = getResult;  // getResult : 콜백 함수명 
		/* End : 결과를 콜백 함수로 받고자 하는 경우 함수 설정 추가 */
			
		/* 결과를 콜백 함수가 아닌 URL로 받고자 하는 경우 */
		obj.PCD_RST_URL = 'app.post의 path';
		/* End : 결과를 콜백 함수가 아닌 URL로 받고자 하는 경우 */
		
		PaypleCpayAuthCheck(obj);
		
		event.preventDefault();  

    });   
});
< /script>
 <button id=”payAction”>앱카드 결제하기</button>
`,
            code_2_1: `
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
  "PCD_PAY_REQKEY": "결제요청 후 리턴받은 PCD_PAY_REQKEY"
}
`,
        };
    },
};
</script>
