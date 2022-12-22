const appRouter = (app, fs) => {
    // load up our shiny new route for users
const dbjson = require('./db1');
app.get('/', (req, res) => {
    res.send('welcome to the development api-server');
  });

  // run our user route module here to complete the wire up
  dbjson(app, fs);
};


module.exports = appRouter;