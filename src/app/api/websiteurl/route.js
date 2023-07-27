import prisma from "../../libs/prismadb.jsx"
import { NextResponse } from 'next/server';

export async function GET() {
    const data = await prisma.websiteurl.findMany({
    orderBy: {id: 'desc'} 
    }) // this code will get the lastest 
    return NextResponse.json({ data: data, status: 200 })
}
export async function POST(req) {
    const {  websiteurl,webname,  email  , about  } = await req.json();
    console.log( websiteurl,webname, email, about)
    const apiinfo = await prisma.websiteurl.create({
        data: {
            webname,
            about,
            websiteurl,
            email:email
        }
    })
    return NextResponse.json({ data: 'data created', status: 200, res: apiinfo })

}