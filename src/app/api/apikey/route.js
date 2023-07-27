import prisma from "../../libs/prismadb.jsx"
import { NextResponse } from 'next/server';

export async function GET() {
    const data = await prisma.Api.findMany({
    orderBy: {id: 'desc'} 
    }) // this code will get the lastest 
    return NextResponse.json({ data: data, status: 200 })
}
export async function POST(req) {
    const { apiname ,email,apikey} = await req.json();
    console.log(apiname, apikey)
    const apiinfo = await prisma.Api.create({
        data: {
            apiname,
            apikey,
            email:email
        }
    })
    return NextResponse.json({ data: 'data created', status: 200, res: apiinfo })

}