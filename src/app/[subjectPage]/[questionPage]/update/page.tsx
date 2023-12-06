import UpdateQuestion from "@/app/[subjectPage]/components/updateQuestionForm";
import getQuestion from "@/lib/getQuestion";
import getSubject from "@/lib/getSubject";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = {
  params: {
    questionPage: string;
    subjectPage: string;
  };
};

export default async function Updating({
  params: { questionPage, subjectPage },
}: Params) {
  const subject = await getSubject(subjectPage);
  const question = await getQuestion(questionPage);

  if (!subject || !questionPage || !question) notFound();

  return (
    <div>
      <Link href={`/${subjectPage}/${question.id}`}>go back</Link>
      <UpdateQuestion
        currentQuestion={question}
        questionId={question.id}
        subjectPage={subjectPage}
      />
    </div>
  );
}
