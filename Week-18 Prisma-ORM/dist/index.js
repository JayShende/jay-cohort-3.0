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
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const client = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/addUser", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, age, city } = req.body;
    try {
        const newEntry = yield client.user.create({
            data: {
                username: username,
                password: password,
                age: age,
                city: city
            }
        });
        res.send({
            message: "Data Added Successfully",
            data: newEntry
        });
    }
    catch (error) {
        res.send({
            message: "Some Error While Inserting The Data into The database",
            error: error
        });
        return;
    }
}));
app.post("/addTodo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, title, description } = req.body;
    try {
        const newEntry = yield client.todos.create({
            data: {
                user_id: user_id,
                title: title,
                description: description,
                done: false
            }
        });
        res.send({
            message: "Todo Added Successfully",
            data: newEntry
        });
    }
    catch (error) {
        res.send({
            message: "Some Error While Adding the Data",
            error: error
        });
        return;
    }
}));
app.get("/fetchAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield client.user.findMany();
    res.json({
        data
    });
}));
app.get("/fetchId/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    const data = yield client.user.findFirst({
        where: {
            id: userId
        },
        include: {
            todos: true,
            // use
            // rname:true
        }
    });
    res.json({
        data
    });
}));
app.listen(3000);
