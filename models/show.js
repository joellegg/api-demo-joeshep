'use strict'

const { bookshelf } = require('../db/database')
require('./favorite')

const Show = bookshelf.Model.extend({
  tableName: 'shows',
  upvotes: function() { return this.hasMany('Favorite') }
}, {
  getAll: function() {
    console.log('Get all called from show model')
    return this.forge()
      .fetchAll()
      .then((rows) => {
        return rows
      })
      .catch((err) => {
        return err
      })
  }
})

module.exports = bookshelf.model('Show', Show)
