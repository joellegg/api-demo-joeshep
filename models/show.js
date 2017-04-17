'use strict'

const { bookshelf } = require('../db/database')

const Show = bookshelf.Model.extend({
  tableName: 'shows'
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

module.exports = Show
