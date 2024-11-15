import { Router } from "express";
import * as authContorller from "../../controllers/auth-controller";
import authenticate from "../../middlewares/authenticate";

const authrouter = Router();

authrouter.post("/register", authContorller.register);
authrouter.post("/login", authContorller.login);
authrouter.get("/me", authenticate, authContorller.getUserme);

export default authrouter;
