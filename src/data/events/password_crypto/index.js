'use strict';
const utils = require('../../utils');
const config = require('../../../../database/config');
const sql = require('mssql');

const cryptoPassword = async(password) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('password_crypto');
        const event = await pool.request()
                            .input('password', sql.NVarChar, password)
                            .query(sqlQueries.eventCifrarclave);
        return event.recordset[0];
    } catch (error) {
        return error.message;
    }
}

const decryptPassword = async(usuario,password) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('password_crypto');
        const event = await pool.request()
                            .input('usuario', sql.NVarChar, usuario)
                            .input('password', sql.NVarChar, password)
                            .query(sqlQueries.eventDescifrarclaveWeb);
        return event.recordset[0];
    } catch (error) {
        return error.message;
    }
}
const updatePassword = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('password_crypto');
        const event = await pool.request()
                            .input('password', sql.NVarChar, data.password)
                            .input('usuario', sql.NVarChar, data.usuario)
                            .query(sqlQueries.updatePassword);
        return event;
    } catch (error) {
        return error.message;
    }
}
const getUpdatePersona = async(usuario) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('password_crypto');
        const event = await pool.request()
                            .input('username', sql.NVarChar, usuario)
                            .query(sqlQueries.eventGetPerosona);
        console.log(event);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
module.exports = {
    cryptoPassword,
    decryptPassword,
    updatePassword,
    getUpdatePersona
}