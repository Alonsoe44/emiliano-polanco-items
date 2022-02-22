const plantsRouter = require("express").Router();

plantsRouter.use("/", getPlantsController);
plantsRouter.post("/create", createplantsController);

module.exports = plantsRouter;
