import { Request, Response } from "express";
import { createUser, getUsers } from "./user.service";

export async function createUserHandler(req: Request, res: Response) {
  const user = await createUser(req.body);
  res.status(201).json(user);
}

export async function getUsersHandler(req: Request, res: Response) {
  const users = await getUsers();
  res.json(users);
}
