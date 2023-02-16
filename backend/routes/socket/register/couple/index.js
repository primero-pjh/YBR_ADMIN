let appRoot = require("app-root-path");
let path = appRoot.path;
let CRT_ERROR_CODE = require(`${path}/error_code`);
let knex = require(`${path}/db`);
module.exports = function(socket) {
    socket.on("/socket/register/couple", async (data, callback) => {
        let user_dict = require(`${path}/app`)["user_dict"];
        let io = require(`${path}/bin/www`)["io"];
        let error = new Object();
        if(!data.isConfirm) {
            io.to(user_dict[data.otherPhone]).emit("/client/register/couple", {
                success: 0,
            });
            return callback({
                success: 1,
            });
        }
        if(!data.myPhone || !data.otherPhone) {
            return callback({
                success: 0,
                code: "LOGIN_ERROR",
                message: CRT_ERROR_CODE["LOGIN_ERROR"],
            });
        }

        await knex.table("appUsers").where("phoneNumber", data.myPhone).update({
            couple: data.otherPhone
        });
        await knex.table("appUsers").where("phoneNumber", data.otherPhone).update({
            couple: data.myPhone
        });

        io.to(user_dict[data.otherPhone]).emit("/client/register/couple", {
            success: 1,
        });

        return callback({
            success: 1,
        });
    });
};