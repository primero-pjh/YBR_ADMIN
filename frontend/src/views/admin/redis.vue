<template>
    <div id="adminRedisVue" style="height: 100%;">
        <div style="display: flex; flex-direction: column; height: 100%; background-color: #eee;">
            
        </div>
    </div>
</template>

<script>
import { showFailToast, showSuccessToast } from 'vant';
import axios from 'axios';
export default {
    name: 'adminRedisVue',
    components: { 
    },
    data() {
        return {
            socket: null,
        }
    },
    methods: {
        load_redis: function() {
            let vm = this;
            axios.get(`${process.env.VUE_APP_HOST}/api/admin/redis`, {}).then((res) => {
                let data = res.data;
                console.log("data:", data);
            });
            
            console.log("load_redis");
        },
    },
    mounted: function() {
        let vm = this;
        vm.socket = vm.$store.state.socket;
        vm.load_redis();
    }
}
</script>