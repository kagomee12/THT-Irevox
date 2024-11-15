import { Router } from "express";
import {
  getAllTasksController,
  createTaskController,
  deleteTaskController,
  editTaskController,
  getAllTasksbyUserIdController,
  getTaskByIdController,
  updateTaskController,
} from "../../controllers/task-controller";
import { Role } from "../../types/user";
import authenticate from "../../middlewares/authenticate";
import authorization from "../../middlewares/authorization";

const taskRouter = Router();

// taskRouter.get("/", authenticate, authorization("admin" as Role), getAllTasksController);
taskRouter.get(
  "/",
  authenticate,
  getAllTasksController
);
taskRouter.get("/:id", authenticate, getTaskByIdController);
taskRouter.get("/user/:userId", authenticate, getAllTasksbyUserIdController);
taskRouter.patch("/edit/:id", authenticate, editTaskController);
taskRouter.patch("/:id", authenticate, updateTaskController);
taskRouter.post("/", authenticate, createTaskController);
taskRouter.delete("/:id",authenticate, deleteTaskController);

export default taskRouter;
