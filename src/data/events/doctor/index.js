'use strict';
const utils = require('../../utils');
const config = require('../../../../database/config');
const sql = require('mssql');

const getMedicoEspecialidad = async(sucursal,codigo) => {
    console.log(sucursal)
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('doctor');
        const event = await pool.request()
                            .input('sucursal', sql.NVarChar, sucursal)
                            .input('codigoEspecialidad', sql.Int, codigo)
                            .query(sqlQueries.eventGetDoctor);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getMedicoEspecialidad
}