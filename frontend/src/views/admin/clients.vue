<template>
    <div id="adminClientsVue" style="height: 100%;">
        <div style="display: flex; flex-direction: column; height: 100%; background-color: #eee;">
            <template v-if="Object.keys(user_dict).length == 0">
                <div>
                    <van-empty description="No user" />
                </div>
            </template>
            <template v-else>
                <van-search v-model="search_user" placeholder="유저를 검색하세요." 
                    @search="onSearch" @clear="onClear"
                />
                <template v-if="!isSearch">
                    <van-swipe-cell v-for="val, key in user_dict" :key="key">
                        <div class="bg-white pd20 flex" style="justify-content: space-between;">
                            <div style="display: flex; flex-direction: column;">
                                <div>
                                    {{ key }}
                                </div>
                                <div>
                                    <span class="ft12">{{ val.userName }}</span>
                                </div>
                            </div>
                            <div>
                                <span class="ft12">{{ val.socketId }}</span>
                            </div>
                        </div>
        
                        <template #right>
                            <van-button square type="danger" text="Disconnect" @click="shutdown(key)" style="height: 100%;" />
                        </template>
                    </van-swipe-cell>
                </template>
                <template v-else>
                    <van-swipe-cell v-for="val, key in filter_user_dict" :key="key">
                        <div class="bg-white pd20 flex" style="justify-content: space-between;">
                            <div style="display: flex; flex-direction: column;">
                                <div>
                                    {{ key }}
                                </div>
                                <div>
                                    <span class="ft12">{{ val.userName }}</span>
                                </div>
                            </div>
                            <div>
                                <span class="ft12">{{ val.socketId }}</span>
                            </div>
                        </div>
        
                        <template #right>
                            <van-button square type="danger" text="Disconnect" @click="shutdown(key)" style="height: 100%;" />
                        </template>
                    </van-swipe-cell>
                </template>
            </template>
        </div>
    </div>
</template>

<script>
import { showFailToast, showSuccessToast } from 'vant';
export default {
    name: 'adminClientsVue',
    data() {
        return {
            tab: "user",
            socket: null,
            isSearch: false,
            user_list: [],
            user_dict: {},
            filter_user_dict: new Object(),

            search_user: '',
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
        onSearch: function(filter) {
            let vm = this;
            if(!filter) {
                vm.isSearch = false;
                return;
            }
            let dict = vm.$store.state.tempObj(vm.user_dict);
            for(let key in dict) {
                if(key.includes(filter) == false && dict[key].userName.includes(filter) == false)  {
                    delete dict[key];
                }
            }
            vm.filter_user_dict = dict;
            vm.isSearch = true;
        },
        onClear: function(args) {
            let vm = this;
            vm.isSearch = false;
        },
    },
    mounted: function() {
        let vm = this;
        if(!vm.$store.state.user.isAdmin) {
            vm.$router.push('/login');
            return;
        }
        vm.socket = vm.$store.state.socket;  
        vm.socket.emit(`/socket/admin/clients/get_all`, {}, (data, err) => {
            vm.user_dict = data.user_dict;
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