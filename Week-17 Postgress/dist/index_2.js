"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const url = "postgresql://neondb_owner:npg_3zXYDbGrs2FR@ep-super-frog-a580tmw4-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require";
const pg_1 = require("pg");
const pgClient = new pg_1.Client({
    connectionString: url,
});
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pgClient.connect();
        console.log("Connected to PostgreSQL");
    }
    catch (err) {
        console.error("Database connection error", err);
    }
});
connectDB();
const createUser = (username, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "INSERT INTO users (username, email,password) VALUES ($1, $2,$3) RETURNING *;";
    const values = [username, email, password];
    const result = yield pgClient.query(query, values);
    console.log("User created:", result.rows[0]);
    yield pgClient.end();
});
// createUser("FinalTestInsert","abc123@gmail.com","PASSWsdgfjgjwe");
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pgClient.query("SELECT * FROM users;");
    console.log("Users:", result.rows);
});
getUsers();
const updateUser = (username, email) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "UPDATE users SET username = $1 WHERE email = $2 RETURNING *;";
    const values = [username, email];
    const result = yield pgClient.query(query, values);
    console.log("User updated:", result.rows[0]);
    // await pgClient.end();
});
updateUser("ChangedUsername", "jayshende@gmail.com");
const deleteUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "DELETE FROM users WHERE email = $1 RETURNING *;";
    const values = [email];
    const result = yield pgClient.query(query, values);
    console.log("User deleted:", result.rows[0]);
    yield pgClient.end();
});
deleteUser("abc123@gmail.com");
