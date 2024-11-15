import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/auth-service";
import errorHandler from "../utils/errorHandler";
import { createSchemaUser, loginSchemaUser } from "../libs/validators/user";
import db from "../libs/db";

export const register = async (req: Request, res: Response) => {
  try {
    await createSchemaUser.validateAsync(req.body);

    const result = await registerUser(
      req.body.username,
      req.body.password,
      req.body.role
    );
    res.status(201).json({ message: "User created", data: result });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    await loginSchemaUser.validateAsync(req.body);
    const result = await loginUser(req.body.username, req.body.password);
    res.status(200).json({ message: "Login success", data: result });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const getUserme = async (req: Request, res: Response) => {
  try {   
    const user = await db.user.findFirst({
      where: {
        id: res.locals.user.id,
      },
    });
    res.status(200).json({ message: "Success", data: user });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};
