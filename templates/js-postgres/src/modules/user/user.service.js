import { prisma } from "../../config/prisma";

export function createUser(data) {
  return prisma.user.create({ data });
}

export function getUsers() {
  return prisma.user.findMany();
}
