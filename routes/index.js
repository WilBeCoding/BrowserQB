var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/user-scores');
var userScoresCollection = db.get('scores');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', {title: "Browser QB!" });
});

router.post('/', function(req, res, next) {
  console.log(req.body.timesPlayed);
  userScoresCollection.update({'user.initials': {$eq: req.body.initials}},{user: req.body},{upsert: true});
  res.redirect('/');
});

router.get('/data/:user_initials', function (req, res, next) {
  userScoresCollection.find({},function (err, data) {
    res.json(data)
  })
})

// router.get('/view', function (req, res, next) {
//   userScoresCollection.find({}, function(err, docs) {
//     if(err)res.json(err);
//     else res.render('/', {user:docs})
//   })
// })

module.exports = router;
