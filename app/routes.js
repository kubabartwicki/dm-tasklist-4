var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.post('/did-you-award', function (req, res) {
  var radiogroup = req.body.radiogroup
  if (radiogroup == 'yes') {
    res.redirect('/award-info')
  } else if (radiogroup == 'no') {
    res.redirect('/why-not')
  } else {
    res.redirect('/summary?step=4')
  }
})
router.post('/why-not', function (req, res) {
  res.redirect('/summary?step=5&not_awarded=1&awarded_flash=1')
})
router.post('/award-details', function (req, res) {
  res.redirect('/summary?step=5&awarded_flash=1&not_awarded=0')
})
router.post('/archive-2/why', function (req, res) {
  res.redirect('/archive-2/saved-searches?flash=1')
})

module.exports = router