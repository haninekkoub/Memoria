"use client";

import { useRouter } from "next/navigation";

export default function DeletQuestion({ questionId }: { questionId: string }) {
  const router = useRouter();

  async function hadleClick() {
    try {
      await fetch(`/api/question/${questionId}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <button onClick={hadleClick} className="h-4 w-4 bg-black text-white">
      X
    </button>
  );
}
