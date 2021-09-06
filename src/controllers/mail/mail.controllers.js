'use strict';

const eventData = require('../../data/events/mail_password');

  const sendMailCitas = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await eventData.sendMailCitas(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
  }

  const sendNewAcountUserPassword = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await eventData.sendNewAcountUserPassword(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
  }

  const sendValidateMailLinkPassword = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await eventData.sendValidateMailLinkPassword(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
  }
  const sendMailPasswordChangeNew = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await eventData.sendMailPasswordChangeNew(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
  }
module.exports = {
    sendMailCitas,
    sendNewAcountUserPassword,
    sendValidateMailLinkPassword,
    sendMailPasswordChangeNew

}