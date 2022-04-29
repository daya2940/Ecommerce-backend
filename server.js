const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const subCategoryRoutes = require("./routes/subcategory");
const productRoute = require("./routes/product");

// const fs from "fs";

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
app.use("/api", categoryRoutes);
app.use("/api", subCategoryRoutes);
app.use("/api", productRoute);

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
