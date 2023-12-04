import getAllQuestions from "@/lib/getAllQuestions";
import getSubject from "@/lib/getSubject";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddQuestionForm from "../components/addQuestionForm";

type Params = {
  params: {
    subjectPage: string;
  };
};

export default async function Revision({ params: { subjectPage } }: Params) {
  const subject = await getSubject(subjectPage);
  if (!subject) notFound();
  const { questions } = await getAllQuestions(subject.id);

  console.log({ questions });
  return (
    <div>
      <Link href="/">go gome </Link>
      <Link href={`/${subjectPage}`}>back</Link>
      <AddQuestionForm />
      {questions.map((question) => {
        return (
          <div
            key={question.id}
            className="flex gap-2 justify-center items-center bg-orange-200 mb-4 p-4 rounded-md"
          >
            <h3>{question.status}</h3>
            <h3>{question.name}</h3>
            <h3>{question.description}</h3>
          </div>
        );
      })}
    </div>
  );
}
