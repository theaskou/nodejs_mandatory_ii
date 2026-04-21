import { Router } from "express";
import passwordAuthentication from "../utils/passwordAuthentication.js";
import rateLimiter from "../utils/rateLimiter.js";


const router = Router();

router.post("/login", rateLimiter, async (req, res) => {
  try {
    const { userName, password } = req.body;
    const authenticatedUser = await passwordAuthentication(userName, password);

    if (!authenticatedUser) {
      return res.status(401).json({ error: "Wrong credentials" });
    }

    req.session.userID = authenticatedUser.id;

    res.send({ data: authenticatedUser.id });

  } catch (error) {
    res.status(error.status ?? 500).json({error : "Server error" });
  }
});

export default router;
