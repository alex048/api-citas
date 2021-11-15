'use strict';
// const utils = require('../../utils');
const config = require('../../../../database/config');
const query = require('./query');
const sql = require('mssql');

const getSucursal = async () => {
    try {
        let pool = await sql.connect(config.sql);
        // const sqlQueries = await utils.loadSqlQueries('branch_office');
        const eventsList = await pool.request().query(query.getSucursal);
        console.log(query.getSucursal)
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getSucursal
}