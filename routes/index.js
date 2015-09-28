var express = require('express');
var router = express.Router();
var db = require('monk')("monk.connect(process.env.mongodb://heroku_1c995854:fduppge74ir8earhck65lru791@ds053178.mongolab.com:53178/heroku_1c995854" || "mongod://locahost/user-scores");
var userScoresCollection = db.get('scores');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', {title: "Browser QB!" });
});

router.post('/', function(req, res, next) {
  userScoresCollection.update({'user.initials': {$eq: req.body.initials}},{user: req.body},{upsert: true});
  res.redirect('/');
}); 

// router.post('/winning', function(req, res, next) {
//   userScoresCollection.update({'user.initials': {$eq: req.body.initials}},{user: req.body},{upsert: true});
//   res.redirect('/');
// });

router.get('/data/:user_initials', function (req, res, next) {
  userScoresCollection.find({},function (err, data) {
    res.json(data)
  })
})

module.exports = router;

  // userScoresCollection.find({'user'})
  // userScoresCollection.find({'user.initials': {$eq: req.body.initials}});
  // var user = userScoresCollection.find({'user.initials': {$eq: req.body.initials}});