import { updateQuestion } from "@/app/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default async function UpdateQuestion({
  questionName,
  questionDescription,
  questionId,
}: {
  questionName: string;
  questionDescription: string;
  questionId: string;
}) {
  return (
    <form
      action={updateQuestion}
      className="flex flex-col justify-center items-center gap-4 w-full pt-6"
    >
      <Input
        required
        type="text"
        name="name"
        defaultValue={questionName}
        className="bg-background w-fit rounded-md py-1 px-0 drop-shadow-none border border-brown"
      />
      <Textarea
        className="text-right h-fit w-full"
        required
        name="description"
        defaultValue={questionDescription}
      />
      <input name="questionId" type="hidden" value={questionId} />
      <Button> submit </Button>
    </form>
  );
}
