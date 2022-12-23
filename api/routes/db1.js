const dbRoutes = (app, fs) => {
    // variables
    const dataPath = './data/db.json';
      // READ
  app.get('/db', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      JSON.parse(data).products.length ? 
            res.status(200).json(JSON.parse(data)) :
            res.status(404).send("No se encuentran datos");
       });
  });
};
module.exports = dbRoutes;