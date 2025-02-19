import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const ValidateToken: RequestHandler = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1] || req.body.token;

  if (!token) {
    res.status(401).json({ message: "Access denied. No token provided." });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    // console.log("Decoded Token:", decoded);
    res.status(200).json({ success: true, message: "authorized user" });
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};
