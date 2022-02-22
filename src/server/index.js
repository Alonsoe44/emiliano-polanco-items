require("dotenv").config();
const debug = require("debug")("items:server");
const chalk = require("chalk");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const { notFoundError, generalError } = require("./middlewares/errors");
const plantsRouter = require("./routes/plantsRouter");
const usersRouter = require("./routes/usersRouter");

const app = express();

const startServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.yellow(`Server listening on http://localhost:${port}`));
      resolve();
    });

    server.on("error", (error) => {
      reject(error);
    });
  });

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

app.use("/plants", plantsRouter);
app.use("/login", usersRouter);

app.use(notFoundError);
app.use(generalError);

module.exports = startServer;
