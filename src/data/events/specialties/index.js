'use strict';
const utils = require('../../utils');
const config = require('../../../../database/config');
const sql = require('mssql');

const getSpecialties = async(sucursal) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('specialties');
        const event = await pool.request()
                            .input('sucursal', sql.NVarChar, sucursal)
                            .query(sqlQueries.eventGetSpecialties);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getSpecialties
}