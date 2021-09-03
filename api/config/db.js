const { Sequelize } = require("sequelize");

// Option 2: Passing parameters separately (other dialects)

const db = new Sequelize("my_omdb", null, null, {
  logging: false,
  host: "localhost",
  dialect: "postgres" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

module.exports = db;
