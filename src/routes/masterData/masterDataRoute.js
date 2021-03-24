var express = require("express");
var router = express.Router();
import errors from "http-errors";
import masterDataDao from "~dao/masterDataDao";
const isAdmin = require("~middleware/isAdmin");
import isLogin from '~middleware/isLogin';
import bcrypt from 'bcryptjs'
import {validation} from './masterDataValidate';
import { validationResult } from "express-validator";

/* GET users listing. */
router.get("/",isLogin, async (req, res, next) => {
  try {
    const data = await masterDataDao.findAll()
    return res.json({ message : "success",data})
  } catch (error) {
    var err = new errors.InternalServerError(error?.message);
    return res.send(err);
  }
});

/* GET users by id listing. */

router.get("/:id",isLogin, async (req, res, next) => {
  try {
    const data = await masterDataDao.findOne({ _id: req.params.id });
    return res.json({message :'success:',data})
  } catch (error) {
    var err = new errors.InternalServerError(error?.message);
    return res.send(err);
  }
});

router.post('/',validation.masterDataValidate, isAdmin, async (req, res, next) => {
    try {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
      }
      const {body} = req;
      const result = await masterDataDao.create(body);
      return res.json({ message :"success", data: result })
    } catch (error) {
      console.log(error);
      return res.send(new errors.InternalError(error.message))
    }
  }
  )
/* PUT update profile by id listing. */
router.put('/:id',validation.masterDataValidate, isAdmin, async (req, res, next) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const _id = req.params.id    
    const {body} = req;
    const result = await masterDataDao.update(_id,body);
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
      const result = await masterDataDao.delete(_id)
      return res.json({ message :"success", data: result })
    } catch (error) {
      return res.send(new errors.InternalError(error.message))
    }
  }
)



module.exports = router;
