'use strict';
const utils = require('../../utils');
const config = require('../../../../database/config');
const querys = require('./query');
const sql = require('mssql');

const getTypeDocument = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('type_document');
        const eventsList = await pool.request().query(querys.eventTypeDocument);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getTypeDocument
}