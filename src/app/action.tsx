"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import slugify from "slugify";

export async function createNewQuestion(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const unit = parseInt(formData.get("unit") as string);
  const subjectName = formData.get("subjectName") as string;
  const type = formData.get("type") as "DATES" | "TERMINOLOGIE" | "FIGURES";
  const slug = slugify(name);
  await prisma.question.create({
    data: {
      name,
      description,
      unit,
      subjectName,
      status: 0,
      type,
      slug,
    },
  });
  revalidatePath("/revision");
  redirect(`/${subjectName}/revision`);
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
  const status = parseInt(formData.get("status") as string);
  const unit = parseInt(formData.get("unit") as string);
  const subjectName = formData.get("subjectName") as string;
  const type = formData.get("type") as "DATES" | "TERMINOLOGIE" | "FIGURES";
  const slug = slugify(name);

  await prisma.question.update({
    where: { id },
    data: {
      name,
      description,
      unit,
      subjectName,
      status,
      type,
      slug,
    },
  });

  revalidatePath("/revision");
  redirect(`/${subjectName}/revision`);
}

export async function createNewSubject(formData: FormData) {
  const name = formData.get("subjectName") as string;

  await prisma.subject.create({
    data: {
      name,
    },
  });
  revalidatePath("/");
}
