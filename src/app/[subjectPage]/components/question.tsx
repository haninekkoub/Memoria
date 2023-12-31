"use client";

import { useState } from "react";
import Status from "./status";
import UpdateQuestion from "./updateQuestion";

type inputs = {
  questionName: string;
  questionDescription: string;
  questionStatus: number;
  questionId: string;
  subjectPage: string;
};
export default function Question({
  questionName,
  questionDescription,
  questionStatus,
  questionId,
  subjectPage,
}: inputs) {
  // const [update, setUpdate] = useState(true);
  const update = true;
  return (
    <div>
      <button
        className="absolute top-4 left-4"
        // onClick={(prev) => !prev}
      >
        O
      </button>

      {update ? (
        <div className="flex flex-col justify-center items-center px-4 gap-4 py-6">
          <span className="flex gap-4 justify-center items-center">
            <h3>{questionName}</h3>
            {/* <Status questionStatus={questionStatus} subjectPage={subjectPage} /> */}
          </span>
          <h3
            contentEditable={true}
            className="text-right"
            onBlur={(e) => console.log(e.currentTarget.innerText)}
          >
            {questionDescription}
          </h3>
        </div>
      ) : (
        <UpdateQuestion
          questionName={questionName}
          questionDescription={questionDescription}
          questionId={questionId}
        />
      )}
    </div>
  );
}
