'use strict';
const utils = require('../../utils');
const config = require('../../../../database/config');
const sql = require('mssql');
const getPrecioCita =  async(data) => {
    try {    
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('precio_cita');
        const eventsList = await pool.request()
                            .input('sede', sql.NVarChar, data.sede)
                            .input('tipoPaciente', sql.Int, data.tipoPaciente)
                            .input('idTipoPrograma', sql.Int, data.idTipoPrograma)
                            .query(sqlQueries.eventPricioCitas);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getPrecioCita

}