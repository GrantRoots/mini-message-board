const express = require("express");
const app = express();
PORT = 3000;
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(PORT);
