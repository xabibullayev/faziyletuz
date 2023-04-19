import { Router } from "express";
import { addPost, getPost, getPosts } from "../controllers/postController";
import { uploadImage } from "../middlewares/uploadMiddleware";

const router = Router();

router.get("/:id", getPost);
router.get("/", getPosts);
router.post("/", uploadImage, addPost);

export default router;
