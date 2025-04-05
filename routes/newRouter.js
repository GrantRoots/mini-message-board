const express = require("express");
const newRouter = express.Router();
const newController = require("../controllers/newController");

newRouter.get("/", newController.showForm());

module.exports = newRouter;
