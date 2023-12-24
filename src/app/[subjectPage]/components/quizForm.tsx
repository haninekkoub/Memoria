"use client";

import { stausUpdate } from "@/app/action";
import { Input } from "@/components/ui/input";
import { unstable_noStore } from "next/cache";
import { useEffect, useState } from "react";

export default function QuizForm({ questions }: { questions: Question[] }) {
  unstable_noStore;
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  console.log("this is question", currentQuestion);
  const [randomPart, setRandomPart] = useState("");
  const [respondPart, setRespondPart] = useState("");
  const [userResponse, setUserResponse] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState({
    isCorrect: false,
    feedback: "",
  });
  const [responseSubmitted, setResponseSubmitted] = useState(false);
  const [updateStatus, setUpdateStatus] = useState<number>();
  console.log("this is updateStatus :", updateStatus);

  const getRandomQuestionPart = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const currentQuestion = questions[randomIndex];
    const questionPart =
      Math.random() > 0.5
        ? `${currentQuestion.name}`
        : `${currentQuestion.description}`;
    const respondPart =
      questionPart === currentQuestion.name
        ? currentQuestion.description
        : currentQuestion.name;
    const currentStatus = currentQuestion.status;
    return { currentQuestion, currentStatus, questionPart, respondPart };
  };

  useEffect(() => {
    const { questionPart, respondPart, currentQuestion, currentStatus } =
      getRandomQuestionPart();
    setRandomPart(questionPart);
    setRespondPart(respondPart);
    setCurrentQuestion(currentQuestion);
    setUpdateStatus(currentStatus);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    const isCorrect = userResponse === respondPart;
    const newStatus = isCorrect ? updateStatus! + 1 : updateStatus! - 1;

    setUpdateStatus(newStatus);
    setResponseSubmitted(true);
    setFeedbackMessage({
      isCorrect,
      feedback: isCorrect ? "Correct!" : "Incorrect.",
    });
  };

  const handleNextQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { questionPart, respondPart, currentQuestion, currentStatus } =
      getRandomQuestionPart();
    setRandomPart(questionPart);
    setRespondPart(respondPart);
    setUpdateStatus(currentQuestion.status);
    setUserResponse("");
    setFeedbackMessage({
      isCorrect: false,
      feedback: "",
    });
    setCurrentQuestion(currentQuestion);
    setResponseSubmitted(false);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 text-brown mt-16 md:mt-0">
      <div className="bg-background font-aThuluth text-3xl rounded-2xl w-full flex justify-center items-center py-14 md:px-20 md:w-fit border border-brown">
        {randomPart}
      </div>
      <form
        action={stausUpdate}
        className="flex flex-col justify-center items-center gap-12 md:gap-6 w-full"
      >
        <input name="questionId" type="hidden" value={currentQuestion?.id} />
        <input
          name="questionSubject"
          type="hidden"
          value={currentQuestion?.subjectName!}
        />

        <input
          name="updateStatus"
          type="hidden"
          value={updateStatus?.toString()}
        />
        <Input
          onChange={(e) => setUserResponse(e.target.value)}
          placeholder={`Respond   here`}
          type="text"
          value={userResponse}
          className=" font-aThuluth text-3xl rounded-2xl py-8 md:py-10 md:px-20 md:w-fit"
          disabled={responseSubmitted}
        />
        <div className="flex justify-center items-center gap-6 font-semibold font-expressway text-2xl">
          <button
            onClick={handleSubmit}
            className={`p-4 rounded-xl border border-brown ${
              responseSubmitted
                ? feedbackMessage.isCorrect
                  ? "bg-[#06B8BA]"
                  : "bg-[#FA3F38]"
                : "bg-background"
            }`}
          >
            {responseSubmitted
              ? feedbackMessage.isCorrect
                ? "Correct"
                : "Incorrect"
              : "Respond"}
          </button>
          <button
            onClick={handleNextQuestion}
            className="py-4 px-4 rounded-2xl bg-background border border-brown"
          >
            next
          </button>
        </div>
        {responseSubmitted && !feedbackMessage.isCorrect && (
          <span className="text-center rounded-2xl bg-[#06B8BA] px-6 py-6 text-2xl border border-input font-aThuluth">
            {respondPart}
          </span>
        )}
      </form>
    </div>
  );
}
