import {
  getAllTasks,
  getAllTasksbyUserId,
  getTaskById,
  updateTask,
  createTask,
  deleteTask,
} from "../services/task-service";
import { Request, Response } from "express";
import errorHandler from "../utils/errorHandler";
import {
  updateSchemaTask,
  createSchemaTask,
  editSchemaTask,
} from "../libs/validators/task";

export const getAllTasksController = async (req: Request, res: Response) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json({ message: "Success", data: tasks });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const getAllTasksbyUserIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = parseInt(req.params.userId);
    const tasks = await getAllTasksbyUserId(userId);
    res.status(200).json({ message: "Success", data: tasks });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const getTaskByIdController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const task = await getTaskById(id);
    res.status(200).json({ message: "Success", data: task });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const updateTaskController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    updateSchemaTask.validateAsync(req.body);
    const task = await updateTask(id, req.body);
    res.status(200).json({ message: "Success", data: task });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const editTaskController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    editSchemaTask.validateAsync(req.body);
    const task = await updateTask(id, req.body);
    res.status(200).json({ message: "Success", data: task });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const createTaskController = async (req: Request, res: Response) => {
  try {
    createSchemaTask.validateAsync(req.body);
    req.body.userId = res.locals.user.id;
    const newTask = await createTask(req.body.title, req.body.userId);
    res.status(201).json({ message: "Success", data: newTask });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const deleteTaskController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const task = await deleteTask(id);
    res.status(200).json({ message: "Success", data: task });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};
