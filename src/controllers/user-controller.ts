import {
  getAllUsers,
  getUserById,
  getUserByUsername,
  updateUser,
} from "../services/user-service";
import { Request, Response } from "express";
import errorHandler from "../utils/errorHandler";
import { updateSchemaUser } from "../libs/validators/user";

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({ message: "Success", data: users });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const user = await getUserById(id);
    res.status(200).json({ message: "Success", data: user });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const getUserByUsernameController = async (
  req: Request,
  res: Response
) => {
  try {
    const username = req.params.username;
    const user = await getUserByUsername(username);
    res.status(200).json({ message: "Success", data: user });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    updateSchemaUser.validateAsync(req.body);
    const user = await updateUser(id, req.body);
    res.status(200).json({ message: "Success", data: user });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};
