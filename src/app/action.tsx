"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import slugify from "slugify";
import { QuestionSchema, SubjectSchema } from "@/lib/types";

export const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = " Something went wrong";
  }
  return message;
};

export async function createNewQuestion(newQuestion: unknown) {
  const result = QuestionSchema.safeParse(newQuestion);
  console.log(result);
  if (!result.success) {
    let errorMessage = "";
    result.error.issues.forEach((issue) => {
      errorMessage += issue.message + "\n";
    });
    return { error: errorMessage };
  }
  try {
    const slug = slugify(result.data.name);
    const subjectPage = slugify(result.data.subjectName);

    await prisma.question.create({
      data: {
        slug,
        name: result.data.name,
        description: result.data.description,
        unit: result.data.unit,
        subjectName: result.data.subjectName,
        status: 0,
        type: result.data.type,
      },
    });
    revalidatePath(`/${subjectPage}/revision`);
    revalidatePath(`/${subjectPage}`);
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
}

export async function deleteQuestion(formData: FormData) {
  const id = formData.get("questionId") as string;
  await prisma.question.delete({
    where: { id },
  });
  revalidatePath("/revision");
}

export async function updateQuestion(formData: FormData) {
  const id = formData.get("questionId") as string;
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const slug = slugify(name);
  // const subjectPage = slugify(subjectName);
  try {
    await prisma.question.update({
      where: { id },
      data: {
        name,
        description,
        slug,
      },
    });

    revalidatePath("/revision");
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
}

export async function createNewSubject(newSubject: unknown) {
  const result = SubjectSchema.safeParse(newSubject);
  if (!result.success) {
    let errorMessage = "";
    result.error.issues.forEach((issue) => {
      errorMessage += issue.message + "\n";
    });

    return { error: errorMessage };
  }
  try {
    const slug = slugify(result.data.name);
    await prisma.subject.create({
      data: { name: result.data.name, color: result.data.color, slug },
    });
    revalidatePath("/");
  } catch (error) {
    return {
      error: getErrorMessage(error).includes(
        "Unique constraint failed on the fields: (`name`)"
      )
        ? "name existing"
        : "uknown eror",
    };
  }
}

export async function deleteSubject(formData: FormData) {
  const id = formData.get("subjectId") as string;
  await prisma.subject.delete({
    where: { id },
  });
  revalidatePath("/");
}

export async function stausUpdate(formData: FormData) {
  const id = formData.get("questionId") as string;
  const status = parseInt(formData.get("updateStatus") as string);
  const subjectPage = formData.get("questionSubject") as string;
  await prisma.question.update({
    where: { id },
    data: { status },
  });
  revalidatePath(`/${subjectPage}/quiz`);
}
