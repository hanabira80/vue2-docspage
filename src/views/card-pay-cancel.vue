<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-12"><v-tooltip v-model="toolTipShow" top>
                    <template v-slot:activator="{ on }">
                        <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">승인</span>
                    </template>
                    <template v-slot:default>
                        <span>
                            카드사에서 가맹점의 결제요청에 최종적으로 보내주는 결제완료상태값으로,<br/>
                            승인을 받았다는 것은 결제가 성공적으로 이루어졌다는 것을 의미합니다.
                        </span>
                    </template>
                </v-tooltip><v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip></h1>
        <blockquote class="mb-12 blockquote body-1">
            결제<v-tooltip v-model="toolTipShow" top>
                    <template v-slot:activator="{ on }">
                        <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">승인</span>
                    </template>
                    <template v-slot:default>
                        <span>
                            카드사에서 가맹점의 결제요청에 최종적으로 보내주는 결제완료상태값으로,<br/>
                            승인을 받았다는 것은 결제가 성공적으로 이루어졌다는 것을 의미합니다.
                        </span>
                    </template>
                </v-tooltip>된 거래건을 <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip>할 수 있는 API입니다.
        </blockquote>
        <v-alert border="left" colored-border type="error" elevation="2" class="mx-4">
            요청을 위한 선행단계로 <v-tooltip v-model="toolTipShow" top>
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

        <article class="mb-12">
            <h2 class="">
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
                </v-tooltip><v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip>
            </h2>

            <h3 class="pl-4">
                요청 메시지
            </h3>
            <v-card class="temp_table ma-4 mb-12">
                <v-simple-table class="table-hover-disable">
                    <tbody>
                        <tr>
                            <td colspan="1" rowspan="1">요청변수</td>
                            <td colspan="1" rowspan="1">타입</td>
                            <td colspan="1" rowspan="1">길이</td>
                            <td colspan="1" rowspan="1">필수</td>
                            <td colspan="1" rowspan="1">값</td>
                            <td colspan="1" rowspan="1">설명</td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">PCD_CST_ID</td>
                            <td colspan="1" rowspan="1">String</td>
                            <td colspan="1" rowspan="1">8</td>
                            <td colspan="1" rowspan="1">O</td>
                            <td colspan="1" rowspan="1">UFVN...</td>
                            <td colspan="1" rowspan="1"><v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 후 리턴 받은 cst_id Token</td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">PCD_CUST_KEY</td>
                            <td colspan="1" rowspan="1">String</td>
                            <td colspan="1" rowspan="1">255</td>
                            <td colspan="1" rowspan="1">O</td>
                            <td colspan="1" rowspan="1">T3Jz...</td>
                            <td colspan="1" rowspan="1"><v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 후 리턴 받은 custKey Token</td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">PCD_AUTH_KEY</td>
                            <td colspan="1" rowspan="1">String</td>
                            <td colspan="1" rowspan="1">-</td>
                            <td colspan="1" rowspan="1">O</td>
                            <td colspan="1" rowspan="1">a688c...</td>
                            <td colspan="1" rowspan="1"><v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 후 리턴 받은 인증 Token</td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">PCD_REFUND_KEY</td>
                            <td colspan="1" rowspan="1">String</td>
                            <td colspan="1" rowspan="1">-</td>
                            <td colspan="1" rowspan="1">O</td>
                            <td colspan="1" rowspan="1">a41c...</td>
                            <td colspan="1" rowspan="1"><v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">환불</span>
            </template>
            <template v-slot:default>
                <span>
                    계좌결제에서는 신용카드 결제와 달리 돈이 계좌에서 바로 출금되고, 카드처럼 취소되지 않습니다.<br/>
                    이에 대응하여 페이플이 직접 출금금액을 고객에게 입금하는 서비스를 제공하며, 이것을 ‘환불대행서비스’(환불)이라고 합니다.
                </span>
            </template>
        </v-tooltip>서비스 Key (관리자페이지 상점정보 &gt; 기본정보에서 확인하실 수 있습니다.)</td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">PCD_PAYCANCEL_FLAG</td>
                            <td colspan="1" rowspan="1">String</td>
                            <td colspan="1" rowspan="1">1</td>
                            <td colspan="1" rowspan="1">O</td>
                            <td colspan="1" rowspan="1">Y</td>
                            <td colspan="1" rowspan="1">‘Y’ - 고정값</td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">PCD_PAY_OID</td>
                            <td colspan="1" rowspan="1">String</td>
                            <td colspan="1" rowspan="1">255</td>
                            <td colspan="1" rowspan="1">O</td>
                            <td colspan="1" rowspan="1">test099942200156938</td>
                            <td colspan="1" rowspan="1"><v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">주문번호</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에서 특정거래건에 부여하는 유니크값입니다.<Br/>
                    결제요청시 주문번호를 가맹점에서 보내주지 않으면 페이플에서 임의로 생성하여 적용합니다.
                </span>
            </template>
        </v-tooltip></td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">PCD_REGULER_FLAG</td>
                            <td colspan="1" rowspan="1">String</td>
                            <td colspan="1" rowspan="1">1</td>
                            <td colspan="1" rowspan="1">-</td>
                            <td colspan="1" rowspan="1">N</td>
                            <td colspan="1" rowspan="1">월 중복결제 방지 (사용: Y, 그 외: N)</td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">PCD_PAY_YEAR</td>
                            <td colspan="1" rowspan="1">String</td>
                            <td colspan="1" rowspan="1">4</td>
                            <td colspan="1" rowspan="1">-</td>
                            <td colspan="1" rowspan="1">2020</td>
                            <td colspan="1" rowspan="1">결제 구분 년도 (PCD_REGULER_FLAG: 'Y' 일 때 필수)</td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">PCD_PAY_MONTH</td>
                            <td colspan="1" rowspan="1">String</td>
                            <td colspan="1" rowspan="1">2</td>
                            <td colspan="1" rowspan="1">-</td>
                            <td colspan="1" rowspan="1">03</td>
                            <td colspan="1" rowspan="1">결제 구분 월 (PCD_REGULER_FLAG: 'Y' 일 때 필수)</td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">PCD_PAY_DATE</td>
                            <td colspan="1" rowspan="1">Number</td>
                            <td colspan="1" rowspan="1">8</td>
                            <td colspan="1" rowspan="1">O</td>
                            <td colspan="1" rowspan="1">20200320</td>
                            <td colspan="1" rowspan="1"><v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip>할 원거래일자</td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">PCD_REFUND_TOTAL</td>
                            <td colspan="1" rowspan="1">Number</td>
                            <td colspan="1" rowspan="1">20</td>
                            <td colspan="1" rowspan="1">O</td>
                            <td colspan="1" rowspan="1">100</td>
                            <td colspan="1" rowspan="1"><v-tooltip v-model="toolTipShow" top>
                    <template v-slot:activator="{ on }">
                        <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">승인</span>
                    </template>
                    <template v-slot:default>
                        <span>
                            카드사에서 가맹점의 결제요청에 최종적으로 보내주는 결제완료상태값으로,<br/>
                            승인을 받았다는 것은 결제가 성공적으로 이루어졌다는 것을 의미합니다.
                        </span>
                    </template>
                </v-tooltip><v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip> 요청금액 (기존 결제금액보다 적은 금액 입력 시 부분<v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip>로 진행)</td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">PCD_PAY_TAXTOTAL</td>
                            <td colspan="1" rowspan="1">Number</td>
                            <td colspan="1" rowspan="1">20</td>
                            <td colspan="1" rowspan="1">-</td>
                            <td colspan="1" rowspan="1">10</td>
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
                <Prism language="php">
                    {{ code_1_1 }}
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
                                <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip> 결과(success|error)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CODE
                            </td>
                            <td colspan="1" rowspan="1">
                                PAYC0000
                            </td>
                            <td colspan="1" rowspan="1">
                                <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip> 결과코드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_MSG
                            </td>
                            <td colspan="1" rowspan="1">
                                <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">환불</span>
            </template>
            <template v-slot:default>
                <span>
                    계좌결제에서는 신용카드 결제와 달리 돈이 계좌에서 바로 출금되고, 카드처럼 취소되지 않습니다.<br/>
                    이에 대응하여 페이플이 직접 출금금액을 고객에게 입금하는 서비스를 제공하며, 이것을 ‘환불대행서비스’(환불)이라고 합니다.
                </span>
            </template>
        </v-tooltip>성공
                            </td>
                            <td colspan="1" rowspan="1">
                                <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip> 결과 메시지
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
                                PCD_PAY_YEAR
                            </td>
                            <td colspan="1" rowspan="1">
                                2020
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
                                03
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 구분 월
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
                                PCD_REFUND_TOTAL
                            </td>
                            <td colspan="1" rowspan="1">
                                100
                            </td>
                            <td colspan="1" rowspan="1">
                                <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip>금액
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_REFUND_TAXTOTAL
                            </td>
                            <td colspan="1" rowspan="1">
                                10
                            </td>
                            <td colspan="1" rowspan="1">
                                복합과세(과세+면세) 주문건에 필요한 금액이며 가맹점에서 전송한 값을 부가세로 설정합니다. 과세 및 비과세의 경우 사용하지
                                않습니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDTRADENUM
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                거래 키
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDRECEIPT
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                매출전표 출력 링크
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
                <Prism language="php">
                    {{ code_2_1 }}
                </Prism>
            </v-card>
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
#<v-tooltip v-model="toolTipShow" top>
                    <template v-slot:activator="{ on }">
                        <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">승인</span>
                    </template>
                    <template v-slot:default>
                        <span>
                            카드사에서 가맹점의 결제요청에 최종적으로 보내주는 결제완료상태값으로,<br/>
                            승인을 받았다는 것은 결제가 성공적으로 이루어졌다는 것을 의미합니다.
                        </span>
                    </template>
                </v-tooltip><v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">취소</span>
            </template>
            <template v-slot:default>
                <span>
                    카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                </span>
            </template>
        </v-tooltip> 요청
POST <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 후 리턴받는 PCD_PAY_URL HTTP/1.1
Host: <v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 후 리턴받는 PCD_PAY_HOST
Content-Type: application/json
Cache-Control: no-cache	
{
  "PCD_CST_ID": "<v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 후 리턴받은 cst_id",
  "PCD_CUST_KEY": "<v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 후 리턴받은 custKey",
  "PCD_AUTH_KEY": "<v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">가맹점 인증</span>
            </template>
            <template v-slot:default>
                <span>
                    가맹점에 발급되는 고유 ID와 Key값을 확인하여 실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                </span>
            </template>
        </v-tooltip> 후 리턴받은 AuthKey",  
  "PCD_REFUND_KEY": "a41ce010ede9...",
  "PCD_PAYCANCEL_FLAG": "Y",
  "PCD_PAY_OID": "test201804000001",
  "PCD_PAY_DATE": “20200317”,
  "PCD_REFUND_TOTAL": 100
}
`,
            code_2_1: `
{
  "PCD_PAY_RST" => "success",
  “PCD_PAY_CODE” => “PAYC0000”,
  "PCD_PAY_MSG" => "<v-tooltip v-model="toolTipShow" top>
            <template v-slot:activator="{ on }">
                <span @click="toolTipShow = !toolTipShow" class="half-bg--tooltip cursor-pointer">환불</span>
            </template>
            <template v-slot:default>
                <span>
                    계좌결제에서는 신용카드 결제와 달리 돈이 계좌에서 바로 출금되고, 카드처럼 취소되지 않습니다.<br/>
                    이에 대응하여 페이플이 직접 출금금액을 고객에게 입금하는 서비스를 제공하며, 이것을 ‘환불대행서비스’(환불)이라고 합니다.
                </span>
            </template>
        </v-tooltip>성공",		
  "PCD_PAY_OID" => "test201804000001",
  "PCD_PAY_TYPE" => "card",
  "PCD_PAYER_NO" => 1234,
  "PCD_PAYER_ID" => "d0to...",
  "PCD_PAY_YEAR" => "",
  "PCD_PAY_MONTH" => "",
  "PCD_PAY_GOODS" => "상품1",	
  "PCD_REGULER_FLAG" => "N",
  "PCD_REFUND_TOTAL" => 100,
  "PCD_REFUND_TAXTOTAL" => 10,
  "PCD_PAY_CARDTRADENUM":"",
  "PCD_PAY_CARDRECEIPT":""
}
`,
        };
    },
};
</script>
