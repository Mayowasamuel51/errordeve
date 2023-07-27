"use client"
import { useEffect, useState } from 'react';
import React, { Suspense, cache } from "react";
import ApiKey from "../components/ApiKey";
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import DashSectionWrapper from '../components/DashSectionWrapper';
import useSWR from 'swr'
import axios from 'axios';
function Api({ email }) {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('http://localhost:3000/?callbackUrl=/dashboard')
            // redirect('https://kingshiptechnologies.com/signin?callbackUrl=/dashboard')
        }
    })
    const url = `http://localhost:3000/api/apikey/email?query=${session?.user?.email}`
    const fetcher = url => axios.get(url).then(res => res.data)
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const { data, error } = useSWR(url, fetcher)
    console.log(data)
    // const [newstore , setStore]=useState([apikey])
   

   
    

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`http://localhost:3000/api/apikey/email?query=${session?.user?.email}`);

    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch data');
    //             }
    //             const data = await response.json();
    //             setData(data.data);
    //             console.log(data.data)
    //             setLoading(false);

    //         } catch (error) {
    //             setError('Error fetching data. Please try again later.');
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>


    return (
        <>
            <div className="container mx-auto w-full max-w-full">
                <div className="w-full relative top-[4em] p-4 container">
                 
                    <h2 className="text-2xl text-orange-500 px-8">Your Apis for  {session?.user?.email ? session?.user?.email :
                        "no user"} </h2>
                    <Link href="/dashboard/apikey" className=" bg-blue-500 hover:bg-blue-700 text-center  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">back</Link>
                </div>
                <div className='mt-3'>
                    {/* <Suspense fallback={<h1 className="text-3xl font-semibold text-center ">LOADING.....</h1>}>
                        <ApiKey apikey={data} />
                    </Suspense> */}
                     <div className="mt-10 max-w-full p-10">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Api Name
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Api Key
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Date
                            </th>

                        </tr>
                    </thead>

                    <tbody >
                        {records.map((item) => {
                            return (

                                <tr key={item.id}>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex">

                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item.apiname}
                                                </p>

                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{item.apikey}</p>

                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                        <p className="text-gray-900 whitespace-no-wrap">{item.createdAt}</p>
                                    </td>


                                </tr>


                            )
                        })}
                    </tbody>
                </table>
                <nav className="flex items-center justify-between border-t border-gray-200 bg-black px-4 py-3 sm:px-6">
                    <div className="flex flex-1 justify-between sm:hidde">
                        <a href="#"aria-label="Previous" className="text-white relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-black px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white-50" onClick={prePage}>Previous</a>
                        {
                            number.map((n, i) => {
                                <li className={`  pagination-a text-black ${currentpage === n ? `pagination` : ''}`}>
                                    <a href="#"
                                        className="pagination-linl"
                                        onClick={() => changecpage(n)} >{n}</a>
                                </li>
                            })
                        }
                        <a href="#" aria-label="Previous" className="text-white relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-black px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white-50" onClick={nextPage}>Next</a>
                    </div>
                  
                </nav>

                {/* <nav aria-label="Page navigation example" role="navigation" >
                    <ul className="pagination m-4">
                        <li>
                            <a href="#" className="page-a" aria-label="Previous" onClick={prePage}> prev</a>
                        </li>
                        {
                            number.map((n, i) => {
                                <li className={`pagination-a text-black ${currentpage === n ? `pagination` : ''}`}>
                                    <a href="#"
                                        className="pagination-linl"
                                        onClick={() => changecpage(n)} >{n}</a>
                                </li>
                            })
                        }
                        <li>
                            <a href="#" className="page-a" aria-label="Previous" onClick={nextPage}> next</a>
                        </li>
                    </ul>
                </nav> */}

            </div>
                </div>
                {/* <div className="mt-3">
                    {loading ? (
                        <p>Loading data...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <Suspense fallback={<h1 className="text-3xl font-semibold text-center ">LOADING.....</h1>}>
                            <ApiKey apikey={data} />
                        </Suspense>
                    )}

                </div> */}
            </div>
        </>
    )
}
export default DashSectionWrapper(Api);