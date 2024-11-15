import db from "../libs/db";
import { Role, TUser } from "../types/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import ERROR from "../utils/constants/ERROR_LIST";

export const registerUser = async (
  username: string,
  password: string,
  role: Role
) => {
  try {
    const existedUser = await db.user.findUnique({
      where: {
        username,
      },
    });

    if (existedUser) {
      throw new Error("User already exists");
    }

    const hassedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username: username,
        password: hassedPassword,
        role: role,
      },
    });
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      throw new Error("Invalid username");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign(user, process.env.SECRETKEY || "merdekaataumati", {
      expiresIn: "1d",
    });
    return token;
  } catch (error: any) {
    throw error;
  }
};
