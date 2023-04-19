"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = require("../controllers/postController");
const uploadMiddleware_1 = require("../middlewares/uploadMiddleware");
const router = (0, express_1.Router)();
router.get("/:id", postController_1.getPost);
router.get("/", postController_1.getPosts);
router.post("/", uploadMiddleware_1.uploadImage, postController_1.addPost);
exports.default = router;