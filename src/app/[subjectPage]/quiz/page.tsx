import getAllQuestions from "@/lib/getAllQuestions";
import QuizForm from "../components/quizForm";

type Params = {
  params: {
    subjectPage: string;
  };
};

export default async function Quiz({ params: { subjectPage } }: Params) {
  const { questions } = await getAllQuestions(subjectPage);

  return (
    <div>
      <QuizForm questions={questions} />
    </div>
  );
}
