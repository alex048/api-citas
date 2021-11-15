'use strict';
const utils = require('../../utils');
const config = require('../../../../database/config');
const querys = require('./query');
const sql = require('mssql');

const cryptoPassword = async(password) => {
    try {
        let pool = await sql.connect(config.sql);
      //  const sqlQueries = await utils.loadSqlQueries('password_crypto');
        const event = await pool.request()
                            .input('password', sql.NVarChar, password)
                            .query(querys.eventCifrarclave);
        return event.recordset[0];
    } catch (error) {
        return error.message;   
    }
}

const decryptPassword = async(username,password) => {
    //console.log('password user',username, password);
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('password_crypto');
        const event = await pool.request()
                            .input('usuario', sql.NVarChar, username)
                            .input('password', sql.NVarChar, password)
                            .query(querys.eventDescifrarclaveWeb);
                            // console.log('password user',event);
        return event.recordset[0];
    } catch (error) {
        return error.message;
    }
}
const updatePassword = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
       // const sqlQueries = await utils.loadSqlQueries('password_crypto');
        const event = await pool.request()
                            .input('password', sql.NVarChar, data.password)
                            .input('usuario', sql.NVarChar, data.username)
                            .query(querys.updatePassword);
                            console.log(querys.updatePassword);
        return event;
    } catch (error) {
        return error.message;
    }
}
const getUpdatePersona = async(usuario) => {
    try {
        let pool = await sql.connect(config.sql);
       // const sqlQueries = await utils.loadSqlQueries('password_crypto');
        const event = await pool.request()
                            .input('username', sql.NVarChar, usuario)
                            .query(querys.eventGetPerosona);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
const updateChangePassword = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
      //  const sqlQueries = await utils.loadSqlQueries('password_crypto');
        const event = await pool.request()
                            .input('isChangePassword', sql.NVarChar, data.isChangePassword)
                            .input('usuario', sql.NVarChar, data.username)
                            .query(querys.eventUpdataChangePassword);
        return event;
    } catch (error) {
        return error.message;
    }
}
module.exports = {
    cryptoPassword,
    decryptPassword,
    updatePassword,
    getUpdatePersona,
    updateChangePassword
}