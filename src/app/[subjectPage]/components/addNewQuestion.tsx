import { createNewQuestion } from "@/app/action";
import getAllSubject from "@/lib/getAllSubjects";
import { notFound } from "next/navigation";

export default async function AddNewQuestionForm() {
  const subjects = await getAllSubject();
  if (!subjects) notFound();

  return (
    <div>
      <form
        className="bg-red-200 flex flex-col justify-center items-center gap-4 p-4 mb-4"
        action={createNewQuestion}
      >
        <label>
          <span>unit</span>
          <input required type="number" name="unit" />
        </label>
        <label>
          <span>type</span>
          <select name="type">
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
          <input required type="text" name="name" />
        </label>
        <label>
          <span>description</span>
          <textarea required name="description" />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}
