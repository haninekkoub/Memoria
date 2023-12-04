import getAllQuestions from "@/lib/getAllQuestions";
import getSubject from "@/lib/getSubject";
import { Metadata } from "next";
import Link from "next/link";
import clsx from "clsx";
import { notFound } from "next/navigation";
import AddQuestionForm from "./components/addQuestionForm";

type Params = {
  params: {
    subjectPage: string;
  };
};

//dynamic metadata
export async function generateMetadata({
  params: { subjectPage },
}: Params): Promise<Metadata> {
  const subject = await getSubject(subjectPage);
  return {
    title: subject?.name,
    description: `this is the page of ${subject?.name}`,
  };
}

export default async function subjectPage({ params: { subjectPage } }: Params) {
  const subject = await getSubject(subjectPage);
  if (!subject) notFound();

  const { questionsCount, units } = await getAllQuestions(subject.id);

  const displayedUnits = units.concat(
    Array(Math.max(0, 3 - units.length)).fill(null)
  );

  return (
    <div>
      <Link href={"/"}>
        <h1 className="text-4xl font-bold underline">Home</h1>
      </Link>
      <h1 className="text-4xl font-bold ">{subject?.name}</h1>
      <div className="flex justify-between items-center">
        <Link href={`/${subject.name}/revision`}>
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
      <AddQuestionForm />
    </div>
  );
}
