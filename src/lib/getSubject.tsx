import prisma from "./prisma";

export default async function getSubject(subjectPage: string) {
  const res = await prisma.subject.findUnique({
    where: {
      name: subjectPage,
    },
  });
  return res;
}
