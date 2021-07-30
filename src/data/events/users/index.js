'use strict';
const utils = require('../../utils');
const config = require('../../../../database/config');
const sql = require('mssql');
const moment = require('moment');

const login = async(username) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const event = await pool.request()
                            .input('username', sql.NVarChar, username)
                            .query(sqlQueries.eventFindOne);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
};

const getValidateUser = async(documento) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const event = await pool.request()
                            .input('documento', sql.VarChar, documento)
                            .query(sqlQueries.eventValidateUser);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
};

const getCorrelativoIDPersona = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const eventsList = await pool.request().query(sqlQueries.eventCorrelativo);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
};
const getByDocumentPerson = async(document) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const event = await pool.request()
                            .input('documento', sql.NVarChar(20), document)
                            .query(sqlQueries.eventGetPersona);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
};

const createUser = async (data) => {
    var date = new Date()
    var fecha_registro= moment(date).format('YYYY-MM-DD HH:mm:ss')
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const insertEvent = await pool.request()
                            .input('username', sql.NVarChar(20), data.username)
                            .input('names', sql.NVarChar(100), data.names)
                            .input('password', sql.NVarChar(200), data.password)
                            .input('sqllogin', sql.NVarChar(20), data.sqllogin)
                            .input('state', sql.NChar(1), data.state)
                            .input('registerUser', sql.NVarChar(25), data.registerUser)
                            .input('person', sql.Int, data.person)
                            .input('FechaRegistro', sql.DateTime, fecha_registro)
                            .query(sqlQueries.eventRegisterUser);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
};

const createPersona = async (data) => {
    // var date = new Date()
   // var fecha_registro= moment(date).format('YYYY-MM-DD HH:mm:ss')
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const insertEvent = await pool.request()
                            .input('idPersona', sql.Int, data.idPersona)
                            .input('Origen', sql.NChar(4), data.Origen)
                            .input('ApellidoPaterno', sql.NVarChar(50), data.ApellidoPaterno)
                            .input('ApellidoMaterno', sql.NVarChar(50), data.ApellidoMaterno)
                            .input('Nombres', sql.NVarChar(50), data.Nombres)
                            .input('NombreCompleto', sql.NVarChar(150), data.NombreCompleto)
                            .input('Busqueda', sql.NVarChar(150), data.Busqueda)
                            .input('TipoDocumento', sql.NChar(1), data.TipoDocumento)
                            .input('Documento', sql.NChar(20), data.Documento)
                            .input('TipoPersona', sql.NChar(1), data.TipoPersona)
                            .input('FechaNacimiento', sql.DateTime, data.FechaNacimiento)
                            .input('Nacionalidad', sql.NChar(20), data.Nacionalidad)
                            .input('Direccion', sql.NVarChar(255), data.Direccion)
                            .input('CodigoPostal', sql.NChar(3), data.CodigoPostal)
                            .input('Departamento', sql.NChar(3), data.Departamento)
                            .input('Telefono', sql.NVarChar(30), data.Telefono)
                            .input('CorreoElectronico', sql.NVarChar(150), data.CorreoElectronico)
                            .input('Provincia', sql.NChar(3), data.Provincia)
                            .input('Estado', sql.NChar(1), data.Estado)
                            .input('UltimoUsuario', sql.NVarChar(25), data.UltimoUsuario)
                            .input('UltimaFechaModif', sql.DateTime, data.UltimaFechaModif)
                            .input('Celular', sql.NVarChar(15), data.Celular)
                            .input('Pais', sql.NChar(4), data.Pais)
                            .input('IndicadorLiquidacion', sql.Int, data.IndicadorLiquidacion)
                            .input('IndicadorRetencion', sql.Int, data.IndicadorRetencion)
                            .input('IndicadorSinCorreo', sql.Int, data.IndicadorSinCorreo)
                            .input('IndicadorVinculada', sql.Int, data.IndicadorVinculada)
                            .input('DocumentoIdentidad', sql.NChar(20), data.DocumentoIdentidad)
                            .query(sqlQueries.eventRegisterMPerson);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
};

module.exports = {
    getValidateUser,
    login,
    createUser,
    createPersona,
    getCorrelativoIDPersona,
    getByDocumentPerson
}