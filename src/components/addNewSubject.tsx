"use client";
import { createNewSubject } from "@/app/action";
import { SubjectSchema } from "@/lib/types";
import toast from "react-hot-toast";
import { DialogClose, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";

export default function AddNewSubject() {
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  console.log(errorMessage);
  async function clientAction(formData: FormData) {
    const newSubject = {
      name: formData.get("subjectName"),
    };
    //client side validation
    const result = SubjectSchema.safeParse(newSubject);
    if (!result.success) {
      let errorMessage = "";
      result.error.issues.forEach((issue) => {
        errorMessage += issue.message + "\n";
      });

      toast.error(errorMessage);
      return;
    }

    //server side validation
    const response = await createNewSubject(result.data);
    if (response?.error) {
      setIsSuccess(false);
      setErrorMessage(response.error);
    } else {
      setIsSuccess(true); // Set success message
      setErrorMessage(null);
    }
  }
  return (
    <div>
      <form
        className="bg-red-200 flex flex-col justify-center items-center gap-4 p-4 mb-4"
        action={clientAction}
      >
        <label>
          <span>name</span>
          <input required type="text" name="subjectName" />
        </label>
        <button>submit</button>
        {isSuccess !== null && (
          <span className={isSuccess ? "text-green-500" : "text-red-500"}>
            {isSuccess ? "Subject added" : errorMessage}
          </span>
        )}
      </form>
    </div>
  );
}
