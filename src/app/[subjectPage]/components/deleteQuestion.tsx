import { deleteQuestion } from "@/app/action";

export default function DeletQuestion({ questionId }: { questionId: string }) {
  return (
    <form action={deleteQuestion}>
      <input name="questionId" type="hidden" value={questionId} />
      <button className="h-4 w-4 bg-black text-white">x</button>
    </form>
  );
}
