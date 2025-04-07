const express = require("express");
const indexRouter = express.Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.showAllMessages);
indexRouter.get("/message", indexController.openMessage);
indexRouter.post("/new", indexController.addMessage);

module.exports = indexRouter;
