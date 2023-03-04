<template>
    <div id="loginVue" style="background-color: #eff2f5">
        <van-form @submit="onLogin">
            <van-cell-group inset>
                <van-field v-model="appUser.userId" required 
                    name="Username" :label="$t('userId')"
                    placeholder="Username" :rules="[{ required: true, message: $t('RequireduserId') }]"
                    :error="formError.userId.length > 0" :error-message="formError.userId"
                />
                <van-field v-model="appUser.password" required
                    type="password" name="Password" :label="$t('password')"
                    placeholder="Password" :rules="[{ required: true, message: $t('Requiredpassword') }]"
                    :error="formError.password.length > 0" :error-message="formError.password"
                />
                <van-cell center :title="$t('RememberMe')">
                    <template #right-icon>
                        <van-switch v-model="appUser.rememberMe" />
                    </template>
                </van-cell>
            </van-cell-group>
            <div style="margin: 16px;">
                <van-space direction="vertical" fill>
                    <van-button block 
                        type="primary" native-type="submit"
                        :disabled="!appUser.userId || !appUser.password"
                        :loading="isLoading"
                        :loading-text="$t('Loading')" >
                        {{$t('Login')}}
                    </van-button>
                </van-space>
            </div>
            <van-row justify="space-between" style="padding: 0px 16px;">
                <van-col span="12">
                    <p style="text-decoration: underline;" color="primary">
                        {{$t('ForgetId')}}
                    </p>
                </van-col>
                <van-col span="12" style="text-align: right;">
                    <p style="text-decoration: underline;">
                        {{$t('Signup')}}
                    </p>
                </van-col>
            </van-row>
        </van-form>
        <van-overlay :show="showSplash" @click="show=false">
            <div @click.stop 
                style="background-color: white; width: 100%; height: 100%; display: flex;
                        align-items: center;
                        justify-content: center; ">
                <div class="block">
                    <van-image width="100" height="100"
                        src="/images/doge_v3.png" />
                    <br/>
                </div>
            </div>
        </van-overlay>
    </div>
</template>

<script>
import axios from 'axios';
import { io } from "socket.io-client";
import { showFailToast, showConfirmDialog } from 'vant';
import { showNotify } from 'vant';

export default {
    name: 'loginVue',
    components: {
    },
    data() {
        return {
            showSplash: false,

            appUser: {
                userId: '',
                password: '',
                rememberMe: true,
                couple: '',
                phoneNumber: '',
            },
            formError: {
                userId: '',
                password: '',
            },
            isLoading: false,
        }
    },
    methods: {
        onLogin: function() {
            let vm = this;
            vm.isLoading = true;
            axios.get(`${process.env.VUE_APP_HOST}/api/admin/login`, {
                params: {
                    userId: vm.appUser.userId,
                    password: vm.appUser.password,
                    rememberMe: (vm.appUser.rememberMe) ? 1 : 0,
                }
            }).then((res) => {
                let data = res.data;
                if(data.success) {
                    vm.$store.commit("setUser", data.user);
                    vm.$store.commit("setToken", data.token);
                    vm.setSocket(data.token, function() {
                        vm.$router.push('/admin/clients');
                    });
                } else {
                    vm.$store.state.axiosError(data);
                }
                vm.isLoading = false;
            });
        },
        kakaoLogin: function() {
        
        },
        setSocket: function(token, callback) {
            let vm = this;
            let socket = io(`${process.env.VUE_APP_HOST}`, {
                auth: { 
                    token: `Bearer ${token}`,
                    UID: vm.$store.state.user.UID,
                },
            });
            socket.on("connection", (socket_id) => {
                vm.$store.commit("setSocketId", socket_id);
                socket.emit("/socket/admin/register", {
                    user: vm.$store.state.user,
                }, function(data, err) {
                    if(data.success) {
                        if(callback) { callback(); }
                    } else {
                        vm.$store.state.axiosError(data);
                    }
                });
            });
        
            vm.$store.commit("setSocket", socket);
        },
    },
    mounted: function() {
        let vm = this;
    },
    created: function() {
        let vm = this;
    },
}
</script>
