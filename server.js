const express = require('express');

const mongodb = require('./data/database');
const app = express();

app.use('/project1', require('./routes/users'));

const port = process.env.PORT || 3000;

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log('Web Server is listening at port ' + port);
    });
  }
});
