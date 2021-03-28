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
import swaggerUI from 'swagger-ui-express';
import swaggerSpecV1 from '~root/doc';

var usersRouter = require("~routes/users/usersRoute");
var authRouter = require("~routes/auth/authRoute");
var packRouter = require('~routes/pack/packRoute');
var paymentRoute = require('~routes/payment/paymentRoute');
var packTokenRoute = require('~routes/packToken/packTokenRoute');
var packTokenDetailRoute = require('~routes/packTokenDetail/packTokenDetailRoute');
var apiRoute = require('~routes/api/apiRoute');
var apiDocumenntRoute = require('~routes/documents/apiDocumentsRoute');
var masterDataRoute = require('~routes/masterData/masterDataRoute');
var packApiRoute= require('~routes/packApi/packApiRoute');
var billRoute = require('~routes/bill/billRoute');
var billDetailRoute = require('~routes/bill/billDetailRoute');
var homeRoute = require('~routes/home/homeRoute')
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
  app.use(require('body-parser').json()); 
  app.use(require('body-parser').urlencoded({ extended: true }));

  app.use("/user", usersRouter);
  app.use("/auth",authRouter );
  app.use('/pack',packRouter);
  app.use('/payment',paymentRoute);
  app.use('/packToken',packTokenRoute)
  app.use('/packTokenDetail',packTokenDetailRoute);
  app.use('/api',apiRoute);
  app.use('/document',apiDocumenntRoute);
  app.use('/masterdata',masterDataRoute);
  app.use('/packApi',packApiRoute);
  app.use('/bill',billRoute);
  app.use('/billDetail',billDetailRoute);
  app.use('/home',homeRoute)
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecV1));
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
