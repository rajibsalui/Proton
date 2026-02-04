import { User } from "./user.model";

export async function createUser(data: any) {
  return User.create(data);
}

export async function getUsers() {
  return User.find();
}
