import prisma from "./prisma";

export default async function getAllQuestions(subjectPage: string) {
  const questions = await prisma.question.findMany({
    where: {
      subjectName: subjectPage,
    },
  });

  const units = await prisma.question.groupBy({
    by: "unit",
    where: {
      subjectName: subjectPage,
    },
  });
  const statusCounts = await prisma.question.aggregate({
    where: {
      subjectName: subjectPage,
    },
    _avg: {
      status: true,
    },
  });

  return {
    questions,
    questionsCount: questions.length,
    units,
    statusCounts: Math.round(
      statusCounts._avg.status ? statusCounts._avg.status : 0
    ),
  };
}
