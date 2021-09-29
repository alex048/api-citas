'use strict';
const utils = require('../../utils');
const config = require('../../../../database/config');
const sql = require('mssql');
const moment = require('moment');
const registerLogNiubiz = async (data) => {
    var date = new Date()
    var fecha_registro= moment(date).format('YYYY-MM-DD HH:mm:ss')
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('niubiz');
        const insertEvent = await pool.request()
                            .input('id_operaciones', sql.Char(36), data.idoperaciones)
                            .input('id_cita', sql.Int, data.idcita)
                            .input('status', sql.Text, data.status)
                            .input('cabecera', sql.Text, data.cabecera)
                            .input('fecha_creacion', sql.DateTime, fecha_registro)
                            .query(sqlQueries.eventNiubiz);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
};

module.exports = {
    registerLogNiubiz
}