import { Console } from 'console';
import { Sequelize } from 'sequelize-typescript';
import { Todos } from '../models/todos';

const connection = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: process.env.DB_PASSWORD,
  database: 'todo',
  logging: false,
  models: [Todos],
});

export default connection;
