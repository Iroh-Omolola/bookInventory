import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const client = new Pool({
  user: "postgres",
  host: 'localhost',
  database: "Book-Inventory",
  password:"omolola1997.",
  port: 5432
});

client.on('connect', () => console.log('Database connected successfully'));

client.on('error', (err) => console.log(`Error: ${err}`));

export default client;
