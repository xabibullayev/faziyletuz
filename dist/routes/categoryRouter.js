"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = require("../controllers/categoryController");
const router = (0, express_1.Router)();
router.get("/:id", categoryController_1.getCategory);
router.get("/", categoryController_1.getCategories);
router.post("/", categoryController_1.addCategory);
router.patch("/:id", categoryController_1.editCategory);
router.delete("/:id", categoryController_1.deleteCategory);
exports.default = router;
