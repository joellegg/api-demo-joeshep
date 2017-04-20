
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shows', (table) => {
    table.increments()
    table.string('name').notNullable().unique
    table.string('channel').notNullable()
    table.string('genre').notNullable()
    table.boolean('inProduction').notNullable()
  })
  .createTable('favorites', (table) => {
    table.increments()
    table.timestamp('dateAdded').notNullable().defaultTo(knex.fn.now())
    // unsigned says no negative numbers (needs verified)
    table.integer('show_id').unsigned().references('shows.id')
  })
  .createTable('directors', (table) => {
    table.increments()
    table.string('name').notNullable().unique
    table.string('gender').notNullable()
    table.integer('birthYear')
    table.string('twitterHandle')
  })
  .createTable('shows_directors', (table) => {
    table.increments()
    table.integer('director_id').unsigned().references('directors.id')
    table.integer('show_id').unsigned().references('shows_id')
  })
};

// drop table with foreign key constraints first
exports.down = (knex, Promise) =>
  knex.schema
  .dropTable('shows_directors')
  .dropTable('favorites')
  .dropTable('directors')
  .dropTable('shows')
