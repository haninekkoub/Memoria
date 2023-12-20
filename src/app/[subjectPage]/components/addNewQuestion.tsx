import { createNewQuestion } from "@/app/action";
import getAllSubject from "@/lib/getAllSubjects";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function AddNewQuestionForm() {
  const subjects = await getAllSubject();
  if (!subjects) notFound();

  return (
    <div>
      <form
        className="flex flex-col justify-center items-start gap-8"
        action={createNewQuestion}
      >
        <div className="flex justify-between items-start md:gap-8 w-full">
          <Label className="w-40 md:w-full">
            <span className="text-xl md:text-2xl text-brown font-bold">
              Subject :
            </span>
            <select
              name="subjectName"
              className="bg-background text-xl rounded-md p-2 border border-brown drop-shadow-input"
            >
              {subjects.map((subject, i) => {
                return (
                  <option key={i} value={subject.name}>
                    {subject.name}
                  </option>
                );
              })}
            </select>
          </Label>
          <Label className="w-20 md:w-32">
            <span className="text-xl md:text-2xl text-brown font-bold">
              Unit :
            </span>
            <Input
              required
              type="number"
              name="unit"
              className="bg-background text-xl rounded-md p-2 border border-brown"
            />
          </Label>
        </div>
        <Label>
          <span className="text-xl md:text-2xl text-brown font-bold">
            Type :
          </span>
          <select
            name="type"
            className="bg-background text-xl rounded-md p-2 border border-brown drop-shadow-input"
          >
            <option value="DATES">date</option>
            <option value="TERMINOLOGIE">terminologie</option>
            <option value="FIGURES">figures</option>
          </select>
        </Label>
        <Label>
          <span className="text-xl md:text-2xl text-brown font-bold">
            Name :
          </span>
          <Input
            required
            type="text"
            name="name"
            className="bg-background text-xl rounded-md p-2 border border-brown"
          />
        </Label>
        <Label>
          <span className="text-xl md:text-2xl text-brown font-bold">
            Description :
          </span>
          <textarea
            required
            name="description"
            className="bg-background text-xl rounded-md p-2 border border-brown drop-shadow-input"
          />
        </Label>

        <Button className="text-background">submit</Button>
      </form>
    </div>
  );
}
