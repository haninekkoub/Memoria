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
      className="min-h-screen  pt-[75px]  font-drukWideWeb text-4xl relative overflow-hidden"
      style={{ backgroundColor: `${subject.color}` }}
    >
      <h1 className="px-6 z-20 relative">{subjectPage}</h1>
      <span className="z-0 bg-secondary rounded-full absolute -top-40 -left-16 h-64 w-64"></span>
      <span className="z-0 bg-secondary rounded-full absolute top-32 -right-32 h-64 w-64"></span>
      <span className="z-0 bg-secondary rounded-full absolute -bottom-16 -left-32 h-80 w-80"></span>
      {children}
    </section>
  );
}
