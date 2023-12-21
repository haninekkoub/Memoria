"use client";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function QuizForm({ questions }: { questions: Question[] }) {
  const [randomPart, setRandomPart] = useState("");
  const [respondPart, setRespondPart] = useState("");
  const [userResponse, setUserResponse] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState({
    isCorrect: false,
    feedback: "",
  });
  const [responseSubmitted, setResponseSubmitted] = useState(false);

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

    return { question: questions[randomIndex], questionPart, respondPart };
  };

  useEffect(() => {
    const { questionPart, respondPart } = getRandomQuestionPart();
    setRandomPart(questionPart);
    setRespondPart(respondPart);
  }, []);
  const handleNextQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { questionPart, respondPart } = getRandomQuestionPart();
    setRandomPart(questionPart);
    setRespondPart(respondPart);
    setUserResponse("");
    setFeedbackMessage({
      isCorrect: false,
      feedback: "",
    });
    setResponseSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isCorrect = userResponse === respondPart;

    setResponseSubmitted(true);
    setFeedbackMessage({
      isCorrect,
      feedback: isCorrect ? "Correct!" : "Incorrect.",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 text-brown mt-16 md:mt-0">
      <div className="bg-background font-aThuluth text-3xl rounded-2xl w-full flex justify-center items-center py-14 md:px-20 md:w-fit border border-brown">
        {randomPart}
      </div>
      <form className="flex flex-col justify-center items-center gap-12 md:gap-6 w-full">
        <Input
          onChange={(e) => setUserResponse(e.target.value)}
          placeholder={`Respond   here`}
          type="text"
          value={userResponse}
          className=" font-aThuluth text-3xl rounded-2xl py-8 md:py-10 md:px-20 md:w-fit"
          disabled={responseSubmitted}
        />
        <div className="flex justify-center items-center gap-6">
          <button
            onClick={handleSubmit}
            className={`p-4 rounded-xl text-xl border border-brown font-drukWideWeb ${
              responseSubmitted
                ? feedbackMessage.isCorrect
                  ? "bg-[#06B8BA]" // Correct response, green background
                  : "bg-[#FA3F38]" // Incorrect response, red background
                : "bg-background" // Default background color
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
            className="py-4 px-4 rounded-2xl bg-background border border-brown font-drukWideWeb text-xl"
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
