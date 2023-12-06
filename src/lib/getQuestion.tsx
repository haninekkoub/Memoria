import prisma from "./prisma";

export default async function getQuestion(questionPage: string) {
  const res = await prisma.question.findUnique({
    where: {
      id: questionPage,
    },
  });
  return res;
}
