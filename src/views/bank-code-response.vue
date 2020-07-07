<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-12">응답코드</h1>
        <blockquote class="mb-12 blockquote body-1">
            응답코드 및 응답메세지를 확인할 수 있습니다.
        </blockquote>

        <article class="mb-12">
            <h2 class="">
                응답코드 양식
            </h2>
            <blockquote class="mb-12 blockquote body-1">
                응답코드는 다음과 같은 양식으로 작성되어 있습니다.
            </blockquote>

            <v-card max-width="1000" raised class="pa-2 ma-4 mb-12">
                <v-img :src="require('../../src/assets/test-1.png')" cover class="grey darken-4 "></v-img>
            </v-card>

            <v-alert border="left" colored-border color="blue accent-2" elevation="2" class="ma-4 mb-12">
                <h3 class="pl-4 pb-4">
                    1) 페이플 응답코드
                </h3>
                <p class="pl-8 pb-4">
                    페이플에서 제공하는 응답코드입니다.
                </p>
                <h3 class="pl-4 pb-4">
                    2) 기관 응답코드
                </h3>
                <p class="pl-8 pb-4">
                    기관에서 제공하는 응답코드입니다. 1번과 같이 나오지 않을 수 있습니다.
                </p>
                <h3 class="pl-4 pb-4">
                    3) 응답 메세지
                </h3>
                <p class="pl-8">
                    응답메세지가 나오는 부분입니다. <br />
                    2번 기관 응답코드가 없는 경우, 1번의 페이플 응답메세지가 보여집니다.<br />
                    페이플 응답코드와 기관 응답코드가 동시에 보여지는 경우, 기관의 응답메세지가 우선적으로 노출됩니다.
                </p>
            </v-alert>

            <!-- <v-tabs class="mb-12">
                <v-tab>페이플 응답코드</v-tab>
                <v-tab>카드기관 응답코드</v-tab>
                <v-tab>(구)페이플 응답코드</v-tab>
            </v-tabs> -->

            <h3 class="pl-4">
                페이플 응답코드
            </h3>
            <v-card class="temp_table ma-4 mb-12">
                <v-simple-table class="table-hover-disable">
                    <tbody>
                        <tr>
                            <td dir="ltr">TYPE</td>
                            <td dir="ltr">응답코드</td>
                            <td dir="ltr">응답메세지</td>
                            <td dir="ltr">설명</td>
                        </tr>
                        <tr>
                            <td dir="ltr" rowspan="5">AUTH<br />(가맹점 인증)</td>
                            <td dir="ltr">0001</td>
                            <td dir="ltr">가맹점 인증에 필요한 cst_id 를 확인해주세요.</td>
                            <td dir="ltr">
                                - 가맹점에서 페이플로 전송된 cst_id 가 페이플에서 발급된 cst_id 와 다르거나 공백인 경우에 발생합니다.<br />- cst_id 는 최초
                                가맹점 오픈 안내 메일에 첨부해 발송드립니다.<br />- 테스트환경과 운영환경에서 쓰이는 cst_id가 다르니 확인해주세요.<br />-
                                테스트환경의 cst_id는 연동가이드에서 확인할 수 있으며 운영환경에서 cst_id는 최초 가맹점 오픈 안내 메일에 첨부해 발송드립니다.
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">0002</td>
                            <td dir="ltr">가맹점 인증에 필요한 custKey 를 확인해주세요.</td>
                            <td dir="ltr">
                                - 가맹점 -&gt; 페이플로 전송된 custKey 가 페이플에서 발급된 custKey 와 다르거나 공백인 경우에 발생합니다.<br />- 테스트환경과
                                운영환경에서 쓰이는 custKey가 다르니 확인해주세요.<br />- 테스트환경의 custKey는 연동가이드에서 확인할 수 있으며 운영환경에서
                                custKey는 최초 가맹점 오픈 안내 메일에 첨부해 발송드립니다.
                            </td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td dir="ltr">가맹점 계정(cst_id)이 존재하지 않습니다.</td>
                            <td dir="ltr">
                                - 가맹점에서 보내준 cst_id가 페이플에 등록되어있지 않았을 때 발생합니다.<br />- 테스트환경과 운영환경에서 쓰이는 custKey가
                                다르니 확인해주세요.<br />- 테스트환경의 custKey는 연동가이드에서 확인할 수 있으며 운영환경에서 custKey는 최초 가맹점 오픈 안내
                                메일에 첨부해 발송드립니다.
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">0004</td>
                            <td dir="ltr">접속하시는 서버의 도메인 확인이 필요합니다.</td>
                            <td dir="ltr">
                                - 페이플에 등록된 가맹점의 도메인, IP 만 페이플 서버에 접속이 가능합니다.<br />- 페이플에 등록된 가맹점
                                도메인(www.yourdomain.com)의 서브도메인(sub.yourdomain.com)은 별도 설정없이 접속 가능합니다.<br />- 가맹점의 AWS(아마존웹서비스)
                                이용으로 해당 응답코드 발생 시 가맹점 서버 도메인의 REFERER 추가를 해주셔야 합니다.(상세한 내용은 페이플 기술지원팀
                                dev@payple.kr 으로 문의주세요.)<br />- 카페24, 가비아 등 서버호스팅 이용 시 호스팅사에 페이플 URL(테스트, 운영) 방화벽 오픈을
                                요청하셔야 할 수 있습니다.
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">0006</td>
                            <td dir="ltr">보안프로토콜(HTTPS) 접속이 필요합니다.</td>
                            <td dir="ltr">- 페이플 서버 접속을 위해서는 보안프로토콜(HTTPS) 접속이 필수입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr" rowspan="7">ARSA<br />(이통사 본인인증)</td>
                            <td dir="ltr">0001</td>
                            <td dir="ltr">인증시간(3분)이 초과되었습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">
                                - 사용자가 최초 계좌연결을 위한 ARS 인증을 시도하였으나 정해진 인증 시간이 초과되었기 때문에 발생하는 응답입니다.<br />-
                                사용자의 재시도가 필요합니다.
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">0003</td>
                            <td dir="ltr">이용하시는 상점의 건당 한도가 초과되었습니다. 상점 관리자에게 문의주세요.</td>
                            <td dir="ltr">
                                - 가맹점의 건당 한도 초과에 대한 응답이며 페이플의 가맹점 담당자와 협의가 필요합니다.<br />- 은행정책으로 인해 계좌이체 건당
                                한도는 200만원입니다.
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">0004</td>
                            <td dir="ltr">이용하시는 상점의 한도가 초과되었습니다. 상점 관리자에게 문의주세요.</td>
                            <td dir="ltr">- 가맹점의 월 한도 초과에 대한 응답이며 페이플의 가맹점 담당자와 협의가 필요합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">0006</td>
                            <td dir="ltr">본인 정보를 바르게 입력해주세요.</td>
                            <td dir="ltr">- 이통사 본인확인 실패 시에 발생하는 응답입니다. <br />- 사용자의 재시도가 필요합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">0007</td>
                            <td dir="ltr">본인 정보를 바르게 입력해주세요.</td>
                            <td dir="ltr">- 이통사 본인확인 실패 시에 발생하는 응답입니다. <br />- 사용자의 재시도가 필요합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">1001</td>
                            <td dir="ltr">인증시간(3분)이 초과되었습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">- 법인계좌 인증을 위해 진행하는 1원 인증에 필요한 시간(3분)이 초과되어 발생하는 응답입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">9998</td>
                            <td dir="ltr">은행 점검시간 (00:00~00:00) 입니다. 점검시간을 피해 다시 시도해주세요.</td>
                            <td dir="ltr"></td>
                        </tr>
                        <tr>
                            <td dir="ltr" rowspan="10">CPAY<br />(출금)</td>
                            <td dir="ltr">0001</td>
                            <td dir="ltr">인증세션이 만료되었습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">
                                - 브라우저의 세션이 만료되어 가맹점 인증을 수행할 수 없을 때 발생합니다. <br />- 브라우저를 종료하고 다시 시도해주세요.
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">0002</td>
                            <td dir="ltr">결제 진행 중 오류가 발생하였습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">
                                - 요청한 PCD_PAYER_ID가 페이플에 등록되어 있지 않았을 때 발생하는 응답입니다. <br />- 계좌등록이 된 상태인지 PCD_PAYER_ID를 다시
                                확인해주세요
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">0003</td>
                            <td dir="ltr">결제 진행 중 오류가 발생하였습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">
                                - 요청한 PCD_PAYER_ID가 페이플에 등록되어 있지 않았을 때 발생하는 응답입니다. <br />- 계좌등록이 된 상태인지 PCD_PAYER_ID를 다시
                                확인해주세요
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">0005</td>
                            <td dir="ltr">이용하시는 상점의 한도가 초과되었습니다. 상점 관리자에게 문의주세요.</td>
                            <td dir="ltr">
                                - 가맹점의 건당 한도 초과에 대한 응답이며 페이플의 가맹점 담당자와 협의가 필요합니다.<br />- 은행정책으로 인해 계좌이체 건당
                                한도는 200만원입니다.
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">0006</td>
                            <td dir="ltr">이용하시는 상점의 한도가 초과되었습니다. 상점 관리자에게 문의주세요.</td>
                            <td dir="ltr">- 가맹점의 월 한도 초과에 대한 응답이며 페이플의 가맹점 담당자와 협의가 필요합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">0022</td>
                            <td dir="ltr">결제 진행 중 오류가 발생하였습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">- 은행으로의 출금이체 전문 전송이 실패하거나 전문 오류로 인한 전송 실패 시 발생하는 응답입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">0026</td>
                            <td dir="ltr">결제 진행 중 오류가 발생하였습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">- 결제요청 금액이 일치하지 않을 때 발생하는 응답입니다.<br />- 상점의 확인이 필요합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">0201</td>
                            <td dir="ltr">이미 존재하는 거래입니다. 다시 시도해주세요.</td>
                            <td dir="ltr">- 주문번호가 중복될 때 발생하는 응답입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">0202</td>
                            <td dir="ltr">이미 존재하는 거래입니다. 다시 시도해주세요.</td>
                            <td dir="ltr">- 주문번호가 중복될 때 발생하는 응답입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">9998</td>
                            <td dir="ltr">은행 점검시간(00:00 ~ 00:00)입니다. <br />점검시간을 피해 다시 시도해주세요.</td>
                            <td dir="ltr"></td>
                        </tr>
                        <tr>
                            <td dir="ltr" rowspan="2">BILL</td>
                            <td dir="ltr">0002</td>
                            <td dir="ltr">인증세션이 만료되었습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">
                                - 브라우저의 세션이 만료되어 가맹점 인증을 수행할 수 없을 때 발생합니다. <br />- 브라우저를 종료하고 다시 시도해주세요.
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">0003</td>
                            <td dir="ltr">현금영수증 발행을 실패했습니다.</td>
                            <td dir="ltr">
                                - 네트워크 장애로 인해 현금영수증 발행이 실패된 케이스로, <br />1. 현금영수증 발행API로 발행 재시도를 하시거나<br />2. 가맹점
                                관리자에서 결제건을 찾아 현금영수증 발행을 할 수 있습니다.
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr" rowspan="7">SPAY<br />(간편결제 REST)</td>
                            <td dir="ltr">0002</td>
                            <td dir="ltr">평생계좌번호가 아닌 실계좌번호를 입력해주세요.</td>
                            <td dir="ltr">- 휴대폰번호 등의 평생계좌번호는 출금이 불가능합니다. <br />- 평생계좌번호에 연결된 실계좌번호가 필요합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">0003</td>
                            <td dir="ltr">이용하시는 상점의 한도가 초과되었습니다. 상점 관리자에게 문의주세요.</td>
                            <td dir="ltr">
                                - 가맹점의 건당 한도 초과에 대한 응답이며 페이플의 가맹점 담당자와 협의가 필요합니다.<br />- 은행정책으로 인해 계좌이체 건당
                                한도는 200만원입니다.
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">0004</td>
                            <td dir="ltr">이용하시는 상점의 한도가 초과되었습니다. 상점 관리자에게 문의주세요.</td>
                            <td dir="ltr">- 가맹점의 월 한도 초과에 대한 응답이며 페이플의 가맹점 담당자와 협의가 필요합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">0005</td>
                            <td dir="ltr">결제 진행 중 오류가 발생하였습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">
                                - 요청한 PCD_PAYER_ID가 페이플에 등록되어 있지 않았을 때 발생하는 응답입니다.<br />- 계좌등록이 된 상태인지 PCD_PAYER_ID를 다시
                                확인해주세요
                            </td>
                        </tr>
                        <tr>
                            <td>0019</td>
                            <td>결제 진행 중 오류가 발생하였습니다. 다시 시도해주세요.</td>
                            <td>- ACT_ 또는 PCD_SIMPLE_FLAG 값 오류로 발생하는 응답입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">0023</td>
                            <td dir="ltr">결제가능 최저금액은 1,000원 입니다.</td>
                            <td dir="ltr"></td>
                        </tr>
                        <tr>
                            <td dir="ltr">9998</td>
                            <td dir="ltr">은행 점검시간 (00:00~00:00) 입니다. 점검시간을 피해 다시 시도해주세요.</td>
                            <td dir="ltr"></td>
                        </tr>
                        <tr>
                            <td dir="ltr" rowspan="5">RPAY<br />(정기결제 REST)</td>
                            <td dir="ltr">0001</td>
                            <td dir="ltr">인증세션이 만료되었습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">
                                - 브라우저의 세션이 만료되어 가맹점 인증을 수행할 수 없을 때 발생합니다. <br />- 브라우저를 종료하고 다시 시도해주세요.
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">0003</td>
                            <td dir="ltr">이용하시는 상점의 건당 한도가 초과되었습니다. 상점 관리자에게 문의주세요.</td>
                            <td dir="ltr">
                                - 가맹점의 건당 한도 초과에 대한 응답이며 페이플의 가맹점 담당자와 협의가 필요합니다.<br />- 은행정책으로 인해 계좌이체 건당
                                한도는 200만원입니다.
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">0004</td>
                            <td dir="ltr">이용하시는 상점의 한도가 초과되었습니다. 상점 관리자에게 문의주세요.</td>
                            <td dir="ltr">- 가맹점의 월 한도 초과에 대한 응답이며 페이플의 가맹점 담당자와 협의가 필요합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">0005</td>
                            <td dir="ltr">결제 진행 중 오류가 발생하였습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">
                                - 요청한 PCD_PAYER_ID가 페이플에 등록되어 있지 않았을 때 발생하는 응답입니다. <br />- PCD_PAYER_ID를 다시 확인해주세요
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">9998</td>
                            <td dir="ltr">은행 점검시간 (00:00~00:00) 입니다. 점검시간을 피해 다시 시도해주세요.</td>
                            <td dir="ltr"></td>
                        </tr>
                        <tr>
                            <td dir="ltr" rowspan="15">AUTH<br />(계좌등록)</td>
                            <td dir="ltr">0001</td>
                            <td dir="ltr">인증세션이 만료되었습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">- 가맹점 인증세션이 만료되었을 때 발생하는 응답입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">0006</td>
                            <td dir="ltr">은행 점검시간 (00:00~00:00) 입니다. 점검시간을 피해 다시 시도해주세요.</td>
                            <td dir="ltr"></td>
                        </tr>
                        <tr>
                            <td dir="ltr">0103</td>
                            <td dir="ltr">계좌정보와 생년월일 / 사업자번호를 바르게 입력해주세요.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td dir="ltr">0104</td>
                            <td dir="ltr">계좌 예금주명을 바르게 입력해주세요.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td dir="ltr">0105</td>
                            <td dir="ltr">계좌등록 중 오류가 발생하였습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">
                                - 계좌 인증정보가 페이플 DB에 정상적으로 업데이트 되지 못하여 발생하는 응답입니다.<br />- 브라우저를 종료시킨 후 다시
                                시도해주세요
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">0106</td>
                            <td dir="ltr">계좌등록 중 오류가 발생하였습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">
                                - 계좌 인증정보가 페이플 DB에 정상적으로 업데이트 되지 못하여 발생하는 응답입니다.<br />- 브라우저를 종료시킨 후 다시
                                시도해주세요
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">0202</td>
                            <td dir="ltr">계좌등록 중 오류가 발생하였습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">
                                - 계좌 인증정보가 페이플 DB에 정상적으로 업데이트 되지 못하여 발생하는 응답입니다.<br />- 브라우저를 종료시킨 후 다시
                                시도해주세요
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">0203</td>
                            <td dir="ltr">계좌등록 중 오류가 발생하였습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">
                                - 계좌 인증정보가 페이플 DB에 정상적으로 업데이트 되지 못하여 발생하는 응답입니다.<br />- 브라우저를 종료시킨 후 다시
                                시도해주세요
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">1101</td>
                            <td dir="ltr">인증시간(3분)이 초과되었습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">- 법인계좌 인증을 위해 진행하는 1원 인증에 필요한 시간(3분)이 초과되어 발생하는 응답입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">1102</td>
                            <td dir="ltr">인증번호를 바르게 입력해주세요.</td>
                            <td dir="ltr">- 법인계좌 인증을 위해 진행하는 인증 시 인증번호를 다르게 입력하면 발생하는 응답입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">1203</td>
                            <td dir="ltr">계좌등록 중 오류가 발생하였습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">
                                - 계좌 인증정보가 페이플 DB에 정상적으로 업데이트 되지 못하여 발생하는 응답입니다.<br />- 브라우저를 종료시킨 후 다시
                                시도해주세요
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">1204</td>
                            <td dir="ltr">계좌등록 중 오류가 발생하였습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">
                                - 계좌 인증정보가 페이플 DB에 정상적으로 업데이트 되지 못하여 발생하는 응답입니다.<br />- 브라우저를 종료시킨 후 다시
                                시도해주세요
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">1301</td>
                            <td dir="ltr">계좌등록 중 오류가 발생하였습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">- 계좌 인증정보가 페이플 DB에 정상적으로 업데이트 되지 못하여 발생하는 응답입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">1304</td>
                            <td dir="ltr">계좌등록 중 오류가 발생하였습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">
                                - 계좌 인증정보가 페이플 DB에 정상적으로 업데이트 되지 못하여 발생하는 응답입니다.<br />- 브라우저를 종료시킨 후 다시
                                시도해주세요
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">1305</td>
                            <td dir="ltr">계좌등록 중 오류가 발생하였습니다. 다시 시도해주세요.</td>
                            <td dir="ltr">
                                - 계좌 인증정보가 페이플 DB에 정상적으로 업데이트 되지 못하여 발생하는 응답입니다.<br />- 브라우저를 종료시킨 후 다시
                                시도해주세요
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <h3 class="pl-4">
                카드기관 응답코드
            </h3>
            <v-card class="temp_table ma-4 mb-12">
                <v-simple-table class="table-hover-disable">
                    <tbody>
                        <tr>
                            <td dir="ltr">은행명</td>
                            <td dir="ltr">응답코드</td>
                            <td dir="ltr">응답메세지</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">0</td>
                            <td dir="ltr">정상처리</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">100</td>
                            <td dir="ltr">전문 FORMAT FIELD ERROR, 결번이 없음</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">101</td>
                            <td dir="ltr">수취계좌 없음</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">102</td>
                            <td dir="ltr">수취인 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">103</td>
                            <td dir="ltr">수취인계좌번호내의 점번호 틀림</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">104</td>
                            <td dir="ltr">수취인계좌 잔액증명서 발부상태</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">105</td>
                            <td dir="ltr">수취인계좌 통장정리후 거래가능</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">106</td>
                            <td dir="ltr">수취계좌 입금한도 초과</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">107</td>
                            <td dir="ltr">실명전환 주민번호를 입력</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">108</td>
                            <td dir="ltr">총금액이 상이</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">199</td>
                            <td dir="ltr">미처리</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">201</td>
                            <td dir="ltr">통장분실 재발행 계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">202</td>
                            <td dir="ltr">법적 제한 계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">203</td>
                            <td dir="ltr">실명계좌 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">204</td>
                            <td dir="ltr">해약계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">205</td>
                            <td dir="ltr">잡좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">300</td>
                            <td dir="ltr">기일정보를 생성할 수 없음(실명 미확인)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">400</td>
                            <td dir="ltr">기타수취불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">401</td>
                            <td dir="ltr">업무가 종료</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">402</td>
                            <td dir="ltr">개설은행 장애</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">403</td>
                            <td dir="ltr">잠시 후 재처리</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">501</td>
                            <td dir="ltr">계좌비밀번호 1회 오류입력</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">502</td>
                            <td dir="ltr">계좌비밀번호 2회 오류입력</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">503</td>
                            <td dir="ltr">계좌비밀번호 3회 오류입력</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">504</td>
                            <td dir="ltr">비밀번호 오류횟수가 초과</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">600</td>
                            <td dir="ltr">신청구분 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">601</td>
                            <td dir="ltr">납부자번호 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">602</td>
                            <td dir="ltr">대상 납부자 없음(자동이체미등록)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">603</td>
                            <td dir="ltr">해지신청시 계좌번호 불일치</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">604</td>
                            <td dir="ltr">신규신청 불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">605</td>
                            <td dir="ltr">이중신청(동일 납부자번호&amp;동일계좌)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">606</td>
                            <td dir="ltr">징수기관 임의해지</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">607</td>
                            <td dir="ltr">자동이체 해지되었음(영업점해지)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">608</td>
                            <td dir="ltr">자동이체 해지되었음(업체 해지)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">1000</td>
                            <td dir="ltr">잔액부족으로 거래불가능</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">1001</td>
                            <td dir="ltr">수취인(예금주) 성명 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">1002</td>
                            <td dir="ltr">연체계좌, 한도초과</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">1003</td>
                            <td dir="ltr">지급정지된 계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">1004</td>
                            <td dir="ltr">일부출금</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">1005</td>
                            <td dir="ltr">미처리</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">1006</td>
                            <td dir="ltr">이체일 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">1007</td>
                            <td dir="ltr">지급가능잔액(타점권 미결)이 부족</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">1008</td>
                            <td dir="ltr">시스템 오류 입니다</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">1009</td>
                            <td dir="ltr">거래일자가 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">1010</td>
                            <td dir="ltr">계정과목코드가 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">1011</td>
                            <td dir="ltr">이체금액 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">1012</td>
                            <td dir="ltr">계좌번호 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">1013</td>
                            <td dir="ltr">해당 원장이 존재하지 않음</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">1014</td>
                            <td dir="ltr">계좌상태를 확인</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">1015</td>
                            <td dir="ltr">계좌상태오류로 거래불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">2000</td>
                            <td dir="ltr">신청구분 입력 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">2001</td>
                            <td dir="ltr">납부자번호 오류, CMS번호 상이</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">2002</td>
                            <td dir="ltr">대상 납부자 없음(자동이체미등록)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">2003</td>
                            <td dir="ltr">해지신청시 계좌번호 불일치</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">2004</td>
                            <td dir="ltr">신규신청 불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">2005</td>
                            <td dir="ltr">이중신청(동일납부자번호&amp;동일계좌)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">2006</td>
                            <td dir="ltr">징수기관 임의해지</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">2007</td>
                            <td dir="ltr">자동이체 해지되었음(영업점해지)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">2008</td>
                            <td dir="ltr">자동이체 해지되었음(업체해지)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">2015</td>
                            <td dir="ltr">이중신청(동일납부자번호&amp;상이계좌)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">산업은행</td>
                            <td dir="ltr">2017</td>
                            <td dir="ltr">
                                <div>타행환거래 불가상태계좌(CMS계좌등), 해당지점 처리불가 상태, 필수항목이 입력되지 않았음</div>
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">0</td>
                            <td dir="ltr">정상</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">107</td>
                            <td dir="ltr">자동이체등록시 주민/사업자번호오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">1010</td>
                            <td dir="ltr">자동이체등록시 과목코드오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">1012</td>
                            <td dir="ltr">자동이체등록시 계좌번호오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">1013</td>
                            <td dir="ltr">평생계좌 출금거래 안됨</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">1014</td>
                            <td dir="ltr">자동이체등록시 계좌해지</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">2001</td>
                            <td dir="ltr">자동이체등록시 납부자번호오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">2005</td>
                            <td dir="ltr">자동이체 이중 신청</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">2008</td>
                            <td dir="ltr">자동이체 미신청</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">3531</td>
                            <td dir="ltr">평생계좌 출금거래 안됨</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">NREC</td>
                            <td dir="ltr">원거래내역없음(전자어음업체해당)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U001</td>
                            <td dir="ltr">전문 FORMAT ERROR</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U002</td>
                            <td dir="ltr">LINE 장애</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U003</td>
                            <td dir="ltr">이중거래</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U004</td>
                            <td dir="ltr">관련업무 아님</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U104</td>
                            <td dir="ltr">거래일이 휴일임</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U105</td>
                            <td dir="ltr">이체일자 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U109</td>
                            <td dir="ltr">복기부호 상이</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U111</td>
                            <td dir="ltr">취급은행 시스템장애</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U112</td>
                            <td dir="ltr">취급은행 개시이전</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U113</td>
                            <td dir="ltr">계좌번호체계 오류 , 취급은행 업무종료</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U114</td>
                            <td dir="ltr">전문번호 중복</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U115</td>
                            <td dir="ltr">CMS계좌 오류(CMS코드필요)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U117</td>
                            <td dir="ltr">해당전문번호 없음</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U121</td>
                            <td dir="ltr">개시전문 수신전임 , 중계센타 시스템장애</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U123</td>
                            <td dir="ltr">중계센타 종료</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U131</td>
                            <td dir="ltr">개설은행 보통계정처리불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U132</td>
                            <td dir="ltr">잔액조회불가계좌(수신계좌아님), 개설은행 저축계정처리불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U133</td>
                            <td dir="ltr">개설은행 자유저축계정처리불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U134</td>
                            <td dir="ltr">개설은행 가계종합계정처리불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U135</td>
                            <td dir="ltr">개설은행 당좌계정처리불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U136</td>
                            <td dir="ltr">개설은행 기업자유계정처리불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U137</td>
                            <td dir="ltr">개설은행 별단계정처리불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U138</td>
                            <td dir="ltr">중계센타 원장 장애</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U140</td>
                            <td dir="ltr">개설은행 장애</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U141</td>
                            <td dir="ltr">개설은행 시스템장애</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U142</td>
                            <td dir="ltr">개설은행 개시이전</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U143</td>
                            <td dir="ltr">개설은행 업무종료</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U144</td>
                            <td dir="ltr">개설은행 적금계정처리불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U145</td>
                            <td dir="ltr">개설은행 신탁계정처리불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U150</td>
                            <td dir="ltr">미참가은행</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U151</td>
                            <td dir="ltr">개설은행 서비스시간아님</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U152</td>
                            <td dir="ltr">개설은행 수신전문오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U198</td>
                            <td dir="ltr">기타 ERROR</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U199</td>
                            <td dir="ltr">SYSTEM ERROR</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U211</td>
                            <td dir="ltr">해당계좌 없음</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U212</td>
                            <td dir="ltr">출금계좌 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U213</td>
                            <td dir="ltr">출금계좌비밀번호 상이</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U214</td>
                            <td dir="ltr">출금계좌 잔액부족</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U215</td>
                            <td dir="ltr">출금계좌 거래제한</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U216</td>
                            <td dir="ltr">입금계좌 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U217</td>
                            <td dir="ltr">입금계좌 입금한도초과</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U218</td>
                            <td dir="ltr">잔액증명서 발급계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U223</td>
                            <td dir="ltr">미등록계좌 또는 해지계좌임</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U252</td>
                            <td dir="ltr">주민／사업자번호 상이</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U302</td>
                            <td dir="ltr">메세지 코드오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U303</td>
                            <td dir="ltr">업무구분코드오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U304</td>
                            <td dir="ltr">은행코드오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U305</td>
                            <td dir="ltr">지점코드오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U308</td>
                            <td dir="ltr">계좌번호오류 , 계좌번호상위</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U309</td>
                            <td dir="ltr">이중거래임</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U310</td>
                            <td dir="ltr">해당지점처리불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U311</td>
                            <td dir="ltr">응답대기시간경과（시간 초과）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U312</td>
                            <td dir="ltr">과목코드 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U333</td>
                            <td dir="ltr">국민카드전액출금시</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U334</td>
                            <td dir="ltr">가상계좌 수취거절</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U401</td>
                            <td dir="ltr">수취인계좌없음</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U402</td>
                            <td dir="ltr">수취인계좌잔액증명서발부</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U403</td>
                            <td dir="ltr">수취인계좌통장정리후거래가능</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U404</td>
                            <td dir="ltr">수취인계좌입금한도초과</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U405</td>
                            <td dir="ltr">수취인성명오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U406</td>
                            <td dir="ltr">이체한도초과</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U407</td>
                            <td dir="ltr">총금액상위</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U408</td>
                            <td dir="ltr">통장분실재발행계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U409</td>
                            <td dir="ltr">법적제한계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U410</td>
                            <td dir="ltr">이관계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U411</td>
                            <td dir="ltr">해약계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U412</td>
                            <td dir="ltr">잡좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U413</td>
                            <td dir="ltr">기타수취불가가（해당개설점연락）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U414</td>
                            <td dir="ltr">추심대전수수료상위</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U415</td>
                            <td dir="ltr">불입금상위（１회불입단위가있는경우）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U416</td>
                            <td dir="ltr">불입횟수초과（해당개설점연락）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U417</td>
                            <td dir="ltr">타행이체거래불가계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U418</td>
                            <td dir="ltr">비실명계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U419</td>
                            <td dir="ltr">시엠스 코드기재요망</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U420</td>
                            <td dir="ltr">시엠스 코드상이</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U430</td>
                            <td dir="ltr">개설은행 이체처리중</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U501</td>
                            <td dir="ltr">지급필수표임</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U502</td>
                            <td dir="ltr">수표구분코드상위</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U503</td>
                            <td dir="ltr">수표금액상위</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U504</td>
                            <td dir="ltr">수표번호상위</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U505</td>
                            <td dir="ltr">기조회된수표임</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U506</td>
                            <td dir="ltr">미발행수표임</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U507</td>
                            <td dir="ltr">예금부족（수표부도사유）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U508</td>
                            <td dir="ltr">무거래（수표부도사유）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U509</td>
                            <td dir="ltr">형식불비（수표부도사유）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U510</td>
                            <td dir="ltr">안내서미착（수표부도사유）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U511</td>
                            <td dir="ltr">사고신고접수（분실,도난,피사취）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U512</td>
                            <td dir="ltr">변조,위조（수표부도사유）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U513</td>
                            <td dir="ltr">인감서명상위（수표부도사유）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U514</td>
                            <td dir="ltr">지급지상위（수표부도사유）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U515</td>
                            <td dir="ltr">법적으로지급제한（수표부도사유）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U516</td>
                            <td dir="ltr">장당발행한도초과（수표부도사유）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U517</td>
                            <td dir="ltr">제시기간경과（수표부도사유）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U520</td>
                            <td dir="ltr">해당 내국신용장번호가 없음</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U521</td>
                            <td dir="ltr">내국 신용장 잔액부족</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U522</td>
                            <td dir="ltr">기타 내국신용장 매입등록 불가（개설점 연락）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U523</td>
                            <td dir="ltr">내국신용장 종류 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U524</td>
                            <td dir="ltr">내국신용장 통화코드 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U525</td>
                            <td dir="ltr">내국신용장 유효기일 경과</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U526</td>
                            <td dir="ltr">ＥＤＩ방식 내국신용장이 아님</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U601</td>
                            <td dir="ltr">원거래없음</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U602</td>
                            <td dir="ltr">개설은행 이체（매입）처리중（개설무응답）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U603</td>
                            <td dir="ltr">개설은행취소처리중</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U604</td>
                            <td dir="ltr">원거래 계좌번호（내국신용장번호）상위</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U605</td>
                            <td dir="ltr">원거래 금액（매입금액）상위</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U606</td>
                            <td dir="ltr">원거래기타사항상위</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U607</td>
                            <td dir="ltr">기 취소（출금）된거래임</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U608</td>
                            <td dir="ltr">잔액부족</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U609</td>
                            <td dir="ltr">원거래불명（원거래비정상）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U610</td>
                            <td dir="ltr">처리결과조회가능기간경과</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U611</td>
                            <td dir="ltr">재취소 요망（전일자 취소 개설은행 무응답,수신전문오류등）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U612</td>
                            <td dir="ltr">개설은행 확인요망（전일자 취소 불능）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U701</td>
                            <td dir="ltr">ＭＳ기록오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U702</td>
                            <td dir="ltr">만료카드</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U703</td>
                            <td dir="ltr">비밀번호상위</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U704</td>
                            <td dir="ltr">위,변조카드</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U705</td>
                            <td dir="ltr">지급한도초과（１일１회한도초과）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U706</td>
                            <td dir="ltr">분실도난카드</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U707</td>
                            <td dir="ltr">지급횟수초과</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U708</td>
                            <td dir="ltr">비밀번호입력횟수초과</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U709</td>
                            <td dir="ltr">해당계좌없음</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U710</td>
                            <td dir="ltr">계좌에관련정보없음</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U711</td>
                            <td dir="ltr">출금은행사용불가,출금은행장애</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U712</td>
                            <td dir="ltr">예금잔액부족</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U713</td>
                            <td dir="ltr">지급가능잔액부족（타점권미결）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U714</td>
                            <td dir="ltr">대월한도초과</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U715</td>
                            <td dir="ltr">수수료부족</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U716</td>
                            <td dir="ltr">연체계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U717</td>
                            <td dir="ltr">잔액및부채증명발급계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U718</td>
                            <td dir="ltr">통장정리후거래（무통건수초과）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U719</td>
                            <td dir="ltr">인감분실</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U720</td>
                            <td dir="ltr">카드발급미등록</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U721</td>
                            <td dir="ltr">법적등록계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U722</td>
                            <td dir="ltr">비밀번호상위,유효성코드갱신요망</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U723</td>
                            <td dir="ltr">사고신고계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U724</td>
                            <td dir="ltr">거래중지계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U725</td>
                            <td dir="ltr">구매전용카드아님</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U726</td>
                            <td dir="ltr">입금처리중（처리결과조회요망）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U727</td>
                            <td dir="ltr">카드발행은행 문의요망</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U763</td>
                            <td dir="ltr">대출한도금액 미등록 상태</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U764</td>
                            <td dir="ltr">거래금액이 대출한도 금액 초과</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U765</td>
                            <td dir="ltr">대출결제일자 오류（금일이전／휴일）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U766</td>
                            <td dir="ltr">선결제 미취급</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U771</td>
                            <td dir="ltr">동일인 이체 아님（구매자계좌이체시）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U772</td>
                            <td dir="ltr">구매전용카드 계좌 아님（입금 또는 출금계좌）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U773</td>
                            <td dir="ltr">출금계좌가 가맹점계좌 아님（가맹점계좌이체시）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U801</td>
                            <td dir="ltr">해당 가맹점에대한 정보없음</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U802</td>
                            <td dir="ltr">기등록된 가맹점임</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U803</td>
                            <td dir="ltr">가맹점번호체계오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U804</td>
                            <td dir="ltr">기 등록 사업자등록번호</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">U999</td>
                            <td dir="ltr">순채무한도초과（개설점문의바람）</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">UKKK</td>
                            <td dir="ltr">제휴업무 입금처리중</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">UTIM</td>
                            <td dir="ltr">응답시간초과</td>
                        </tr>
                        <tr>
                            <td dir="ltr">기업은행</td>
                            <td dir="ltr">UXXX</td>
                            <td dir="ltr">기타오류응답</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">0</td>
                            <td dir="ltr">정상처리</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">1</td>
                            <td dir="ltr">전문형식불일치</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">2</td>
                            <td dir="ltr">전문구분코드 및 업무구분코드 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">3</td>
                            <td dir="ltr">업무장애SET</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">4</td>
                            <td dir="ltr">은행시스템장애(DB CALL오류)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">6</td>
                            <td dir="ltr">업체기관코드 오류(해당업체코드 없슴)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7</td>
                            <td dir="ltr">은행코드오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">9</td>
                            <td dir="ltr">은행시스템장애(DB CALL오류)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">100</td>
                            <td dir="ltr">전문번호 없음</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">101</td>
                            <td dir="ltr">전문번호 중복</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">102</td>
                            <td dir="ltr">이체 업무 미개시</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">103</td>
                            <td dir="ltr">이체 업무 마감</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">105</td>
                            <td dir="ltr">이체계좌점 마감</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">106</td>
                            <td dir="ltr">입금계좌가 법착계좌이거나 대손상각계좌임</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">107</td>
                            <td dir="ltr">전문번호 중복</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">111</td>
                            <td dir="ltr">이체일자 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">112</td>
                            <td dir="ltr">이체금액 오류(금액이 숫자가 아닌경우 포함), 이체한도초과</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">116</td>
                            <td dir="ltr">주민번호 또는 사업자번호 상이</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">117</td>
                            <td dir="ltr">입금계좌가 해지/거래중지좌임</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">119</td>
                            <td dir="ltr">출금계좌 비밀번호3회이상 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">120</td>
                            <td dir="ltr">계좌 자릿수 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">122</td>
                            <td dir="ltr">입금계좌오류(계좌CHECK DIGIT오류)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">123</td>
                            <td dir="ltr">입금한도오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">128</td>
                            <td dir="ltr">실명 미확인 계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">129</td>
                            <td dir="ltr">해지계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">130</td>
                            <td dir="ltr">거래중지좌편입계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">131</td>
                            <td dir="ltr">출금모계좌 미등록</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">132</td>
                            <td dir="ltr">입출금계좌 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">133</td>
                            <td dir="ltr">출금계좌 잔액부족</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">138</td>
                            <td dir="ltr">입금등록계좌가 없음(입출등록 해지요청시)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">140</td>
                            <td dir="ltr">
                                <div>전자금융거래 제한(창구거래만 가능. 다른 계좌를 사용하거나 계좌주가 제한을 해제하면 가능)</div>
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">143</td>
                            <td dir="ltr">타행환 은행코드 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">145</td>
                            <td dir="ltr">타행환 입금은행 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">148</td>
                            <td dir="ltr">타행환 송신중 TIME OVER</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">149</td>
                            <td dir="ltr">타행환 입금계좌 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">150</td>
                            <td dir="ltr">잔액증명 발급계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">151</td>
                            <td dir="ltr">해당 지점 마감</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">152</td>
                            <td dir="ltr">전출 해지 계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">153</td>
                            <td dir="ltr">점코드 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">154</td>
                            <td dir="ltr">입금적요(의뢰인명) 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">155</td>
                            <td dir="ltr">CMS계좌 마감후 입출금 불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">156</td>
                            <td dir="ltr">마감후 처리 불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">157</td>
                            <td dir="ltr">입출금계좌 오류(외화계좌)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">158</td>
                            <td dir="ltr">사망또는 실종신고 계좌임</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">159</td>
                            <td dir="ltr">사고신고된 계좌임</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">160</td>
                            <td dir="ltr">인감분실신고된 계좌임</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">161</td>
                            <td dir="ltr">잔고확인서 또는 납입증명서 발부된 상태임</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">162</td>
                            <td dir="ltr">입출 요청계좌가 없음</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">163</td>
                            <td dir="ltr">이미해지폐기된 계좌임</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">164</td>
                            <td dir="ltr">이미폐기현존 계좌임</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">167</td>
                            <td dir="ltr">기등록 된 채권(어음)번호</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">199</td>
                            <td dir="ltr">기타오류(입출관련기타오류, 전문처리기타오류)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">2000</td>
                            <td dir="ltr">자동이체 신청구분오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">2001</td>
                            <td dir="ltr">납부자번호 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">2002</td>
                            <td dir="ltr">대상납부자없슴(자동이체미등록)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">2003</td>
                            <td dir="ltr">해지신청시 계좌번호 불일치</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">2004</td>
                            <td dir="ltr">신규신청불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">2005</td>
                            <td dir="ltr">이중신청(동일납부자번호&amp;동일계좌)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">2007</td>
                            <td dir="ltr">자동이체해지되었음(영업점해지)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">2008</td>
                            <td dir="ltr">자동이체해지되었음(업체해지)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">2015</td>
                            <td dir="ltr">이중신청(동일납부자번호&amp;상이계좌)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">2020</td>
                            <td dir="ltr">복기부호 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">2023</td>
                            <td dir="ltr">입.출금계좌 미등록</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">2024</td>
                            <td dir="ltr">입금계좌 지점 미확정(입출금등록 등록상태)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">2027</td>
                            <td dir="ltr">입출금등록 해지상태임 혹은 동일한 계좌 등록</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">2028</td>
                            <td dir="ltr">주민번호 및 사업자번호 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">2030</td>
                            <td dir="ltr">출금이체시 이체비밀번호 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">2036</td>
                            <td dir="ltr">계좌이동제를 통한 출금은행 변경해지</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">5413</td>
                            <td dir="ltr">기타오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">5802</td>
                            <td dir="ltr">금액상이 (가상계좌로 이체시)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7101</td>
                            <td dir="ltr">수취인계좌 없음</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7102</td>
                            <td dir="ltr">수취인계좌 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7103</td>
                            <td dir="ltr">수취인계좌번호내의 점번호 틀림</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7104</td>
                            <td dir="ltr">수취인계좌 잔액증명서 발급</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7105</td>
                            <td dir="ltr">수취인계좌 통장정리 후 거래가능</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7106</td>
                            <td dir="ltr">수취인계좌 입금한도 초과</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7107</td>
                            <td dir="ltr">주민등록번호 불일치</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7108</td>
                            <td dir="ltr">총금액 상위</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7142</td>
                            <td dir="ltr">개설은행 개시이전 상태</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7201</td>
                            <td dir="ltr">통장분실 재발행계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7202</td>
                            <td dir="ltr">법적제한계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7203</td>
                            <td dir="ltr">가명계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7204</td>
                            <td dir="ltr">해약계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7205</td>
                            <td dir="ltr">잡좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7300</td>
                            <td dir="ltr">실명 미확인</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7400</td>
                            <td dir="ltr">기타 수취불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7401</td>
                            <td dir="ltr">수취인 계좌 없음</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7402</td>
                            <td dir="ltr">수취인 계좌 잔액증명서</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7403</td>
                            <td dir="ltr">수취인 계좌 통장정리후 거래가능</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7404</td>
                            <td dir="ltr">수취인 계좌 입금한도초과</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7405</td>
                            <td dir="ltr">수취인 성명 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7406</td>
                            <td dir="ltr">이체 한도 초과</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7407</td>
                            <td dir="ltr">총금액 상위</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7408</td>
                            <td dir="ltr">통장분실 재발행 계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7409</td>
                            <td dir="ltr">법적제한 계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7410</td>
                            <td dir="ltr">이관(전출)계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7411</td>
                            <td dir="ltr">해약 계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7412</td>
                            <td dir="ltr">잡좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7413</td>
                            <td dir="ltr">기타수취불가(해당 입금계좌점 연락)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7414</td>
                            <td dir="ltr">추심대전 수수료상위</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7415</td>
                            <td dir="ltr">불입금 상위(1회 불입단위가 있는 경우)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7416</td>
                            <td dir="ltr">불입횟수 초과(해당 입금계좌점 연락)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7417</td>
                            <td dir="ltr">타행이체거래 불가 계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7418</td>
                            <td dir="ltr">비실명 계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7419</td>
                            <td dir="ltr">CMS번호 기재 요망</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7420</td>
                            <td dir="ltr">CMS번호 상위</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7430</td>
                            <td dir="ltr">개설은행 이체처리중</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7724</td>
                            <td dir="ltr">거래중지계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">7XXX</td>
                            <td dir="ltr">타행입금관련 전금법오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">국민은행</td>
                            <td dir="ltr">A14</td>
                            <td dir="ltr">A14 또는 A014 [가상화폐] 계좌검증오류 (가상계좌 등록시 예금주명 인증 오류)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">0</td>
                            <td dir="ltr">해당 거래가 정상 처리 되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">2007</td>
                            <td dir="ltr">자동이체 해지되었음.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">9999</td>
                            <td dir="ltr">비정상으로 종료된 거래입니다. 거래를 확인해 주십시오.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">A001</td>
                            <td dir="ltr">이미 등록상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">A002</td>
                            <td dir="ltr">출금이체 사전계좌등록거래시 당일중복거래 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">A003</td>
                            <td dir="ltr">약정구분 검증오류입니다. 확인하시기 바랍니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">A004</td>
                            <td dir="ltr">출금이체 사전계좌등록거래시 당일거래만 취소가능합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">A005</td>
                            <td dir="ltr">출금이체 사전계좌등록거래시 취소대상이 다릅니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">A006</td>
                            <td dir="ltr">출금이체 사전계좌등록거래시 변경대상 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">A007</td>
                            <td dir="ltr">출금이체 사전계좌등록거래시 직전거래미완료 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">A008</td>
                            <td dir="ltr">출금이체 사전계좌등록거래시 필수항복누락 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">A009</td>
                            <td dir="ltr">출금이체 사전계좌등록거래시 FUNC코드오류 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">A010</td>
                            <td dir="ltr">출금이체 사전계좌등록거래시 등록부점오류 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">A011</td>
                            <td dir="ltr">출금이체 사전계좌등록거래시 변경내역이 없읍니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">A998</td>
                            <td dir="ltr">출금이체 최소인출금액보다 작습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">A999</td>
                            <td dir="ltr">출금이체 최소인출금액보다 큽니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">AMT1</td>
                            <td dir="ltr">1회 이체한도 초과입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">AMT2</td>
                            <td dir="ltr">1일 이체한도 초과입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">AMT3</td>
                            <td dir="ltr">월이체한도를 초과하였습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">BACC</td>
                            <td dir="ltr">출금계좌 적용해지 상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">BAGE</td>
                            <td dir="ltr">입금계좌 미등록상태 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">BAST</td>
                            <td dir="ltr">이미 폐쇄 또는 해지된 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">BATT</td>
                            <td dir="ltr">입금계좌 적용해지 상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">BFBS</td>
                            <td dir="ltr">당행에 등록된 펌뱅킹 업체번호가 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">BMGE</td>
                            <td dir="ltr">업체정보, 서비스 미등록상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">BSST</td>
                            <td dir="ltr">펌뱅킹서비스 해지 또는 미적용 업체 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">C202</td>
                            <td dir="ltr">해당 계좌가 존재하지 않습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">C204</td>
                            <td dir="ltr">DAG0036 해당계좌가 없습니다.(전출,해약,잡좌통합,특별계좌 포함)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">C224</td>
                            <td dir="ltr">처리가능잔액이 부족합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">C225</td>
                            <td dir="ltr">이체수수료가 거래금액보다 큽니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">C652</td>
                            <td dir="ltr">사전등록한 계좌정보가 없습니다, 조회할 자료가 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">CMSN</td>
                            <td dir="ltr">[대외] 입금자코드 FORMAT 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D001</td>
                            <td dir="ltr">해당 예금과목이 존재해야 거래 가능합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D002</td>
                            <td dir="ltr">수시로부금은 거래가 되지 않습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D003</td>
                            <td dir="ltr">1일 2회이상은 입금 할 수 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D004</td>
                            <td dir="ltr">마감후의 기산일 거래입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D005</td>
                            <td dir="ltr">해당 거래는 전일 정정모드 타점거래입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D006</td>
                            <td dir="ltr">타점거래 가능상대점이 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D007</td>
                            <td dir="ltr">해당일자는 미래일자로 연동할 수 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D008</td>
                            <td dir="ltr">당일모드 연동거래만 가능합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D009</td>
                            <td dir="ltr">연동허용과목이 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D010</td>
                            <td dir="ltr">전전기 결산일 이전 거래입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D011</td>
                            <td dir="ltr">기준일이 당일 이후가 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D012</td>
                            <td dir="ltr">기준일이 당일 이전이 아닙니다, 전출점의 고객등록취소 상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D013</td>
                            <td dir="ltr">시작일이 종료일이후 일자입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D015</td>
                            <td dir="ltr">해당계좌는 범죄관련계좌로 거래할 수 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D016</td>
                            <td dir="ltr">해당되는 계좌전환 코드가 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D017</td>
                            <td dir="ltr">해당되는 질권설정 구분코드가 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D018</td>
                            <td dir="ltr">정의되지 않은 입지내역코드가 입력되었습니다 확인하십시오.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D019</td>
                            <td dir="ltr">수수료 금액이 틀립니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D020</td>
                            <td dir="ltr">신규취소된계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D021</td>
                            <td dir="ltr">신규예약된 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D022</td>
                            <td dir="ltr">채무면제이익 처리된 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D023</td>
                            <td dir="ltr">이관예정 등록된 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D024</td>
                            <td dir="ltr">고객 변경된 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D025</td>
                            <td dir="ltr">통장재발행해약된 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D026</td>
                            <td dir="ltr">해제 의제된 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D027</td>
                            <td dir="ltr">비밀번호가 입력되어 있지 않습니다, 입력된 비밀번호가 정확하지 않습니다</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D028</td>
                            <td dir="ltr">거래중지된 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D029</td>
                            <td dir="ltr">본부로 이관된 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D030</td>
                            <td dir="ltr">신규가 취소된 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D031</td>
                            <td dir="ltr">지급정지금액이 있습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D032</td>
                            <td dir="ltr">사고신고가 등록되어 있는 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D033</td>
                            <td dir="ltr">거래중지총괄계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D034</td>
                            <td dir="ltr">법적절차과정이 보류처리된 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D035</td>
                            <td dir="ltr">무기명이거나 비실명 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D036</td>
                            <td dir="ltr">요청받은 상대계좌번호가 잘못되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D037</td>
                            <td dir="ltr">요청받은 상대계좌번호의 계좌번호 체제가 잘못되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D038</td>
                            <td dir="ltr">사고신고존재합니다. 신고일 이전 거래는 안됩니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D039</td>
                            <td dir="ltr">거래일이 원거래 일자와 상이 합니다-일자확인하십시오.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D040</td>
                            <td dir="ltr">상대계좌는 없는계좌입니다 확인바랍니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D041</td>
                            <td dir="ltr">상대계좌가 해약상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D042</td>
                            <td dir="ltr">해당종목의 잔액이 부족합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D043</td>
                            <td dir="ltr">1회 정리가능한 무통장거래횟수를 초과하였습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D044</td>
                            <td dir="ltr">금액 입력이 잘못되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D045</td>
                            <td dir="ltr">잡수입처리 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D046</td>
                            <td dir="ltr">해당하는 기관코드가 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D047</td>
                            <td dir="ltr">1일 사용한도가 초과되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D048</td>
                            <td dir="ltr">타점에서 지급정지된 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D049</td>
                            <td dir="ltr">취급 가능한 예금종목이 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D050</td>
                            <td dir="ltr">결산이 완료되지 않은 계좌입니다. 가까운 영업점에 확인하신 후 거래하십시오.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D051</td>
                            <td dir="ltr">이관된 계좌이므로 해당거래를 처리할 수 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D052</td>
                            <td dir="ltr">이관예정등록된 계좌이므로 해당거래를 처리할 수 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D053</td>
                            <td dir="ltr">법적지급제한된 계좌이므로 해당거래를 처리할 수 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D054</td>
                            <td dir="ltr">지급정지된 계좌이므로 해당거래를 처리할 수 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D055</td>
                            <td dir="ltr">당행 질권 예비등록된 계좌이므로 해당거래를 처리할 수 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D056</td>
                            <td dir="ltr">당행 질권 등록된 계좌이므로 해당거래를 처리할 수 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D057</td>
                            <td dir="ltr">외부질권 등록된 계좌이므로 해당거래를 처리할 수 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D058</td>
                            <td dir="ltr">인감 또는 증서 분실신고된 계좌이므로 해당거래를 처리할 수 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D059</td>
                            <td dir="ltr">금액이 0원일 경우 처리할 수 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D060</td>
                            <td dir="ltr">입력항목 중 금액란 미입력되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D061</td>
                            <td dir="ltr">거래가능금액이 초과 입력 되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D062</td>
                            <td dir="ltr">통장증서 분실 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D063</td>
                            <td dir="ltr">해당증명서 발급 기록이 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D064</td>
                            <td dir="ltr">통장증서 도난 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D065</td>
                            <td dir="ltr">인감 분실 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D066</td>
                            <td dir="ltr">인감 도난 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D067</td>
                            <td dir="ltr">통장 및 인감 분실 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D068</td>
                            <td dir="ltr">통장인감 도난 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D069</td>
                            <td dir="ltr">해당거래를 처리할 수 없는 계좌상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D070</td>
                            <td dir="ltr">거래중지좌 편입 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D071</td>
                            <td dir="ltr">통장인자대상 건수가 초과되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D072</td>
                            <td dir="ltr">거래중지좌편입된 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D073</td>
                            <td dir="ltr">비밀번호가 3회이상 오류 입력되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D074</td>
                            <td dir="ltr">기타사유로 인해 입금이 불가능한 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D075</td>
                            <td dir="ltr">환율 공개금지상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D076</td>
                            <td dir="ltr">잔액증명발급</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D077</td>
                            <td dir="ltr">비거주자 사유코드가 입력되지 않았습니다.(창구거래만 가능합니다.)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D078</td>
                            <td dir="ltr">지급한도 초과 되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D079</td>
                            <td dir="ltr">분실 도난 카드입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D080</td>
                            <td dir="ltr">해당거래를 처리할 수 없는 계좌상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D081</td>
                            <td dir="ltr">해당 계좌번호가 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D082</td>
                            <td dir="ltr">TIME OUT 또는 지연응답으로 취소되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D083</td>
                            <td dir="ltr">연체된 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D084</td>
                            <td dir="ltr">수신은행의 무응답입니다. 결과 확인하십시오.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D085</td>
                            <td dir="ltr">금액투입오류(입력된 외화거래금액과 해당 통화보조단위가 상이합니다.)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D086</td>
                            <td dir="ltr">상대기관 기타오류가 발생하였습니다.(가상계좌)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D089</td>
                            <td dir="ltr">장기간 미사용으로 인한 거래중지계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D207</td>
                            <td dir="ltr">해지 또는 취소된 계좌이므로 해당거래를 처리할 수 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">D344</td>
                            <td dir="ltr">주민번호 또는 사업자번호 불일치 합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">EADE</td>
                            <td dir="ltr">EAI 펌뱅킹공통부 회계단위 FORMAT 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">EAFB</td>
                            <td dir="ltr">EAI 펌뱅킹공통부 업체번호 FORMAT 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">EAMS</td>
                            <td dir="ltr">EAI 펌뱅킹공통부 전문종별 FORMAT 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">EASV</td>
                            <td dir="ltr">EAI 펌뱅킹공통부 서버구분 FORMAT 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">EAVA</td>
                            <td dir="ltr">EAI 펌뱅킹공통부 밴코드 FORMAT 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">EDGE</td>
                            <td dir="ltr">펌뱅킹전문에 전문종별 미등록 상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">ENCD</td>
                            <td dir="ltr">복기부호 미등록 상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">F002</td>
                            <td dir="ltr">원거래를 찾을 수 없는 취소거래 입니다, 고객 정보 조회 오류 입니다,</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">F202</td>
                            <td dir="ltr">이미 취소되었거나 송금처리 되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">F232</td>
                            <td dir="ltr">사후송금방식(013) 경우 가격조건, HSCODE 수입신고서번호, 수입용도 입력하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">F278</td>
                            <td dir="ltr">가격조건 코드가 아닙니다</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">F311</td>
                            <td dir="ltr">HS CODE 는 숫자만 가능합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">F334</td>
                            <td dir="ltr">수입 용도 코드가 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">F378</td>
                            <td dir="ltr">전송일자는 당일만 가능합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">F401</td>
                            <td dir="ltr">지급사유코드 확인하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FACC</td>
                            <td dir="ltr">출금계좌 FORMAT 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FACT</td>
                            <td dir="ltr">
                                <div>입금계좌번호와 출금계좌번호는 동일한 계좌로 입력할 수 없습니다, 입금계좌 FORMAT 오류입니다.</div>
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FB05</td>
                            <td dir="ltr">외환은행 은행 코드가 아닙니다</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FCBR</td>
                            <td dir="ltr">해당 단말의 단말유형이 입력전문과 상이합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FCIV</td>
                            <td dir="ltr">주민등록번호 입력하십시오.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FCOM</td>
                            <td dir="ltr">[대외] 기관코드 FORMAT 오류입니다, 사용할 수 없는 통화코드입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FCUR</td>
                            <td dir="ltr">통화코드가 미입력되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FDAY</td>
                            <td dir="ltr">거래일자 FORMAT 오류입니다, 거래가능 일자가 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FDEP</td>
                            <td dir="ltr">회계단위 FOTMAT 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FDOC</td>
                            <td dir="ltr">서비스구분코드 FORMAT 오류입니다, 서비스구분이 해당 밴형식과 불일치 합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FENC</td>
                            <td dir="ltr">복기부호 FORMAT 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FFBS</td>
                            <td dir="ltr">업체번호 FORMAT 오류 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FGUB</td>
                            <td dir="ltr">거래구분코드 검증오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FICV</td>
                            <td dir="ltr">주민번호 FORMAT 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FIDN</td>
                            <td dir="ltr">전문확인ID FORMAT 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FLAG</td>
                            <td dir="ltr">FLAG 검증오류 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FMER</td>
                            <td dir="ltr">당발요구전문이 포맷오류로 수신되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FMS7</td>
                            <td dir="ltr">MESSAGE ID 검증오류입니다</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FMSG</td>
                            <td dir="ltr">MESSAGE ID 거래구분코드 검증오류 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FNDY</td>
                            <td dir="ltr">[대외] 납부희망일 FORMAT 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FNGU</td>
                            <td dir="ltr">[대외] 요금종류 FORMAT 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FNUM</td>
                            <td dir="ltr">
                                <div>숫자항목 FORMAT 오류입니다.(문자포함불가), 전문번호 숫자형식 FORMAT 오류입니다.</div>
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">FPAS</td>
                            <td dir="ltr">비밀번호 FORMAT 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">G002</td>
                            <td dir="ltr">타행 업무가 개시되지 않았습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">G003</td>
                            <td dir="ltr">금융단공동 업무가 종료되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">G004</td>
                            <td dir="ltr">당행 장애로 인하여 거래를 할 수 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">G005</td>
                            <td dir="ltr">상대기관이 장애중입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">G006</td>
                            <td dir="ltr">매체구분코드 오류입니다.</td>
                        </tr>

                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">G007</td>
                            <td dir="ltr">입금계좌번호 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">G008</td>
                            <td dir="ltr">이미 자료가 등록되어있습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">G009</td>
                            <td dir="ltr">통신망 상태 비정상입니다, 부점코드가 미입력되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">G010</td>
                            <td dir="ltr">해당 상품이 존재하지 않습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">G011</td>
                            <td dir="ltr">입금은행코드 검증오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">G012</td>
                            <td dir="ltr">투입허용금액과 거래금액이 일치하지 않습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">G013</td>
                            <td dir="ltr">연동계좌번호 미입력입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">G014</td>
                            <td dir="ltr">입금은행코드가 입력되지 않았습니다</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">G015</td>
                            <td dir="ltr">해당 입금은행코드가 존재하지 않았습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">G016</td>
                            <td dir="ltr">해당 입금은행코드는 해제되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">G017</td>
                            <td dir="ltr">입금은행코드에 외환은행코드가 입력되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">GCON</td>
                            <td dir="ltr">결제원처리 후 펌뱅킹 한글변환 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">GDAY</td>
                            <td dir="ltr">결제원처리 후 펌뱅킹 거래일 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">GFBS</td>
                            <td dir="ltr">결제원처리 후 펌뱅킹 업체번호 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">GFEE</td>
                            <td dir="ltr">결제원처리 후 펌뱅킹 수수료갱신 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">GTLE</td>
                            <td dir="ltr">결제원처리 후 펌뱅킹 대외거래 고유번호 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">GTLX</td>
                            <td dir="ltr">결제원처리 후 펌뱅킹 전문번호 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">GTPP</td>
                            <td dir="ltr">결제원처리 후 펌뱅킹 대외망 구분코드 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I001</td>
                            <td dir="ltr">업무구분 오류 (송금신청/취소가 아님</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I009</td>
                            <td dir="ltr">계좌번호 정상상태 체크오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I021</td>
                            <td dir="ltr">계좌의 통화와 송금통화가 다릅니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I024</td>
                            <td dir="ltr">송금통화 코드를 확인하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I025</td>
                            <td dir="ltr">송금 가능한 통화인지 확인하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I026</td>
                            <td dir="ltr">송금액 외화금액 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I027</td>
                            <td dir="ltr">송금액 보조단위 에러</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I028</td>
                            <td dir="ltr">송금액 보조단위 에러</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I029</td>
                            <td dir="ltr">송금액 보조단위 에러</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I030</td>
                            <td dir="ltr">송금구분 에러 (1,2만 가능)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I031</td>
                            <td dir="ltr">송금인명이 space 입니다</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I032</td>
                            <td dir="ltr">송금인영문명에 특수문자 확인하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I033</td>
                            <td dir="ltr">수취인명이 space 입니다</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I034</td>
                            <td dir="ltr">수치인 영문명에 특수문자 확인하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I035</td>
                            <td dir="ltr">수취인 계좌번호와 수취인 주소가 space 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I036</td>
                            <td dir="ltr">수취인 주소 1,2,3 은 순서대로 입력하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I037</td>
                            <td dir="ltr">수취인 주소 2,3 은 순서대로 입력하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I038</td>
                            <td dir="ltr">수취인계좌번호에 특수문자 확인하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I039</td>
                            <td dir="ltr">수취인 주소에 특수문자 확인하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I040</td>
                            <td dir="ltr">수취인 주소에 특수문자 확인하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I041</td>
                            <td dir="ltr">수취인 주소에 특수문자 확인하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I042</td>
                            <td dir="ltr">수취인앞 지시사항1,2,3,4 순서대로 입력하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I043</td>
                            <td dir="ltr">수취인앞 지시사항 2,3,4 순서대로 입력하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I044</td>
                            <td dir="ltr">수취인앞 지시사항 3,4 순서대로 입력하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I045</td>
                            <td dir="ltr">수취인 지시사항1에 특수문자 확인하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I046</td>
                            <td dir="ltr">수취인 지시사항2에 특수문자 확인하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I047</td>
                            <td dir="ltr">수취인 지시사항3에 특수문자 확인하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I048</td>
                            <td dir="ltr">수취인 지시사항4에 특수문자 확인하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I050</td>
                            <td dir="ltr">수취인거래은행 정보를 입력하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I094</td>
                            <td dir="ltr">수취인거래 은행명 확인 요망(외화거래시)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I101</td>
                            <td dir="ltr">송금 국가코드를 확인하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I102</td>
                            <td dir="ltr">국내 송금시 경유은행 입력 불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I103</td>
                            <td dir="ltr">경유은행 1,2,3 순서대로 입력하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I104</td>
                            <td dir="ltr">경유은행 2,3 순서대로 입력하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I120</td>
                            <td dir="ltr">수수료 부담자 코드는 1,2 만 가능합니다</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I121</td>
                            <td dir="ltr">수수료 계좌 정보가 SPACE 입니다</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I122</td>
                            <td dir="ltr">해외 수수료 인출계좌구분 확인하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I203</td>
                            <td dir="ltr">취소시 원거래 전문일자 확인하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I204</td>
                            <td dir="ltr">취소시 원거래 전문번호 확인하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I210</td>
                            <td dir="ltr">수취인이메일 주소 순서대로 입력하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I220</td>
                            <td dir="ltr">수취인 이메일 주소의 첫글자가 SPACE 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I221</td>
                            <td dir="ltr">수취인 이메일 주소2의 첫글자가 SPACE 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I222</td>
                            <td dir="ltr">수취인 이메일 주소3의 첫글자가 SPACE 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I223</td>
                            <td dir="ltr">수취인 이메일 주소4의 첫글자가 SPACE 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">I224</td>
                            <td dir="ltr">수취인 이메일 주소5의 첫글자가 SPACE 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">JMBT</td>
                            <td dir="ltr">업무개시전 OR 업무종료상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">K001</td>
                            <td dir="ltr">납부기한이 경과 되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">L013</td>
                            <td dir="ltr">자동이체 불가상품 가입계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">M001</td>
                            <td dir="ltr">필수입력항목이 입력되지 않았습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">MECE</td>
                            <td dir="ltr">창구거래만 가능한 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">MSPA</td>
                            <td dir="ltr">메시지코드가 SPACE입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">NAPN</td>
                            <td dir="ltr">납부자번호 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">NFBS</td>
                            <td dir="ltr">등록되지 않은 자동이체이용기관 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">R001</td>
                            <td dir="ltr">[대외] 이체한도구분이 오류등록상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">R002</td>
                            <td dir="ltr">[대외] 지급가능잔액구분이 오류등록상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">R003</td>
                            <td dir="ltr">이미 기처리된 건입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">R004</td>
                            <td dir="ltr">원거래 금액이 상이합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">R005</td>
                            <td dir="ltr">지급기한이 경과되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">R006</td>
                            <td dir="ltr">이중거래로서 처리할 수 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">R007</td>
                            <td dir="ltr">입금지정 사전계좌번호 기등록상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">RFEE</td>
                            <td dir="ltr">펌뱅킹 표준수수료 미등록된 업무입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">ROUT</td>
                            <td dir="ltr">TIME OVER TRANSACTION(처리결과조회전문이 기 수행된 거래입니다.)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">S003</td>
                            <td dir="ltr">취소거래입니다. 원거래를 찾을 수 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">S010</td>
                            <td dir="ltr">취소거래가 비정상 처리 되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">S012</td>
                            <td dir="ltr">부점 정보를 찾을 수 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">TIME</td>
                            <td dir="ltr">거래가능 시간이 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">TOID</td>
                            <td dir="ltr">텐덤HEADER의 그룹ID가 불일치합니다. TOID</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">TOUT</td>
                            <td dir="ltr">TIME OVER(응답대기시간 경과), 확인 하시기 바랍니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">TYPE</td>
                            <td dir="ltr">
                                <div>[대외] 전문 TYPE 검증오류입니다, 업체의 출력전문구분의 내용이 원장에 존재하지 않습니다.</div>
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">U109</td>
                            <td dir="ltr">복기부호 검증오류 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">U111</td>
                            <td dir="ltr">MESSAGE ID 거래구분코드 검증오류 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">U116</td>
                            <td dir="ltr">최종 처리전문보다 전문번호가 큽니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">U117</td>
                            <td dir="ltr">해당거래일 통지내역이 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">U119</td>
                            <td dir="ltr">펌뱅킹LOG에 해당전문이 없슴니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">U121</td>
                            <td dir="ltr">업무개시전문 수신전 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">U197</td>
                            <td dir="ltr">보안계좌(창구거래만 가능)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">U198</td>
                            <td dir="ltr">전송매체코드에 미정의된 메시지입니다. OR 기타오류입니다.(정보시스템부 문의하세요.)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">U201</td>
                            <td dir="ltr">출금계좌 미등록상태 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">U223</td>
                            <td dir="ltr">입금지정 사전계좌번호 해지상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">U228</td>
                            <td dir="ltr">해당 처리 전문번호 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">U231</td>
                            <td dir="ltr">입금지정 사전계좌번호 기등록상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">U232</td>
                            <td dir="ltr">입금지정 사전계좌번호 미등록상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W101</td>
                            <td dir="ltr">펌뱅킹업체 조회 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W102</td>
                            <td dir="ltr">펌뱅킹업체 등록 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W103</td>
                            <td dir="ltr">펌뱅킹업체 변경 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W201</td>
                            <td dir="ltr">펌뱅킹서비스 조회 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W202</td>
                            <td dir="ltr">펌뱅킹서비스 등록 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W203</td>
                            <td dir="ltr">펌뱅킹서비스 변경 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W301</td>
                            <td dir="ltr">펌뱅킹업체계좌 조회 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W302</td>
                            <td dir="ltr">펌뱅킹업체계좌 등록 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W303</td>
                            <td dir="ltr">펌뱅킹업체계좌 변경 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W401</td>
                            <td dir="ltr">펌뱅킹통신 조회 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W402</td>
                            <td dir="ltr">펌뱅킹통신 등록 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W403</td>
                            <td dir="ltr">펌뱅킹통신 변경 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W501</td>
                            <td dir="ltr">펌뱅킹집계 조회 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W502</td>
                            <td dir="ltr">펌뱅킹집계 등록 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W503</td>
                            <td dir="ltr">펌뱅킹집계 변경 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W600</td>
                            <td dir="ltr">펌뱅킹LOG DBIO 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W601</td>
                            <td dir="ltr">펌뱅킹LOG 조회 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W602</td>
                            <td dir="ltr">펌뱅킹LOG 등록 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W603</td>
                            <td dir="ltr">펌뱅킹LOG 변경 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W701</td>
                            <td dir="ltr">펌뱅킹이체 조회 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W702</td>
                            <td dir="ltr">펌뱅킹이체 등록 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W703</td>
                            <td dir="ltr">펌뱅킹이체 변경 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W801</td>
                            <td dir="ltr">펌뱅킹수수료 조회 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W802</td>
                            <td dir="ltr">펌뱅킹수수료 등록 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W803</td>
                            <td dir="ltr">펌뱅킹수수료 변경 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W811</td>
                            <td dir="ltr">펌뱅킹수수료집계 조회 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W812</td>
                            <td dir="ltr">펌뱅킹수수료집계 등록 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W813</td>
                            <td dir="ltr">펌뱅킹수수료집계 변경 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W821</td>
                            <td dir="ltr">펌뱅킹배분수수료 조회 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W822</td>
                            <td dir="ltr">펌뱅킹배분수수료 등록 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W823</td>
                            <td dir="ltr">펌뱅킹배분수수료 변경 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W901</td>
                            <td dir="ltr">펌뱅킹전문 조회 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W902</td>
                            <td dir="ltr">펌뱅킹전문 등록 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">W903</td>
                            <td dir="ltr">펌뱅킹전문 변경 비정상종료입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">WOUT</td>
                            <td dir="ltr">잠시후에 처리하십시요. 해당모계좌의 거래를 처리할 수 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X111</td>
                            <td dir="ltr">취급은행 SYSTEM 장애입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X112</td>
                            <td dir="ltr">취급은행 개시이전 상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X113</td>
                            <td dir="ltr">취급은행 업무종료 상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X121</td>
                            <td dir="ltr">중계센터 시스템장애중 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X123</td>
                            <td dir="ltr">중계센터 업무가 종료되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X131</td>
                            <td dir="ltr">개설은행 보통계정 처리 불가입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X132</td>
                            <td dir="ltr">개설은행 저축 계정 처리 불가입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X133</td>
                            <td dir="ltr">개설은행 자유저축 계정 처리 불가입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X134</td>
                            <td dir="ltr">개설은행 가계종합 계정 처리 불가입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X135</td>
                            <td dir="ltr">개설은행 당좌 계정 처리 불가입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X136</td>
                            <td dir="ltr">개설은행 기업자유저축 계정 처리 불가입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X137</td>
                            <td dir="ltr">개설은행 별단계정 처리 불가입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X138</td>
                            <td dir="ltr">중계센터 DATA BASE 장애입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X140</td>
                            <td dir="ltr">개설은행 장애입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X141</td>
                            <td dir="ltr">개설은행 SYSTEM 장애입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X142</td>
                            <td dir="ltr">개설은행 개시이전 상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X143</td>
                            <td dir="ltr">개설은행 업무종료 상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X144</td>
                            <td dir="ltr">개설은행 적금 계정 처리 불가입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X145</td>
                            <td dir="ltr">개설은행 신탁 계정 처리 불가입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X150</td>
                            <td dir="ltr">전자금융공동망 미참가 은행입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X151</td>
                            <td dir="ltr">개설은행 서비스시간이 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X152</td>
                            <td dir="ltr">개설은행 수신전문 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X302</td>
                            <td dir="ltr">[대외] MESSAGE 코드 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X303</td>
                            <td dir="ltr">업무구분코드 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X305</td>
                            <td dir="ltr">[대외] 지점코드 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X308</td>
                            <td dir="ltr">계좌번호가 상이합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X310</td>
                            <td dir="ltr">해당지점 처리 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X311</td>
                            <td dir="ltr">TIME OVER(응답대기시간 경과)처리되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X312</td>
                            <td dir="ltr">[대외] 과목코드 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X401</td>
                            <td dir="ltr">수취인 계좌번호가 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X402</td>
                            <td dir="ltr">수취인 계좌 잔액증명서 발부되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X403</td>
                            <td dir="ltr">수취인 계좌 통장정리후 거래 가능합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X404</td>
                            <td dir="ltr">수취인 계좌 입금한도 초과입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X405</td>
                            <td dir="ltr">수취인 성명 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X406</td>
                            <td dir="ltr">이체한도가 초과되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X407</td>
                            <td dir="ltr">총금액이 상이합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X408</td>
                            <td dir="ltr">통장을 분실하여 재발행된 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X409</td>
                            <td dir="ltr">법적 제한 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X410</td>
                            <td dir="ltr">이관 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X411</td>
                            <td dir="ltr">해약 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X412</td>
                            <td dir="ltr">잡좌 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X413</td>
                            <td dir="ltr">기타 사유로 입금이 불가합니다. 해당 개설점으로 연락하십시오</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X414</td>
                            <td dir="ltr">추심대전 수수료 상이합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X415</td>
                            <td dir="ltr">불입금이 상이합니다.(1회 불입단위가 있는 경우)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X416</td>
                            <td dir="ltr">불입횟수를 초과하였습니다. 해당 개설점으로 연락하십시오.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X417</td>
                            <td dir="ltr">타행이체 거래가 불가한 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X418</td>
                            <td dir="ltr">비실명계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X419</td>
                            <td dir="ltr">CMS번호가 필요한 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X420</td>
                            <td dir="ltr">CMS번호가 상이합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X430</td>
                            <td dir="ltr">개설은행으로 타행이체 처리중입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X431</td>
                            <td dir="ltr">타행이체전문 수신전 취소전문을 수신하였습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X434</td>
                            <td dir="ltr">타행 입금 가상계좌 시간이 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X501</td>
                            <td dir="ltr">지급필 수표입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X502</td>
                            <td dir="ltr">수표구분코드가 상이합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X503</td>
                            <td dir="ltr">수표금액이 상이합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X504</td>
                            <td dir="ltr">수표번호가 상이합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X505</td>
                            <td dir="ltr">기 조회된 수표입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X506</td>
                            <td dir="ltr">미발행 수표입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X507</td>
                            <td dir="ltr">예금이 부족합니다.(수표부도 사유)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X508</td>
                            <td dir="ltr">무거래입니다.(수표부도 사유)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X509</td>
                            <td dir="ltr">형식이 불비합니다.(수표부도 사유)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X510</td>
                            <td dir="ltr">안내서 미착입니다.(수표부도 사유)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X511</td>
                            <td dir="ltr">사고신고가 접수된 수표입니다.(분실,도난,피사취)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X512</td>
                            <td dir="ltr">변조,위조된 수표입니다.(수표부도 사유)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X513</td>
                            <td dir="ltr">인감서명이 상이합니다.(수표부도 사유)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X514</td>
                            <td dir="ltr">지급지가 상이합니다.(수표부도 사유)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X515</td>
                            <td dir="ltr">법적으로 가해진 지급제한 상태입니다.(수표부도 사유)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X516</td>
                            <td dir="ltr">가계수표 장당 최고발행 한도초과를 하였습니다.(수표부도 사유)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X517</td>
                            <td dir="ltr">제시시간이 경과된 수표입니다.(수표 부도 사유)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X601</td>
                            <td dir="ltr">원거래가 미존재합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X602</td>
                            <td dir="ltr">개설은행으로 부터 응답이 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X603</td>
                            <td dir="ltr">개설은행 취소처리 중 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X604</td>
                            <td dir="ltr">개설은행 계좌번호가 상이합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X605</td>
                            <td dir="ltr">개설은행 금액이 상이합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X606</td>
                            <td dir="ltr">개설은행 기타 사항이 상이합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X607</td>
                            <td dir="ltr">기 취소된 거래입니다.(정상취소된 거래)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X608</td>
                            <td dir="ltr">잔액이 부족합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X609</td>
                            <td dir="ltr">원거래가 불명입니다.(원거래 비정상)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X610</td>
                            <td dir="ltr">처리결과조회 가능기간이 경과되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X714</td>
                            <td dir="ltr">거래중지 계좌</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X723</td>
                            <td dir="ltr">사고신고가 등록되어 있는 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">X999</td>
                            <td dir="ltr">순채무한도금액이 초과되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">외환은행</td>
                            <td dir="ltr">ZZ08</td>
                            <td dir="ltr">출금계좌번호 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">0</td>
                            <td dir="ltr">정상처리 되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">A001</td>
                            <td dir="ltr">계좌번호가 존재하지 않습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">A002</td>
                            <td dir="ltr">통화코드 미존재</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">B001</td>
                            <td dir="ltr">File Access 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">B002</td>
                            <td dir="ltr">Tailer 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">B003</td>
                            <td dir="ltr">실명번호 일치하지 않습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">C001</td>
                            <td dir="ltr">필수항목이 입력되지 않았습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">C004</td>
                            <td dir="ltr">DB 반영시 오류가 발생했습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">C005</td>
                            <td dir="ltr">자료 등록시 오류가 발생하였습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">C008</td>
                            <td dir="ltr">본 거래에 대한 접근이 거부되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">C009</td>
                            <td dir="ltr">모듈에서 오류가 발생하였습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">C010</td>
                            <td dir="ltr">계좌확인하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">C011</td>
                            <td dir="ltr">기타수취불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D001</td>
                            <td dir="ltr">원화요구불 업무만 대상입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D002</td>
                            <td dir="ltr">입력하신 계좌번호와 공통영역의 계좌번호가 틀립니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D004</td>
                            <td dir="ltr">통장 및 인감 사고등록 되지 않은 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D005</td>
                            <td dir="ltr">통장사고 등록된 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D006</td>
                            <td dir="ltr">인감사고 등록된 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D007</td>
                            <td dir="ltr">활동계좌가 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D008</td>
                            <td dir="ltr">무통장 신규된 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D009</td>
                            <td dir="ltr">입력하신 통장의 재발행번호와 원장의 재발행번호가 틀립니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D010</td>
                            <td dir="ltr">입력하신 통장의 중요증서번호와 원장의 중요증서번호가 틀립니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D019</td>
                            <td dir="ltr">NET점 거래 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D020</td>
                            <td dir="ltr">양도성예금이 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D021</td>
                            <td dir="ltr">현재 보관중인 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D022</td>
                            <td dir="ltr">자유적립식예금 거래 가능한 업무구분이 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D025</td>
                            <td dir="ltr">만기후 일부인출을 할수가 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D029</td>
                            <td dir="ltr">계좌번호는 필수 입력항목 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D031</td>
                            <td dir="ltr">통화코드는 필수 입력항목 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D035</td>
                            <td dir="ltr">최종거래일 이전으로는 해지거래가 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D036</td>
                            <td dir="ltr">비실명계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D037</td>
                            <td dir="ltr">모바일뱅킹계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D038</td>
                            <td dir="ltr">증권연결계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D039</td>
                            <td dir="ltr">CMS등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D040</td>
                            <td dir="ltr">전자어음 발행계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D041</td>
                            <td dir="ltr">전자어음 입금계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D042</td>
                            <td dir="ltr">현금카드 발급계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D043</td>
                            <td dir="ltr">단말에서 잡수익해지는 조합계좌만 가능합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D044</td>
                            <td dir="ltr">직불카드 발급계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D045</td>
                            <td dir="ltr">신용카드 결제계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D046</td>
                            <td dir="ltr">신용카드 가맹점계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D047</td>
                            <td dir="ltr">체크카드 연결계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D048</td>
                            <td dir="ltr">지급가능잔액이 부족합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D049</td>
                            <td dir="ltr">본인사망 등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D050</td>
                            <td dir="ltr">입금지급불가 등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D051</td>
                            <td dir="ltr">적수변경 등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D052</td>
                            <td dir="ltr">범죄사고 등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D053</td>
                            <td dir="ltr">파산선고 등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D054</td>
                            <td dir="ltr">범인신고 등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D055</td>
                            <td dir="ltr">지급정지 등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D056</td>
                            <td dir="ltr">압류통보 등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D057</td>
                            <td dir="ltr">압류추심명령 등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D058</td>
                            <td dir="ltr">압류전부명령 등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D059</td>
                            <td dir="ltr">수표사고 등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D060</td>
                            <td dir="ltr">어음사고 등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D061</td>
                            <td dir="ltr">질권등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D062</td>
                            <td dir="ltr">금융사고지급정지 등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D063</td>
                            <td dir="ltr">법적수속 등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D064</td>
                            <td dir="ltr">3차부도 등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D065</td>
                            <td dir="ltr">거래해지 등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D066</td>
                            <td dir="ltr">인감사고 등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D067</td>
                            <td dir="ltr">통장사고 등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D068</td>
                            <td dir="ltr">잡수익해지 대상계좌가 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D069</td>
                            <td dir="ltr">잡수익 제외등록 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D075</td>
                            <td dir="ltr">조합명의의 타조합예치금계좌는 2008.1.18부터 NET해지가 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D076</td>
                            <td dir="ltr">당좌 가계당좌는 NET해지가 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D078</td>
                            <td dir="ltr">NET해지가 불가한 해지구분 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D079</td>
                            <td dir="ltr">관리채권계좌는 NET해지가 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D080</td>
                            <td dir="ltr">자동이체 등록정보가 존재합니다</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D081</td>
                            <td dir="ltr">원거래일자가 입력되지 않았습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D082</td>
                            <td dir="ltr">원거래일자가 날짜 형식이 아닙니다</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D083</td>
                            <td dir="ltr">원거래일련번호 입력 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D084</td>
                            <td dir="ltr">사망고객 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D085</td>
                            <td dir="ltr">일부해지가 불가능한 상품 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D086</td>
                            <td dir="ltr">잡수익창구환급해지가 가능한 상태가 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D087</td>
                            <td dir="ltr">상각채권해지는 잔액이 0인상태에서만 가능합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D088</td>
                            <td dir="ltr">계좌잔액이 0 보다 작습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D089</td>
                            <td dir="ltr">통장거래가 불가한 해지구분 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D090</td>
                            <td dir="ltr">당좌과목 무통장신규계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D091</td>
                            <td dir="ltr">무통장신규계좌입니다. 통장거래 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D092</td>
                            <td dir="ltr">무통장해지거래는 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D093</td>
                            <td dir="ltr">통장발급일련번호가 일치하지 않습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D094</td>
                            <td dir="ltr">통장증서번호가 일치하지 않습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D095</td>
                            <td dir="ltr">잔액증명서 발급계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D096</td>
                            <td dir="ltr">영수증인자여부를 입력하십시오.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D097</td>
                            <td dir="ltr">입금증인자여부를 입력하십시오.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D098</td>
                            <td dir="ltr">계산서인자여부를 입력하십시오.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D099</td>
                            <td dir="ltr">원천징수영수증인자여부를 입력하십시오.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D100</td>
                            <td dir="ltr">거래일자를 입력하십시오.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D101</td>
                            <td dir="ltr">거래일련번호를 입력하십시오.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D102</td>
                            <td dir="ltr">수신통장관리종류코드를 입력하십시오.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D103</td>
                            <td dir="ltr">통장관리일련번호를 입력하십시오.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D108</td>
                            <td dir="ltr">수신원장변경항목코드를 입력하십시오.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D119</td>
                            <td dir="ltr">지불가능잔액이 부족합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D132</td>
                            <td dir="ltr">통장발급된 계좌가 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D133</td>
                            <td dir="ltr">중요증서과목코드 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D145</td>
                            <td dir="ltr">기산일거래는 대체거래만 가능합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D146</td>
                            <td dir="ltr">무통장 일부해지는 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D150</td>
                            <td dir="ltr">해지일이 신규일 이전입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D151</td>
                            <td dir="ltr">특별중도해지가 불가한 상품입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D152</td>
                            <td dir="ltr">기한갱신해지가 불가한 상품입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D153</td>
                            <td dir="ltr">기한이익상실상계해지가 불가한 상기한이익상실상계해지가 불가한 상품입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D154</td>
                            <td dir="ltr">상계해지가 불가한 상품입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D155</td>
                            <td dir="ltr">추심해지가 불가한 상품입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D156</td>
                            <td dir="ltr">잡수익해지가 불가한 상품입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D157</td>
                            <td dir="ltr">기한갱신해지는 계약기간이 1/2경과한 계좌만 가능합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D158</td>
                            <td dir="ltr">추심해지는 압류나 추심 또는 전부명령이 등록되어 있어야 가능합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D159</td>
                            <td dir="ltr">기타질권 등록계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D160</td>
                            <td dir="ltr">지급점 등록된 계좌입니다. 처리점이 등록점이 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D161</td>
                            <td dir="ltr">지급점 등록된 계좌입니다. 단말에서만 거래가 가능합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D162</td>
                            <td dir="ltr">일괄신규계좌 실명미확인계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D168</td>
                            <td dir="ltr">만기후 일부해지는 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D169</td>
                            <td dir="ltr">일부해지후잔액이 기준잔액보다 적습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D170</td>
                            <td dir="ltr">만기후 기한갱신해지는 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D171</td>
                            <td dir="ltr">만기후 약정이율중도해지는 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D172</td>
                            <td dir="ltr">만기후 상계해지는 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D173</td>
                            <td dir="ltr">지수플러스정기예금 해지구분 거래불가 합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D174</td>
                            <td dir="ltr">중도해지가 불가한 상품입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D176</td>
                            <td dir="ltr">KSD등록발행계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D177</td>
                            <td dir="ltr">인터넷뱅킹신규계좌는 실명확인후 해지가 가능합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D178</td>
                            <td dir="ltr">일반전환계좌 세금추징 미처리 상태입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D179</td>
                            <td dir="ltr">당일신규계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D180</td>
                            <td dir="ltr">무기명식예금 편안한통장은 계좌점이나 신규점에서만 해지가 가능합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D181</td>
                            <td dir="ltr">지수플러스예금은 계약기간중 기산일거래가 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D182</td>
                            <td dir="ltr">최종이자지급일 또는 최종원가일 이전으로는 해지거래가 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D183</td>
                            <td dir="ltr">최종일부해지일 이전으로는 해지거래가 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D192</td>
                            <td dir="ltr">일부해지 대상 상품이 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D194</td>
                            <td dir="ltr">일부인출 금액 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D195</td>
                            <td dir="ltr">거래금액을 입력하세요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D197</td>
                            <td dir="ltr">재적립회차 입력하세요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D200</td>
                            <td dir="ltr">통장발급사유 오류입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D201</td>
                            <td dir="ltr">1회 지급한도 초과입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D202</td>
                            <td dir="ltr">1일 지급한도 초과 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D203</td>
                            <td dir="ltr">1일 이체한도 초과하였습니다</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D204</td>
                            <td dir="ltr">비밀번호가 불일치 합니다</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D205</td>
                            <td dir="ltr">카드 비밀번호가 불일치 합니다</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D206</td>
                            <td dir="ltr">계좌 비밀번호가 불일치 합니다</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D207</td>
                            <td dir="ltr">비밀번호 복호화 오류 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D208</td>
                            <td dir="ltr">비밀번호 입력횟수 초과 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D209</td>
                            <td dir="ltr">비밀번호 미등록 상태입니다</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D213</td>
                            <td dir="ltr">잡수익환급해지는 외화대체거래가 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D214</td>
                            <td dir="ltr">인터넷뱅킹신규계좌는 일부해지가 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D215</td>
                            <td dir="ltr">외화정기예금 만기 만기후해지 특별환율번호 입력불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D216</td>
                            <td dir="ltr">수수료우대구분이 입력되지 않았습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D218</td>
                            <td dir="ltr">일부해지가능횟수를 초과하였습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D219</td>
                            <td dir="ltr">휴면예금출연 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D220</td>
                            <td dir="ltr">편안한통장은 무통장해지거래가 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D221</td>
                            <td dir="ltr">비밀번호생략 신규계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D222</td>
                            <td dir="ltr">NET거래가 불가한 상품입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D223</td>
                            <td dir="ltr">무기명예금은 NET해지가 불가합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D226</td>
                            <td dir="ltr">비밀번호 암복호화 오류 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D227</td>
                            <td dir="ltr">무통장 신규된 계좌입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D228</td>
                            <td dir="ltr">금융기관코드는 필수 입력항목 입니다</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D232</td>
                            <td dir="ltr">계좌번호 입력하세요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D233</td>
                            <td dir="ltr">거래구분 오류 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D234</td>
                            <td dir="ltr">비밀번호 입력하세요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D235</td>
                            <td dir="ltr">변경후비밀번호 입력하세요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D236</td>
                            <td dir="ltr">통장구분 입력하세요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D237</td>
                            <td dir="ltr">변경후증요증서번호 입력하세요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D238</td>
                            <td dir="ltr">인감서명구분 입력하세요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D243</td>
                            <td dir="ltr">금액 입력하세요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D244</td>
                            <td dir="ltr">통장행수 입력하세요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D246</td>
                            <td dir="ltr">수수료계좌번호 입력하세요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D247</td>
                            <td dir="ltr">수수료계좌비밀번호 입력하세요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D248</td>
                            <td dir="ltr">비밀번호 입력하지 마세요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D249</td>
                            <td dir="ltr">변경후비밀번호 입력하지 마세요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D250</td>
                            <td dir="ltr">통장구분 입력하지 마세요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D274</td>
                            <td dir="ltr">원화요구불예금에서 사용할 수 없는 통장입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D275</td>
                            <td dir="ltr">원화저축성예금에서 사용할 수 없는 통장입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D276</td>
                            <td dir="ltr">외화저축성예금에서 사용할 수 없는 통장입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D277</td>
                            <td dir="ltr">외화요구불예금에서 사용할 수 없는 통장입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D279</td>
                            <td dir="ltr">해지구분코드가 잘못 입력 되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D283</td>
                            <td dir="ltr">단말에서 잡수익해지는 조합점에서만 가능합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D284</td>
                            <td dir="ltr">해지금액 입력 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D319</td>
                            <td dir="ltr">통장발급사유 입력하지 마세요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D320</td>
                            <td dir="ltr">통장발급사유 입력하세요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D327</td>
                            <td dir="ltr">수수료계좌수취인명 입력하지 마세요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D328</td>
                            <td dir="ltr">수수료면제여부 입력하지 마세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D332</td>
                            <td dir="ltr">일부해지금액이 원장잔액보다 크거나 같습니다. 전액해지시 일부해지여부는 N으로 입력</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D344</td>
                            <td dir="ltr">앞자리 비밀번호를 입력 하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D345</td>
                            <td dir="ltr">앞자리 비밀번호를 입력 하지 마세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D346</td>
                            <td dir="ltr">뒷자리 비밀번호를 입력 하세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D347</td>
                            <td dir="ltr">뒷자리 비밀번호를 입력 하지 마세요</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D348</td>
                            <td dir="ltr">거래금액이 외화현찰 외화대체 포지션 외화연동 합계금액과 일치하지 않습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D349</td>
                            <td dir="ltr">원화금액이 통화 일반대체 연동대체 합계금액과 일치하지 않습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D351</td>
                            <td dir="ltr">원금처리구분은 필수 입력항목 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D352</td>
                            <td dir="ltr">외화예금이자처리구분코드</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D358</td>
                            <td dir="ltr">외화대체금액 미입력. 처분사유가 11 인 경우 전액 외화대체</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D359</td>
                            <td dir="ltr">외화대체이외 입력불가. 처분사유가 11 인 경우 전액 외화대체</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D360</td>
                            <td dir="ltr">특별환율번호 적용환율 동시 입력불가.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D361</td>
                            <td dir="ltr">자유적립식외화예금 해지시 본부승인번호 입력불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D362</td>
                            <td dir="ltr">포지션 거래가 아닙니다. 특별환율번호 입력불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D363</td>
                            <td dir="ltr">포지션 거래가 아닙니다. 적용환율 입력불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">D364</td>
                            <td dir="ltr">포지션 거래가 아닙니다. 원화입금계좌 입력불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F001</td>
                            <td dir="ltr">외화계좌번호 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F002</td>
                            <td dir="ltr">식별구분 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F003</td>
                            <td dir="ltr">송금통화 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F004</td>
                            <td dir="ltr">송금외화금액 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F005</td>
                            <td dir="ltr">송금구분 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F006</td>
                            <td dir="ltr">송금인명(영문) 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F007</td>
                            <td dir="ltr">수취인명(영문) 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F008</td>
                            <td dir="ltr">수취은행주소 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F009</td>
                            <td dir="ltr">수취인계좌번호 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F010</td>
                            <td dir="ltr">수취인앞지시사항 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F011</td>
                            <td dir="ltr">해외은행수수료부담자 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F012</td>
                            <td dir="ltr">지급사유코드1 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F013</td>
                            <td dir="ltr">외화대체금액 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F014</td>
                            <td dir="ltr">POSITION금액 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F015</td>
                            <td dir="ltr">입금외화계좌번호 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F016</td>
                            <td dir="ltr">입금통화 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F017</td>
                            <td dir="ltr">입금외화금액 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F018</td>
                            <td dir="ltr">입금원화계좌번호 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F019</td>
                            <td dir="ltr">입금원화금액 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F020</td>
                            <td dir="ltr">수취인 주소 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F021</td>
                            <td dir="ltr">계좌통화 오류</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F022</td>
                            <td dir="ltr">송금취소원거래 미존재</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">F023</td>
                            <td dir="ltr">송금통지수신으로인한 취소불가</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H002</td>
                            <td dir="ltr">당일거래만 가능합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H003</td>
                            <td dir="ltr">거래가능 일자가 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H004</td>
                            <td dir="ltr">
                                <div>TIMEOUT 발생 전문 재처리 중입니다. 입출금 조회필. (수협은행 전산실로 문의하세요)</div>
                            </td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H005</td>
                            <td dir="ltr">참가 금융기관이 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H006</td>
                            <td dir="ltr">TIMEOUT이 발생 했습니다.입출금 조회필 (수협은행 전산실로 문의하세요)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H007</td>
                            <td dir="ltr">변경할 수 없는 거래입니다. 일자 또는 거래고유번호를 확인 하십시요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H008</td>
                            <td dir="ltr">호출 모듈에서 메시지 코드가 누락되었습니다.(에러시:RETSET 으로 설정 바람)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H009</td>
                            <td dir="ltr">복호화시 오류가 발생했습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H010</td>
                            <td dir="ltr">암호화시 오류가 발생했습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H011</td>
                            <td dir="ltr">대외기관오류코드매핑 자료가 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H012</td>
                            <td dir="ltr">취급기관 업무개시 이전 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H013</td>
                            <td dir="ltr">취급기관 업무종료 되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H014</td>
                            <td dir="ltr">중계센터 시스템 장애 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H015</td>
                            <td dir="ltr">중계센터 종료 상태 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H016</td>
                            <td dir="ltr">중계센터 데이터베이스 장애 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H017</td>
                            <td dir="ltr">개설기관 시스템 장애 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H018</td>
                            <td dir="ltr">개설기관 업무개시 이전 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H019</td>
                            <td dir="ltr">개설기관 업무종료 되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H020</td>
                            <td dir="ltr">처리지연으로 거부 되었습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H021</td>
                            <td dir="ltr">미참가 기관 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H022</td>
                            <td dir="ltr">개설기관 서비스시간이 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H023</td>
                            <td dir="ltr">처리결과를 확인 하십시요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H024</td>
                            <td dir="ltr">메시지코드 오류 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H025</td>
                            <td dir="ltr">기관코드 오류 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H026</td>
                            <td dir="ltr">기관 지점코드 오류 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H027</td>
                            <td dir="ltr">계좌번호가 상위 합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H028</td>
                            <td dir="ltr">해당지점 처리 불가 합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H029</td>
                            <td dir="ltr">과목코드 오류 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H030</td>
                            <td dir="ltr">총금액이 상위 합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H031</td>
                            <td dir="ltr">추심대전 수수료 상위 합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H032</td>
                            <td dir="ltr">타행이체거래 불가 계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H033</td>
                            <td dir="ltr">CMS번호 기재 바랍니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H034</td>
                            <td dir="ltr">CMS번호가 상위 합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H035</td>
                            <td dir="ltr">개설기관 이체처리중 입니다. 타행처리중(430응답), 입출금 조회필</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H036</td>
                            <td dir="ltr">이체전문 수신전 취소전문을 수신 했습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H037</td>
                            <td dir="ltr">타행처리 불가 계좌입니다 계좌 개설기관에서 거래 하십시요.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H038</td>
                            <td dir="ltr">개설기관 이체처리중(개설무응답)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H039</td>
                            <td dir="ltr">개설기관 취소 처리중 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H040</td>
                            <td dir="ltr">원거래 불명 입니다.(원거래 비정상)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H041</td>
                            <td dir="ltr">재취소 바랍니다.(전일자 취소 개설기관 무응답 수신전문 오류등)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H042</td>
                            <td dir="ltr">개설기관 확인 바랍니다.(전일자 취소 불능)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H043</td>
                            <td dir="ltr">요청기관 사고발생(출금)계좌번호 상위 합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H044</td>
                            <td dir="ltr">지급정지요청금액 상위 합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H045</td>
                            <td dir="ltr">사고자금 이체일 상위 합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H046</td>
                            <td dir="ltr">지급정지대상 계좌번호가 상위합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H047</td>
                            <td dir="ltr">기타 사항 상위 합니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H048</td>
                            <td dir="ltr">기 해지된 거래임 입니다.(정상해지)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H049</td>
                            <td dir="ltr">원거래 불명 입니다.(원거래 비정상)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H050</td>
                            <td dir="ltr">처리결과 유선으로 확인 바랍니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H051</td>
                            <td dir="ltr">지급정지 대상계좌가 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H052</td>
                            <td dir="ltr">지급정지 기한일자 오류 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H053</td>
                            <td dir="ltr">이체정보조회 대상이 아닙니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H054</td>
                            <td dir="ltr">승인금액이 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H055</td>
                            <td dir="ltr">기타 지급정지 불가 계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H056</td>
                            <td dir="ltr">지급정지결과 유선으로 확인 바랍니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H057</td>
                            <td dir="ltr">지급정지 대상계좌가 없습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H058</td>
                            <td dir="ltr">출금기관 사용불가 합니다.(출금기관 장애상태)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H059</td>
                            <td dir="ltr">입금처리중 입니다.(처리결과 조회 하십시요)</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H061</td>
                            <td dir="ltr">입금불가 계좌 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H062</td>
                            <td dir="ltr">선결제 미취급 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H069</td>
                            <td dir="ltr">기 등록된 사업자등록번호 오류 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H070</td>
                            <td dir="ltr">기 정상처리 된 거래 입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H071</td>
                            <td dir="ltr">기 정상취소 된 거래입니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H072</td>
                            <td dir="ltr">해당 전문을 무시 했습니다.</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H073</td>
                            <td dir="ltr">불능 응답이 왔습니다.입출금 조회필</td>
                        </tr>
                        <tr>
                            <td dir="ltr">수협</td>
                            <td dir="ltr">H074</td>
                            <td dir="ltr">오류 응답이 왔습니다.입출금 조회필</td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <h3 class="pl-4">
                (구)페이플 응답코드
            </h3>
            <v-card class="temp_table ma-4 mb-12">
                <v-simple-table class="table-hover-disable">
                    <tbody>
                        <tr>
                            <td>TYPE</td>
                            <td dir="ltr">응답코드</td>
                            <td dir="ltr">응답메세지</td>
                            <td dir="ltr">설명</td>
                        </tr>
                        <tr>
                            <td rowspan="7">AUTH<br />(가맹점 인증)</td>
                            <td>0001</td>
                            <td>가맹점아이디 값이 존재하지 않습니다.</td>
                            <td>전송된 cst_id 값이 공백이거나 null</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>가맹점키 값이 존재하지 않습니다.</td>
                            <td>전송된 custKey 값이 공백이거나 null</td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>가맹점 계정이 존재하지 않습니다.</td>
                            <td>cst_id 와 일치하는 가맹점 정보를 찾지 못함.</td>
                        </tr>
                        <tr>
                            <td>0004</td>
                            <td>CONNECT SERVER ERROR!!</td>
                            <td>가맹점의 SERVER IP 또는 도메인 불일치</td>
                        </tr>
                        <tr>
                            <td>0005</td>
                            <td>TOKEN CREATE ERROR!!</td>
                            <td>인증키 생성 에러</td>
                        </tr>
                        <tr>
                            <td>0006</td>
                            <td>SSL ERROR!!</td>
                            <td>보안프로토콜(HTTPS) 이 아님</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowspan="36">ARSA<br />(이통사 본인인증)</td>
                            <td>0001</td>
                            <td>ARS인증 - MEM ERROR</td>
                            <td>인증키 값이 일치하지 않음.</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>평생계좌번호가 아닌 실계좌번호를 입력해주세요.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>가맹점 건당 한도 초과 - 해당 사이트 관리자에게 문의 하세요!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0004</td>
                            <td>가맹점 월 한도 초과 - 해당 사이트 관리자에게 문의 하세요!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0005</td>
                            <td>이통사 본인확인 전문생성 오류!! [관리자에게 문의하세요~]</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0006</td>
                            <td>이통사 본인확인 실패</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0007</td>
                            <td>본인 정보를 바르게 입력해주세요.</td>
                            <td>또는 이통사 오류 메세지</td>
                        </tr>
                        <tr>
                            <td>0008</td>
                            <td>결제자 정보 수정 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0009</td>
                            <td>인증번호 발송 실패(2)</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0010</td>
                            <td>이통사 본인확인 결과 업데이트 실패</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0011</td>
                            <td>인증세션 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0012</td>
                            <td>인증번호 발송 실패(1)!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0013</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0014</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0015</td>
                            <td>ARS AUTH FAIL!![Log Delate Error]</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0016</td>
                            <td>ARS 본인인증 결과 등록 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0017</td>
                            <td>결제자 정보 수정 실패!!</td>
                            <td>DB ERROR - 정기결제인증 여부 업데이트 실패</td>
                        </tr>
                        <tr>
                            <td>0018</td>
                            <td>계좌정보를 올바르게 입력해주세요!!</td>
                            <td>DB ERROR - 중복 또는 유효하지 않은 본인/계좌 정보</td>
                        </tr>
                        <tr>
                            <td>0019</td>
                            <td>계좌등록 전문생성 오류!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0020</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0021</td>
                            <td>계좌 등록 실패 - 계좌정보를 바르게 입력하세요!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0022</td>
                            <td>계좌인증 완료처리 실패</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0023</td>
                            <td>계좌등록완료 알림문자 발송 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0024</td>
                            <td>인증 결과 처리 실패!!</td>
                            <td>계좌인증 완료처리 실패</td>
                        </tr>
                        <tr>
                            <td>0025</td>
                            <td>인증 결과 업데이트 실패!!</td>
                            <td>계좌인증 회원 고유번호 업데이트 실패</td>
                        </tr>
                        <tr>
                            <td>0026</td>
                            <td>인증에 실패하였습니다. 결제정보를 다시 입력해주세요 [에러코드 : 에러메세지]</td>
                            <td>ARS 인증 실패</td>
                        </tr>
                        <tr>
                            <td>1001</td>
                            <td>법인계좌 인증정보가 존재하지 않습니다.</td>
                            <td>법인계좌 인증 실패</td>
                        </tr>
                        <tr>
                            <td>1002</td>
                            <td>계좌인증이 완료되지 않은 법인계좌 입니다.</td>
                            <td>법인계좌 인증 실패</td>
                        </tr>
                        <tr>
                            <td>1003</td>
                            <td>계좌정보를 다시 입력해주세요.</td>
                            <td>계좌등록 전문 결과 수신 실패 [FLAG : F]</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9998</td>
                            <td>은행 점검시간입니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowspan="31">CPAY<br />(출금)</td>
                            <td>0001</td>
                            <td>MEM ERROR - 인증시간 만료!!</td>
                            <td>가맹점 인증 TIME OUT</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>계좌이체 대상자 정보 없음!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>결제자 정보가 일치하지 않습니다.!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0004</td>
                            <td>정기결제 대상자 정보 없음!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0005</td>
                            <td>가맹점 건당 한도 초과 - 해당 사이트 관리자에게 문의 하세요!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0006</td>
                            <td>가맹점 월 한도 초과 - 해당 사이트 관리자에게 문의 하세요!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0007</td>
                            <td>정기결제요청내역 등록 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0008</td>
                            <td>결제내역 등록 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0009</td>
                            <td>통계정보 업데이트 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0010</td>
                            <td>통계정보 등록 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0015</td>
                            <td>출금요청 전문생성 오류!! [관리자에게 문의하세요~]</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0018</td>
                            <td>출금이체 결과 미수신!! [시스템관리자에게 문의하세요~]</td>
                            <td>은행 출금결과 미수신(응답없음)</td>
                        </tr>
                        <tr>
                            <td>0019</td>
                            <td>정기결제내역 등록 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0020</td>
                            <td>결제내역 등록 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0021</td>
                            <td>통계정보 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0022</td>
                            <td>출금이제 실패!!</td>
                            <td>출금이체 전문 전송 실패 / 전문의 오류로 인한 전문전송 실패</td>
                        </tr>
                        <tr>
                            <td>0023</td>
                            <td>링크결제 카운트 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0024</td>
                            <td>자동이체 해지정보 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0026</td>
                            <td>결제요청 금액이 일치하지 않습니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0027</td>
                            <td>인증세션 업데이트 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0028</td>
                            <td>Event Update Error</td>
                            <td>이벤트 적용 정보 기록</td>
                        </tr>
                        <tr>
                            <td>0029</td>
                            <td>고액결제 알림톡 발송 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0030</td>
                            <td>출금신청 전문 중복오류!! [관리자에게 문의하세요~]</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0201</td>
                            <td>중복결제입니다.</td>
                            <td>주문번호 중복 오류</td>
                        </tr>
                        <tr>
                            <td>0202</td>
                            <td>중복결제입니다.</td>
                            <td>정기결제 중복 오류 : 주문번호 중복 또는 해당 년.월 분 결제 내역이 존재함.</td>
                        </tr>
                        <tr>
                            <td>9998</td>
                            <td>은행 점검시간입니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9999</td>
                            <td>본인정보나 계좌정보를 바르게 입력하세요!!</td>
                            <td>Exception()</td>
                        </tr>
                        <tr>
                            <td>E001</td>
                            <td>(이벤트)이(가) 종료되었습니다.</td>
                            <td>종료된 이벤트 행사</td>
                        </tr>
                        <tr>
                            <td>E002</td>
                            <td>이벤트 결제 건수 UPDATE 실패!!</td>
                            <td>이벤트 적용 결제 건수 체크 오류</td>
                        </tr>
                        <tr>
                            <td>F001</td>
                            <td>인증세션 업데이트 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowspan="6">BILL</td>
                            <td>0001</td>
                            <td>Wrong access attempt</td>
                            <td>인증되지 않은 접속시도</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>결제내역 발송 - MEM ERROR!!</td>
                            <td>가맹점 아이디+인증키 인증 실패</td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>계좌이체(요청)결제 내역 없음!!</td>
                            <td>결제요청 또는 결제완료 내역 조회 실패</td>
                        </tr>
                        <tr>
                            <td>0006</td>
                            <td>인증세션 업데이트 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowspan="27">SPAY<br />(간편결제 REST)</td>
                            <td>0001</td>
                            <td>인증실패 : MEM INFO ERROR</td>
                            <td>PCD_CST_ID 또는 PCD_AUTH_KEY 값이 일치하지 않거나 인증세션 만료로 인한 가맹점 인증오류</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>평생계좌번호가 아닌 실계좌번호를 입력해주세요.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>가맹점 건당 한도 초과 - 해당 사이트 관리자에게 문의 하세요!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0004</td>
                            <td>가맹점 월 한도 초과 - 해당 사이트 관리자에게 문의 하세요!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0005</td>
                            <td>등록된 계좌정보를 찾을 수 없습니다.</td>
                            <td>PCD_PAYER_ID 또는 계좌정보 가 일치하는 계좌정보 없음.</td>
                        </tr>
                        <tr>
                            <td>0006</td>
                            <td>결제동의 미인증 계좌입니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0007</td>
                            <td>간편결제요청 등록 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0008</td>
                            <td>통계정보 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0009</td>
                            <td>통계정보 등록 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0010</td>
                            <td>계좌조회 전문생성 오류!! [관리자에게 문의하세요~]</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0011</td>
                            <td>출금이체 결과 미수신!! [시스템관리자에게 문의하세요~]</td>
                            <td>은행 출금결과 미수신(응답없음)</td>
                        </tr>
                        <tr>
                            <td>0012</td>
                            <td>출금이제 실패!!</td>
                            <td>출금이체 전문 전송 실패 / 전문의 오류로 인한 전문전송 실패</td>
                        </tr>
                        <tr>
                            <td>0013</td>
                            <td>간편결제요청 결과 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0014</td>
                            <td>간편결제내역 등록 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0015</td>
                            <td>간편결제결과 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0016</td>
                            <td>간편결제 출금결과 등록 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0017</td>
                            <td>통계정보 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0018</td>
                            <td>간편결제내역 전송 결과 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0019</td>
                            <td>간편결제 출금이체 실패 : 잘못된 접근입니다.!!</td>
                            <td>ACT_ 또는 PCD_SIMPLE_FLAG 값 오류</td>
                        </tr>
                        <tr>
                            <td>0020</td>
                            <td>간편결제 출금이체 실패 : 결제자 정보나 계좌정보를 바르게 입력하세요!!</td>
                            <td>기타오류</td>
                        </tr>
                        <tr>
                            <td>0021</td>
                            <td>주문번호가 존재하지 않습니다.</td>
                            <td>주문번호(PCD_PAY_OID) 미전송</td>
                        </tr>
                        <tr>
                            <td>0022</td>
                            <td>로그기록 실패</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0023</td>
                            <td>결제가능 최저금액은 1,000원 입니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0024</td>
                            <td>결제상품명이 존재하지 않습니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9998</td>
                            <td>은행 점검시간입니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowspan="28">RPAY<br />(정기결제 REST)</td>
                            <td>0001</td>
                            <td>인증실패 : MEM INFO ERROR</td>
                            <td>PCD_CST_ID 또는 PCD_AUTH_KEY 값이 일치하지 않거나 인증세션 만료로 인한 가맹점 인증오류</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>평생계좌번호가 아닌 실계좌번호를 입력해주세요.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>가맹점 건당 한도 초과 - 해당 사이트 관리자에게 문의 하세요!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0004</td>
                            <td>가맹점 월 한도 초과 - 해당 사이트 관리자에게 문의 하세요!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0005</td>
                            <td>등록된 계좌정보를 찾을 수 없습니다.</td>
                            <td>PCD_PAYER_ID 또는 계좌정보 가 일치하는 계좌정보 없음.</td>
                        </tr>
                        <tr>
                            <td>0006</td>
                            <td>결제동의 미인증 계좌입니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0007</td>
                            <td>결제자 정보 수정 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0008</td>
                            <td>중복결제</td>
                            <td>과금년도(PCD_PAY_YEAR)+과금월(PCD_PAY_MONTH) 중복</td>
                        </tr>
                        <tr>
                            <td>0009</td>
                            <td>정기결제요청 등록 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0010</td>
                            <td>통계정보 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0011</td>
                            <td>통계정보 등록 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0012</td>
                            <td>계좌조회 전문생성 오류!! [관리자에게 문의하세요~]</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0013</td>
                            <td>출금이체 결과 미수신!! [시스템관리자에게 문의하세요~]</td>
                            <td>은행 출금결과 미수신(응답없음)</td>
                        </tr>
                        <tr>
                            <td>0014</td>
                            <td>출금이제 실패!!</td>
                            <td>출금이체 전문 전송 실패 / 전문의 오류로 인한 전문전송 실패</td>
                        </tr>
                        <tr>
                            <td>0015</td>
                            <td>정기결제요청 결과 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0016</td>
                            <td>정기결제내역 등록 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0017</td>
                            <td>정기결제결과 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0018</td>
                            <td>통계정보 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0019</td>
                            <td>정기결제 출금이체 실패 : 잘못된 접근입니다.!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0020</td>
                            <td>정기결제내역 전송 결과 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0021</td>
                            <td>주문번호가 존재하지 않습니다.</td>
                            <td>주문번호(PCD_PAY_OID) 미전송</td>
                        </tr>
                        <tr>
                            <td>0022</td>
                            <td>정기결제 출금이체 실패 : 결제자 정보나 계좌정보를 바르게 입력하세요!!</td>
                            <td>기타오류</td>
                        </tr>
                        <tr>
                            <td>0023</td>
                            <td>결제가능 최저금액은 1,000원 입니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0024</td>
                            <td>결제상품명이 존재하지 않습니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0025</td>
                            <td>정기결제 년도(YYYY) 오류</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0026</td>
                            <td>정기결제 월(MM) 오류</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9998</td>
                            <td>은행 점검시간입니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowspan="53">AUTH<br />(계좌등록)</td>
                            <td>0001</td>
                            <td>인증실패 : MEM INFO ERROR</td>
                            <td>PCD_CST_ID 또는 PCD_AUTH_KEY 값이 일치하지 않거나 인증세션 만료로 인한 가맹점 인증오류</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>평생계좌번호가 아닌 실계좌번호를 입력해주세요.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0005</td>
                            <td>MEM UPDATE ERROR!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0006</td>
                            <td>은행 점검시간입니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0007</td>
                            <td>사업자번호를 바르게 입력하세요.!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0101</td>
                            <td>계좌조회 전문생성 오류!! [관리자에게 문의하세요~]</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0102</td>
                            <td>계좌조회 오류 메세지</td>
                            <td>은행오류</td>
                        </tr>
                        <tr>
                            <td>0103</td>
                            <td>계좌정보 또는 생년월일/사업자번호를 바르게 입력해주세요.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0104</td>
                            <td>예금주명을 바르게 입력해주세요.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0105</td>
                            <td>계좌조회 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0106</td>
                            <td>계좌조회 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0201</td>
                            <td>법인계좌조회 전문생성 오류!! [관리자에게 문의하세요~]</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0202</td>
                            <td>법인계좌인증요청 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0203</td>
                            <td>법인계좌조회 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0204</td>
                            <td>법인계좌 인증번호 생성 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0301</td>
                            <td>개인정보 확인 실패</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0302</td>
                            <td>ARS 인증실패 메세지</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1000</td>
                            <td>인증요청 정보가 없습니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1001</td>
                            <td>가맹점 아이디가 존재하지 않습니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1101</td>
                            <td>법인계좌 인증요청가능 시간이 만료되었습니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1102</td>
                            <td>법인계좌 인증번호 불일치!! 인증번호를 바르게 입력하세요.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1103</td>
                            <td>법인계좌인증 승인 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1104</td>
                            <td>계좌인증이 실패하였습니다. 인증번호를 다시 입력해주세요.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1201</td>
                            <td>ARS AUTH FAIL!![Log Delate Error]</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1202</td>
                            <td>ARS 본인인증 결과 등록 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1203</td>
                            <td>계좌정보를 올바르게 입력해주세요!!</td>
                            <td>계좌정보 조회 오류</td>
                        </tr>
                        <tr>
                            <td>1204</td>
                            <td>계좌정보를 올바르게 입력해주세요!!</td>
                            <td>회원 고유번호 없음</td>
                        </tr>
                        <tr>
                            <td>1301</td>
                            <td>계좌등록 전문생성 오류!! [관리자에게 문의하세요~]</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1302</td>
                            <td>계좌정보를 다시 입력해주세요. [은행오류메세지]</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1303</td>
                            <td>계좌정보를 다시 입력해주세요. [은행오류메세지]</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1304</td>
                            <td>계좌정보를 다시 입력해주세요.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1305</td>
                            <td>계좌등록 실패 - 계좌정보를 바르게 입력하세요!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1002</td>
                            <td>자동이체 등록 알림문자 발송 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1003</td>
                            <td>인증 결과 처리 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1004</td>
                            <td>인증 결과 업데이트 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9991</td>
                            <td>가맹점 인증키 불일치</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9998</td>
                            <td>간편결제 출금이체 실패 : 잘못된 접근입니다.!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9999</td>
                            <td>인증 실패 : 결제자 정보나 계좌정보를 바르게 입력하세요!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>CK01</td>
                            <td>PCD_PAY_TYPE ERROR</td>
                            <td>결제방법(계좌이체: transfer) 오류</td>
                        </tr>
                        <tr>
                            <td>CK02</td>
                            <td>PCD_PAY_WORK ERROR</td>
                            <td>업무구분 (인증: AUTHREG) 오류</td>
                        </tr>
                        <tr>
                            <td>CK03</td>
                            <td>PCD_PAY_BANKACCTYPE ERROR</td>
                            <td>계좌구분 (법인: corporate, 개인: personal) 오류</td>
                        </tr>
                        <tr>
                            <td>CK04</td>
                            <td>PCD_PAYER_NAME ERROR</td>
                            <td>결제자(주문자)명 오류</td>
                        </tr>
                        <tr>
                            <td>CK05</td>
                            <td>PCD_PAYER_BIRTH ERROR</td>
                            <td>신원확인정보 오류</td>
                        </tr>
                        <tr>
                            <td>CK06</td>
                            <td>PCD_PAYER_GENDER ERROR</td>
                            <td>성별 오류</td>
                        </tr>
                        <tr>
                            <td>CK07</td>
                            <td>PCD_PAYER_NATION ERROR</td>
                            <td>국가코드 오류</td>
                        </tr>
                        <tr>
                            <td>CK08</td>
                            <td>PCD_PAYER_HP ERROR</td>
                            <td>휴대폰번호 오류</td>
                        </tr>
                        <tr>
                            <td>CK09</td>
                            <td>PCD_PAYER_HPCOM ERROR</td>
                            <td>통신사 구분코드 오류</td>
                        </tr>
                        <tr>
                            <td>CK10</td>
                            <td>PCD_PAYER_CORPNUM ERROR</td>
                            <td>사업자번호 오류</td>
                        </tr>
                        <tr>
                            <td>CK11</td>
                            <td>PCD_PAY_BANK ERROR</td>
                            <td>은행코드 오류</td>
                        </tr>
                        <tr>
                            <td>CK12</td>
                            <td>PCD_PAY_BANKNUM ERROR</td>
                            <td>계좌번호 오류</td>
                        </tr>
                        <tr>
                            <td>CK21</td>
                            <td>authReqNumber ERROR</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>CK22</td>
                            <td>authNumber ERROR</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowspan="25">CDAU<br />(카드등록)</td>
                            <td>0001</td>
                            <td>인증실패 : MEM INFO ERROR</td>
                            <td>PCD_CST_ID 또는 PCD_AUTH_KEY 값이 일치하지 않거나 인증세션 만료로 인한 가맹점 인증오류</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>카드번호를 바르게 입력하세요.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0005</td>
                            <td>카드 인증 정보 생성 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0006</td>
                            <td>카드 인증 정보 생성 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0007</td>
                            <td>카드 인증 실패 (or 카드사 오류 메세지)</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0008</td>
                            <td>카드 인증 정보 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0009</td>
                            <td>세션정보 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>9991</td>
                            <td>가맹점 인증키 불일치</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9998</td>
                            <td>카드 등록 실패 : 잘못된 접근입니다.!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9999</td>
                            <td>인증 실패 : 카드정보를 바르게 입력하세요!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>CK01</td>
                            <td>PCD_PAY_TYPE ERROR</td>
                            <td>결제방법(신용카드: card) 오류</td>
                        </tr>
                        <tr>
                            <td>CK02</td>
                            <td>PCD_PAY_WORK ERROR</td>
                            <td>업무구분 (인증: AUTHREG) 오류</td>
                        </tr>
                        <tr>
                            <td>CK03</td>
                            <td>PCD_PAYER_BIRTH ERROR</td>
                            <td>생년월일 앞 6자리(YYMMDD) 또는 사업자번호 10자리 오류</td>
                        </tr>
                        <tr>
                            <td>CK04</td>
                            <td>PCD_PAY_CARDNUM ERROR</td>
                            <td>카드번호 오류</td>
                        </tr>
                        <tr>
                            <td>CK05</td>
                            <td>PCD_PAY_CARDEXYEAR, PCD_PAY_CARDEXMONTH ERROR</td>
                            <td>카드 유효기간 오류</td>
                        </tr>
                        <tr>
                            <td>CK06</td>
                            <td>PCD_PAY_CARDPW ERROR</td>
                            <td>카드 비밀번호 앞2자리 오류</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowspan="33">RPCD<br />(카드간편결제/정기)</td>
                            <td>0001</td>
                            <td>결제용 KEY 값이 존재하지 않습니다.</td>
                            <td>PCD_PAYER_ID 값이 존재하지 않음</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>결제가능 최저금액은 1,000원 입니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>결제상품명이 존재하지 않습니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0004</td>
                            <td>정기결제 년도(YYYY) 오류</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0005</td>
                            <td>정기결제 월(MM) 오류</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0006</td>
                            <td>인증실패 : MEM INFO ERROR</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0007</td>
                            <td>카드정기결제서비스 이용 불가</td>
                            <td>카드정기결제 서비스 이용권한이 없음.</td>
                        </tr>
                        <tr>
                            <td>0008</td>
                            <td>SEND DATA LOG WRITE ERROR</td>
                            <td>가맹점 전송 데이터 로그기록 오류</td>
                        </tr>
                        <tr>
                            <td>0009</td>
                            <td>가맹점 건당 한도 초과 - 해당 사이트 관리자에게 문의 하세요!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0010</td>
                            <td>가맹점 카드 월 한도 초과 - 해당 사이트 관리자에게 문의 하세요!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0011</td>
                            <td>카드 인증정보 체크 실패!!</td>
                            <td>가맹점의 PCD_PAYER_ID 가 아님.</td>
                        </tr>
                        <tr>
                            <td>0012</td>
                            <td>카드 인증정보를 찾을 수 없습니다.</td>
                            <td>존재하지 않는 PCD_PAYER_ID</td>
                        </tr>
                        <tr>
                            <td>0013</td>
                            <td>미인증 카드입니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0014</td>
                            <td>결제자 정보 수정 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0015</td>
                            <td>중복결제</td>
                            <td>주문번호 or 결제구분 년.월 중복 오류</td>
                        </tr>
                        <tr>
                            <td>0016</td>
                            <td>정기결제요청 등록 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0017</td>
                            <td>통계정보 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0018</td>
                            <td>통계정보 등록 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0019</td>
                            <td>카드결제 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0020</td>
                            <td>고액결제 알림톡 발송 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0021</td>
                            <td>정기결제요청 결과 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0022</td>
                            <td>정기결제내역 등록 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0023</td>
                            <td>정기결제결과 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0024</td>
                            <td>정기결제결과 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0025</td>
                            <td>통계정보 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0026</td>
                            <td>정기결제내역 전송 결과 업데이트 실패!!</td>
                            <td>고객 Email 발송 오류</td>
                        </tr>
                        <tr>
                            <td>0027</td>
                            <td>인증세션 업데이트 실패!!</td>
                            <td>카드결제 로그기록 오류</td>
                        </tr>
                        <tr>
                            <td>1001</td>
                            <td>카드스인 요청 실패!!</td>
                            <td>카드사 응답없음</td>
                        </tr>
                        <tr>
                            <td>1002</td>
                            <td>카드등록 해지 실패!!</td>
                            <td>거래제한카드, 유효기간만료, 도난/분실/위.변조 카드 등록해지 처리 오류</td>
                        </tr>
                        <tr>
                            <td>1003</td>
                            <td>결제요청 값과 결제결과 값이 다릅니다.</td>
                            <td>카드승인요청금액, 사용자ID 정보 불일치로 카드승인취소처리</td>
                        </tr>
                        <tr>
                            <td>9991</td>
                            <td>가맹점 인증키 불일치</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9998</td>
                            <td>정기결제(카드) 실패 : 잘못된 접근입니다.!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9999</td>
                            <td>정기결제 카드결제 실패 : 결제자 정보를 바르게 입력하세요!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowspan="30">SPCD<br />(카드간편결제/단건)</td>
                            <td>0001</td>
                            <td>결제용 KEY 값이 존재하지 않습니다.</td>
                            <td>PCD_PAYER_ID 값이 존재하지 않음</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>결제가능 최저금액은 1,000원 입니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>결제상품명이 존재하지 않습니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0004</td>
                            <td>인증실패 : MEM INFO ERROR</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0007</td>
                            <td>카드결제서비스 이용 불가</td>
                            <td>카드결제 서비스 이용권한이 없음.</td>
                        </tr>
                        <tr>
                            <td>0008</td>
                            <td>SEND DATA LOG WRITE ERROR</td>
                            <td>가맹점 전송 데이터 로그기록 오류</td>
                        </tr>
                        <tr>
                            <td>0009</td>
                            <td>가맹점 건당 한도 초과 - 해당 사이트 관리자에게 문의 하세요!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0010</td>
                            <td>가맹점 카드 월 한도 초과 - 해당 사이트 관리자에게 문의 하세요!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0011</td>
                            <td>카드 인증정보 체크 실패!!</td>
                            <td>가맹점의 PCD_PAYER_ID 가 아님.</td>
                        </tr>
                        <tr>
                            <td>0012</td>
                            <td>카드 인증정보를 찾을 수 없습니다.</td>
                            <td>존재하지 않는 PCD_PAYER_ID</td>
                        </tr>
                        <tr>
                            <td>0013</td>
                            <td>미인증 카드입니다.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0014</td>
                            <td>중복결제</td>
                            <td>주문번호 중복 오류</td>
                        </tr>
                        <tr>
                            <td>0015</td>
                            <td>간편결제요청 등록 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0016</td>
                            <td>통계정보 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0017</td>
                            <td>통계정보 등록 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0018</td>
                            <td>카드결제 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0019</td>
                            <td>고액결제 알림톡 발송 실패!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>0020</td>
                            <td>간편결제요청 결과 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0021</td>
                            <td>간편결제내역 등록 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0022</td>
                            <td>간편결제결과 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0023</td>
                            <td>간편결제결과 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0024</td>
                            <td>통계정보 업데이트 실패!!</td>
                            <td>DB ERROR</td>
                        </tr>
                        <tr>
                            <td>0025</td>
                            <td>간편결제내역 전송 결과 업데이트 실패!!</td>
                            <td>고객 Email 발송 오류</td>
                        </tr>
                        <tr>
                            <td>0026</td>
                            <td>인증세션 업데이트 실패!!</td>
                            <td>카드결제 로그기록 오류</td>
                        </tr>
                        <tr>
                            <td>1001</td>
                            <td>카드스인 요청 실패!!</td>
                            <td>카드사 응답없음</td>
                        </tr>
                        <tr>
                            <td>1002</td>
                            <td>카드등록 해지 실패!!</td>
                            <td>거래제한카드, 유효기간만료, 도난/분실/위.변조 카드 등록해지 처리 오류</td>
                        </tr>
                        <tr>
                            <td>1003</td>
                            <td>결제요청 값과 결제결과 값이 다릅니다.</td>
                            <td>카드승인요청금액, 사용자ID 정보 불일치로 카드승인취소처리</td>
                        </tr>
                        <tr>
                            <td>9991</td>
                            <td>가맹점 인증키 불일치</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9998</td>
                            <td>정기결제(카드) 실패 : 잘못된 접근입니다.!!</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9999</td>
                            <td>정기결제 카드결제 실패 : 결제자 정보를 바르게 입력하세요!!</td>
                            <td></td>
                        </tr>
                    </tbody>
                </v-simple-table>
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
        };
    },
};
</script>
