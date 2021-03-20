import "dotenv/config";
// require('module-alias/register')
import "module-alias/register";
import createError from "http-errors";
import express from "express";
import cors from 'cors';

// import path from'path';
import logger from "morgan";
import mongoose from "mongoose";
import { MONGO_OPTIONS } from "~root/configSystem.js";
var usersRouter = require("~routes/users/usersRoute");
var authRouter = require("~routes/auth/authRoute");

var app = express();

mongoose
  .connect(MONGO_OPTIONS.uri, {
    user: MONGO_OPTIONS.user,
    pass: MONGO_OPTIONS.pass,
    ...MONGO_OPTIONS.db_options,
  })
  .catch((error) => console.error(error));
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
const db = mongoose.connection;
db.once("open", () => {
  console.log(`connected ${MONGO_OPTIONS.uri} succsesfull`);
  app.use(cors());
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/user", usersRouter);
  app.use("/auth",authRouter );
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    
    // render the error
    res.status(err.status || 500);
    res.send(err);
  });
});

module.exports = app;
