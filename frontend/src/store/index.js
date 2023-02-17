import { createStore } from "vuex";
import { showFailToast } from 'vant';

// state, getters, mutations, actions, modules
const store = createStore({
    state : {
        socket: null,
        token: null,

        user: {
            UID: '',
            userId: '',
            userName: '',
            phoneNumber: '',
            image: '',
            socketId: '',
            isAdmin: '',
            spousePhoneNumber: '',
        },
        /* useful function */
        getCookie: function (name) {
            let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
            return value? value[2] : null;
        },
        setCookie: function (name, value, exp) {
            let date = new Date();
            date.setTime(date.getTime() + exp*24*60*60*1000);
            document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
        },
        setError: function(obj, err) {
            for(let k in err) {
                if(Object.prototype.hasOwnProperty.call(obj, k)) { obj[k] = err[k]; }
            }
        },
        axiosError: function(data) {
            console.log("axiosError");
            /* socket id가 지정이 되지 않았을 때 */
            if(data.code == "SOCKET") {
                showFailToast({
                    message: data.message,
                    wordBreak: 'break-all',
                });
                window.location.reload();
            }
            if(data.code == "LOGIN_ERROR") {
                showFailToast({
                    message: data.message,
                    wordBreak: 'break-all',
                });
                window.location.reload();
            }
        },
        tempObj: function(obj) {
            return JSON.parse(JSON.stringify(obj));
        },
    },
    getters : {
        getSocket(state) { return state.socket; },
        getUser(state) { return state.user; },
    },
    mutations : {
        setSocket(state, socket) {
            state.socket = socket;
        },
        setToken(state, token) {
            state.token = token;
        },
        /* user function */
        setUser(state, user) {
            if(!user) {
                state.user.UID = "";
                state.user.userId = "";
                state.user.userName = "";
                state.user.image = "";
                state.user.phoneNumber = "";
                state.user.spousePhoneNumber = "";
                state.user.isAdmin = "";
            } else {
                state.user.UID = user.UID;
                state.user.userId = user.userId;
                state.user.userName = user.userName;
                state.user.image = user.image;
                state.user.phoneNumber = user.phoneNumber;
                state.user.spousePhoneNumber = user.spousePhoneNumber;
                state.user.isAdmin = user.isAdmin;
            }
        },
        setSocketId(state, id) {
            state.user.socketId = id;
        },

    },
});

export default store;