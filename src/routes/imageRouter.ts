import { Router } from "express";
import { deleteImage } from "../controllers/imageController";
const router = Router();

router.post("/:name", deleteImage);
router.post("/:name", deleteImage);

export default router;
