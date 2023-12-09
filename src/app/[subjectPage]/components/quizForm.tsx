"use client";

import { useEffect, useState } from "react";

export default function QuizForm({ questions }: { questions: Question[] }) {
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponse, setUserResponse] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState({
    isCorrect: false,
    feedback: "",
  });
  const [responseSubmitted, setResponseSubmitted] = useState(false);
  const [randomPart, setRandomPart] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const currentQuestion = questions[randomIndex];

    const randomPart =
      Math.random() > 0.5
        ? `${currentQuestion.name}`
        : `${currentQuestion.description}`;
    setRandomPart(randomPart);
    setCurrentQuestion(currentQuestion);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }, []);

  const handleNextQuestion = () => {
    // Update current question and random part
    const newQuestion = questions[currentQuestionIndex + 1];
    setCurrentQuestion(newQuestion);
    const newRandomPart =
      Math.random() > 0.5 ? newQuestion.name : newQuestion.description;
    setRandomPart(newRandomPart);

    // Clear user response
    setUserResponse("");
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", userResponse);
    const correctAnswer =
      randomPart !== currentQuestion!.name
        ? currentQuestion!.name
        : currentQuestion!.description;

    const isCorrect = userResponse === correctAnswer;

    setResponseSubmitted(true);

    setFeedbackMessage({
      isCorrect,
      feedback: isCorrect ? "Correct!" : "Incorrect.",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-orange-200">
      Quiz form
      <div>{randomPart}</div>
      <form className="flex flex-col justify-center items-center gap-2 bg-green-200">
        <input
          onChange={(e) => setUserResponse(e.target.value)}
          placeholder={`Enter the ${randomPart ? "description" : "name"}`}
          value={userResponse}
        />

        <button
          onClick={handleSubmit}
          className="p-4 bg-yellow-200 rounded-xl "
        >
          respond
        </button>
        {responseSubmitted && (
          <>
            {feedbackMessage.isCorrect && (
              <span className="correct">Correct!</span>
            )}
            {!feedbackMessage.isCorrect && (
              <span className="text-center">
                Incorrect.
                <br />
                this is the corect respond <br />
                {randomPart !== currentQuestion!.name
                  ? currentQuestion!.name
                  : currentQuestion!.description}
              </span>
            )}
          </>
        )}
        <button onClick={handleNextQuestion}>next question</button>
      </form>
    </div>
  );
}
