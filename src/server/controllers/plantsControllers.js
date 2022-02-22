const Plant = require("../../database/models/Plant");

const getPlantsController = async (req, res, next) => {
  const plants = Plant.find();
  res.json(plants);
};

module.exports = { getPlantsController };
