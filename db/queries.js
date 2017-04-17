// Added this file after writing the first failing test.
// Here, we made a reference to our database via the Knex config file,
// added a helper function for simplifying each individual query,
// and finally queried the database to get ALL shows.

const { knex, bookshelf } = require('./database');

// ****** Queries *********
// Users
const addNewUser = (newUser) => {
  return User.forge({name: newUser}).save()
}
// Faves
const addNewFave = (fave, user) => {
  return Favorite.forge({user_id: user, show_id: fave}).save()
}

const getMyFaves = (id) => {
  console.log("userId", id);
  // return Favorite.forge().query({where: {user_id}}).fetchAll()
  //
  // we can use “forge”, which is a simple helper function to instantiate a new Model without needing “new”.
  // we want to be able to get a specific user by its id. For this, we chain another Bookshelf method
  // called “query”. This method is used to tap into the underlying Knex query builder instance for the
  // current model. We can now use the Knex method “where”, which is a wrapper for the standard SQL
  // where statement.
  let user = User.forge().query({where: {'id': id}})
  return user.fetch({withRelated: ['favoriteShows'], require: true})
  .then( (user) => {
    // console.log("faves", user.relations.favoriteShows);
    return JSON.stringify(user.relations.favoriteShows);
    // If this was an API, we would do this here instead:
    // res.status(200).json(user.relations.favoriteShows);
  })
   // If there are any errors in our Series query, it will be sent to the “catch” method.
   // For now, we are just going to return the error and have the function that calls 'getMyFaves`
   // send the “next” callback to the catch method and
   // let our error handling middleware take care of the error.
  .catch( (error) => {
    // console.log("error??", error);
    throw error;
  });
}

module.exports = {
  addNewUser,
  addNewFave,
  getMyFaves
}
