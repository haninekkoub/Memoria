import getAllQuestions from "@/lib/getAllQuestions";
import Link from "next/link";
import { unstable_noStore } from "next/cache";
import DeletQuestion from "../components/deleteQuestion";

type Params = {
  params: {
    subjectPage: string;
  };
};

export default async function Revision({ params: { subjectPage } }: Params) {
  unstable_noStore;

  const { questions } = await getAllQuestions(subjectPage);
  console.log(questions);
  return (
    <div>
      <Link href="/">go gome </Link>
      <Link href={`/${subjectPage}`}>back</Link>
      {questions.map((question) => {
        return (
          <div className="flex gap-6 justify-center items-center bg-orange-200 mb-4 p-4 rounded-md">
            <Link
              href={`/${subjectPage}/${question.slug}`}
              key={question.id}
              className="flex gap-2 justify-center items-center"
            >
              <h3>{question.status}</h3>
              <h3>{question.name}</h3>
              <h3>{question.description}</h3>
            </Link>
            <DeletQuestion questionId={question.id} />
            <Link href={`/${subjectPage}/${question.slug}/update`}>update</Link>
          </div>
        );
      })}
    </div>
  );
}
