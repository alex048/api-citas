'use strict';
const eventData = require('../../data/events/niubiz');

const registerLogNiubiz = async (req, res, next) => {
  try {
      const data = req.body;
      const insert = await eventData.registerLogNiubiz(data);
      res.send(insert);
  } catch (error) {
      res.status(400).send(error.message);
  }
}

module.exports = {
    registerLogNiubiz
}