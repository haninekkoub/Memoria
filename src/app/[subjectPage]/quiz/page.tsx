import getAllQuestions from "@/lib/getAllQuestions";
import QuizForm from "../components/quizForm";
import { unstable_noStore } from "next/cache";

type Params = {
  params: {
    subjectPage: string;
  };
};

export default async function Quiz({ params: { subjectPage } }: Params) {
  unstable_noStore;

  const { questions } = await getAllQuestions(subjectPage);
  if (!questions.length) {
    return <p>No questions found</p>;
  }
  return (
    <div className="px-6 relative z-20 overflow-y-auto pb-8 no-scrollbar">
      <QuizForm questions={questions} />
    </div>
  );
}
