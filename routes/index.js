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

// router.post('/', function(req, res, next) {
//   console.log(req.body.initials);
//   userScoresCollection.insert({name: req.body});
//   res.redirect('/');
// });

router.post('/', function(req, res, next) {
  userScoresCollection.update({'user.initials': {$eq: req.body.initials}},{user: req.body},{upsert: true});
  res.redirect('/');
});

module.exports = router;
