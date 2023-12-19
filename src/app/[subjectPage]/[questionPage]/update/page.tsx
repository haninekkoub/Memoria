// import getQuestion from "@/lib/getQuestion";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import UpdateQuestion from "../../components/updateQuestion";

// type Params = {
//   params: {
//     questionPage: string;
//     subjectPage: string;
//   };
// };

// export default async function Updating({
//   params: { questionPage, subjectPage },
// }: Params) {
//   const question = await getQuestion(questionPage);

//   if (!questionPage || !question) notFound();

//   return (
//     <div>
//       <Link href={`/${subjectPage}/${question.slug}`}>go back</Link>
//       <UpdateQuestion currentQuestion={question} questionId={question.id} />
//     </div>
//   );
// }
