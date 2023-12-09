import getAllSubjects from "@/lib/getAllSubjects";
import Link from "next/link";
import clsx from "clsx";
import AddNewQuestionForm from "@/components/addNewSubject";

export default async function Home() {
  const subjects = await getAllSubjects();

  return (
    <div className=" w-full flex flex-col md:flex-row gap-6 p-6 ">
      {subjects.map((subject, i) => {
        return (
          <Link
            href={`/${subject.name}`}
            className={clsx(
              "w-full mx-auto h-40 flex-2 relative rounded-3xl drop-shadow-3xl",
              {
                "bg-green-200": i === 0,
                "bg-red-200": i === 1,
                "bg-blue-200": i === 2,
              }
            )}
            key={i}
          >
            <div className="absolute left-4 bottom-4 text-4xl text-black font-semibold">
              {subject.name}
            </div>
          </Link>
        );
      })}
      <AddNewQuestionForm />
    </div>
  );
}
