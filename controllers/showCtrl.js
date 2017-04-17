'use strict'

const { bookshelf } = require('../db/database')
const Show = require('../models/show')

module.exports.getShows = (req, res, next) => {
  Show.getAll()
  .then((shows) => {
    res.status(200).json(shows)
  })
  .catch((err) => {
    next(err)
  })
}

module.exports.getShowFaves = ({query: {showId}}, res, next) => {
  console.log('The query string', showId)
  Show.forge({id: showId})
  .fetch({withRelated: ['upvotes'], require: true})
  .then((faves) => {
    res.status(200).json(faves)
  })
  .catch(err => next(err))
}
