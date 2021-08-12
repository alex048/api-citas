const { createReclamo } = require("./portal.service");

module.exports = {
  createReclamo: (rep, res) => {
    const body = rep.body;
    createReclamo(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error " + err,
        });
      }

      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
};
