import { NextResponse } from 'next/server';
import prisma from "../../../libs/prismadb.jsx";

export async function GET(request) {
    const { searchParams} = new URL(request.url)
    const email =   searchParams.get('query')
    const data = await prisma.websiteurl.findMany({
        where: {
            email:email
        },
        orderBy: {id: 'desc'} 
    })
    if (!data) {
        return NextResponse.json({ data: 'email not found', status: 404 })
    }
    return NextResponse.json({ data:data, status: 200 })
}


//   export async function handler(req) {
//     const { searchParams } = new URL(req.url)
//     const email = searchParams.get('email')
//     return NextResponse.json({ data: email, status: 200 })
//   }

// export { handler as GET, handler as POST }


  // const { searchParams } = new URL(request.url)