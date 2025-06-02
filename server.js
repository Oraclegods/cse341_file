const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const app = express();
const swaggerRoutes = require('./routes/swagger');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
})

app.use('/', swaggerRoutes);
app.use('/project1', require('./routes/users'));
// # getting hello world
app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 3001;

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log('Web Server is listening at port ' + port);
    });
  }
});
