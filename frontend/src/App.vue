<template>
    <div id="app" style="max-width: 500px;">
        <adminLayoutVue ref="adminLayoutVue">
            <template v-slot:body>
                <router-view></router-view>
            </template>
        </adminLayoutVue>
    </div>
</template>


<script>
    import adminLayoutVue from './components/AdminLayout.vue';

    export default {
        name: 'App',
        components: {
            adminLayoutVue,
        },
        data() {
            return {
                socket: null,
                isAdmin: false,
            }
        },
        mounted: function() {
            let vm = this;
            if(!vm.$store.state.user.socketId) {
                vm.$router.push('/login');
            }
        }
    }
</script>