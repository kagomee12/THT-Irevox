import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers.authorization;
    const token = authorization?.split(" ")[1];
    
    if (!token) {
      res.status(401).json({ status: 401, message: "no authorized" });
      return;
    }

    const payload = jwt.verify(
      token,
      process.env.SECRETKEY || "merdekaataumati"
    );

    if (!payload) {
      res.status(401).json({ status: 401, message: "no Unauthorized" });
      return;
    }
    
    res.locals.user = payload;
    await next();
  } catch (error) {
    next(error);
  }
};

export default authenticate