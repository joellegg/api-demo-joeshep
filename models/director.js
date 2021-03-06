'use strict'

const { bookshelf } = require('../db/database')
require('./show')

const Director = bookshelf.Model.extend({
  tableName: 'directors',
  shows: function() {
    return this.belongsToMany('Show').through('Show_Director')
  }
})

module.exports = bookshelf.model('Director', Director)
