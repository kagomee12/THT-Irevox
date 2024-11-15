import { NextFunction, Request, Response } from "express";
import { Role } from "../types/user";

export default function authorization(role: Role) {
  return function (req: Request, res: Response, next: NextFunction) {
    try {
      const userRole = res.locals.user.role;
      if (userRole === role) {
        next();
      } else {
        res.status(403).json({ message: "Forbidden" });
        return;
      }
    } catch (error) {
      next(error);
    }
  };
}
