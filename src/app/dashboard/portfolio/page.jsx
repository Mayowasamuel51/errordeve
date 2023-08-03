"use client"
import axios from "axios"
import DashSectionWrapper from "../components/DashSectionWrapper";
import Button from 'react-bootstrap/Button';
import { Suspense, useState } from "react";
import { useSession } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import Link from "next/link";
import { redirect } from "next/navigation";
function PortfoilloPage() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('https://errordeve.vercel.app/?callbackUrl=/dashboard')
            // redirect('http://localhost:3000/?callbackUrl=/dashboard')
        }
    })
  
    const notify = () => toast.error("Error!!!", {
        position: toast.POSITION.TOP_LEFT
    });
    const good = () => toast.success("Added successfully", {
        position: toast.POSITION.TOP_LEFT
    });
    const [input, setInput] = useState({
        portfoillo: '',
    })
    const inputHandle = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const portfoillohandle = async (e) => {
        e.preventDefault();
        const data = {
            portfoillo: input.portfoillo,
            email: session?.user?.email,
        }

        axios.post(`/api/portfoillo`, data)
            .then((res) => {
               
                    good()
                    alert('Added successfully!!!')
              
            }
            ).catch((err) => {
                // notyf.error('Network issues')
                console.log(err)
                notify()
            }
            )
    }

    return (
        <>
            <div className=" bg-black px-5 py-7 md:px-14 md:py-14">
                <h1 className="text-center font-semibold pt-4 text-white">Portfolio </h1>
                <form method="post" className="w-ful bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={portfoillohandle} >
                    <div className="w-ful">
                      
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >
                                    Submit your Portfolio so to get jobs and recommendation
                                </label>
                                <input onChange={inputHandle} value={input.portfoillo} required name="portfoillo" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="url" placeholder="Submit your Portfolio so to get jobs and recommendation" />
                            </div>

                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Store Portfoillo
                                </button>

                            </div>
                        

                    </div>

                </form>
                <Link href="/dashboard/portfolio/port"  className="bg-black-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view portfoillo's</Link>

            </div>
            <hr />

        </>
    )
}

export default DashSectionWrapper(PortfoilloPage)