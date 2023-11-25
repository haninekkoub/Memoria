import prisma from "./prisma";

export default async function getAllSubjects() {
  const res = await prisma.subject.findMany();
  return res;
}
