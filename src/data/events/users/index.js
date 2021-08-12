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
                            .input('FechaRegistro', sql.DateTime, fechaRegistro)
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
                            .input('Persona', sql.Int, data.persona)
                            .input('Origen', sql.NChar(4), data.origen)
                            .input('ApellidoPaterno', sql.NVarChar(50), data.apellidoPaterno)
                            .input('ApellidoMaterno', sql.NVarChar(50), data.apellidoMaterno)
                            .input('Nombres', sql.NVarChar(50), data.nombres)
                            .input('NombreCompleto', sql.NVarChar(150), data.nombreCompleto)
                            .input('Busqueda', sql.NVarChar(150), data.busqueda)
                            .input('TipoDocumento', sql.NChar(1), data.tipoDocumento)
                            .input('Documento', sql.NChar(20), data.documento)
                            .input('TipoPersona', sql.NChar(1), data.tipoPersona)
                            .input('FechaNacimiento', sql.DateTime, data.fechaNacimiento)
                            .input('Sexo', sql.NChar(1), data.sexo)
                            .input('Nacionalidad', sql.NVarChar(20), data.nacionalidad)
                            .input('Telefono', sql.NVarChar(30), data.telefono)
                            .input('CorreoElectronico', sql.NVarChar(150), data.correoElectronico)
                            .input('Estado', sql.NChar(1), data.estado)
                            .input('Celular', sql.NVarChar(15), data.celular)
                            .input('Pais', sql.NChar(4), data.pais)
                            .input('DocumentoIdentidad', sql.NChar(20), data.documentoIdentidad)
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