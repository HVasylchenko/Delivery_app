const Sequelize = require("sequelize");
// new Sequelize("имя базы данных", "имя пользрвателя", "пароль",
const sequelize =  new Sequelize("mfdoors_usersdelivery", "mfdoors_users", "delivery1234", {
    dialect: "mysql",
    host: "mfdoors.mysql.tools"
});

const Users = require('./users')(sequelize);

module.exports = {
    sequelize : sequelize,
    users : Users
}