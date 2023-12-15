import { deleteSubject } from "@/app/action";

export default function DeletSubject({ subjectId }: { subjectId: string }) {
  return (
    <form action={deleteSubject}>
      <input name="subjectId" type="hidden" value={subjectId} />
      <button className="h-4 w-4 bg-black text-white">x</button>
    </form>
  );
}
