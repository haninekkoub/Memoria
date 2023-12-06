import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server"
 

export async function POST (request : NextRequest ) {
    const res = await request.json()
    const {name, description, unit, subjectId, type} = res;

    const result = await prisma.question.create({
        data: {
            name,
            description,
            unit,
            subjectId,
            status: 0, 
            type
        }
    })

    return NextResponse.json({result})
}