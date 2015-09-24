var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/user-scores');
var userScoresCollection = db.get('scores');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', {title: "Browser QB!" });
});


router.post('/', function(req, res, next) {
  userScoresCollection.update({'user.initials': {$eq: req.body.initials}},{user: req.body},{upsert: true});
  res.redirect('/');
});

router.get('/data', function (req, res, next) {
  userScoresCollection.find({_id: req.params.id}, {timesPlayed: 1, _id: 0} ,function (err, data) {
  console.log(req.params.id);
    res.json(data)
  })
})
module.exports = router;
