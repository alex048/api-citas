'use strict';

const eventData = require('../../data/events/portal_web');


const sendMailContacto = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await eventData.sendMailContacto(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
  }
  const sendMailPortalWeb = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await eventData.sendMailPortalWeb(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
  }
    const validateToken = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await eventData.validateToken(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
  }
module.exports = {
    sendMailContacto,
    sendMailPortalWeb,
	validateToken,
}