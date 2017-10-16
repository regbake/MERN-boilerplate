var express = require('express');
var router = express.Router();

/* GET animals listing. */
router.get('/', function(req, res, next) {
  // var myObj = {name: "This is the return to object"}
  res.send("This is the return to object");
});

module.exports = router;
