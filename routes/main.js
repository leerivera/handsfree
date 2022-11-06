const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const postsController = require("../controllers/post")

router.get("/", homeController.getIndex);
router.get("/posts", postsController.createPost)

module.exports= router;
