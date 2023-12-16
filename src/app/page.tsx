import getAllSubjects from "@/lib/getAllSubjects";
import Link from "next/link";
import DeletSubject from "@/components/deletSubject";

export default async function Home() {
  const subjects = await getAllSubjects();

  return (
    <div className=" w-full flex flex-col md:flex-row gap-6 p-6 mt-[100px]">
      {subjects.map((subject, i) => {
        return (
          <div className="flex flex-col gap-2 w-full flex-2 mx-auto" key={i}>
            <Link
              href={`/${subject.name}`}
              className="h-40 relative rounded-3xl drop-shadow-3xl flex-wrap "
              style={{ backgroundColor: `${subject.color}` }}
            >
              <div className="absolute left-4 bottom-4 text-4xl text-black font-semibold">
                {subject.name}
              </div>
            </Link>
            <DeletSubject subjectId={subject.id} />
          </div>
        );
      })}
    </div>
  );
}
