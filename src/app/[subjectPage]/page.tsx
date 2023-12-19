import getAllQuestions from "@/lib/getAllQuestions";
import { Metadata } from "next";
import Link from "next/link";
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
    <div className="h-full bg-red-500 flex flex-col ">
      <div className="flex justify-center items-center gap-5 my-10 md:gap-10 px-6">
        <Link
          href={`/${subjectPage}/revision`}
          className={`text-sm px-2 py-10 rounded-2xl filter flex-1 text-center md:max-w-[150px]`}
          style={{
            backgroundColor: `${subject.color}`,
            filter: "brightness(80%)",
          }}
        >
          <h1>Revision</h1>
        </Link>
        <Link
          href={`/${subjectPage}/quiz`}
          className={`text-sm px-2 py-10 rounded-2xl filter flex-1 text-center md:max-w-[150px]`}
          style={{
            backgroundColor: `${subject.color}`,
            filter: "brightness(80%)",
          }}
        >
          <h1>quiz</h1>
        </Link>
        <Link
          href={"/"}
          className={`text-sm px-2 py-10 rounded-2xl filter flex-1 text-center md:max-w-[150px]`}
          style={{
            backgroundColor: `${subject.color}`,
            filter: "brightness(80%)",
          }}
        >
          <h1>Search</h1>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-start p-6 gap-5 text-2xl bg-background rounded-3xl h-full flex-1">
        <div className="flex  justify-between items-center w-full">
          <h3>Les unite</h3>
          <h4>{questionsCount}</h4>
        </div>

        {displayedUnits.map((unit, index) => (
          <div
            key={index}
            className="p-4 w-full text-center rounded-3xl"
            style={
              unit
                ? {
                    backgroundColor: `${subject.color}`,
                    filter: "brightness(80%)",
                    border: "1px solid",
                    borderColor: `${subject.color}`,
                    color: "#fff3cd",
                  }
                : {
                    backgroundColor: "#fff3cd",
                    border: "1px solid",
                    borderColor: `${subject.color}`,
                    color: `${subject.color}`,
                  }
            }
          >
            {unit ? `${unit.unit}` : `Empty Unit ${index + 1}`}
          </div>
        ))}
      </div>
    </div>
  );
}
