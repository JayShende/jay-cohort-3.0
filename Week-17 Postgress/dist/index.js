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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const url = "postgresql://neondb_owner:npg_3zXYDbGrs2FR@ep-super-frog-a580tmw4-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require";
const pool = new pg_1.Pool({ connectionString: url });
app.post("/createUser", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password, city, country, street, pincode } = req.body;
    try {
        const result = yield pool.query("INSERT INTO USERS(username,email,password) VALUES($1,$2,$3) RETURNING * ;", [username, email, password]);
        const userid = result.rows[0].id;
        const addAddress = yield pool.query("INSERT INTO addresses(user_id,city,country,street,pincode) VALUES($1,$2,$3,$4,$5) RETURNING *; ", [userid, city, country, street, pincode]);
        res.send({
            message: "User Created Successfully",
            user: result.rows[0],
            address: addAddress.rows[0]
        });
        return;
    }
    catch (error) {
        res.send({ message: "Some Error at the Database Level",
            error: error
        });
        return;
    }
}));
app.get("/fetchAllUsers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query("SELECT * FROM USERS");
        res.send({ Message: "Query Execuion Successfull",
            users: result.rows
        });
        return;
    }
    catch (error) {
        res.send({ Message: "Some Error at the Database Level",
            error: error
        });
    }
}));
app.put("/update", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, email } = req.body;
    const query = "UPDATE users SET password = $1 WHERE email = $2 RETURNING *;";
    // const result=await pool.query("UPDATE users SET password = '$1' WHERE email = '$2';")
    try {
        const result = yield pool.query(query, [password, email]);
        res.send({ Message: "Query Exececuted Successfully",
            result: result.rows[0]
        });
        return;
    }
    catch (error) {
        res.send({ Message: "Some Error At the Database Level",
            error: error
        });
        return;
    }
}));
app.listen(3000);
