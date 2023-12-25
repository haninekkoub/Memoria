import getAllQuestions from "@/lib/getAllQuestions";
import { Metadata } from "next";
import Link from "next/link";
import getSubject from "@/lib/getSubject";
import { notFound } from "next/navigation";
import getAllSubjects from "@/lib/getAllSubjects";

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
  const { questionsCount, units } = await getAllQuestions(subject.name);

  const displayedUnits = units.concat(
    Array(Math.max(0, 3 - units.length)).fill(null)
  );

  return (
    <div className="z-20 relative">
      <div className="flex justify-center items-center gap-5 my-10 md:gap-10 px-6">
        <Link
          href={`/${subjectPage}/revision`}
          className={`text-sm px-2 py-10 rounded-2xl filter flex-1 text-center md:max-w-[150px] `}
          style={{
            backgroundColor: `${subject.color}`,
            filter:
              "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5)) brightness(80%)",
          }}
        >
          <h1>Revision</h1>
        </Link>
        <Link
          href={`/${subjectPage}/quiz`}
          className={`text-sm px-2 py-10 rounded-2xl filter flex-1 text-center md:max-w-[150px] `}
          style={{
            backgroundColor: `${subject.color}`,
            filter:
              "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5)) brightness(80%)",
          }}
        >
          <h1>quiz</h1>
        </Link>
        <div
          className={`text-sm px-2 py-10 rounded-2xl filter flex-1 text-center md:max-w-[150px] cursor-not-allowed`}
          style={{
            backgroundColor: `${subject.color}`,
            filter:
              "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5)) brightness(80%)",
          }}
        >
          <h1>Search</h1>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center p-6 gap-5 text-xl bg-background rounded-t-3xl h-full flex-1 font-expressway font-extrabold">
        <div className="flex  justify-between items-center w-full  text-2xl max-w-[554px] ">
          <h3>Les unite</h3>
          <h4>{questionsCount} Question</h4>
        </div>

        {displayedUnits.map((unit, index) => (
          <div
            key={index}
            className="p-4 w-full text-center rounded-3xl max-w-[554px] "
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
export async function generateStaticParams() {
  const subjects = await getAllSubjects();

  return subjects.map((subject) => ({
    subjectPage: subject.slug,
  }));
}
