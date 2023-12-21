"use client";

import { createNewSubject } from "@/app/action";
import { SubjectSchema } from "@/lib/types";
import { toast } from "./ui/use-toast";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";

export default function AddNewSubject() {
  const [error, setError] = useState("");
  async function clientAction(formData: FormData) {
    const newSubject = {
      name: formData.get("subjectName"),
      color: formData.get("subjectColor"),
    };

    //client side validation
    const result = SubjectSchema.safeParse(newSubject);
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

    //server side validation
    const response = await createNewSubject(result.data);
    if (response?.error) {
      setError(response.error);
    } else {
      toast({
        description: "your subject is added",
      });
      setError("");
    }
  }
  return (
    <div>
      <form
        className="flex flex-col justify-center items-start gap-4 p-4 mb-4"
        action={clientAction}
      >
        <Label>
          <span className="text-xl md:text-2xl text-brown font-bold">
            Name :
          </span>
          <Input
            required
            type="text"
            name="subjectName"
            className="bg-background text-xl rounded-md p-2 border border-brown"
          />
        </Label>
        <label className="flex justify-center items-center gap-6">
          <span className="text-xl md:text-2xl text-brown font-bold">
            Color :
          </span>
          <Input
            required
            type="color"
            name="subjectColor"
            className="bg-background text-xl rounded-md px-1 py-0.5 h-10 border border-brown w-20"
          />
        </label>
        <div className="w-full flex flex-col items-center ">
          <Button className="text-background">submit</Button>
          {error && <p className="text-red-500 ">{error}</p>}
        </div>
      </form>
    </div>
  );
}
