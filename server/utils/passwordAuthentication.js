import bcrypt from "bcrypt";
import db from "../database/connection.js";

async function passwordVerification(userName, password) {
  const user = db
    .prepare(`SELECT pwd FROM users WHERE user_name = ?`)
    .get(userName);

    if (!user) {
        const error = new Error("User not found");
        error.status = 401;
        throw error;
    }

  return await bcrypt.compare(password, user.pwd);
}

export default passwordVerification;
