var express = require("express");
var router = express.Router();
import errors from "http-errors";
import apiDao from "~dao/apiDao";
import { getPagination } from "~utils/pagination";
const isAdmin = require("~middleware/isAdmin");
import isLogin from "~middleware/isLogin";
import { validationResult } from "express-validator";

/* GET pack listing. */
router.get("/", isLogin, async (req, res, next) => {
  try {
    const totalItem = await apiDao.getTotalCount({});
    const pagination = getPagination(req, totalItem);
    const data = await apiDao.findAll(pagination);
    return res.json({ message: "success", pagination, data });
  } catch (error) {
    var err = new errors.InternalServerError(error?.message);
    return res.send(err);
  }
});

/** POST pack*/

router.post("/",isAdmin, async (req, res, next) => {
  try {
    const {body} = req;
    const data = {
      ...body,
    }
    console.log(data);
      let result = await apiDao.create({
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
      const data = await apiDao.findOne({ _id: req.params.id });
      return res.json({message :'success:',data})
    } catch (error) {
      var err = new errors.InternalServerError(error?.message);
      return res.send(err);
    }
});


router.put("/:id",isAdmin, async (req, res, next) => {
    try {
     const _id = req.params.id;
     const {body} = req;
      const data = await apiDao.update(_id,body);
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
      const result = await apiDao.delete(_id)
      return res.json({ message :"success", data: result })
    } catch (error) {
      return res.send(new errors.InternalError(error.message))
    }
  }
)
module.exports = router;
