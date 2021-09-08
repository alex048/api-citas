'use strict';

const eventData = require('../../data/events/portal_web');
const getBirthay = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await eventData.getBirthay(data);
        res.json(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
  }

  module.exports = {
    getBirthay
}