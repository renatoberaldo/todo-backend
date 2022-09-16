import express from 'express';
const dotenv = require('dotenv');
dotenv.config();
import connection from './db/config';
import { json, urlencoded } from 'body-parser';
import todoRoutes from './routes/todos';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0.0',
      title: 'ToDo API',
      description: 'Simple ToDo API',
      contact: {
        name: 'Renato Beraldo Nunes',
      },
      servers: ['http://localhost:5000'],
    },
  },

  apis: ['./routes/*.ts'], //["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/todos', todoRoutes);
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

connection
  .sync()
  .then(() => {
    console.log('Database syncced successfully');
  })
  .catch(err => {
    console.log('Error:', err);
  });

app.listen(5000);
