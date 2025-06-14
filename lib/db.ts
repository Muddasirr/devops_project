import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'mysql-db.cj6wckqkkbgk.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'YourSecurePassword1!',
  database: 'Devops_db',
});
