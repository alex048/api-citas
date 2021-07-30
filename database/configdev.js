'use strict';

const dotenv = require('dotenv');

dotenv.config();

const {DB_USER_SER, DB_PASS_SER, SQLSERVER_DB, DB_HOST_SER} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

module.exports = {
    sql: {
        server: DB_HOST_SER,
        database: SQLSERVER_DB,
        user: DB_USER_SER,
        password: DB_PASS_SER,
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true
        },
    },
};