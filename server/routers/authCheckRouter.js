import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import db from "../database/connection.js";

const router = Router();

router.get("/authcheck", authMiddleware, (req, res) => {
  const user = db.prepare("SELECT id, user_name FROM users WHERE id = ?").get(req.session.userID);
  res.json({ userID: user.id, userName: user.user_name });
});

export default router;
