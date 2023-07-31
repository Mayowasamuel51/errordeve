import prisma from "../../libs/prismadb.jsx"
import { NextResponse } from 'next/server';

export async function GET() {
    const data = await prisma.portfolio.findMany({
    orderBy: {id: 'desc'} 
    }) // this code will get the lastest 
    if (!data) {
        return NextResponse.json({ error:'Error with network ', status:404 })
    }
    return NextResponse.json({ data: data, status: 200 })
}
export async function POST(req) {
    const { portfoillo,  email    } = await req.json();
    console.log(portfoillo, email) 
    const apiinfo = await prisma.portfolio.create({
        data: {
           portfoillo:portfoillo ,
            email:email
        }
    })
    return NextResponse.json({ data: 'data created', status: 200, res: apiinfo })

}