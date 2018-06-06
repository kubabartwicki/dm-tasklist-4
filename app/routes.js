var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.post('/ur/did-you-award', function (req, res) {
  var radiogroup = req.body.radiogroup
  if (radiogroup == 'yes') {
    res.redirect('/ur/award-info')
  } else if (radiogroup == 'no') {
    res.redirect('/ur/why-not')
  } else {
    res.redirect('/ur?step=4')
  }
})
router.post('/ur/why-not', function (req, res) {
  res.redirect('/ur?step=5&not_awarded=1&awarded_flash=1')
})
router.post('/ur/award-details', function (req, res) {
  res.redirect('/ur?step=5&awarded_flash=1&not_awarded=0')
})

module.exports = router