import { createNewQuestion } from "@/app/action";
import getAllSubject from "@/lib/getAllSubjects";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";

export default async function AddNewQuestionForm() {
  const subjects = await getAllSubject();
  if (!subjects) notFound();

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center gap-4 p-4 mb-4"
        action={createNewQuestion}
      >
        <Label>
          <span>unit</span>
          <Input required type="number" name="unit" />
        </Label>
        <Label>
          <span>type</span>
          <select name="type">
            <option value="DATES">date</option>
            <option value="TERMINOLOGIE">terminologie</option>
            <option value="FIGURES">figures</option>
          </select>
        </Label>
        <Label>
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
        </Label>
        <Label>
          <span>name</span>
          <Input required type="text" name="name" />
        </Label>
        <Label>
          <span>description</span>
          <textarea required name="description" />
        </Label>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button>submit</Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </div>
  );
}
