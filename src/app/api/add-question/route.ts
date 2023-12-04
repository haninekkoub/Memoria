import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server"
 

export async function POST (request : NextRequest ) {
    const res = await request.json()
    const {name, description, unit, subjectId, type} = res;
    const unitNumber = parseInt(unit);
    
    const result = await prisma.question.create({
        data: {
            name,
            description,
            unit: unitNumber ,
            subjectId,
            status: 0, 
            type
        }
    })
    console.log(result)
    return NextResponse.json({result})
}