const Sequelize = require("sequelize");


module.exports = function (sequelize) {
    return sequelize.define("users", {
        userId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        timestamp: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        order: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: {
            field: 'created_at',
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            field: 'updated_at',
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    }, {
        timestamps: false
    });
}
