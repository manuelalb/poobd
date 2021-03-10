let {Sequelize, DataTypes}  = require("sequelize");
let db = require("../db");

const Pessoa = db.define("Pessoa",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sobrenome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        endereco: DataTypes.STRING
    }
)

module.exports = Pessoa;