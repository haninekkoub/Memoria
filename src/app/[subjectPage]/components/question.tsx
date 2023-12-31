"use client";

import { useState } from "react";
import Status from "./status";
import UpdateQuestion from "./updateQuestion";
import DeletQuestion from "./deleteQuestion";

type inputs = {
  questionName: string;
  questionDescription: string;
  questionStatus: number;
  questionId: string;
  statusCounts: number;
};
export default function Question({
  questionName,
  questionDescription,
  questionStatus,
  questionId,
  statusCounts,
}: inputs) {
  const [update, setUpdate] = useState(true);
  return (
    <div>
      <div className="absolute left-4 top-4 flex justify-center items-center gap-4">
        <button>
          <DeletQuestion questionId={questionId} />
        </button>
        <button onClick={() => setUpdate(!update)}>O</button>
      </div>
      {update ? (
        <div className="flex flex-col justify-center items-center px-4 gap-4 py-6">
          <span className="flex gap-4 justify-center items-center">
            <h3>{questionName}</h3>
            <Status
              questionStatus={questionStatus}
              statusCounts={statusCounts}
            />
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
