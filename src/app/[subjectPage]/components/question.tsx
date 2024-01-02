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
export function SvgPen() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

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
        <button onClick={() => setUpdate(!update)}>
          <SvgPen />
        </button>
        <button>
          <DeletQuestion questionId={questionId} />
        </button>
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
          <h3 className="text-right">{questionDescription}</h3>
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
