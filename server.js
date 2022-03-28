import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
// import fs from "fs";

dotenv.config();

connectDB();

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// setup the logger
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Api is running");
});
app.use("/api", authRoutes);
app.use("/api", userRoutes);

// Routes middleware
// fs.readdirSync("./routes").map((item) =>
//   app.use("/api", import("./routes/" + item))
// );

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT} `.yellow.green
  )
);
