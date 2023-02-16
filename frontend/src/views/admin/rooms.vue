<template>
    <div id="adminRoomsVue" style="height: 100%;">
        <div style="display: flex; flex-direction: column; height: 100%; background-color: #eee;">
            <template v-for="(room, idx) in room_list" :key="idx">
                <div class="bg-white pd10"
                    style="display: flex; align-items: center; height: 60px;
                        justify-content: space-between;" >
                    <div>
                        <span class="ft-md">{{ room.namespace }}</span>
                    </div>
                    <div>
                        <span class="ft-sm">접속자: {{ room.list.length }}</span>
                    </div>
                    <div>
                        <van-button plain type="default" size="small">상세</van-button>
                    </div>
                </div>
                <van-divider :style="{ borderColor: '#aaa', padding: '0px',  margin: '0px'}" />
            </template>
        </div>
    </div>
</template>

<script>
import { showFailToast, showSuccessToast } from 'vant';
export default {
    name: 'adminRoomsVue',
    data() {
        return {
            room_list: [],
        }
    },
    methods: {
        shutdown: function(key) {
            let vm = this;
            vm.socket.emit(`/socket/admin/shutdown`, {
                key,
            }, (data, err) => {
                if(data.success) {
                    showSuccessToast({
                        message: data.message,
                        wordBreak: 'break-all',
                    });
                } else {
                    showFailToast({
                        message: data.message,
                        wordBreak: 'break-all',
                    });
                }
            });
        },
    },
    mounted: function() {
        let vm = this;
        if(!vm.$store.state.user.isAdmin) {
            vm.$router.push('/login');
        }
        vm.socket = vm.$store.state.socket;
        vm.socket.emit(`/socket/admin/clients/get_all`, {}, (data, err) => {
            vm.user_dict = data.user_dict;
        });

        vm.socket.emit(`/socket/admin/rooms/get_all`, {}, (data, err) => {
            let vm = this;
            if(data.success) {
                vm.room_list = data.room_list;
            }
        });

        vm.socket.on(`/client/admin/connect/user`, (data) => {
            vm.user_dict[data.phoneNumber] = {
                socketId: data.socketId
            };
        });

        vm.socket.on(`/client/admin/disconnect/user`, (data) => {
            if(Object.prototype.hasOwnProperty.call(vm.user_dict, data.phoneNumber) == true) {
                delete vm.user_dict[data.phoneNumber];
            }
        });
    },
}
</script>