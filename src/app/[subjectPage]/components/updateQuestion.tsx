import { updateQuestion } from "@/app/action";
import { notFound } from "next/navigation";
import getAllSubject from "@/lib/getAllSubjects";

export default async function UpdateQuestion({
  currentQuestion,
  questionId,
}: {
  currentQuestion: Question;
  questionId: string;
}) {
  const subjects = await getAllSubject();
  if (!subjects) notFound();

  return (
    <div>
      hello new form
      <form
        className="bg-red-200 flex flex-col justify-center items-center gap-4 p-4 mb-4"
        action={updateQuestion}
      >
        <label>
          <span>unit</span>
          <input
            required
            type="number"
            name="unit"
            defaultValue={currentQuestion.unit}
          />
        </label>
        <label>
          <span>type</span>
          <select name="type" defaultValue={currentQuestion.type}>
            <option value="DATES">date</option>
            <option value="TERMINOLOGIE">terminologie</option>
            <option value="FIGURES">figures</option>
          </select>
        </label>
        <label>
          <span>subjectName</span>
          <select name="subjectName">
            {subjects.map((subject, i) => {
              return (
                <option key={i} value={subject.name}>
                  {subject.name}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          <span>name</span>
          <input
            required
            type="text"
            name="name"
            defaultValue={currentQuestion.name}
          />
        </label>
        <label>
          <span>description</span>
          <textarea
            required
            name="description"
            defaultValue={currentQuestion.description}
          />
        </label>
        <label>
          <span>status</span>
          <input required name="status" defaultValue={currentQuestion.status} />
        </label>
        <input name="questionId" type="hidden" value={questionId} />
        <button>submit</button>
      </form>
    </div>
  );
}
