import { Router } from "express";
import db from "../database/connection.js";
import pwdHashing from "../utils/passwordHashing.js";
import rateLimiter from "../utils/rateLimiter.js";

const router = Router();

router.post("/users", rateLimiter, async (req, res) => {
  try {
    const { userName, email, pwd, repeatedPwd } = req.body;

    if (!userName || !email || !pwd || !repeatedPwd) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (pwd !== repeatedPwd) {
      return res
        .status(400)
        .json({ error: "The passwords don't match. Try again." });
    }

    const userNameCheck = db
      .prepare("SELECT * FROM users WHERE user_name = ?")
      .get(userName);
    if (userNameCheck) {
      return res
        .status(409)
        .json({ error: "The username is taken. Try a different one." });
    }

    const emailCheck = db
      .prepare("SELECT * FROM users WHERE email = ?")
      .get(email);
    if (emailCheck) {
      return res
        .status(409)
        .json({ error: "email already exists. Try signing in instead." });
    }

    const hashedPwd = await pwdHashing(pwd);

    db.prepare(
      "INSERT INTO users  (user_name, email, pwd, verified) VALUES (?, ?, ?, ?)",
    ).run(userName, email, hashedPwd, 0);

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(error.status ?? 500)
      .json({ message: error.message ?? "Server error" });
  }
});

export default router;
