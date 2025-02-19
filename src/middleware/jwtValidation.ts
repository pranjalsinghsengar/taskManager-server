import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const JWT_Validation: RequestHandler = (req:any, res:any, next) => {
  // const {token} = req.header("Authorization");
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1] || req.body.token;


  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET as string);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};

