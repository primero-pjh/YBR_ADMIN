<template>
    <div id="adminRoomsVue" style="height: 100%;">
        <div style="display: flex; flex-direction: column; height: 100%; background-color: #eee;">
            <template v-for="(log, idx) in log_list" :key="idx">
                <div class="bg-white pd10"
                    style="display: flex; align-items: center; height: 60px;
                        justify-content: space-between;" >
                    <div>
                        <span class="ft-md">{{ log.title }}</span>
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
            log_list: [],
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
        load_log_list: function() {
            let vm = this;
        },  
    },
    mounted: function() {
        let vm = this;
        if(!vm.$store.state.user.isAdmin) {
            vm.$router.push('/login');
        }
        vm.socket = vm.$store.state.socket;

        vm.load_log_list();
    },
}
</script>