let appRoot = require("app-root-path");
let path = appRoot.path;
let CRT_ERROR_CODE = require(`${path}/error_code`);
let knex = require(`${path}/db`);

module.exports = function(socket) {
    socket.on("/socket/send/message", async (data, callback) => {
        let user_dict = require(`${path}/app`)["user_dict"];
        let io = require(`${path}/bin/www`)["io"];

        if(user_dict.hasOwnProperty(data.user.phoneNumber) == false) {
            io.to(socket.id).emit(`/error`, {
                success: 0,
                code: "LOGIN_ERROR",
                message: CRT_ERROR_CODE["LOGIN_ERROR"],
            });
            return;
        }
        /* 만약 커플이 로그인 되어 있으면 정보 줘야 함 */
        if(!data.user.spousePhoneNumber) { 
            io.to(socket.id).emit(`/error`, {
                success: 0,
                code: "LOGIN_ERROR",
                message: CRT_ERROR_CODE["LOGIN_ERROR"],
            });
            return;
        }
        if(!data.user.phoneNumber) { 
            io.to(socket.id).emit(`/error`, {
                success: 0,
                code: "LOGIN_ERROR",
                message: CRT_ERROR_CODE["LOGIN_ERROR"],
            });
            return;
        }
        if(user_dict.hasOwnProperty(data.user.spousePhoneNumber)) {
            io.to(user_dict[data.user.spousePhoneNumber].socketId).emit(`/client/receive/message`, {
                message: data.message,
                date: new Date(), 
            });
        }
        if(user_dict.hasOwnProperty(data.user.phoneNumber)) {
            io.to(user_dict[data.user.phoneNumber].socketId).emit(`/client/receive/message`, {
                message: data.message,
                date: new Date(), 
            });
        }
        return callback({
            success: 1,
        });
    });
};