'use strict'

const { Router } = require('express')
const router = Router()

router.use(require('./shows'))

router.get('/', function(req, res) {
  res.json({
    "title": "The TV faves API",
    "shows": "api-joeshep.herokuapp.com/api/v1/shows",
    "favorites": "api-joeshep.herokuapp.com/api/v1/shows/favorites/?showId=<show_id>",
    "directors": "api-joeshep.herokuapp.com/api/v1/shows/directors?showId=<show_id>"
  })
})

module.exports = router;
