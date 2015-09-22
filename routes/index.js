var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/user-scores');
var userScoresCollection = db.get('userScores');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', {title: "Browser QB!" });
});

// router.get('/', function(req, res, next) {
//   res.render('intro', {title: "Browser QB!" });
// });

router.post('/users', function(req, res, next) {
  userScoresCollection.insert({name: req.body.user_initials});
  res.redirect('/');
});

module.exports = router;
