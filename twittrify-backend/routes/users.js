//* Packages Imports */
import express from "express";

//* Controller Imports */
import { getUser, getUserFriends, addRemoveFriend } from "../controllers/users.js";

//* Middleware Imports */
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//* Read Routes */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

//* Update Routes */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;