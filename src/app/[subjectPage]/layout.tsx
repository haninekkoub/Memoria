import getSubject from "@/lib/getSubject";
import { notFound } from "next/navigation";

export default async function subjectLayout({
  children,
  params: { subjectPage },
}: {
  children: React.ReactNode;
  params: {
    subjectPage: string;
  };
}) {
  const subject = await getSubject(subjectPage);
  if (!subject) notFound();
  return (
    <section
      className="min-h-[100vh] pt-[75px] px-6 font-drukWideWeb text-4xl"
      style={{ backgroundColor: `${subject.color}` }}
    >
      <h1>{subjectPage}</h1>
      {children}
    </section>
  );
}
