import jwt, { JwtPayload } from "jsonwebtoken";

export const TokenDecoder = async (token: string): Promise<JwtPayload | null | undefined> => {
  if (!token) {
    throw new Error("Access denied. No token provided.");
  }

  try {
    const decoded = jwt.decode(token) as JwtPayload | null;
    return decoded;
  } catch (error) {
    throw new Error("Invalid token.");
  }
};
