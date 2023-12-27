import getAllQuestions from "@/lib/getAllQuestions";

export default async function Status({
  questionStatus,
  subjectPage,
}: {
  questionStatus: number;
  subjectPage: string;
}) {
  const { statusCounts } = await getAllQuestions(subjectPage);

  let backgroundColor: string;

  if (questionStatus === statusCounts) {
    backgroundColor = "gray";
  } else if (questionStatus > statusCounts!) {
    backgroundColor = "green";
  } else {
    backgroundColor = "red";
  }

  return (
    <div className="h-4 w-4 rounded-full" style={{ backgroundColor }}></div>
  );
}
