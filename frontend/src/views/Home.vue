<template>
    <div id="HomeVue" style="height: 100%;">
        <!-- <v-calendar /> -->
        <v-date-picker v-model="date" style="width: 100%;" />
    </div>
</template>

<script>
export default {
    name: 'HomeVue',
    data() {
        return {
            date: '2023-02-01',
        }
    },
    methods: {
        
    },
    components: {
    },
    mounted: function() {
        let vm = this;
        if(!vm.$store.state.user.socketId) {
            vm.$router.push('/login');
        }
    },
}
</script>