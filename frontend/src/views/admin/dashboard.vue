<template>
    <div id="DashboardVue" style="height: 100%;">
        <div style="display: flex; flex-direction: column; height: 100%; background-color: #eee;">
        </div>
    </div>
</template>

<script>
import { showFailToast, showSuccessToast } from 'vant';

export default {
    name: 'DashboardVue',
    components: { 
    },
    data() {
        return {
            tab: "user",
            socket: null,
            user_list: [],
            user_dict: new Object(),

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
        vm.socket = vm.$store.state.socket;  
        vm.socket.emit(`/socket/admin/users/get_all`, {}, (data, err) => {
            let len = Object.keys(data.user_dict).length;
            vm.user_dict = data.user_dict;
        });

        vm.socket.on(`/client/admin/connect/user`, (data) => {
            vm.user_dict[data.phoneNumber] = {
                socketId: data.socketId,
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