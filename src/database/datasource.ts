import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbName = process.env.DB_NAME!;
const dbUser = process.env.DB_USER!;
const dbPwd = process.env.DB_PWD!;
const dbHost = process.env.DB_HOST!;

const sequelize = new Sequelize(dbName, dbUser, dbPwd, {
  host: dbHost,
  dialect: 'postgres'
});

// Ensure the connection to the database
sequelize.authenticate()
  .then(() => console.log('Successfully connected to the database'))
  .catch(err => console.error('Error connecting to the database', err));

export default sequelize;
