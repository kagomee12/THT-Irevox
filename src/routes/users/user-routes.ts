import { Router } from "express";
import * as userController from "../../controllers/user-controller";

const userRouter = Router();

userRouter.get("/", userController.getAllUsersController);
userRouter.get("/:id", userController.getUserByIdController);
userRouter.get("/username/:username", userController.getUserByUsernameController);
userRouter.patch("/:id", userController.updateUserController);

export default userRouter;