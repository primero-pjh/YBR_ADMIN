<template>
    <div id="waitingVue" style="background-color: #eff2f5; height: 100%; position: relative;">
        <van-form @submit="confirm">
            <van-cell-group inset>
                <van-field
                    v-model="phoneNumber" 
                    required
                    name="phoneNumber"
                    :label="$t('phoneNumber')"
                    :placeholder="$t('phoneNumber')"
                    :rules="[{ required: true, message: $t('RequiredPhoneNumber') }]"
                    :error="formError.phoneNumber.length > 0"
                    :error-message="formError.phoneNumber"
                />
                <van-button style="width: 100%;"  @click="confirm" 
                    :loading="isLoading" loading-text="상대방에게 요청을 보냈습니다..">
                    {{$t('Confirm')}}
                </van-button>
                <p>요청이 오기를 기다리거나, 요청을 하세요.</p>
            </van-cell-group>
        </van-form>
    </div>
</template>

<script>
// import axios from 'axios';
export default {
    name: 'waitingVue',
    data() {
        return {
            phoneNumber: '',
            isLoading: false,
            formError: {
                phoneNumber: '',
            },
        }
    },
    methods: {
        confirm: function() {
            let vm = this;
            vm.isLoading = true;
            let socket = vm.$store.state.socket;
            let form_data = new Object();
            form_data["socketId"] = vm.$store.state.user.socketId;
            form_data["user"] = vm.$store.state.user;
            form_data["phoneNumber"] = vm.phoneNumber;
            socket.emit("/socket/register", form_data, function(data, err) {
                console.log("data:", data);
                if(data.success) {
                // console.log("data:", data);
                } else {
                    vm.$store.state.setError(vm.formError, data.error);
                    vm.isLoading = false;
                }
            });
        },
    },
    mounted: function() {
        let vm = this;
    }
}
</script>
