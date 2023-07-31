import { NextResponse } from "next/server";



export async function POST(req) {
    const { email, profile } = await req.json();
    console.log(profile ,  email) 
    const apiinfo = await prisma.profile.create({
        data: {
            profile:profile  ,
            email:email
        }
    })
    return NextResponse.json({ data: 'data created', status: 200, res: apiinfo })
}