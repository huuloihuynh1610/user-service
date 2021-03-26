import swaggerJSDoc from 'swagger-jsdoc';
const swaggerDefinition = {
  info: {
    title: 'VisionX API Docs',
    version: '1.0.0',
    description: 'VisionX API Docs',
  },
  // host: '138.91.34.70:3000',
  host: 'localhost:3000',
  // produces: ['application/json'],
  // consumes: ['application/json'],
  securityDefinitions: {
    jwt: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    }, 
  },
  security: [{jwt: []}],
};

const options = {
  swaggerDefinition,
  apis: [
    'src/routes/**/*.js',
    'src/models/**/*.js',
  ],
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
