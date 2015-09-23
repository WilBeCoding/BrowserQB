var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/user-scores');
var userScoresCollection = db.get('browserQB');

/* GET home page. */

router.get('/browserQB', function(req, res, next) {
  res.render('browserQB/homepage', {title: "Browser QB!" });
});


router.post('/browserQB', function(req, res, next) {
  userScoresCollection.insert({name: req.body.user_initials});
  res.redirect('/browserQB');
});


module.exports = router;

