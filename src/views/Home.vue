<template>
    <div class="px-6 py-4">
        <!-- <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs> -->

        <h1 class="mt-2">
            Payment Must Be Simple!<br />
            We are Payple!
        </h1>
        <p class="mt-4 mb-12">
            페이플에서 제공하는 연동가이드 입니다. <br />
            도입하고자 하는 결제방식을 선택하시면 안내페이지로 접속됩니다.
        </p>

        <v-row class="mb-8">
            <v-col col="12" sm="6">
                <v-card raised col="12" sm="6">
                    <v-card-text>
                        <p class="title text--primary">
                            카드결제
                        </p>

                        <v-row class="mb-8">
                            <v-col col="12" sm="6" class="text-center">
                                <v-btn x-large block color="blue lighten-1" dark to="/card/pay/simple-pin">간편결제</v-btn>
                            </v-col>
                            <v-col col="12" sm="6" class="text-center">
                                <v-btn x-large block color="blue lighten-1" dark to="/card/pay/regular">정기결제</v-btn>
                            </v-col>
                            <v-col col="12" sm="6" class="text-center">
                                <v-btn x-large block color="blue lighten-1" dark to="/card/pay/app-card">앱카드결제</v-btn>
                            </v-col>
                            <v-col col="12" sm="6" class="text-center">
                                <v-btn x-large block color="blue lighten-1" dark to="/card/pay/link">링크결제</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col col="12" sm="6">
                <v-card raised col="12" sm="6">
                    <v-card-text>
                        <p class="title text--primary">
                            계좌이체
                        </p>
                        <v-row class="mb-8">
                            <v-col col="12" sm="6" class="text-center">
                                <v-btn x-large block color="blue lighten-1" dark to="/bank/pay/simple-pin">간편결제</v-btn>
                            </v-col>
                            <v-col col="12" sm="6" class="text-center">
                                <v-btn x-large block color="blue lighten-1" dark to="/bank/pay/regular">정기결제</v-btn>
                            </v-col>
                            <v-col col="12" sm="6" class="text-center">
                                <v-btn x-large block color="blue lighten-1" dark to="/bank/pay/link">링크결제</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            toolTipShow: false,
            subNavi: [
                {
                    text: "홈",
                    disabled: true,
                    to: "/",
                },
            ],
        };
    },
};
</script>
