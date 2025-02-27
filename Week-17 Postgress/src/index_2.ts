const url:string="postgresql://neondb_owner:npg_3zXYDbGrs2FR@ep-super-frog-a580tmw4-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require";

import { Client } from 'pg';


const pgClient = new Client({
  connectionString: url,
});

const connectDB = async () => {
  try {
    await pgClient.connect();
    console.log("Connected to PostgreSQL");
  } catch (err) {
    console.error("Database connection error", err);
  }
};

connectDB();

const createUser = async (username: string, email: string,password:string) => {
    const query = "INSERT INTO users (username, email,password) VALUES ($1, $2,$3) RETURNING *;";
    const values = [username, email,password];
  
    const result = await pgClient.query(query, values);
    console.log("User created:", result.rows[0]);
    await pgClient.end();
};
  
// createUser("FinalTestInsert","abc123@gmail.com","PASSWsdgfjgjwe");

const getUsers = async () => {
    const result = await pgClient.query("SELECT * FROM users;");
    console.log("Users:", result.rows);
};

getUsers();
  
const updateUser = async (username:string,email: string) => {
    const query = "UPDATE users SET username = $1 WHERE email = $2 RETURNING *;";
    const values = [username,email];
  
    const result = await pgClient.query(query, values);
    console.log("User updated:", result.rows[0]);
    // await pgClient.end();
};

updateUser("ChangedUsername","jayshende@gmail.com");

const deleteUser = async (email:string) => {
    const query = "DELETE FROM users WHERE email = $1 RETURNING *;";
    const values = [email];
  
    const result = await pgClient.query(query, values);
    console.log("User deleted:", result.rows[0]);
    await pgClient.end();
  };
  deleteUser("abc123@gmail.com");

  