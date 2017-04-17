'use strict'

const { Router } = require('express')
const router = Router()

const { getShows, getShowFaves } = require('../controllers/showCtrl')

router.get('/shows', getShows)
router.get('/shows/favorites', getShowFaves)

module.exports = router
