<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-12">간편결제</h1>
        <blockquote class="mb-12 blockquote body-1">
            페이플 간편결제란?<br />
            페이플 결제창을 호출해 결제요청을 할 수 있는 서비스입니다. <br />
            일회성 결제방식과 비밀번호를 등록해 결제하는 비밀번호 간편결제 방식이 있습니다. <br />
            비밀번호 결제방식을 사용할 경우 일회성 결제방식에 <br />
            <b>PCD_PAYER_ID, PCD_SIMPLE_FLAG, PCD_PAYER_AUTHTYPE </b><br />
            세가지 요청변수를 추가하시면 됩니다.
        </blockquote>

        <article class="mb-12">
            <h2 class="">
                비밀번호 간편결제
            </h2>

            <v-card max-width="1000" raised class="pa-2 ma-4 mb-12">
                <div class="overline pa-2">첫결제 (빌링키 발급 전)</div>
                <v-img :src="require('../../src/assets/test-1.png')" cover class="grey darken-4 "></v-img>
            </v-card>

            <v-card max-width="1000" raised class="pa-2 ma-4 mb-12">
                <div class="overline pa-2">재결제 (빌링키 발급 후)</div>
                <v-img :src="require('../../src/assets/test-1.png')" cover class="grey darken-4 "></v-img>
            </v-card>

            <v-alert border="left" colored-border type="error" elevation="2" class="mx-4">
                결제요청을 위한 선행단계로 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 단계를 거쳐야 합니다. 해당 내용은 이곳에서 확인하실 수 있습니다.
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
                                -
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
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                PAY
                            </td>
                            <td colspan="1" rowspan="1">결제요청 방식 - AUTH: 빌링키등록<br />- CERT: <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">결제요청 재컨펌 (CERT)</span>
            </template>
            <template v-slot:default>
                <span>
                    <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">빌링키 등록</span>
            </template>
            <template v-slot:default>
                <span>
                    카드/계좌 정보를 임의의 고유식별문자인 빌링키로 변환하는 과정입니다.<br/>
                    민감한 개인정보인 카드/계좌 정보의 노출없이 암호화된 키값으로 간편하게 결제할 수 있게 도와줍니다.
                </span>
            </template>
        </v-tooltip> 및 결제요청 방식을 규정합니다.<br/>
                    브라우저 안에서 결제데이터를 주고받는 ‘<v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">즉시결제(PAY)</span>
            </template>
            <template v-slot:default>
                <span>
                    페이플 브라우저(결제창) 안에서 결제요청과 결제가 이루어지는 방식입니다.<br/>
                    직관적이지만, 결제자의 PC/모바일에서 오류가 브라우저에 영향을 미칠시 결제결과데이터의 수신이 실패될 수 있습니다.
                </span>
            </template>
        </v-tooltip>’ 방식과<br/>
                    가맹점 서버에서 주고받는 ‘가맹점 확인 후 결제(CERT)’ 방식,<br/>
                    당장 결제를 내지 않고 빌링키만 등록하는 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer"><v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">빌링키 등록</span>
            </template>
            <template v-slot:default>
                <span>
                    카드/계좌 정보를 임의의 고유식별문자인 빌링키로 변환하는 과정입니다.<br/>
                    민감한 개인정보인 카드/계좌 정보의 노출없이 암호화된 키값으로 간편하게 결제할 수 있게 도와줍니다.
                </span>
            </template>
        </v-tooltip>(AUTH)</span>
            </template>
            <template v-slot:default>
                <span>
                    자바스크립트를 이용하여 결제를 하기 위해서는 PAY와 CERT방식중에 하나를 선택하여야 하지만<br/>
                    빌링키 생성을 위해 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">빌링키 등록</span>
            </template>
            <template v-slot:default>
                <span>
                    카드/계좌 정보를 임의의 고유식별문자인 빌링키로 변환하는 과정입니다.<br/>
                    민감한 개인정보인 카드/계좌 정보의 노출없이 암호화된 키값으로 간편하게 결제할 수 있게 도와줍니다.
                </span>
            </template>
        </v-tooltip>(Auth)만 수행할 경우에는 실제 결제가 일어나는 것이 아니므로 Auth 파라미터를 선택하여 빌링키만 발급받습니다.
                </span>
            </template>
        </v-tooltip> 방식이 있습니다.
                </span>
            </template>
        </v-tooltip><br />- PAY: 즉시결제</td>
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
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                Y
                            </td>
                            <td colspan="1" rowspan="1">
                                간편결제 구분 (비밀번호 결제: Y)
                            </td>
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
                                01
                            </td>
                            <td colspan="1" rowspan="1">
                                01: 빌링키결제
                            </td>
                        </tr>
                        <tr>
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
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                pwd
                            </td>
                            <td colspan="1" rowspan="1">
                                비밀번호 결제 인증방식 (PCD_SIMPLE_FLAG: 'Y' 일 때 필수 비밀번호: pwd)
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
                                카드등록 후 리턴받은 빌링키 (PCD_SIMPLE_FLAG: 'Y' 일 때 필수)
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
                                <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">주문번호</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에서 특정거래건에 부여하는 유니크값입니다.<Br/>
                    결제요청시 주문번호를 가맹점에서 보내주지 않으면 페이플에서 임의로 생성하여 적용합니다.
                </span>
            </template>
        </v-tooltip> (미입력 시 자동생성)
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
                                255
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
                                결제고객 이름 *특정제휴카드의 경우 카드소유주의 실명을 인증하며, 실패할 경우 <v-tooltip v-model="toolTipShow" top>
                    <template v-slot:activator="{ on }">
                        <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">승인</span>
                    </template>
                    <template v-slot:default>
                        <span>
                            카드사에서 가맹점의 결제요청에 최종적으로 보내주는 결제완료상태값으로,<br/>
                            승인을 받았다는 것은 결제가 성공적으로 이루어졌다는 것을 의미합니다.
                        </span>
                    </template>
                </v-tooltip>이 거절됩니다.
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
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                01012345678
                            </td>
                            <td colspan="1" rowspan="1">
                                결제고객 핸드폰번호를 전송하시면 고객의 <v-tooltip v-model="toolTipShow" top>
                    <template v-slot:activator="{ on }">
                        <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">승인</span>
                    </template>
                    <template v-slot:default>
                        <span>
                            카드사에서 가맹점의 결제요청에 최종적으로 보내주는 결제완료상태값으로,<br/>
                            승인을 받았다는 것은 결제가 성공적으로 이루어졌다는 것을 의미합니다.
                        </span>
                    </template>
                </v-tooltip>문자 민원을 방지하기 위한 알림톡이 발송됩니다.
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
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                <a href="mailto:dev@payple.kr">dev@payple.kr</a>
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
                                - 이모티콘을 제외한 상품명을 입력해주세요.<br />- 이모티콘으로 인해 일부 카드사에서 <v-tooltip v-model="toolTipShow" top>
                    <template v-slot:activator="{ on }">
                        <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">승인</span>
                    </template>
                    <template v-slot:default>
                        <span>
                            카드사에서 가맹점의 결제요청에 최종적으로 보내주는 결제완료상태값으로,<br/>
                            승인을 받았다는 것은 결제가 성공적으로 이루어졌다는 것을 의미합니다.
                        </span>
                    </template>
                </v-tooltip>거절이  발생할 수 있습니다.
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
                                20
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
                                /result/..
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
                                /auth/..
                            </td>
                            <td colspan="1" rowspan="1">
                                <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 파일
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
                                PCD_PAY_WORK
                            </td>
                            <td colspan="1" rowspan="1">
                                PAY
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
                                CERT - 결제생성 후 <v-tooltip v-model="toolTipShow" top>
                    <template v-slot:activator="{ on }">
                        <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">승인</span>
                    </template>
                    <template v-slot:default>
                        <span>
                            카드사에서 가맹점의 결제요청에 최종적으로 보내주는 결제완료상태값으로,<br/>
                            승인을 받았다는 것은 결제가 성공적으로 이루어졌다는 것을 의미합니다.
                        </span>
                    </template>
                </v-tooltip>을 위한 키
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
                                CERT - 결제<v-tooltip v-model="toolTipShow" top>
                    <template v-slot:activator="{ on }">
                        <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">승인</span>
                    </template>
                    <template v-slot:default>
                        <span>
                            카드사에서 가맹점의 결제요청에 최종적으로 보내주는 결제완료상태값으로,<br/>
                            승인을 받았다는 것은 결제가 성공적으로 이루어졌다는 것을 의미합니다.
                        </span>
                    </template>
                </v-tooltip> 후 리턴 URL
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
                                <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">주문번호</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에서 특정거래건에 부여하는 유니크값입니다.<Br/>
                    결제요청시 주문번호를 가맹점에서 보내주지 않으면 페이플에서 임의로 생성하여 적용합니다.
                </span>
            </template>
        </v-tooltip>
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
                                <a href="mailto:dev@payple.kr">dev@payple.kr</a>
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
                                <v-tooltip v-model="toolTipShow" top>
                    <template v-slot:activator="{ on }">
                        <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">승인</span>
                    </template>
                    <template v-slot:default>
                        <span>
                            카드사에서 가맹점의 결제요청에 최종적으로 보내주는 결제완료상태값으로,<br/>
                            승인을 받았다는 것은 결제가 성공적으로 이루어졌다는 것을 의미합니다.
                        </span>
                    </template>
                </v-tooltip>번호
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
                <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">결제요청 재컨펌 (CERT)</span>
            </template>
            <template v-slot:default>
                <span>
                    <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">빌링키 등록</span>
            </template>
            <template v-slot:default>
                <span>
                    카드/계좌 정보를 임의의 고유식별문자인 빌링키로 변환하는 과정입니다.<br/>
                    민감한 개인정보인 카드/계좌 정보의 노출없이 암호화된 키값으로 간편하게 결제할 수 있게 도와줍니다.
                </span>
            </template>
        </v-tooltip> 및 결제요청 방식을 규정합니다.<br/>
                    브라우저 안에서 결제데이터를 주고받는 ‘<v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">즉시결제(PAY)</span>
            </template>
            <template v-slot:default>
                <span>
                    페이플 브라우저(결제창) 안에서 결제요청과 결제가 이루어지는 방식입니다.<br/>
                    직관적이지만, 결제자의 PC/모바일에서 오류가 브라우저에 영향을 미칠시 결제결과데이터의 수신이 실패될 수 있습니다.
                </span>
            </template>
        </v-tooltip>’ 방식과<br/>
                    가맹점 서버에서 주고받는 ‘가맹점 확인 후 결제(CERT)’ 방식,<br/>
                    당장 결제를 내지 않고 빌링키만 등록하는 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer"><v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">빌링키 등록</span>
            </template>
            <template v-slot:default>
                <span>
                    카드/계좌 정보를 임의의 고유식별문자인 빌링키로 변환하는 과정입니다.<br/>
                    민감한 개인정보인 카드/계좌 정보의 노출없이 암호화된 키값으로 간편하게 결제할 수 있게 도와줍니다.
                </span>
            </template>
        </v-tooltip>(AUTH)</span>
            </template>
            <template v-slot:default>
                <span>
                    자바스크립트를 이용하여 결제를 하기 위해서는 PAY와 CERT방식중에 하나를 선택하여야 하지만<br/>
                    빌링키 생성을 위해 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">빌링키 등록</span>
            </template>
            <template v-slot:default>
                <span>
                    카드/계좌 정보를 임의의 고유식별문자인 빌링키로 변환하는 과정입니다.<br/>
                    민감한 개인정보인 카드/계좌 정보의 노출없이 암호화된 키값으로 간편하게 결제할 수 있게 도와줍니다.
                </span>
            </template>
        </v-tooltip>(Auth)만 수행할 경우에는 실제 결제가 일어나는 것이 아니므로 Auth 파라미터를 선택하여 빌링키만 발급받습니다.
                </span>
            </template>
        </v-tooltip> 방식이 있습니다.
                </span>
            </template>
        </v-tooltip>(PCD_PAY_WORK : CERT)
            </h2>
            <blockquote class="mb-8 blockquote body-1">
                최종 결제요청을 위해 REST API를 통해 결제를 요청할 수 있습니다. <br />
                PCD_PAY_WORK : PAY (즉시결제)의 경우와는 달리 CERT(<v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">결제요청 재컨펌 (CERT)</span>
            </template>
            <template v-slot:default>
                <span>
                    <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">빌링키 등록</span>
            </template>
            <template v-slot:default>
                <span>
                    카드/계좌 정보를 임의의 고유식별문자인 빌링키로 변환하는 과정입니다.<br/>
                    민감한 개인정보인 카드/계좌 정보의 노출없이 암호화된 키값으로 간편하게 결제할 수 있게 도와줍니다.
                </span>
            </template>
        </v-tooltip> 및 결제요청 방식을 규정합니다.<br/>
                    브라우저 안에서 결제데이터를 주고받는 ‘<v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">즉시결제(PAY)</span>
            </template>
            <template v-slot:default>
                <span>
                    페이플 브라우저(결제창) 안에서 결제요청과 결제가 이루어지는 방식입니다.<br/>
                    직관적이지만, 결제자의 PC/모바일에서 오류가 브라우저에 영향을 미칠시 결제결과데이터의 수신이 실패될 수 있습니다.
                </span>
            </template>
        </v-tooltip>’ 방식과<br/>
                    가맹점 서버에서 주고받는 ‘가맹점 확인 후 결제(CERT)’ 방식,<br/>
                    당장 결제를 내지 않고 빌링키만 등록하는 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer"><v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">빌링키 등록</span>
            </template>
            <template v-slot:default>
                <span>
                    카드/계좌 정보를 임의의 고유식별문자인 빌링키로 변환하는 과정입니다.<br/>
                    민감한 개인정보인 카드/계좌 정보의 노출없이 암호화된 키값으로 간편하게 결제할 수 있게 도와줍니다.
                </span>
            </template>
        </v-tooltip>(AUTH)</span>
            </template>
            <template v-slot:default>
                <span>
                    자바스크립트를 이용하여 결제를 하기 위해서는 PAY와 CERT방식중에 하나를 선택하여야 하지만<br/>
                    빌링키 생성을 위해 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">빌링키 등록</span>
            </template>
            <template v-slot:default>
                <span>
                    카드/계좌 정보를 임의의 고유식별문자인 빌링키로 변환하는 과정입니다.<br/>
                    민감한 개인정보인 카드/계좌 정보의 노출없이 암호화된 키값으로 간편하게 결제할 수 있게 도와줍니다.
                </span>
            </template>
        </v-tooltip>(Auth)만 수행할 경우에는 실제 결제가 일어나는 것이 아니므로 Auth 파라미터를 선택하여 빌링키만 발급받습니다.
                </span>
            </template>
        </v-tooltip> 방식이 있습니다.
                </span>
            </template>
        </v-tooltip>) 방식에서는 최종 <v-tooltip v-model="toolTipShow" top>
                    <template v-slot:activator="{ on }">
                        <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">승인</span>
                    </template>
                    <template v-slot:default>
                        <span>
                            카드사에서 가맹점의 결제요청에 최종적으로 보내주는 결제완료상태값으로,<br/>
                            승인을 받았다는 것은 결제가 성공적으로 이루어졌다는 것을 의미합니다.
                        </span>
                    </template>
                </v-tooltip> 요청을 별도로 주어야 합니다.<br />
                <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">결제요청 재컨펌 (CERT)</span>
            </template>
            <template v-slot:default>
                <span>
                    <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">빌링키 등록</span>
            </template>
            <template v-slot:default>
                <span>
                    카드/계좌 정보를 임의의 고유식별문자인 빌링키로 변환하는 과정입니다.<br/>
                    민감한 개인정보인 카드/계좌 정보의 노출없이 암호화된 키값으로 간편하게 결제할 수 있게 도와줍니다.
                </span>
            </template>
        </v-tooltip> 및 결제요청 방식을 규정합니다.<br/>
                    브라우저 안에서 결제데이터를 주고받는 ‘<v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">즉시결제(PAY)</span>
            </template>
            <template v-slot:default>
                <span>
                    페이플 브라우저(결제창) 안에서 결제요청과 결제가 이루어지는 방식입니다.<br/>
                    직관적이지만, 결제자의 PC/모바일에서 오류가 브라우저에 영향을 미칠시 결제결과데이터의 수신이 실패될 수 있습니다.
                </span>
            </template>
        </v-tooltip>’ 방식과<br/>
                    가맹점 서버에서 주고받는 ‘가맹점 확인 후 결제(CERT)’ 방식,<br/>
                    당장 결제를 내지 않고 빌링키만 등록하는 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer"><v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">빌링키 등록</span>
            </template>
            <template v-slot:default>
                <span>
                    카드/계좌 정보를 임의의 고유식별문자인 빌링키로 변환하는 과정입니다.<br/>
                    민감한 개인정보인 카드/계좌 정보의 노출없이 암호화된 키값으로 간편하게 결제할 수 있게 도와줍니다.
                </span>
            </template>
        </v-tooltip>(AUTH)</span>
            </template>
            <template v-slot:default>
                <span>
                    자바스크립트를 이용하여 결제를 하기 위해서는 PAY와 CERT방식중에 하나를 선택하여야 하지만<br/>
                    빌링키 생성을 위해 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">빌링키 등록</span>
            </template>
            <template v-slot:default>
                <span>
                    카드/계좌 정보를 임의의 고유식별문자인 빌링키로 변환하는 과정입니다.<br/>
                    민감한 개인정보인 카드/계좌 정보의 노출없이 암호화된 키값으로 간편하게 결제할 수 있게 도와줍니다.
                </span>
            </template>
        </v-tooltip>(Auth)만 수행할 경우에는 실제 결제가 일어나는 것이 아니므로 Auth 파라미터를 선택하여 빌링키만 발급받습니다.
                </span>
            </template>
        </v-tooltip> 방식이 있습니다.
                </span>
            </template>
        </v-tooltip> 방식에 대한 설명은 이곳에서 확인하실 수 있습니다.
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
                                8
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                test
                            </td>
                            <td colspan="1" rowspan="1">
                                <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 후 리턴 받은 cst_id Token
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
                                <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 후 리턴 받은 custKey Token
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
                                <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 후 리턴 받은 토큰키
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
                                최종 <v-tooltip v-model="toolTipShow" top>
                    <template v-slot:activator="{ on }">
                        <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">승인</span>
                    </template>
                    <template v-slot:default>
                        <span>
                            카드사에서 가맹점의 결제요청에 최종적으로 보내주는 결제완료상태값으로,<br/>
                            승인을 받았다는 것은 결제가 성공적으로 이루어졌다는 것을 의미합니다.
                        </span>
                    </template>
                </v-tooltip>요청용 키
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
                                -
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
<!-- payple js 호출. 테스트/운영 선택 →
<script src="/js/jquery-3.2.1.min.js">< /script>
<script src="https://testcpay.payple.kr/js/cpay.payple.1.0.1.js">< /script> <!-- 테스트 -->
<script src="https://cpay.payple.kr/js/cpay.payple.1.0.1.js">< /script> <!-- 운영 -->

<script>	
$(document).ready( function () {        
    $('#payAction').on('click', function (event) {
        
var obj = new Object();
obj.PCD_CPAY_VER = "1.0.1";
obj.PCD_PAY_TYPE = “card”;           
obj.PCD_PAY_WORK = “PAY”;

/* 01 : 빌링키결제 */
obj.PCD_CARD_VER = "01"

/* 비밀번호 간편결제를 사용하는 경우 */
/* 간편결제 구분 */
//obj.PCD_SIMPLE_FLAG = "Y";
/* 비밀번호 결제 인증방식 pwd */
//obj.PCD_PAYER_AUTH_TYPE = "pwd";
/* PCD_PAYER_ID 는 소스상에 표시하지 마시고 반드시 Server Side Script 를 이용하여 불러오시기 바랍니다. */
/* 첫 결제 완료 후, 재결제 시 주석을 풀고 리턴받은 데이터 중 PCD_PAYER_ID 를 넣어주세요.  */
//obj.PCD_PAYER_ID = ’’;
/* End : 비밀번호 간편결제를 사용하는 경우 */

/* <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip>요청 파일 */
obj.payple_auth_file = “<v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 파일”;
	
	obj.PCD_PAYER_NO = 1234;
	obj.PCD_PAYER_NAME = “홍길동”;
	obj.PCD_PAYER_HP = “01012345678”;
	obj.PCD_PAYER_EMAIL = “dev@payple.kr”;
	obj.PCD_PAY_GOODS = “상품1”;
	obj.PCD_PAY_TOTAL = 100;
	obj.PCD_PAY_ISTAX = “Y”;
	obj.PCD_PAY_TAXTOTAL = 10;
	obj.PCD_PAY_OID = “”;

/* 결과를 콜백 함수로 받고자 하는 경우 함수 설정 추가 */
 //obj.callbackFunction = getResult;  // getResult : 콜백 함수명 
 /* End : 결과를 콜백 함수로 받고자 하는 경우 함수 설정 추가 */
	
/* 결과를 콜백 함수가 아닌 URL로 받고자 하는 경우 */
obj.PCD_RST_URL = ‘결제 결과 받을 페이지';
/* End : 결과를 콜백 함수가 아닌 URL로 받고자 하는 경우 */
	
         PaypleCpayAuthCheck(obj);
            
         event.preventDefault();     
    });   
});
< /script>
 <button id=”payAction”>간편결제</button>
`,
            code_1_2: `
java
`,
            code_1_3: `
node
`,
            code_1_4: `
node
`,
            code_2_1: `
/* 결제요청 후 리턴받은 PCD_PAY_COFURL 로 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">결제요청 재컨펌 (CERT)</span>
            </template>
            <template v-slot:default>
                <span>
                    <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">빌링키 등록</span>
            </template>
            <template v-slot:default>
                <span>
                    카드/계좌 정보를 임의의 고유식별문자인 빌링키로 변환하는 과정입니다.<br/>
                    민감한 개인정보인 카드/계좌 정보의 노출없이 암호화된 키값으로 간편하게 결제할 수 있게 도와줍니다.
                </span>
            </template>
        </v-tooltip> 및 결제요청 방식을 규정합니다.<br/>
                    브라우저 안에서 결제데이터를 주고받는 ‘<v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">즉시결제(PAY)</span>
            </template>
            <template v-slot:default>
                <span>
                    페이플 브라우저(결제창) 안에서 결제요청과 결제가 이루어지는 방식입니다.<br/>
                    직관적이지만, 결제자의 PC/모바일에서 오류가 브라우저에 영향을 미칠시 결제결과데이터의 수신이 실패될 수 있습니다.
                </span>
            </template>
        </v-tooltip>’ 방식과<br/>
                    가맹점 서버에서 주고받는 ‘가맹점 확인 후 결제(CERT)’ 방식,<br/>
                    당장 결제를 내지 않고 빌링키만 등록하는 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer"><v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">빌링키 등록</span>
            </template>
            <template v-slot:default>
                <span>
                    카드/계좌 정보를 임의의 고유식별문자인 빌링키로 변환하는 과정입니다.<br/>
                    민감한 개인정보인 카드/계좌 정보의 노출없이 암호화된 키값으로 간편하게 결제할 수 있게 도와줍니다.
                </span>
            </template>
        </v-tooltip>(AUTH)</span>
            </template>
            <template v-slot:default>
                <span>
                    자바스크립트를 이용하여 결제를 하기 위해서는 PAY와 CERT방식중에 하나를 선택하여야 하지만<br/>
                    빌링키 생성을 위해 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">빌링키 등록</span>
            </template>
            <template v-slot:default>
                <span>
                    카드/계좌 정보를 임의의 고유식별문자인 빌링키로 변환하는 과정입니다.<br/>
                    민감한 개인정보인 카드/계좌 정보의 노출없이 암호화된 키값으로 간편하게 결제할 수 있게 도와줍니다.
                </span>
            </template>
        </v-tooltip>(Auth)만 수행할 경우에는 실제 결제가 일어나는 것이 아니므로 Auth 파라미터를 선택하여 빌링키만 발급받습니다.
                </span>
            </template>
        </v-tooltip> 방식이 있습니다.
                </span>
            </template>
        </v-tooltip>(CERT)  */
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
        };
    },
};
</script>
