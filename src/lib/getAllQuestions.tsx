import prisma from "./prisma";

export default async function getAllQuestions(subjectPage: string) {
  const questions = await prisma.question.findMany({
    where: {
      subjectSlug: subjectPage,
    },
  });

  const units = await prisma.question.groupBy({
    by: "unit",
    where: {
      subjectSlug: subjectPage,
    },
  });
  const statusCounts = await prisma.question.aggregate({
    where: {
      subjectSlug: subjectPage,
    },
    _avg: {
      status: true,
    },
  });

  return {
    questions,
    units,
    statusCounts: Math.round(
      statusCounts._avg.status ? statusCounts._avg.status : 0
    ),
  };
}
