import { Router } from "express";
import authrouter from "./auth/auth-routes";
import userRouter from "./users/user-routes";
import taskRouter from "./task/task-router";

const router = Router();

router.use("/auth", authrouter)
router.use("/users", userRouter)
router.use("/task", taskRouter)


export default router