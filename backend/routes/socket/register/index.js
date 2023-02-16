let appRoot = require("app-root-path");
let path = appRoot.path;
let CRT_ERROR_CODE = require(`${path}/error_code`);

module.exports = function(socket) {
    socket.on("/socket/register", async (data, callback) => {
        let user_dict = require(`${path}/app`)["user_dict"];
        let io = require(`${path}/bin/www`)["io"];
        let error = new Object();
        if(!data.user.socketId) {
            callback({
                success: 0,
                message: CRT_ERROR_CODE[0],
            });
            return;
        }

        if(!data.phoneNumber) {
            error["phoneNumber"] = "필수입력 항목입니다.";
            callback({
                success: 0,
                error,
            });
            return;
        }

        if(!user_dict[data.phoneNumber]) {
            error["phoneNumber"] = "현재 접속 중이지 않거나, \n존재하지 않는 번호입니다.";
            callback({
                success: 0,
                error,
            });
            return;
        }
    
        if(user_dict[data.user.phoneNumber]) {
            let socketId = user_dict[data.phoneNumber];
            io.to(socketId).emit("/client/register", data.user);
        }

        callback({
            success: 1,
        });
    });
};