var express = require("express");
var router = express.Router();
import errors from "http-errors";
import packTokenDao from "~dao/packTokenDao";
import { getPagination } from "~utils/pagination";
import isLogin from "~middleware/isLogin";
import packTokenDetailDao from "../../dao/packTokenDetailDao";

/* GET pack listing. */
const daysInMonth =  (month, year)=>{
  return new Date(year, month, 0).getDate();
}
router.get("/", isLogin, async (req, res, next) => {
  try {
    const userId = req.user._id;
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      daysInMonth(date.getMonth() + 1, date.getFullYear())
    );
    const data = await Promise.all([packTokenDao.findPack(userId),packTokenDetailDao.getApibyMonth(firstDay, lastDay)])
    return res.json({ message: "success", data : {
      apiInfo : data[0],
      apiRequest : data[1]
    } });
  } catch (error) {
    var err = new errors.InternalServerError(error?.message);
    return res.send(err);
  }
});
module.exports = router;
