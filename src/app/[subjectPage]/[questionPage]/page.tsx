// import getQuestion from "@/lib/getQuestion";
// import { Metadata } from "next";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import DeletQuestion from "../components/deleteQuestion";

// type Params = {
//   params: {
//     questionPage: string;
//     subjectPage: string;
//   };
// };

// //dynamic metadata
// export async function generateMetadata({
//   params: { questionPage },
// }: Params): Promise<Metadata> {
//   const question = await getQuestion(questionPage);
//   return {
//     title: question?.id,
//     description: `this is the page of ${question?.id}`,
//   };
// }

// export default async function subjectPage({
//   params: { questionPage, subjectPage },
// }: Params) {
//   const question = await getQuestion(questionPage);
//   if (!question) notFound();

//   return (
//     <div>
//       <div className="flex justify-between">
//         <Link href={`/${subjectPage}/revision`}>back</Link>
//         <DeletQuestion questionId={question.id} />
//         <Link href={`/${subjectPage}/${questionPage}/update`}>update</Link>
//       </div>
//       <div
//         key={question.id}
//         className="flex gap-2 justify-center items-center bg-orange-200 mt-4 p-4 rounded-md"
//       >
//         <h3>{question.status}</h3>
//         <h3>{question.name}</h3>
//         <h3>{question.description}</h3>
//       </div>
//     </div>
//   );
// }
