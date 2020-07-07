<template>
    <div class="px-6 py-4">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mt-2">상황별 가맹점 인증 요청 방식</h1>
        <blockquote class="mb-12 blockquote body-1">
            케이스별로 가맹점 인증 요청에 사용하는 요청변수가 다르니,<br />
            아래 리스트에서 사용하시려는 가맹점 인증 요청변수를 확인하시길 바랍니다.
        </blockquote>

        <article class="mb-8">
            <h2 class="">
                간편결제(비밀번호, 일회성), 앱카드결제 가맹점 인증 요청
            </h2>
            <v-card class="temp_table ma-4">
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
                                cst_id
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
                                가맹점 ID
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                custKey
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
                                가맹점 Key
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <h3 class="title pl-4 mt-8">
                요청예시
            </h3>

            <v-card class="temp_code ma-4">
                <!-- <div class="overline pa-2">가맹점 인증요청 프로세스(REST API)</div> -->
                <v-btn raised fab small dark class="white--text" color="blue-grey">
                    <v-icon>mdi-github</v-icon>
                </v-btn>

                <v-btn color="error" >
                    <v-icon>mdi-github</v-icon>     
                </v-btn>
                <Prism language="javascript">
                    {{ code_1 }}
                </Prism>               
            </v-card>

            <v-card class="temp_code ma-4">
                <div class="overline pa-2">PHP 샘플코드</div>
                <Prism language="php">
                    {{ code_2 }}
                </Prism>
            </v-card>

            <v-card class="temp_code ma-4">
                <div class="overline pa-2">JAVA 샘플코드</div>
                <Prism language="javascript">
                    {{ code_3 }}
                </Prism>
            </v-card>

            <v-card class="temp_code ma-4">
                <div class="overline pa-2">Node 샘플코드</div>
                <Prism language="javascript">
                    {{ code_4 }}
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
                    text: "최초결제",
                    disabled: true,
                },
                {
                    text: "결제 창 호출",
                    disabled: true,
                },
            ],
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
            code_2: `
<?php
    $header_data = array(
        'Content-Type: application/json',
        'Cache-Control: no-cache',
        'referer: http://localhost:8080'
    );
    
    $data_string = '{
    "cst_id": "test",
    "custKey": "abcd1234567890"
    }';
    
    $ch = curl_init('https://testcpay.payple.kr/php/auth.php');
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSLVERSION, 4);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $header_data);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    
    $response = curl_exec ($ch);
    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    echo "status_code:".$status_code." ";
    curl_close ($ch);
    if($status_code == 200) {
        echo $response;
    } else {
        echo "Error 내용:".$response;
    }
?>
`,
            code_3: `
java
`,
            code_4: `
.env.json
{
    "CST_ID" : "test",
    "CUST_KEY" : "abcd1234567890",
    "PCD_HTTP_REFERER" : "http://localhost:3000",
    "URL" : "https://testcpay.payple.kr/php/auth.php"
}
 
app.js
/*
 * 가맹점인증 요청 REST
 */
app.post('/auth', (req, res) => {
 
    /* 
     * process.env.URL
     * TEST : https://testcpay.payple.kr/php/auth.php
     * REAL : https://cpay.payple.kr/php/auth.php 
     */
    let url = process.env.URL,
        params = {
            cst_id  : process.env.CST_ID || '',
            custKey : process.env.CUST_KEY || ''
        }
 
 
    post(url, JSON.stringify(params), {
            headers: {
                'content-type': 'application/json',
                'referer': process.env.PCD_HTTP_REFERER
            }
        })
        .then(r => res.json( {  ...r.data }))
        .catch(err => console.error(err))
})
`,
        };
    },
};
</script>
