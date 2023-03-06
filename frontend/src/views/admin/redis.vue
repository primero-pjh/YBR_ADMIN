<template>
    <div id="adminRedisVue" style="height: 100%;">
        <div style="display: flex; flex-direction: column; height: 100%; background-color: #eee;">
            <template v-for="(key, idx) in redis" :key="idx">
                <div class="bg-white pd10"
                    style="display: flex; align-items: center; height: 60px;
                        justify-content: space-between;" >
                    <div>
                        <span class="ft-md">{{ key }}</span>
                    </div>
                    <div>
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
import axios from 'axios';
export default {
    name: 'adminRedisVue',
    components: { 
    },
    data() {
        return {
            socket: null,

            redis: [],
        }
    },
    methods: {
        load_redis: function() {
            let vm = this;
            axios.get(`${process.env.VUE_APP_HOST}/api/admin/redis`, {}).then((res) => {
                let data = res.data;
                if(data.success) {
                    let row = data.redis;
                    vm.redis = row;
                }
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