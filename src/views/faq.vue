<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-12">FAQ</h1>
        <article class="mb-12">
            <h3 class="pl-4 mt-12 mb-8">
                결제 > 가맹점 인증
            </h3>
            <v-expansion-panels ultiple focusable hover inset>
                <v-expansion-panel>
                    <v-expansion-panel-header class="py-1">
                        <v-list-item>
                            <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                                <span class="white--text">Q</span>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title class="white-space-normal">
                                    서비스 서버와 API 서버가 분리되어 있어서 Referer을 보낼 수 없어요!
                                </v-list-item-title>
                                <!-- <v-list-item-subtitle>2020.06.17</v-list-item-subtitle> -->
                            </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pt-4 px-6">
                        API 서버를 따로 두고 계신 경우 Referer 에 가맹점의 도메인을 고정시켜 넣어주시면 됩니다.
                        <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                            <Prism language="javascript">
                                {{ code_1_4 }}
                            </Prism>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header class="py-1">
                        <v-list-item>
                            <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                                <span class="white--text">Q</span>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title class="white-space-normal">가맹점 인증을 하는데 AUTH0004 에러가 발생하는 이유가 뭔가요?</v-list-item-title>
                                <!-- <v-list-item-subtitle>2020.06.17</v-list-item-subtitle> -->
                            </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pt-4 px-6">
                        페이플에서는 결제요청시 도메인 검증을 하고있기 때문에 Referer 가 넘어오지 않을 경우 AUTH0004 에러가 발생하게 됩니다.<br />
                        가맹점 인증 요청 헤더에 Referer 을 추가해주시면 됩니다.
                        <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                            <Prism language="javascript">
                                {{ code_1_1 }}
                            </Prism>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header class="py-1">
                        <v-list-item>
                            <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                                <span class="white--text">Q</span>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title class="white-space-normal">
                                    테스트에서는 가맹점 인증이 됐는데 운영서버에 적용 후 인증실패가 떠요!
                                </v-list-item-title>
                                <!-- <v-list-item-subtitle>2020.06.17</v-list-item-subtitle> -->
                            </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pt-4 px-6">
                        운영서버(cpay)에서는 계약 후 발급받은 운영 ID, 운영 Key로 인증을 해주셔야 해요.<br />
                        가맹점 인증 요청 파일에서 cst_id와 custKey를 테스트에서 사용하는 test와 abcd1234567890를 사용하고 있지 않은지 확인해주세요.
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header class="py-1">
                        <v-list-item>
                            <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                                <span class="white--text">Q</span>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title class="white-space-normal">
                                    페이플 결제창을 로드하는 JavaScript 코드 중 payple_auth_file 가 뭔지 모르겠어요.
                                </v-list-item-title>
                                <!-- <v-list-item-subtitle>2020.06.17</v-list-item-subtitle> -->
                            </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pt-4 px-6">
                        결제창을 띄우기 위해서는 가맹점 인증요청을 통한 인증토큰이 필요합니다.<br />
                        obj.payple_auth_file 은 가맹점에서 개발(생성)하신 가맹점 인증요청 파일을 경로와 함께 설정해 주시는 프로퍼티입니다.<br /><br />
                        예) obj.payple_auth_file = ‘/auth/auth.php’;
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

            <h3 class="pl-4 mt-12 mb-8">
                결제 > 결제요청
            </h3>
            <v-expansion-panels ultiple focusable hover inset>
                <v-expansion-panel>
                    <v-expansion-panel-header class="py-1">
                        <v-list-item>
                            <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                                <span class="white--text">Q</span>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title class="white-space-normal">
                                    테스트에서 결제창은 떴는데 닫기를 눌러도 창이 닫히지 않아요.
                                </v-list-item-title>
                                <!-- <v-list-item-subtitle>2020.06.17</v-list-item-subtitle> -->
                            </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pt-4 px-6">
                        테스트에서는 결제요청시 도메인 검증을 하고있지 않기 때문에 가맹점 인증시 Referer 가 넘어오지 않아도 인증이 되기 때문에 결제창이
                        뜨지만,<br />
                        넘어온 도메인이 없기 때문에 리턴을 보낼 도메인을 찾을 수가 없어서 결제창이 닫히지 않게 됩니다.<Br /> 때문에 결제창은 떴는데 닫기를
                        눌러도 창이 닫히지 않는 경우 가맹점 인증 요청 헤더에 Referer 을 추가해주시면 됩니다.<br /><br />
                        <v-alert border="left" colored-border type="error" elevation="2" class="mx-4">
                            운영에서는 도메인을 검증하기 때문에 Referer가 넘어오지 않으면 처음부터 결체창이 로드되지 않을 수 있습니다.
                        </v-alert>
                        <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                            <Prism language="javascript">
                                {{ code_1_2 }}
                            </Prism>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header class="py-1">
                        <v-list-item>
                            <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                                <span class="white--text">Q</span>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title class="white-space-normal">
                                    얼마전까지 결제창 창닫기가 됐는데 지금은 안돼요!
                                </v-list-item-title>
                                <!-- <v-list-item-subtitle>2020.06.17</v-list-item-subtitle> -->
                            </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pt-4 px-6">
                        운영에서는 도메인 검증을 통해 결제창을 호출하고 테스트에서는 검증하지 않지만 넘어온 Referer 로 리턴을 보내고 있습니다.<br />
                        가맹점인증 도메인과 리턴받는 도메인이 일치해야 리턴 URL을 보내드릴 수 있습니다.<br /><br />
                        <h4>1) Referer 를 추가해 주시거나</h4>
                        <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                            <Prism language="javascript">
                                {{ code_1_3 }}
                            </Prism>
                        </v-card>
                        <h4>2) 가맹점인증 요청 도메인과 PCD_RST_URL 이 일치하는지 확인해주세요.</h4>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header class="py-1">
                        <v-list-item>
                            <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                                <span class="white--text">Q</span>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title class="white-space-normal">
                                    인앱브라우저에서 결제창을 연동했는데 팝업이 차단되었다는 경고창이 뜹니다.
                                </v-list-item-title>
                                <!-- <v-list-item-subtitle>2020.06.17</v-list-item-subtitle> -->
                            </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pt-4 px-6">
                        인앱브라우저에서의 팝업 차단 문제는 두가지 방법이 있습니다.<br /><br />

                        1. 사용자 가 해당 앱에서 팝업차단을 해제 해 주는 방법<br />
                        2. 가맹점 결제창 연동시 obj.PCD_RST_URL 을 아래와 같이 FULL URL 로 설정하는 방식입니다.<br />
                        <div class="tree-gutter"></div>
                        obj.PCD_RST_URL = "https://www.test.com/리턴받을 주소";<br />
                        2.의 경우 페이스북, 카카오톡 등 외부 앱에 연동하실 때 인앱브라우저의 문제를 해결하고자 하실 경우 사용하실 수 있습니다.
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header class="py-1">
                        <v-list-item>
                            <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                                <span class="white--text">Q</span>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title class="white-space-normal">
                                    결제요청 화면은 떴는데 에러창이 뜨고 진행이 되지 않아요!
                                </v-list-item-title>
                                <!-- <v-list-item-subtitle>2020.06.17</v-list-item-subtitle> -->
                            </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pt-4 px-6">
                        만약, 크롬80 브라우저를 사용하고 계신다면 쿠키설정의 SameSite=none을 확인해주세요.<br />
                        크롬80 이슈로 해당 에러가 발생할 수 있습니다. <br />
                        이경우 가맹점 서버나 개발소스에 쿠키:SameSite=none 과 관련된 설정을 진행해 주셔야 할 수 있습니다.<br /><br />

                        <b>– 가맹점에서 쿠키 생성시 설정 변경 : SameSite=None; Secure</b>
                        <b>– 가맹점 응답 URL은 HTTPS로 처리되어야 합니다.</b>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header class="py-1">
                        <v-list-item>
                            <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                                <span class="white--text">Q</span>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title class="white-space-normal">
                                    PCD_PAY_TOTAL / PCD_PAY_ISTAX / PCD_PAY_TAXTOTAL 설정방법
                                </v-list-item-title>
                                <!-- <v-list-item-subtitle>2020.06.17</v-list-item-subtitle> -->
                            </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pt-4 px-6">
                        가맹점에서 판매하는 상품(재화와 서비스)은 기본적으로 부가가치세(이하 부가세) 적용 대상이며,<BR /> 결제금액의 10%가 부가가치세로
                        적용되어야 합니다.<br /><br />

                        다만, 특정 상품의 경우 부가세가 면제된 ‘면세’상품일 경우가 있고,<BR /> 가맹점에서는 장바구니 기능을 통해 과세 상품과 면세상품을 모아서
                        총금액만 페이플에 결제요청하는 경우가 있습니다. <BR /> 이를 ‘복합과세’라고 합니다.<br /><br />

                        페이플에서는 결제총금액만 가맹점으로부터 전달받기 때문에 ‘과세’,’면세’,’복합과세’의 세가지 시나리오가 발생합니다.<br />
                        각각의 케이스에 연동하는 방법을 안내하여 드립니다.<br /><br />

                        1. 결제금액의 전체가 과세상품(부가세 적용)일 경우:<br /><br />

                        PCD_PAY_TOTAL: 결제총금액을 넣습니다.<br />
                        PCD_PAY_ISTAX: 필수값이 아니므로 넣지 않습니다.<br />
                        PCD_PAY_TAXTOTAL: 필수값이 아니므로 넣지 않습니다.<br />
                        <i><b>*페이플에서 자동으로 10%에 해당하는 값을 부가세로 설정합니다.</b></i
                        ><br /><br />

                        2. 결제금액의 전체가 면세상품(부가세 미적용)일 경우:<br /><br />

                        PCD_PAY_TOTAL: 결제총금액을 넣습니다.<br />
                        PCD_PAY_ISTAX: ‘N’값을 입력합니다.<br />
                        PCD_PAY_TAXTOTAL: 부가세가 없는 면세상품이므로 넣지 않습니다.<br /><br />

                        3. 결제금액의 전체가 복합과세상품(부가세 적용된 상품과 미적용된 상품 혼합)일 경우:<br /><br />

                        PCD_PAY_TOTAL: 결제총금액을 넣습니다.(과세상품 금액+면세상품금액)<br />
                        PCD_PAY_ISTAX: ‘Y’값을 입력합니다.<br />
                        PCD_PAY_TAXTOTAL: 부가세 적용된 상품의 ‘부가세’만 입력합니다.<br />
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header class="py-1">
                        <v-list-item>
                            <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                                <span class="white--text">Q</span>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title class="white-space-normal">
                                    월 중복결제 방지가 무엇인가요?
                                </v-list-item-title>
                                <!-- <v-list-item-subtitle>2020.06.17</v-list-item-subtitle> -->
                            </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pt-4 px-6">
                        <b>월 중복결제 방지(PCD_REGULER_FLAG)</b><br /><br />

                        페이플의 정기결제는 기본적으로 가맹점에서 빌링키를 가지고 결제 스케쥴링을 하신 후<br />
                        결제가 필요한 시점에 리얼타임으로 페이플에 결제요청을 하며, 실시간으로 결제가 이루어집니다.<br /><br />

                        이때 월 정기결제(한달에 단 한번만 과금하는 서비스)를 구현하려고 하는 가맹점의 경우,<br />
                        가맹점 내부의 결제 로직상 에러로 인해 중복결제가 나는 경우를 방지하고 싶을 경우가 있습니다.<br />
                        즉, 하나의 빌링키로 한달에 한번만 결제를 내고자 합니다.<br /><br />

                        이런 케이스를 예방하기 위해 페이플에서 월 중복결제 방지 기능을 제공합니다. <br />
                        결제년(PCD_PAY_YEAR) / 월(PCD_PAY_MONTH)을 지정하고<br />
                        월 중복결제 방지 기능(PCD_REGULER_FLAG)을 Y로 설정하여 결제요청을 한 경우<br />
                        페이플에서 해당 빌링키가 이미 해당 월에 결제가 난 건인지를 파악하여, 이미 결제가 난 건이면 결제를 거부합니다.<br /><br />

                        또한, 중복결제를 판단하는 기준이 빌링키(PCD_PAYER_ID)로 기결제여부를 판단하게 되므로<br />
                        빌링키가 발급되지 않는 결제방식((EX) 앱카드결제)에서는 사용하실 수 없습니다.
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel readonly >
                    <router-link to="/faq/pay/callback" class="black--text" style="text-decoration:none;">
                        <v-expansion-panel-header class="py-1">
                            <v-list-item>
                                <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                                    <span class="white--text">Q</span>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title class="white-space-normal" >
                                        PCD_RST_URL 및 callbackFuntion은 어떻게 설정하나요?
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-expansion-panel-header>
                    </router-link>
                    <v-expansion-panel-content class="pt-4 px-6">
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

            <h3 class="pl-4 mt-12 mb-8">
                결제 > URL 링크결제
            </h3>
            <v-expansion-panels multiple focusable hover inset>
                <v-expansion-panel>
                    <v-expansion-panel-header class="py-1">
                        <v-list-item>
                            <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                                <span class="white--text">Q</span>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title class="white-space-normal">
                                    URL 링크결제시 주문번호(OID)는 이렇게 처리됩니다.
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pt-4 px-6">
                        <h4 class="mb-2">1. 자동 주문번호 생성방식 <b class="red--text text--accent-4">(기본 적용)</b></h4>
                        <p class="pl-2 mb-6">
                            가맹점에서는 주문번호를 생성하지 않고, 페이플에서 주문번호를 자동으로 생성하는 방식입니다.
                        </p>

                        <v-timeline align-top dense class="pt-0 mb-8">
                            <v-timeline-item color="pink" small>
                                <v-card class="elevation-2 pa-2">
                                    <v-row class="pt-1">
                                        <v-col cols="12" md="2">
                                            <div class="subtitle-1 deep-purple--text text--darken-04">
                                                STEP 1
                                            </div>
                                            <h3>
                                                링크생성
                                            </h3>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="5">
                                            <v-img :src="require('../../src/assets/browser-design--admin-link-create.svg')" cover class="white "></v-img>
                                            <div class="caption text-center">
                                                [ 가맹점 관리자 ]
                                            </div>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="5">
                                            <v-img :src="require('../../src/assets/icon--rest-api--frame.svg')" cover class="white"></v-img>

                                            <div class="caption text-center">
                                                [ API ]
                                            </div>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col cols="0" md="3"></v-col>
                                        <v-col cols="12" md="9">
                                            <b>(링크주소 예시)</b><br />
                                            <a href="https://testlink.payple.kr/MTI6MTU4NDYwNzI4Mg" target="_blank">
                                                https://testlink.payple.kr/MTI6MTU4NDYwNzI4Mg
                                            </a>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-timeline-item>

                            <v-timeline-item color="teal" small>
                                <v-card class="elevation-2 pa-2">
                                    <v-row class="pt-1">
                                        <v-col cols="12" md="2">
                                            <div class="subtitle-1 deep-purple--text text--darken-04">
                                                STEP 2
                                            </div>
                                            <h3>
                                                링크접속
                                            </h3>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="5">
                                            <v-img :src="require('../../src/assets/browser-design--link-payment.svg')" cover class="white "></v-img>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="5"> </v-col>
                                    </v-row>
                                </v-card>
                            </v-timeline-item>

                            <v-timeline-item color="light-blue" small>
                                <v-card class="elevation-2 pa-2">
                                    <v-row class="pt-1">
                                        <v-col cols="12" md="2">
                                            <div class="subtitle-1 deep-purple--text text--darken-04">
                                                STEP 3
                                            </div>
                                            <h3>
                                                결제완료
                                            </h3>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="5">
                                            <v-img :src="require('../../src/assets/browser-design--regist-done.svg')" cover class="white "></v-img>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="5"> </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col cols="0" md="3"></v-col>
                                        <v-col cols="12" md="9">
                                            페이플에서 자동으로 주문번호를 생성합니다.<br />
                                            (예시 주문번호) LINK123456ABCDE
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-timeline-item>

                            <v-timeline-item class="pb-0" color="amber" small>
                                <v-card class="elevation-2 pa-2">
                                    <v-row class="pt-1">
                                        <v-col cols="12" md="2">
                                            <div class="subtitle-1 deep-purple--text text--darken-04">
                                                STEP 4
                                            </div>
                                            <h3>
                                                결과리턴
                                            </h3>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="5">
                                            <v-img :src="require('../../src/assets/browser-design--admin-link-result.svg')" cover class="white "></v-img>
                                            <div class="caption text-center">
                                                [ 가맹점 관리자 ]
                                            </div>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="5">
                                            <v-img :src="require('../../src/assets/icon--webhook--frame.svg')" cover class="white"></v-img>

                                            <div class="caption text-center">
                                                [ API ]
                                            </div>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col cols="0" md="3"></v-col>
                                        <v-col cols="12" md="9">
                                            가맹점관리자와 등록하신 Webhook URL에<br />
                                            결제결과(주문번호 포함)를 안내합니다.
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-timeline-item>
                        </v-timeline>

                        <h4 class="my-2">
                            2. 직접 주문번호 입력방식
                        </h4>
                        <p class="pl-2 mb-6">
                            생성된 링크주소뒤에 ?OID=주문번호를 덧붙이면 가맹점에서 지정한 주문번호를 사용할 수 있습니다.
                        </p>

                        <v-timeline align-top dense class="pt-0 mb-8">
                            <v-timeline-item color="pink" small>
                                <v-card class="elevation-2 pa-2">
                                    <v-row class="pt-1">
                                        <v-col cols="12" md="2">
                                            <div class="subtitle-1 deep-purple--text text--darken-04">
                                                STEP 1
                                            </div>
                                            <h3>
                                                링크생성
                                            </h3>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="5">
                                            <v-img :src="require('../../src/assets/browser-design--admin-link-create.svg')" cover class="white "></v-img>
                                            <div class="caption text-center">
                                                [ 가맹점 관리자 ]
                                            </div>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="5">
                                            <v-img :src="require('../../src/assets/icon--rest-api--frame.svg')" cover class="white"></v-img>

                                            <div class="caption text-center">
                                                [ API ]
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-timeline-item>

                            <v-timeline-item color="purple" small>
                                <v-card class="elevation-2 pa-2">
                                    <v-row class="pt-1">
                                        <v-col cols="12" md="2">
                                            <div class="subtitle-1 deep-purple--text text--darken-04">
                                                STEP 2
                                            </div>
                                            <h4>
                                                링크주소 수정
                                            </h4>
                                        </v-col>
                                        <v-col cols="12" md="10">
                                            <v-img :src="require('../../src/assets/info--oid.svg')" cover class="white "></v-img>
                                            <v-divider></v-divider>
                                            <p class="pb-0 pt-4 pl-4">
                                                1. 링크주소<br />
                                                <a href="https://testlink.payple.kr/MTI6MTU4NDYwNzI4Mg" target="_blank" class="pl-4">
                                                    https://testlink.payple.kr/MTI6MTU4NDYwNzI4Mg </a
                                                ><br />
                                                2. 파라미터<br />
                                                3. 주문번호
                                            </p>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-timeline-item>

                            <v-timeline-item color="teal" small>
                                <v-card class="elevation-2 pa-2">
                                    <v-row class="pt-1">
                                        <v-col cols="12" md="2">
                                            <div class="subtitle-1 deep-purple--text text--darken-04">
                                                STEP 3
                                            </div>
                                            <h3>
                                                링크접속
                                            </h3>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="5">
                                            <v-img :src="require('../../src/assets/browser-design--link-payment.svg')" cover class="white "></v-img>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="5"> </v-col>
                                    </v-row>
                                </v-card>
                            </v-timeline-item>

                            <v-timeline-item color="light-blue" small>
                                <v-card class="elevation-2 pa-2">
                                    <v-row class="pt-1">
                                        <v-col cols="12" md="2">
                                            <div class="subtitle-1 deep-purple--text text--darken-04">
                                                STEP 4
                                            </div>
                                            <h3>
                                                결제완료
                                            </h3>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="5">
                                            <v-img :src="require('../../src/assets/browser-design--regist-done.svg')" cover class="white "></v-img>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="5"> </v-col>
                                    </v-row>
                                </v-card>
                            </v-timeline-item>

                            <v-timeline-item class="pb-0" color="amber" small>
                                <v-card class="elevation-2 pa-2">
                                    <v-row class="pt-1">
                                        <v-col cols="12" md="2">
                                            <div class="subtitle-1 deep-purple--text text--darken-04">
                                                STEP 5
                                            </div>
                                            <h3>
                                                결과리턴
                                            </h3>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="5">
                                            <v-img :src="require('../../src/assets/browser-design--admin-link-result.svg')" cover class="white "></v-img>
                                            <div class="caption text-center">
                                                [ 가맹점 관리자 ]
                                            </div>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="5">
                                            <v-img :src="require('../../src/assets/icon--webhook--frame.svg')" cover class="white"></v-img>

                                            <div class="caption text-center">
                                                [ API ]
                                            </div>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col cols="0" md="3"></v-col>
                                        <v-col cols="12" md="9">
                                            가맹점관리자와 등록하신 Webhook URL에<br />
                                            결제결과(주문번호 포함)를 안내합니다.
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-timeline-item>
                        </v-timeline>

                        <v-alert border="left" colored-border type="error" elevation="2" class="mx-4 mt-4">
                            URL 링크결제로 결제결과를 안내받으려면 Webhook URL 등록이 필요합니다.<br />
                            <router-link to="/webhook">이곳</router-link>에서 Webhook URL에 대해 안내 받아보세요.
                        </v-alert>

                        <v-alert border="left" colored-border type="error" elevation="2" class="mx-4">
                            하나의 링크주소를 다수의 고객에게 결제를 받으면서,<br />
                            동시에 주문번호는 고유식별번호로 처리하고 싶은 경우 고객마다 주문번호를 다르게 설정해서 링크주소에 붙여주세요.
                        </v-alert>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

            <h3 class="pl-4 mt-12 mb-8">
                결제 > 기타
            </h3>
            <v-expansion-panels ultiple focusable hover inset>
                <v-expansion-panel>
                    <v-expansion-panel-header class="py-0">
                        <v-list-item>
                            <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                                <span class="white--text">Q</span>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title class="white-space-normal">CORS(Cross Origin Resource Sharing) 안내</v-list-item-title>
                                <!-- <v-list-item-subtitle>2020.06.17</v-list-item-subtitle> -->
                            </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pt-4 px-6">
                        페이플은 API에서 CROS Allow를 처리하지 않습니다.<br />
                        따라서 ajax 등의 javascript 통신은 오류가 발생합니다. <br />
                        또한 가맹점 인증이 요청된 서버를 기준으로 결과가 리턴됩니다. <br />
                        만약 가맹점 인증요청 서버와 업무처리요청 서버가 다른 경우 결과를 수신 받지 못하게 되며 origin 오류가 발생하게 됩니다.<br /><br />

                        <b>원인1)</b> 결제결과를 수신 받지 못하는 경우<br />
                        <b>해결)</b> 가맹점인증요청 도메인과 결제요청을 보낸 도메인을 같게 설정해야 합니다.<br />
                        <span class="tree-gutter"></span><span class="tree-gutter"></span># Origin 오류 도메인 설정 예시<br />
                        <span class="tree-gutter"></span><span class="tree-gutter"></span>-가맹점인증요청 서버: api.aaa.com<br />
                        <span class="tree-gutter"></span><span class="tree-gutter"></span>-결제요청 서버: www.aaa.com <br />
                        <span class="tree-gutter"></span><span class="tree-gutter"></span>위와 같이 2차 도메인이 다른 경우에도 오류가 발생합니다.<br /><br />

                        <b>원인2)</b> 결제창이 호출된 후 창이 닫히지 않는 경우 <br />
                        <b>해결)</b> ‘원인1’의 해결방법과 같습니다.<br /><br />
                        <b>원인3)</b> AWS등의 클라우드 서버의 일부에서 도메인정보가 전송되지 않는 경우<br />
                        <b>해결)</b> 가맹점인증요청 파일의 ‘header’에 ‘referer’를 추가해야 합니다.<br />
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header class="py-1">
                        <v-list-item>
                            <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                                <span class="white--text">Q</span>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title class="white-space-normal"
                                    >페이스북, 카카오톡 등 외부 앱에 연동되는 인앱브라우저 PCD_RST_URL 처리 방법</v-list-item-title
                                >
                                <!-- <v-list-item-subtitle>2020.06.17</v-list-item-subtitle> -->
                            </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pt-4 px-6">
                        /sub/fv123fa356a…. (x) <br />
                        https://payple.com/sub/fv123fa356a…. (o)
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
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
                    text: "FAQ",
                    disabled: true,
                },
            ],
            code_1_1: `
POST /php/auth.php HTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Referer: https://가맹점 도메인 
Cache-Control: no-cache
{
  "cst_id": "test",
  "custKey": "abcd1234567890"
}
`,
            code_1_2: `
POST /php/auth.php HTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Referer: https://가맹점 도메인
Cache-Control: no-cache
{
  "cst_id": "test",
  "custKey": "abcd1234567890"
}
`,
            code_1_3: `
POST /php/auth.php HTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Referer: https://가맹점 도메인
Cache-Control: no-cache
{
  "cst_id": "test",
  "custKey": "abcd1234567890"
}
`,
            code_1_4: `
POST /php/auth.php HTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Referer: ‘https://aaa.kr’
Cache-Control: no-cache
{
  "cst_id": "test",
  "custKey": "abcd1234567890"
}
`,
        };
    },
};
</script>
