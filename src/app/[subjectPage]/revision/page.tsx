import getAllQuestions from "@/lib/getAllQuestions";
import Link from "next/link";
import { unstable_noStore } from "next/cache";

import AddNewQuestionForm from "../components/addNewQuestion";
import PopUp from "../../../components/popUp";

type Params = {
  params: {
    subjectPage: string;
  };
};

export default async function Revision({ params: { subjectPage } }: Params) {
  unstable_noStore;

  const { questions } = await getAllQuestions(subjectPage);

  return (
    <div>
      <Link href="/" className="font-drukWideWeb">
        go gome
      </Link>
      <Link href={`/${subjectPage}`}>back</Link>
      <PopUp>
        <AddNewQuestionForm />
      </PopUp>
      {questions.map((question) => {
        return (
          <div
            key={question.id}
            className="bg-background border-[#5A1C00] mb-3 rounded-xl flex gap-6 justify-center items-center p-4 font-aThuluth"
          >
            <Link
              href={`/${subjectPage}/${question.slug}`}
              key={question.id}
              className="flex gap-2 justify-center items-center"
            >
              <h3>{question.status}</h3>
              <h3>{question.name}</h3>
              <h3>{question.description}</h3>
            </Link>
            {/* <DeletQuestion questionId={question.id} /> */}
            {/* <Link href={`/${subjectPage}/${question.slug}/update`}>update</Link> */}
          </div>
        );
      })}
    </div>
  );
}
