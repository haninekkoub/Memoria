"use client";
import { createNewQuestion } from "@/app/action";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { QuestionSchema } from "@/lib/types";
import { useState } from "react";

export default function AddNewQuestionForm({
  subjectSlug,
}: {
  subjectSlug: string;
}) {
  const [error, setError] = useState("");

  async function clientAction(formData: FormData) {
    const newQuestion = {
      subjectSlug: formData.get("subjectSlug"),
      unit: parseInt(formData.get("unit") as string),
      type: formData.get("type"),
      name: formData.get("name"),
      description: formData.get("description"),
    };
    const result = QuestionSchema.safeParse(newQuestion);
    if (!result.success) {
      let errorMessage = "";
      result.error.issues.forEach((issue) => {
        errorMessage += issue.message + "\n";
      });
      toast({
        description: errorMessage,
      });
      return;
    }
    const response = await createNewQuestion(result.data);
    if (response?.error) {
      setError(response.error);
    } else {
      toast({
        description: "your Question is added",
      });
      setError("");
    }
  }
  return (
    <div>
      <form
        className="flex flex-col justify-center items-start gap-8"
        action={clientAction}
      >
        <input name="subjectSlug" hidden value={subjectSlug} />
        <div className="flex justify-between items-start gap-4 md:gap-8 w-full">
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
        {error && <p className="text-red-500 ">{error}</p>}
      </form>
    </div>
  );
}
