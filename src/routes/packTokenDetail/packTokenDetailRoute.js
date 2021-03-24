var express = require("express");
var router = express.Router();
import errors from "http-errors";
import packTokenDetailDao from "~dao/packTokenDetailDao";
import { getPagination } from "~utils/pagination";
const isAdmin = require("~middleware/isAdmin");
import isLogin from "~middleware/isLogin";
/* GET pack listing. */
router.get("/", isLogin, async (req, res, next) => {
  try {
    const totalItem = await packTokenDetailDao.getTotalCount({});
    const pagination = getPagination(req, totalItem);
    const data = await packTokenDetailDao.findAll(pagination);
    return res.json({ message: "success", pagination, data });
  } catch (error) {
    var err = new errors.InternalServerError(error?.message);
    return res.send(err);
  }
});

/** POST pack*/

router.post("/", isLogin, async (req, res, next) => {
  try {
    const { body } = req;
    const data = {
      ...body,
    };
    console.log(data);
      let result = await packTokenDetailDao.create({
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
      const data = await packTokenDetailDao.findOne({ _id: req.params.id });
      return res.json({message :'success:',data})
    } catch (error) {
      var err = new errors.InternalServerError(error?.message);
      return res.send(err);
    }
});


router.put("/:id", isAdmin, async (req, res, next) => {
    try {
     const _id = req.params.id;
     const {body} = req;
      const data = await packTokenDetailDao.update(_id,body);
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
      const result = await packTokenDetailDao.delete(_id)
      return res.json({ message :"success", data: result })
    } catch (error) {
      return res.send(new errors.InternalError(error.message))
    }
  }
)
module.exports = router;
