"use client"
import ApiKey from "../components/ApiKey";
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import DashSectionWrapper from '../components/DashSectionWrapper';
import useSWR from 'swr'
import axios from 'axios';
import { redirect } from 'next/navigation';
import { useState, useEffect, Suspense } from "react";
import PortLink from "../components/PortLink";

// async function fetchport() {
//     const response = await fetch('http://localhost:3000/api/portfoillo', {
//         next: { revalidate: 20 }
//     })
//     try {
//         if (!response.ok) {
//             if (response.status === 404) {
//                 return <NetworkError />
//                 throw new Error('Resource not found');
//             } else if (response.status === 500) {
//                 return <NetworkError />
//                 throw new Error('Internal server error');
//             } else {
//                 return <NetworkError />
//                 throw new Error('Unknown server error');
//             }
//         }
//         const data = await response.json()
//         return data.data
//     } catch (err) {
//         return <NetworkError />
//     }
// }

function Ports() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('http://localhost:3000/?callbackUrl=/dashboard')
            // redirect('https://kingshiptechnologies.com/signin?callbackUrl=/dashboard')
        }
    })
    const [maindata, setData] = useState([])
    const url = `http://localhost:3000/api/portfoillo/port?query=${session?.user?.email}`
    // const fetcher = url => axios.get(url).then(res => res.data.data)
    const fetcher = (...args) => fetch(...args).then((res) => {
        return res.json()
    }).then((data) => {
        setData(data.data)
        console.log(maindata)})

   const { data, error  } = useSWR(url, fetcher)


    // if (error) return <div>Failed to load</div>
    // if (!data) return <div>Loading...</div>

    // const port = await fetchport()
    return (
        <>
            <div className="container mx-auto w-full max-w-full">
                <div className="w-full relative top-[4em] p-4">
                    <h2 className="text-2xl text-orange-500 px-8">Your Portfolios </h2>
                </div>
                <div className="mt-3">
                    <Suspense fallback={<h1 className="text-3xl font-semibold text-center ">LOADING.....</h1>}>
                        <PortLink port={maindata} />
                    </Suspense>
                </div>
            </div>
        </>
    )
}
export default Ports;