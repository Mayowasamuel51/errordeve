import { NextResponse } from "next/server"



export async function GET() {
    
    const res = await fetch(`https://${process.env.NEXT_CLOUD_API}:${process.env.NEXT_API_SERCET}@api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image`, {
        headers: {

        },
    })

    const data = await res.json()

    return NextResponse.json(data)

}