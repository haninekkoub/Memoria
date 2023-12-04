import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

type Params = {
  params: {
    questionId: string;
  };
};

export async function DELETE( request : NextRequest,{ params }: Params ){
    const id = params.questionId;
     const question = await prisma.question.delete ({
         where: {id}
     })
    return NextResponse.json(question)
}

