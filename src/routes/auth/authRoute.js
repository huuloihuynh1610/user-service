import express from "express";
const router = express.Router();
import errors from "http-errors";
import userDao from "~dao/userDao";
import { validationResult } from "express-validator";
import bcrypt from 'bcryptjs'
import _ from 'lodash';
import jwt from 'jsonwebtoken'
import {ERRORS} from '~constants/errors/error';
import {validation} from '~routes/auth/AuthValidate';
import isLogin from '~middleware/isLogin'
/* POST users listing. */
router.post("/login", validation.loginValidation, async (req, res, next) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const user = await userDao.authenticate(
      req.body.email,
      req.body.password
    );
    if (_.isNull(user)) {
      return res.send(new errors(401,ERRORS.EMAIL_OR_PASSWORD_IS_INCORRECT))
    }
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.APP_SECRET,
      { expiresIn: '10day' }
    );
    return res.json({ access_token: token, role: user.role, message:"success"});
  } catch (error) {
    var err = new errors.InternalServerError(error);
    return res.send(err?.message);
  }
});

/**
 * method: POST 
 * path: resgister
 * body: 
 */
router.post("/register",validation.registerValidation, async (req, res, next) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const { body } = req;
    const data = {...body, ...{password : bcrypt.hashSync(body.password, 10)}};
    let user = await userDao.findOne({ email: body.email });
    if (!user) {
        let result = await userDao.create({
          ...data
        });
        return res.json(result);
    } else {
      return res.send(new errors(500,ERRORS.EMAIL_IS_ALREADY_EXISTS ))
    }    
  } catch (error) {
    var err = new errors.InternalServerError(error?.message);
    return res.send(err);
  }
});

/**
 * GET auth/profile
 */
router.get("/profile",isLogin, async (req, res, next) => {
  try {
    const data = await userDao.findOne({_id:req.user._id});
    return res.json({message:"success",data})
  } catch (error) {
    var err = new errors.InternalServerError(error?.message);
    return res.send(err);
  }
});
module.exports = router;
