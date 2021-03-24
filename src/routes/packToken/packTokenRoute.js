var express = require("express");
var router = express.Router();
import errors from "http-errors";
import packTokenDao from "~dao/packTokenDao";
import { getPagination } from "~utils/pagination";
const isAdmin = require("~middleware/isAdmin");
import isLogin from "~middleware/isLogin";
import { validationResult } from "express-validator";
import {validation} from '~routes/packToken/packTokenValidate';

/* GET pack listing. */
router.get("/", isLogin, async (req, res, next) => {
  try {
    const totalItem = await packTokenDao.getTotalCount({});
    const pagination = getPagination(req, totalItem);
    const data = await packTokenDao.findAll(pagination);
    return res.json({ message: "success", pagination, data });
  } catch (error) {
    var err = new errors.InternalServerError(error?.message);
    return res.send(err);
  }
});

/** POST pack*/

router.post("/",validation.packTokenValidate, isAdmin, async (req, res, next) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const rand=()=>Math.random(0).toString(36).substr(2);
    const token=(length)=>(rand()+rand()+rand()+rand()).substr(0,length);
    const { body } = req;
    const data = {
      ...body,
      token : token()
    };
      let result = await packTokenDao.create({
        ...data,
      });
      return res.json({ message: "success"  , result });
  } catch (error) {
    var err = new errors.InternalServerError(error?.message);
    return res.send(err);
  }
});
/** GET pack by id */

router.get("/:id",isLogin, async (req, res, next) => {
    try {
      const data = await packTokenDao.findOne({ _id: req.params.id });
      return res.json({message :'success:',data})
    } catch (error) {
      var err = new errors.InternalServerError(error?.message);
      return res.send(err);
    }
});


router.put("/:id",validation.packTokenValidate, isAdmin, async (req, res, next) => {
    try {
     const _id = req.params.id;
     const {body} = req;
      const data = await packTokenDao.update(_id,body);
      return res.json({message :'success:',data})
    } catch (error) {
      var err = new errors.InternalServerError(error?.message);
      return res.send(err);
    }
});


/* GET delete password by id listing. */

router.delete('/:id',isAdmin, async (req, res, next) => {
    try {
      const _id = req.params.id
      const result = await packTokenDao.delete(_id)
      return res.json({ message :"success", data: result })
    } catch (error) {
      return res.send(new errors.InternalError(error.message))
    }
  }
)
module.exports = router;
