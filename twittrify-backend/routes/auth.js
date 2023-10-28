//* Packages Imports */
import express from "express";

//* Controllers Imports */
import { register, login } from "../controllers/auth.js";

//* Multer Imports */
import { upload } from "../uploads/multer.js";

const router = express.Router();

router.post("/register", upload.single("picture"), register);
router.post("/login", login);

export default router;