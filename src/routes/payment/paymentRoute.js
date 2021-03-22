var express = require("express");
var router = express.Router();
import errors from "http-errors";
import paymentDao from "~dao/paymentDao";
import { getPagination } from "~utils/pagination";
const isAdmin = require("~middleware/isAdmin");
import isLogin from "~middleware/isLogin";
import { validationResult } from "express-validator";
import {validation} from '~routes/payment/paymentValidate';

/* GET payment listing. */
router.get("/", isAdmin, async (req, res, next) => {
  try {
    const totalItem = await paymentDao.getTotalCount({});
    const pagination = getPagination(req, totalItem);
    const data = await paymentDao.findAll(pagination);
    return res.json({ message: "success", pagination, data });
  } catch (error) {
    var err = new errors.InternalServerError(error?.message);
    return res.send(err);
  }
});

/** POST payment*/

router.post("/", validation.paymentValidation, isAdmin, async (req, res, next) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const { body } = req;
    const data = {
      ...body
    };
      let result = await paymentDao.create({
        ...data,
      });
      return res.json({ message: "success"  , result });
  } catch (error) {
    var err = new errors.InternalServerError(error?.message);
    return res.send(err);
  }
});
/** GET payment by id */

router.get("/:id",isAdmin, async (req, res, next) => {
    try {
      const data = await paymentDao.findOne({ _id: req.params.id });
      return res.json({message :'success:',data})
    } catch (error) {
      var err = new errors.InternalServerError(error?.message);
      return res.send(err);
    }
});

router.put("/:id",validation.paymentValidation, isAdmin, async (req, res, next) => {
    try {
     const _id = req.params.id;
     const {body} = req;
      const data = await paymentDao.update(_id,body);
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
      const result = await paymentDao.delete(_id)
      return res.json({ message :"success", data: result })
    } catch (error) {
      return res.send(new errors.InternalError(error.message))
    }
  }
)
module.exports = router;
