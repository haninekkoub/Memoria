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


export async function PUT(request : NextRequest,{ params }: Params) {

  const id = params.questionId;
  const res = await request.json()
  console.log(id)
  console.log(res)
  const {name, description, unit, subjectId, status,  type} = res;
  const unitNumber = parseInt(unit);
  console.log(res)
  const result = await prisma.question.update({
    where: {id},
    data: {
          name,
          description,
          unit: unitNumber ,
          subjectId,
          status, 
          type
      }
  })
  console.log(result)
  return NextResponse.json({result})
}





