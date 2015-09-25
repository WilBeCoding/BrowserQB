// var express = require('express');
// var router = express.Router();
// var db = require('monk')('localhost/scores-app');
// var scoresCollection = db.get('scores');

// router.get('/scores', function(req, res, next) {
//   res.render('scores/homepage');
// })

// router.post('/scores', function(req, res, next) {
//   scoresCollection.insert({initials: req.body.user_initials});
//   res.redirect('/scores/homepage')
// });

// module.exports = router;