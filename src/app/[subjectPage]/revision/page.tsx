import getAllQuestions from "@/lib/getAllQuestions";
import Link from "next/link";
import { unstable_noStore } from "next/cache";
import AddNewQuestionForm from "../components/addNewQuestion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Status from "../components/status";
import Question from "../components/question";

type Params = {
  params: {
    subjectPage: string;
  };
};

export default async function Revision({ params: { subjectPage } }: Params) {
  const { questions, statusCounts } = await getAllQuestions(subjectPage);
  return (
    <div className="relative">
      <div className="flex justify-end gap-4 w-full md:sticky top-0 mb-4">
        <Button variant="outline">
          <Link href={`/${subjectPage}`}>back</Link>
        </Button>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <div className=" bg-background border-[#5A1C00] mb-3 mx-auto rounded-lg py-6 px-3 font-meduim text-base max-w-[554px] w-full cursor-pointer text-center drop-shadow-input font-drukWideWeb">
            Add a new Question
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add a new Question</DialogTitle>
          </DialogHeader>
          <AddNewQuestionForm subjectName={subjectPage} />
        </DialogContent>
      </Dialog>
      {questions.map((question) => {
        return (
          <Dialog key={question.id}>
            <DialogTrigger asChild className="cursor-pointer">
              <div className=" bg-background border-[#5A1C00] mb-3 mx-auto rounded-lg py-6 px-3 font-meduim text-base font-aThuluth max-w-[554px] flex gap-3 md:gap-2 justify-end items-center w-full">
                <h3 className="w-full text-right overflow-hidden whitespace-nowrap">
                  {question.description}
                </h3>
                <h3 className="w-40 text-right overflow-hidden whitespace-nowrap flex gap-4 justify-end items-center">
                  {question.name}
                  <Status
                    questionStatus={question.status}
                    statusCounts={statusCounts}
                  />
                </h3>
              </div>
            </DialogTrigger>
            <DialogContent>
              <Question
                questionName={question.name}
                questionDescription={question.description}
                questionStatus={question.status}
                questionId={question.id}
                statusCounts={statusCounts}
              />
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}
