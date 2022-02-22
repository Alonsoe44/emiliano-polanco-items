const usersRouter = require("express").Router();

usersRouter.post("/", loginController);

module.exports = usersRouter;
