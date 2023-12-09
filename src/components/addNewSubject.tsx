import { createNewSubject } from "@/app/action";
import getAllSubject from "@/lib/getAllSubjects";
import { notFound } from "next/navigation";

export default async function AddNewQuestionForm() {
  const subjects = await getAllSubject();
  if (!subjects) notFound();

  return (
    <div>
      <form
        className="bg-red-200 flex flex-col justify-center items-center gap-4 p-4 mb-4"
        action={createNewSubject}
      >
        <label>
          <span>name</span>
          <input required type="text" name="subjectName" />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}
