const express = require("express");
const app = express();
const PORT = 3000;
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/new", newRouter);
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  console.log(err);
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(PORT);
