const express = require("express");
const { z } = require("zod");
const { auth } = require("./auth");
const { UserModel, TodosModel } = require("./db");

const jwt = require("jsonwebtoken");
const JWT_SECRET = "JayShende007@";
const bcrypt = require("bcrypt");

// Connecting The DataBase
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://Jayshende:S12Ce8MKll5AtCPl@cluster0.i3qcn.mongodb.net/todo-app-database");
  } catch (err) {
    console.log("unable to Connect to the DB");
  }
}

connectDB();

const app = express();
app.use(express.json());

// Writting an Auth Middleware which checks weather the token recived as valid or not

app.post("/signup", async function (req, res) {
  // We Should Check First Weather the credentials have been used or not and then work accordingly
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const schema = z.object({
    name: z.string().max(100),
    email: z.string().min(5).max(20).email(),
    password: z
      .string()
      .min(8)
      .max(20)
      .refine(
        function (password) {
          return /[a-z]/.test(password);
        },
        {
          message: "Password must contain at least one lowercase letter",
        }
      )
      .refine(
        function (password) {
          return /[A-Z]/.test(password);
        },
        {
          message: "Password must contain at least one Uppercase letter",
        }
      )
      .refine(
        function (password) {
          return /[\W_]/.test(password);
        },
        {
          message: "Password must contain at least one special character",
        }
      )
      .refine(
        function (password) {
          return /[0-9]/.test(password);
        },
        {
          message: "The Password must contain at least one number ",
        }
      ),
  });

  const result = schema.safeParse(req.body);

  if (result.success) {
    const hashedpwd = await bcrypt.hash(password, 5);

    try {
      await UserModel.create({
        name: name,
        email: email,
        password: hashedpwd,
      });
    } catch (err) {
      res.send({
        message: "User Already Exist",
      });
      return;
    }

    res.json({
      message: "You Are Now Signed in",
    });
  } else {
    res.send(result.error);
  }
});

app.post("/signin", async function (req, res) {
  // This endpoint Check if the Credentails are avaliable in the db and then issue an token accordingly
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
  });
  console.log(response);
  if(response==null)
  {
    res.json({
      message:"Signup Please"
    });
    return;
  }
  const ans = await bcrypt.compare(password, response.password);

  if (ans) {
    const token = jwt.sign(
      {
        id: response._id.toString(), // its an object so we have to convert it to string to continue
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Incorrect Credentials",
    });
  }
});

// Both the Below Todos are Authenticated ie Can Only Be Hittted when the User is Loggedin

app.post("/todos", auth, async function (req, res) {
  // res.send(req.userID);
  const title = req.body.title;
  await TodosModel.create({
    UserId: req.userID,
    title: title,
    done: false,
  });

  res.json({
    message: "To Added",
  });
});

// The Below Api Endpoint is used to Retrive all The Todos Specific to a User

app.get("/todos", auth, async function (req, res) {
  const response = await TodosModel.find({
    UserId: req.userID,
  });

  res.send(response);
});

app.listen(3000);
