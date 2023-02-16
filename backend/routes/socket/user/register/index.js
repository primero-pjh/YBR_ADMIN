let appRoot = require("app-root-path");
let path = appRoot.path;
let CRT_ERROR_CODE = require(`${path}/error_code`);

module.exports = function(socket) {
    socket.on("/socket/user/register", async (data, callback) => {
        let user_dict = require(`${path}/app`)["user_dict"];
        let io = require(`${path}/bin/www`)["io"];

        /* 관리자면 admin room에 입장 */
        if(data.user.isAdmin) {
            socket.join("admin");
        }

        if(!data.user.socketId) {
            callback({
                success: 0,
                code: "SOCKET",
                message: CRT_ERROR_CODE["SOCKET"],
            });
            return;
        }

        if(data.user.isAdmin == 0 && !data.user.phoneNumber) {
            callback({
                success: 0,
                code: "LOGIN_ERROR",
                message: CRT_ERROR_CODE["LOGIN_ERROR"],
            });
            return;
        } 

        /* 관리자에게 유저 정보 전달 */
        io.to("admin").emit(`/client/admin/connect/user`, {
            phoneNumber: data.user.phoneNumber,
            socketId: data.user.socketId,
        });
        if(data.user.phoneNumber && data.user.socketId) {
            user_dict[data.user.phoneNumber] = {
                socketId: data.user.socketId,
                userName: data.user.userName,
            };
        }

        /* 만약 커플이 로그인 되어 있으면 정보 줘야 함 */
        if(user_dict.hasOwnProperty(data.user.spousePhoneNumber) === true) {
            let key = user_dict[data.user.spousePhoneNumber].socketId;
            io.to(key).emit(`/client/couple/login`, {
                socketId: socket.id,
            });
        }
        callback({
            success: 1,
        });
    });
};