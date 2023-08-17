"use client"
import ApiKey from "../components/ApiKey";
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import DashSectionWrapper from '../components/DashSectionWrapper';
import useSWR from 'swr'
// import axios from 'axios';
import { redirect } from 'next/navigation';
import { useState, useEffect, Suspense } from "react";
function Api() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
           
            redirect('http://localhost:3000/?callbackUrl=/dashboard')
            // redirect('https://errordeve.vercel.app/?callbackUrl=/dashboard')
        }
    })
    const [maindata, setData] = useState([])
    

    // const url = `http://localhost:3000/api/apikey/email?query=${session?.user?.email}`
    const url = `https://errordeve.vercel.app/api/apikey/email?query=${session?.user?.email}`
    // const fetcher = url => axios.get(url).then(res => res.data.data)
    const fetcher = (...args) => fetch(...args).then((res) => {
        return res.json()
    }).then((data) => {
        setData(data.data)
        console.log(maindata)})

   const { data, error  } = useSWR(url, fetcher)


    // if (error) return <div>Failed to load</div>
    // if (!data) return <div>Loading...</div>

    return (
        <>
            <div className="container mx-auto w-full max-w-full">
                <div className="w-full relative top-[4em] p-4 container">
                    <h2 className="text-2xl text-orange-500 px-8">Your Apis for  {session?.user?.email ? session?.user?.email :
                        "no user"} </h2>
                    <br />
                    <br/>
                    <div className="ml-5">
                    <Link href="/dashboard/apikey" className=" bg-blue-500 hover:bg-blue-700 text-center  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">back</Link>
                   </div>
                </div>
                <div className='mt-3'>
                    <div className="mt-10 max-w-full p-10">

                        <Suspense fallback={<h1 className="text-3xl font-semibold text-center ">LOADING.....</h1>}>
                            <ApiKey apikey={maindata} />
                        </Suspense>
                       
                    </div>
                </div>

            </div>
        </>
    )
}
export default DashSectionWrapper(Api);