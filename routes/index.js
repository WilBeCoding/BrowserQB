var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/user-scores');
var userScoresCollection = db.get('scores');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', {title: "Browser QB!" });
});

// router.get('/', function(req, res, next) {
//   res.render('intro', {title: "Browser QB!" });
// });

// router.get('/', function (req, res, next) {
//   userScoresCollection.insert({initals: data} , function (err, data) {
//     res.json(data)
//   })
// })

router.post('/', function(req, res, next) {
  userScoresCollection.insert({name: req.body});
  res.redirect('/');
});

module.exports = router;
