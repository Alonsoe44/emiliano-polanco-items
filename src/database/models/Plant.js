const { Schema, model } = require("mongoose");

const PlantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
  },
});

const Plant = model("Plant", PlantSchema, "Plants");

module.exports = Plant;
