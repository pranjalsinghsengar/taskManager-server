import { Request, Response, RequestHandler } from "express";
// import UserModel from "./path-to-your-user-model"; // Update with the actual path
import bcrypt from "bcryptjs";
import UserModel from "../models/User";
import jwt from "jsonwebtoken";

export const LoginController: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(404).json({ success:false,message: "User not found" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({  success:false,message: "Invalid credentials" });
      return;
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: "2d" });
    res.json({  success:true,token, user });
  } catch (error) {
    console.error("Error in Login/Register:", error);
    res.status(500).json({ success:false, message: "Server error", error: error});
  }

};

export const RegisterController: RequestHandler = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      res.status(400).json({  success:false,message: "User already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, email, password: hashedPassword });
    await newUser.save();

    console.log(newUser)

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET as string, { expiresIn: "1h" });
    res.status(201).json({ success:true, token, user: newUser });
  } catch (error) {
    console.error("Error in Login/Register:", error);
    res.status(500).json({ success:false, message: "Server error", error: error });
  }

};
