const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users Api',
        description: 'Users Api'
    },
    host: 'localhost:3001',
    schemes: ['https', 'http']
};
const outputFile = '.swagger.json';
const endpointFiles = ['./routes/index.js'];

// this will generate swagger.json
swaggerAutogen(outputFile, endpointFiles, doc);