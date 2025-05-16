const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Users api',
    description: 'Users api',
  },
  host: 'localhost:3000', 
  schemes: ['https', 'http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// this willm generate a swagger.json file
swaggerAutogen(outputFile, endpointsFiles, doc);