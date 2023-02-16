<template>
    <div id="adminLayoutVue" style="height: 100%;" ref="adminLayoutVue">
        <div style="display: flex; flex-direction: column; height: 100%;">
            <div v-if="!unShowPage.hasOwnProperty($route.name)" style="border-bottom: 1px solid #aaa;">
                <van-nav-bar title="관리자">
                    <template #left>
                        <van-icon name="wap-nav" size="24" @click="showLeft=!showLeft" />
                    </template>
                </van-nav-bar>
            </div>
            <div style="height: 100%;" :style="{height: (height-46)+'px'}">
                <slot name="body">

                </slot>
            </div>
        </div>
        <van-popup v-model:show="showLeft"
            position="left" :style="{ width: '50%', height: '100%' }">
            <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
                <div>
                    <div style="padding: 20px;">
                        <div>
                            <van-image src="/images/doge_v3.png" style="width: 50px; height: 50px;" />
                        </div>
                        <div >
                            <span style="font-size: 14px;">{{ $store.state.user.userName }}님 안녕하세요.</span>
                        </div>
                    </div>
                    <van-divider dashed :style="{ borderColor: '#aaa', padding: '0px',  margin: '0px'}" >
                        Quick Menu
                    </van-divider>
                    <div v-for="(row, idx) in url_list" :key="idx">
                        <div @click="onChange(row)">
                            <template v-if="row.isActive">
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px;">
                                    <div>
                                        {{row.label}}
                                    </div>
                                    <div>
                                        <van-icon name="success" />
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                                <div style="padding: 10px;">
                                    {{row.label}}
                                </div>
                            </template>
                            <van-divider :style="{ borderColor: '#aaa', padding: '0px',  margin: '0px'}" />
                        </div>
                    </div>
                </div>
                <div>
                    <van-button @click="onLogout" style="width: 100%;">
                        로그아웃
                    </van-button>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
export default {
    name: 'adminLayoutVue',
    data() {
        let parent = this;
        return {
            height: 0,
            isShow: true,
            showLeft: false, 
            unShowPage: {
                Login: true,
                Error: true,
                Waiting: true,
            },
            url_list: [
                { icon: '', label: 'Clients', url: '/admin/clients', name: 'adminClients', isActive: false },
                { icon: '', label: 'Rooms', url: '/admin/rooms', name: 'adminRooms', isActive: false },
                { icon: '', label: 'Logs', url: '/admin/logs', name: 'adminLogs', isActive: false },
                { icon: '', label: 'Statistics', url: '/admin/statistics', name: 'adminStatistics', isActive: false },
                // { icon: 'user-o', label: 'Dashboard', url: '/admin/dashboard', name: 'AdminDashboard', isActive: false },
            ],
        }
    },
    components: {
    },
    methods: {
        onChange: function(row) {
            let vm = this;
            vm.url_list.map((x) => {
                x.isActive = false;
            });
            vm.showLeft = false;
            row.isActive = true;
            vm.$router.push(row.url);
        },

        onLogout: function() {
            let vm = this;
            vm.$store.commit("setUser", null);
            vm.$store.commit("setCouple", null);
            vm.$store.commit("setToken", "");
            vm.$store.state.setCookie("token", "");
            vm.$router.push("/login");
        },
    },
    mounted: function() {
        let vm = this;
        
        vm.$router.afterEach((to, from) => {
            let routeName = to.name;
            vm.url_list.map((x) => {
                x.isActive = false;
            });
            let idx = vm.url_list.findIndex(x=>x.name == routeName);
            if(idx >= 0) {
                vm.url_list[idx].isActive = true;
            }
        });
    },
    created: function() {
        let vm = this;
        vm.height = window.screen.height;
    }
  }
</script>