<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-12">샘플코드</h1>
        <blockquote class="blockquote body-1">
            페이플 샘플코드는 이곳에서 확인 하실 수 있습니다.
        </blockquote>

        <v-row class="mb-12 pt-12">
            <v-col class="d-flex align-stretch" col="12" sm="4">
                <v-card>
                    <v-card-text>
                        <v-list-item class="px-0">
                            <v-list-item-avatar color="indigo lighten-1">
                                <v-icon color="white">
                                    mdi-language-php
                                </v-icon> 
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title class=" mb-2">
                                    PHP
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <h3 class=" text--primary my-4">
                            PHP 샘플코드
                        </h3>
                        
                        <div class="text--primary">
                            <!-- 페이플 서비스를 이용중인<br/>
                            <b>미스터멘션</b>의 <b>슈퍼개발자</b>님이<br/>
                            제작해주신 페이플의 PHP 샘플코드입니다.<br/><br/> -->
                            결제 연동을 위해<br/> 
                            페이플에서 제작한 <b>PHP샘플코드</b>입니다.<br/><br/>

                            페이플 오픈 소스 프로젝트는 언제나 여러분의 참여를 환영합니다.
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn text color="deep-purple accent-4" href="https://github.com/PAYPLECORP/sample-php" target="_blank">
                            바로가기
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col class="d-flex align-stretch" col="12" sm="4">
                <v-card>
                    <v-card-text>
                        <v-list-item class="px-0">
                            <v-list-item-avatar color="amber darken-2">
                                <v-icon color="white">
                                    mdi-language-javascript
                                </v-icon>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title class=" mb-2">
                                    JAVA
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <h3 class=" text--primary my-4">
                            페이플 Java 샘플코드
                        </h3>
                        
                        <div class="text--primary">
                            <!-- 페이플 서비스를 이용중인<br/>
                            <b>미스터멘션</b>의 <b>슈퍼개발자</b>님이<br/>
                            제작해주신 페이플의 PHP 샘플코드입니다.<br/><br/> -->
                            결제 연동을 위해<br/> 
                            페이플에서 제작한 <b>Java 샘플코드</b>입니다.<br/><br/>

                            페이플 오픈 소스 프로젝트는 언제나 여러분의 참여를 환영합니다.
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn text color="deep-purple accent-4" href="https://github.com/PAYPLECORP/sample-java" target="_blank">
                            바로가기
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col class="d-flex align-stretch" col="12" sm="4">
                <v-card>
                    <v-card-text>
                        <v-list-item class="px-0">
                            <v-list-item-avatar color="green lighten-1">
                                <v-icon color="white">
                                    mdi-nodejs
                                </v-icon>
                            </v-list-item-avatar>
                            
                            <v-list-item-content>
                                <v-list-item-title class=" mb-2">
                                    Node.js
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <h3 class=" text--primary my-4">
                            Node.js 샘플코드
                        </h3>
                        
                        <div class="text--primary">
                            <!-- 페이플 서비스를 이용중인<br/>
                            <b>미스터멘션</b>의 <b>슈퍼개발자</b>님이<br/>
                            제작해주신 페이플의 PHP 샘플코드입니다.<br/><br/> -->
                            결제 연동을 위해<br/> 
                            페이플에서 제작한 <b>Node.js 샘플코드</b>입니다.<br/><br/>

                            페이플 오픈 소스 프로젝트는 언제나 여러분의 참여를 환영합니다.
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn text color="deep-purple accent-4" href="https://github.com/PAYPLECORP/sample_nodejs" target="_blank">
                            바로가기
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col class="d-flex align-stretch" col="12" sm="4">
                <v-card>
                    <v-card-text>
                        <v-list-item class="px-0">
                            <v-list-item-avatar color="#61dafb">
                                <v-icon color="white">
                                    mdi-react
                                </v-icon>
                            </v-list-item-avatar>
                            
                            <v-list-item-content>
                                <v-list-item-title class=" mb-2">
                                    React
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <h3 class=" text--primary my-4">
                            React 샘플코드
                        </h3>
                        
                        <div class="text--primary">
                            <!-- 페이플 서비스를 이용중인<br/>
                            <b>미스터멘션</b>의 <b>슈퍼개발자</b>님이<br/>
                            제작해주신 페이플의 PHP 샘플코드입니다.<br/><br/> -->
                            결제 연동을 위해<br/> 
                            페이플에서 제작한 <b>React 샘플코드</b>입니다.<br/><br/>

                            페이플 오픈 소스 프로젝트는 언제나 여러분의 참여를 환영합니다.
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn text color="deep-purple accent-4" href="https://github.com/PAYPLECORP/sample_react" target="_blank">
                            바로가기
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col class="d-flex align-stretch" col="12" sm="4">
                <v-card>
                    <v-card-text>
                        <v-list-item class="px-0">
                            <v-list-item-avatar color="#2b5b84">
                                <v-icon color="white">
                                    mdi-language-python
                                </v-icon>
                            </v-list-item-avatar>
                            
                            <v-list-item-content>
                                <v-list-item-title class=" mb-2">
                                    Python
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <h3 class=" text--primary my-4">
                            Python 샘플코드
                        </h3>
                        
                        <div class="text--primary">
                            <!-- 페이플 서비스를 이용중인<br/>
                            <b>미스터멘션</b>의 <b>슈퍼개발자</b>님이<br/>
                            제작해주신 페이플의 PHP 샘플코드입니다.<br/><br/> -->
                            결제 연동을 위해<br/> 
                            페이플에서 제작한 <b>Python 샘플코드</b>입니다.<br/><br/>

                            페이플 오픈 소스 프로젝트는 언제나 여러분의 참여를 환영합니다.
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn text color="deep-purple accent-4" href="https://github.com/PAYPLECORP/sample_python" target="_blank">
                            바로가기
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <!-- <v-row class="mb-12 ">
            <v-col col="12" sm="4">
                <v-card>
                    <v-list-item>
                        <v-list-item-avatar color="indigo lighten-1">
                            <v-icon color="white">
                                mdi-language-php
                            </v-icon>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title class=" mb-2">PHP</v-list-item-title>
                            <v-list-item-subtitle>
                                페이플 PHP 샘플코드 입니다.<br/>
                                페이플을 이용하시나요?<br/>
                                페이플 오픈 소스 프로젝트에 직접 참여해보세요!
                            </v-list-item-subtitle>
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
                        <v-list-item-avatar color="orange darken-2">
                            <v-icon color="white">
                                mdi-language-java
                            </v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class=" mb-2">JAVA</v-list-item-title>
                            <v-list-item-subtitle>
                                페이플 Java 샘플코드 입니다.<br/>
                                페이플을 이용하시나요?<br/>
                                페이플 오픈 소스 프로젝트에 직접 참여해보세요!
                            </v-list-item-subtitle>
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
                        <v-list-item-avatar color="green lighten-1">
                            <v-icon color="white">
                                mdi-nodejs
                            </v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class=" mb-2">NODEJS</v-list-item-title>
                            <v-list-item-subtitle>
                                페이플 NODEJS 샘플코드 입니다.<br/>
                                페이플을 이용하시나요?<br/>
                                페이플 오픈 소스 프로젝트에 직접 참여해보세요!
                            </v-list-item-subtitle>
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
        </v-row> -->
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
                    text: "샘플코드",
                    disabled: true,
                },
            ],
            code_1_1: `
{
"PCD_PAY_RST" => "success",
"PCD_PAY_MSG" => “결제결과 리턴 메시지”,
"PCD_CST_ID" => “가맹점 ID”,
"PCD_PAY_OID" => “주문번호”,
"PCD_PAY_TYPE" => “card”,
"PCD_PAYER_NO" => “회원번호”,
"PCD_PAYER_ID" => “계좌(카드)등록후 리턴받은 빌링키”,
"PCD_PAY_YEAR" => “월 중복결제 년”,
"PCD_PAY_MONTH" => “월 중복결제 월”,
"PCD_PAY_GOODS" => “상품명”,
"PCD_PAY_TOTAL" => “상품금액”,
"PCD_REGULER_FLAG" => “월 중복결제 방지 사용여부”,
"PCD_REFUND_TOTAL" => “환불금액”,
"PCD_REFUND_TIME" => “환불시간”,
"PCD_PAYCANCEL_FLAG" => 'Y'
}
`,
            code_2_1: `
{
"PCD_CST_ID" : “가맹점 ID”,
"PCD_PAY_WORK" : "PUSERDEL",
"PCD_PAY_RST" : "success",
"PCD_PAY_MSG" : "2008 : 고객요청으로 자동이체 해지되었음(업체해지)",
"PCD_PAY_TYPE" : “card”,
"PCD_PAYER_ID" : “계좌(카드) 등록시 리턴받은 빌링키”,
"PCD_PAYER_NAME" : “이름”,
"PCD_PAYER_HP" : “결제고객 핸드폰번호”
}	
`,
        };
    },
};
</script>
