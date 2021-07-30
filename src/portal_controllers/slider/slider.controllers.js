'use strict';

const eventData = require('../../data/events/portal_web');


const getEmergenciaLima = async (req, res, next) => {
    try {

        const eventlist = await eventData.emergenciaLima();
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getQuirurgicoLima = async (req, res, next) => {
    try {

        const eventlist = await eventData.quirurgicoLima();
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getAmbulatorioLima = async (req, res, next) => {
    try {

        const eventlist = await eventData.ambulatorioLima();
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEmergenciaChorrillos = async (req, res, next) => {
    try {

        const eventlist = await eventData.emergenciaChorrillos();
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getQuirurgicoChorrillos = async (req, res, next) => {
    try {

        const eventlist = await eventData.quirurgicoChorrillos();
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getAmbulatorioChorrillos = async (req, res, next) => {
    try {

        const eventlist = await eventData.ambulatorioChorrillos();
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEmergenciaSurco = async (req, res, next) => {
    try {

        const eventlist = await eventData.emergenciaSurco();
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getQuirurgicoSurco = async (req, res, next) => {
    try {

        const eventlist = await eventData.quirurgicoSurco();
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getAmbulatorioSurco = async (req, res, next) => {
    try {

        const eventlist = await eventData.ambulatorioSurco();
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getEmergenciaLima,
    getQuirurgicoLima,
    getAmbulatorioLima,
    getEmergenciaChorrillos,
getQuirurgicoChorrillos,
getAmbulatorioChorrillos,
getEmergenciaSurco,
getQuirurgicoSurco,
getAmbulatorioSurco
}