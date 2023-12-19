"use client";

import { createNewSubject } from "@/app/action";
import { SubjectSchema } from "@/lib/types";
import { toast } from "./ui/use-toast";
import { useState } from "react";

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
        className="flex flex-col justify-center items-center gap-4 p-4 mb-4"
        action={clientAction}
      >
        <label>
          <span>name</span>
          <input required type="text" name="subjectName" />
        </label>
        <label>
          <span>Color</span>
          <input required type="color" name="subjectColor" />
        </label>
        <button>submit</button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
