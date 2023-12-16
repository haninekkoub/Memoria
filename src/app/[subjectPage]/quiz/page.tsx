import getAllQuestions from "@/lib/getAllQuestions";
import QuizForm from "../components/quizForm";

type Params = {
  params: {
    subjectPage: string;
  };
};

export default async function Quiz({ params: { subjectPage } }: Params) {
  const { questions } = await getAllQuestions(subjectPage);
  if (!questions.length) {
    return <p>No questions found</p>;
  }
  return (
    <div>
      <QuizForm questions={questions} />
    </div>
  );
}
