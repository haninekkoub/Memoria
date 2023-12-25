import getAllQuestions from "@/lib/getAllQuestions";
import Link from "next/link";
import { unstable_noStore } from "next/cache";

import AddNewQuestionForm from "../components/addNewQuestion";
import PopUp from "../../../components/popUp";
import DeletQuestion from "../components/deleteQuestion";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Params = {
  params: {
    subjectPage: string;
  };
};

export default async function Revision({ params: { subjectPage } }: Params) {
  unstable_noStore;

  const { questions } = await getAllQuestions(subjectPage);
  return (
    <div>
      <div className="flex justify-end gap-4 w-full">
        <Button variant="outline">
          <Link href={`/${subjectPage}`}>back</Link>
        </Button>
        <PopUp title={"Add Question"}>
          <AddNewQuestionForm />
        </PopUp>
      </div>
      {questions.map((question) => {
        return (
          <Dialog key={question.id}>
            <DialogTrigger asChild className="cursor-pointer">
              <div className=" bg-background border-[#5A1C00] mb-3 mx-auto rounded-lg py-6 px-3 font-meduim text-base font-aThuluth max-w-[554px] flex gap-2 justify-end items-center w-full">
                <h3 className="w-full text-right overflow-hidden whitespace-nowrap ">
                  {question.description}
                </h3>
                <h3 className="w-40 text-right overflow-hidden whitespace-nowrap">
                  {question.name}
                </h3>
                <h3 className="w-[50px] text-right ">{question.status}</h3>

                {/* <DeletQuestion questionId={question.id} /> */}
                {/* <Link href={`/${subjectPage}/${question.slug}/update`}>update</Link> */}
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>title</DialogTitle>
              </DialogHeader>
              <h3 className="w-full text-right overflow-hidden whitespace-nowrap ">
                {question.description}
              </h3>
              <h3 className="w-40 text-right overflow-hidden whitespace-nowrap">
                {question.name}
              </h3>
              <h3 className="w-[50px] text-right ">{question.status}</h3>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}
