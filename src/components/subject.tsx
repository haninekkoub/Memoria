import getAllSubjects from "@/lib/getAllSubjects";
import DeletSubject from "./deletSubject";
import Link from "next/link";
import PopUp from "./popUp";
import { Button } from "./ui/button";
import AddNewSubject from "./addNewSubject";

export function SvgAdd() {
  return (
    <Button className="w-full mx-auto h-40 rounded-3xl drop-shadow-3xl flex-wrap bg-gray-400 mb-10 flex justify-center items-center">
      <svg
        width="50"
        height="50"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </Button>
  );
}

export default async function Subject() {
  const subjects: Subject[] = await getAllSubjects();

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 mt-[75px] px-6">
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
      <PopUp button={<SvgAdd />} title="Add new Subject">
        <AddNewSubject />
      </PopUp>
    </div>
  );
}
