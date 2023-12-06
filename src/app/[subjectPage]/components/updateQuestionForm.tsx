"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateQuestion({
  currentQuestion,
  questionId,
  subjectPage,
}: {
  currentQuestion: Question;
  questionId: string;
  subjectPage: string;
}) {
  const router = useRouter();

  const [name, setName] = useState(currentQuestion.name.toString());
  const [description, setDescription] = useState(
    currentQuestion.description.toString()
  );
  const [unit, setUnit] = useState(currentQuestion.unit);
  const [type, setType] = useState(`${currentQuestion.type}`);
  const [status, setStatus] = useState(currentQuestion.status);
  const [subjectId, setSubjectId] = useState(`${currentQuestion.subjectId}`);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const question = {
      name,
      description,
      unit,
      subjectId,
      status,
      type,
    };

    try {
      await fetch(`/api/question/${questionId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(question),
      });
      router.refresh();
      router.prefetch(`/${subjectPage}/${questionId}`);
      router.push(`/${subjectPage}/${questionId}`);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <form
        className="bg-red-200 flex flex-col justify-center items-center gap-4 p-4 mb-4"
        onSubmit={handleSubmit}
      >
        <label>
          <span>unit</span>
          <input
            required
            type="number"
            onChange={(e) => setUnit(Number(e.target.value))}
            value={unit}
          />
        </label>
        <label>
          <span>status</span>
          <input
            required
            type="number"
            onChange={(e) => setStatus(Number(e.target.value))}
            value={status}
          />
        </label>
        <label>
          <span>type</span>
          <select onChange={(e) => setType(e.target.value)} value={type}>
            <option value="DATES">date</option>
            <option value="TERMINOLOGIE">terminologie</option>
            <option value="FIGURES">figures</option>
          </select>
        </label>
        <label>
          <span>subjectId</span>
          <input
            required
            type="text"
            onChange={(e) => setSubjectId(e.target.value)}
            value={subjectId}
          />
        </label>
        <label>
          <span>name</span>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>description</span>
          <textarea
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}
