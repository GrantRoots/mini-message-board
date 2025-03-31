const express = require("express");
const newRouter = express.Router();

newRouter.get("/new", (req, res) => {
  res.render("form");
});

module.exports = newRouter;
