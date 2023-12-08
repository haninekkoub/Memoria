import getAllQuestions from "@/lib/getAllQuestions";
import { Metadata } from "next";
import Link from "next/link";
import clsx from "clsx";
import AddNewQuestionForm from "./components/addNewQuestion";
import getSubject from "@/lib/getSubject";
import { notFound } from "next/navigation";

type Params = {
  params: {
    subjectPage: string;
  };
};

//dynamic metadata
export async function generateMetadata({
  params: { subjectPage },
}: Params): Promise<Metadata> {
  return {
    title: subjectPage,
    description: `this is the page of ${subjectPage}`,
  };
}

export default async function subjectPage({ params: { subjectPage } }: Params) {
  const subject = await getSubject(subjectPage);
  if (!subject) notFound();
  const { questionsCount, units } = await getAllQuestions(subjectPage);

  const displayedUnits = units.concat(
    Array(Math.max(0, 3 - units.length)).fill(null)
  );
  return (
    <div>
      <Link href={"/"}>
        <h1 className="text-4xl font-bold underline">Home</h1>
      </Link>
      <h1 className="text-4xl font-bold ">{subjectPage}</h1>
      <div className="flex justify-between items-center">
        <Link href={`/${subjectPage}/revision`}>
          <h1 className="text-4xl font-bold underline">Revision</h1>
        </Link>
        <Link href={"/"}>
          <h1 className="text-4xl font-bold underline">quiz</h1>
        </Link>
        <Link href={"/"}>
          <h1 className="text-4xl font-bold underline">Search</h1>
        </Link>
      </div>
      <div>
        <div className="flex  justify-between items-center">
          <h3>Les unite</h3>
          <h4>{questionsCount}</h4>
        </div>
        <div>
          {displayedUnits.map((unit, index) => (
            <div
              key={index}
              className={clsx("p-4 mb-2 w-full text-center", {
                "bg-green-200": unit,
                "bg-gray-600": !unit,
              })}
            >
              {unit ? `Unit ${unit.unit}` : `Empty Unit ${index + 1}`}
            </div>
          ))}
        </div>
      </div>
      {/* <AddQuestionForm /> */}
      <AddNewQuestionForm />
    </div>
  );
}
