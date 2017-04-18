'use strict'

const { Router } = require('express')
const router = Router()

const { getShows, getShow, getShowFaves, addShow } = require('../controllers/showCtrl')

router.get('/shows', getShows)
router.get('/shows/:id', getShow)
router.get('/shows/favorites', getShowFaves)
// router.post('/shows/...')

module.exports = router
