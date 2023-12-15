import React from "react";
import AddNewQuestionForm from "./addNewSubject";

export default function NavBar() {
  return (
    <div className="flex ">
      <div className="text-3xl font-bold p-6">Memoria</div>
      <AddNewQuestionForm />
      <AddNewQuestionForm />
    </div>
  );
}
