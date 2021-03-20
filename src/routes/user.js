var express = require("express");
var router = express.Router();
import errors from "http-errors";
import userDao from "~dao/userDao";
import { getPagination } from '~utils/pagination'
const isAdmin = require("~middleware/isAdmin");
import bcrypt from 'bcryptjs'
import {validation} from '../routes/userValidate';
import { validationResult } from "express-validator";

/* GET users listing. */
router.get("/",isAdmin, async (req, res, next) => {
  try {
    const totalItem = await userDao.getTotalCount({})
    const pagination = getPagination(req, totalItem)
    const data = await userDao.findAll(pagination)
    return res.json({ message : "success", pagination, data})
  } catch (error) {
    var err = new errors.InternalServerError(error?.message);
    return res.send(err);
  }
});

/* GET users by id listing. */

router.get("/:id",isAdmin, async (req, res, next) => {
  try {
    console.log(req.params.id);
    const data = await userDao.findOne({ _id: req.params.id });
    return res.json({message :'success:',data})
  } catch (error) {
    var err = new errors.InternalServerError(error?.message);
    return res.send(err);
  }
});

/* GET update password by id listing. */
router.put('/password/:id',
isAdmin, async (req, res, next) => {
    try {
      const _id = req.params.id;
      console.log(req.body.password);
      console.log(req.params.id)
      req.body.password = bcrypt.hashSync(req.body.password, 10)
      const result = await userDao.update(_id, { password: req.body.password });
      return res.json({ message :"success", data: result })
    } catch (error) {
      console.log(error);
      return res.send(new errors.InternalError(error.message))
    }
  }
)

/* GET update profile by id listing. */
router.put('/profile',validation.userValidate, isAdmin, async (req, res, next) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const _id = req.user?._id;    
    const {body} = req;
    const result = await userDao.update(_id,body);
    return res.json({ message :"success", data: result })
  } catch (error) {
    console.log(error);
    return res.send(new errors.InternalError(error.message))
  }
}
)

/* GET delete password by id listing. */

router.delete('/:id',isAdmin, async (req, res, next) => {
    try {
      const _id = req.params.id
      const result = await userDao.delete(_id)
      return res.json({ message :"success", data: result })
    } catch (error) {
      return res.send(new errors.InternalError(error.message))
    }
  }
)


module.exports = router;
