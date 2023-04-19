import { Router } from "express";
import {
  addCategory,
  deleteCategory,
  editCategory,
  getCategories,
  getCategory,
} from "../controllers/categoryController";
const router = Router();

router.get("/:id", getCategory);
router.get("/", getCategories);
router.post("/", addCategory);
router.patch("/:id", editCategory);
router.delete("/:id", deleteCategory);

export default router;
