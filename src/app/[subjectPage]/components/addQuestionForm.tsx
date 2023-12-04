"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddQuestionForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [unit, setUnit] = useState("");
  const [type, setType] = useState("");
  const [subjectId, setSubjectId] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const question = {
      name,
      description,
      unit,
      subjectId,
      type,
    };

    try {
      await fetch("/api/add-question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(question),
      });
      router.refresh();
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
            onChange={(e) => setUnit(e.target.value)}
            value={unit}
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
