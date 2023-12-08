import prisma from "./prisma";

export default async function getAllQuestions(subjectPage: string) {
  const questions = await prisma.question.findMany({
    where: {
      subjectName: subjectPage,
    },
  });

  const units = await prisma.question.groupBy({
    by: ["unit"],
    where: {
      subjectName: subjectPage,
    },
  });

  return { questions, questionsCount: questions.length, units };
}
