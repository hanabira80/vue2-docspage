<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2 mb-8">링크결제</h1>

        <article class="mb-12">
            <!-- <h2>[내용 제목]</h2>
            <v-divider class="my-6"></v-divider> -->

            링크결제의 링크생성은 별도 UI 없이 REST Request 방식으로 진행됩니다.
        </article>

        <article class="mb-12">
            <h2>링크결제 요청(REQUEST)</h2>
            <v-divider class="my-6"></v-divider>
            <vue-code-highlight language="java">
                {{ code_1 }}
            </vue-code-highlight>
        </article>

        <article class="mb-12">
            <h2>요청변수</h2>
            <v-divider class="my-6"></v-divider>
            <v-card>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <td>
                                    요청변수
                                </td>
                                <td>
                                    타입
                                </td>
                                <td>
                                    길이
                                </td>
                                <td>
                                    필수
                                </td>
                                <td>
                                    값
                                </td>
                                <td>
                                    설명
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    PCD_CST_ID
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    8
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    가맹점 ID
                                </td>
                                <td>
                                    가맹점 인증 후 리턴 받은 cst_id Token
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_CUST_KEY
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    255
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    가맹점 식별을 위한 비밀키
                                </td>
                                <td>
                                    가맹점 인증 후 리턴 받은 custKey Token
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_AUTH_KEY
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    20
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    결제요청을 위한 Transaction 키
                                </td>
                                <td>
                                    가맹점 인증 후 리턴 받은 인증 Token
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_WORK
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    &nbsp;
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    LINKREG
                                </td>
                                <td>
                                    결제수단
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_TYPE
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    20
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    card
                                </td>
                                <td>
                                    결제종류
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_GOODS
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    2048
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    상품1
                                </td>
                                <td>
                                    상품명
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_TOTAL
                                </td>
                                <td>
                                    Number
                                </td>
                                <td>
                                    20
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    1000
                                </td>
                                <td>
                                    출금 요청금액(최소 100원)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_REGULER_FLAG
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    1
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    Y
                                </td>
                                <td>
                                    Y=정기결제/N=단건결제
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_YEAR
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    4
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    2019
                                </td>
                                <td>
                                    결제 구분 년도 (PCD_REGULER_FLAG: 'Y' 일 때 필수)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_MONTH
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    2
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    09
                                </td>
                                <td>
                                    결제 구분 월 (PCD_REGULER_FLAG: 'Y' 일 때 필수)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_TAXSAVE_FLAG
                                </td>
                                <td>
                                    String
                                </td>
                                <td>
                                    1
                                </td>
                                <td>
                                    O
                                </td>
                                <td>
                                    Y
                                </td>
                                <td>
                                    Y=발행/N=미발행
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card>
        </article>

        <article class="mb-12">
            <h2>링크결제 응답(RESPONSE)</h2>
            <v-divider class="my-6"></v-divider>
            <vue-code-highlight language="java">
                {{ code_2 }}
            </vue-code-highlight>
        </article>

        <article class="mb-12">
            <h2>응답변수</h2>
            <v-divider class="my-6"></v-divider>
            <v-card>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <td>
                                    응답변수
                                </td>
                                <td>
                                    값
                                </td>
                                <td>
                                    설명
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    PCD_LINK_RST
                                </td>
                                <td>
                                    success
                                </td>
                                <td>
                                    링크생성 요청 결과(success/error)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_LINK_MSG
                                </td>
                                <td>
                                    링크생성완료
                                </td>
                                <td>
                                    링크생성 요청 결과 메시지(링크생성완료/실패)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_TYPE
                                </td>
                                <td>
                                    card
                                </td>
                                <td>
                                    결제수단
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_GOODS
                                </td>
                                <td>
                                    상품1
                                </td>
                                <td>
                                    상품명
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_TOTAL
                                </td>
                                <td>
                                    1000
                                </td>
                                <td>
                                    결제금액
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_REGULER_FLAG
                                </td>
                                <td>
                                    Y
                                </td>
                                <td>
                                    정기결제 여부(Y/N)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_YEAR
                                </td>
                                <td>
                                    2019
                                </td>
                                <td>
                                    결제 구분 년도
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_PAY_MONTH
                                </td>
                                <td>
                                    09
                                </td>
                                <td>
                                    결제 구분 월
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PCD_TAXSAVE_RST
                                </td>
                                <td>
                                    Y
                                </td>
                                <td>
                                    현금영수증 발행 여부(Y/N)
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card>
        </article>
    </div>
</template>

<script>
import { component as VueCodeHighlight } from "vue-code-highlight";

export default {
    components: {
        VueCodeHighlight
    },
    data() {
        return {
            code_1: `
<!-- 가맹점 인증 -->
POST /php/auth.php HTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Cache-Control: no-cache
{
    "cst_id": "test",
    "custKey": "abcd1234567890",
    "PCD_PAY_WORK": "LINKREG"
}
 
<!-- 링크생성 요청  -->
POST PCD_PAY_URL HTTP/1.1
Host: PCD_PAY_HOST
Content-Type: application/json
Cache-Control: no-cache
{ 
    "PCD_CST_ID": 인코딩 된 "PCD_CST_ID": "UFVNNVZpZk4reWo5UFRualUwcGV4dz09"
    "PCD_CUST_KEY": 인코딩 된 "PCD_CUST_KEY": "T3JzRkp5L1FTcEFDa1FQdHo5Um1UZz09"
    "PCD_AUTH_KEY": "a688ccb3555c25cd722483f03e23065c3d0251701ad6da895eb2d830bc06e34d",
    "PCD_PAY_WORK": "LINKREG",
    "PCD_PAY_TYPE": "card",
    "PCD_PAY_GOODS": "상품1",
    "PCD_PAY_TOTAL": 1000,
    "PCD_REGULER_FLAG": "Y",
    "PCD_PAY_YEAR": 2019,
    "PCD_PAY_MONTH": 09,
    "PCD_TAXSAVE_FLAG": "Y"
}
`,
            code_2: `
{
    "PCD_LINK_RST" => "success|error",
    "PCD_LINK_MSG" => "링크생성완료|실패..",
    "PCD_PAY_TYPE" => "card",
    "PCD_PAY_GOODS" => "테스트상품",
    "PCD_PAY_TOTAL" => 150000,
    "PCD_REGULER_FLAG" => "Y",
    "PCD_PAY_YEAR" => 2018,
    "PCD_PAY_MONTH" => 11,
    "PCD_TAXSAVE_RST" => "Y"
}
`,
            subNavi: [
                {
                    text: "홈",
                    disabled: false,
                    to: "/"
                },
                {
                    text: "카드결제",
                    disabled: false,
                    to: "/card/outline"
                },
                {
                    text: "재결제",
                    disabled: false,
                    to: "/card/repeat"
                },
                {
                    text: "링크결제",
                    disabled: true,
                }
            ]
        };
    }
};
</script>
