import { User } from "./user.model";

export async function createUser(data) {
  return User.create(data);
}

export async function getUsers() {
  return User.find();
}
