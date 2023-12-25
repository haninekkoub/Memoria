import getAllSubjects from "@/lib/getAllSubjects";
import DeletSubject from "./deletSubject";
import Link from "next/link";

export default async function Subject() {
  const subjects: Subject[] = await getAllSubjects();

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 mt-[100px] ">
      {subjects.map((subject, i) => {
        return (
          <div
            className="flex flex-col gap-2 w-full flex-2 mx-auto relative"
            key={i}
          >
            <Link
              href={`/${subject.slug}`}
              className="h-40 relative rounded-3xl drop-shadow-3xl flex-wrap "
              style={{ backgroundColor: `${subject.color}` }}
            >
              <div className="absolute left-4 bottom-4 text-4xl text-black font-semibold">
                {subject.name}
              </div>
            </Link>

            <DeletSubject subjectId={subject.id} subjectName={subject.name} />
          </div>
        );
      })}
    </div>
  );
}
