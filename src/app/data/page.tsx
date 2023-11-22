import React from "react";
import getAllSubjects from "@/lib/getAllSubjects";
import getAllQuestions from "@/lib/getAllQuestions";

export default async function DataPage() {
  const SubjectData: Promise<Subject[]> = getAllSubjects();
  const subjects = await SubjectData;

  const QuestionData: Promise<Question[]> = getAllQuestions();
  const questions = await QuestionData;
  return (
    <>
      <div>
        {subjects.map((subject) => (
          <div className="flex gap-4" key={subject.id}>
            <div>id:{subject.id}</div>
            <div> name:{subject.name}</div>
          </div>
        ))}
      </div>
      <div>
        {questions.map((question) => (
          <div className="flex gap-4" key={question.id}>
            <div>id:{question.id}</div>
            <div> name: {question.name}</div>
            <div> desc:{question.description}</div>
            <div> status:{question.status}</div>
            <div> type:{question.type}</div>
            <div> unit:{question.unit}</div>
          </div>
        ))}
      </div>
    </>
  );
}
