"use client";
import getAllSubjects from "@/lib/getAllSubjects";
import { Metadata } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    subjectName: string;
  };
};

// //dynamic metadata
// export async function generateMetadata({
//     params: { SubjectName },
//   }: Params): Promise<Metadata> {
//     const subjectData: Promise<Subject[]> = getAllSubjects(subject);
//     const subject: Subject = await subjectData;
//     return {
//       title: SubjectName,
//       description: `this is the page of ${SubjectName}`,
//     };
//   }

export default function page() {
  return (
    <div>
      <h1 className="text-4xl font-bold "></h1>
      <Link href={"/"}>
        <h1 className="text-4xl font-bold underline">Home</h1>
      </Link>
    </div>
  );
}
