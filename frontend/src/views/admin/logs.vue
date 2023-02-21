<template>
    <div id="adminRoomsVue" style="height: 100%;">
        <div style="display: flex; flex-direction: column; height: 100%; background-color: #eee;">
            <van-list
                v-model:loading="loading"
                :finished="finished"
                finished-text="Finished"
                @load="onLoad" >
                <van-cell v-for="(item, idx) in log_list" :key="idx" :title="item.event">
                    <div>{{item.dateAdded.substr(0,10)}}</div>
                </van-cell>
            </van-list>
        </div>
    </div>
</template>

<script>
import { showFailToast, showSuccessToast } from 'vant';
export default {
    name: 'adminRoomsVue',
    data() {
        return {
            loading: true,
            finished: true,
            log_list: [],
        }
    },
    methods: {
        onLoad: function() {
            let vm = this;
        },
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
            vm.socket.emit(`/socket/admin/logs`, {

            }, (data, err) => {
                if(data.success) {
                    let row = data.log_list;
                    vm.log_list = row;
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
        vm.load_log_list();
    },
}
</script>