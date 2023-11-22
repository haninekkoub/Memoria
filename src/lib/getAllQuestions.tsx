import prisma from "./prisma";

export default async function getAllQuestions() {
  const res = await prisma.question.findMany();

  return res;
}
