// By default, Mocha searches for tests with a “test” folder.
// That configuration can be changed with a mocha.opts file

process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app')
const { knex } = require('../db/database')
chai.use(chaiHttp)

describe('Shows routes', () => {
  beforeEach(() => {
    return knex.migrate.rollback()
      .then(() => {
        return knex.migrate.latest()
      })
      .then(() => {
        return knex.seed.run()
      })
  })

  describe('Get all the shows', () => {
    it('should get all the shows', () => {
      return chai.request(server)
        .get('/api/v1/shows')
        .then((res) => {
          res.should.have.status(200)
        })
    })
  })

})
