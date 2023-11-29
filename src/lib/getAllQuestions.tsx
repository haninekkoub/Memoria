import prisma from "./prisma";

export default async function getAllQuestions(subjectId: string) {
  const questions = await prisma.question.findMany({
    where: {
      subjectId: subjectId,
    },
  });

  const questionCount = await prisma.question.count({
    where: {
      subjectId: subjectId,
    },
  });

  const units = await prisma.question.groupBy({
    by: ["unit"],
    where: {
      subjectId: subjectId,
    },
  });

  return { questions, questionCount, units };
}
