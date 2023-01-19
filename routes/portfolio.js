var express = require("express");
const fs = require("fs");
const path = require("path");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let data = fs.readFileSync(
    path.resolve(__dirname, "../data/img/portfolio.json")
  );
  res.render("portfolio", { cakes: JSON.parse(data) });
});

module.exports = router;
