let Sequelize = require("sequelize");

let db = new Sequelize(
    "postgres://bfjpcnqhotffwq:7abc6eb346d1fe7d2988f5ba4b3a264da00bda04b8cda68de1a42a2788388419@ec2-54-90-13-87.compute-1.amazonaws.com:5432/d80ob06she6n5o",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false,
            }
        }
    });

module.exports = db;