//* Packages Imports */
import express from "express";

//* Controllers Imports */
import { createPost, getFeedPosts, getUserPosts, likePost }  from "../controllers/posts.js"

//* Middleware Imports */
import { verifyToken } from "../middleware/auth.js";

//* Multer Imports */
import { upload } from "../uploads/multer.js";

const router = express.Router();

//* Read Route */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

//* Create Route */
router.post("/", verifyToken, upload.single("picture"), createPost);

//* Update Route */
router.patch("/:id/like", verifyToken, likePost);

export default router;