import { Router } from "express";
import passwordAuthentication from "../utils/passwordAuthentication.js";
import rateLimiter from "../utils/rateLimiter.js";


const router = Router();

router.post("/login", rateLimiter, async (req, res) => {
  try {
    const { userName, password } = req.body;
    const authenticatedUser = await passwordAuthentication(userName, password);

    if (!authenticatedUser) {
      return res.status(401).json({ error: "No user was found with those credentials" });
    }

    req.session.userID = authenticatedUser.id;

    res.send({ data: authenticatedUser.id });

  } catch (error) {
    console.log(error);
    res.status(error.status).json({error});
  }
});

export default router;
