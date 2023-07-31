"use client"
import DashSectionWrapper from "../components/DashSectionWrapper";
import { useSession } from 'next-auth/react';
import { Suspense, useState } from "react";
import axios from "axios"
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; 
import { ToastContainer, toast } from 'react-toastify';
import Api from "../dashboardPages/Api";
import Link from "next/link";

function Apikey() {
 
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('http://localhost:3000/?callbackUrl=/dashboard')
            // redirect('https://kingshiptechnologies.com/signin?callbackUrl=/dashboard')
        }
    })
 
    const good = () => toast.success("Added successfully");
    const [input, setInput] = useState({
        apiname: '',
        apikey: '',
    })
    const inputHandle = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
       
    const apikeyhandle = async (e) => {
        e.preventDefault();
        const data = {
            apiname: input.apiname,
            apikey: input.apikey,
            email: session?.user?.email,
        }
        axios.post(`http://localhost:3000/api/apikey`, data)
            .then((res) => {
              alert("Added successfully")
            }).catch((err) => {
                console.log(err)
                notify()
            })
    }
    return (
        <>
            <div className="bg-black px-5 py-7 md:px-14 md:py-14 ">
                <h1 className="text-center font-semibold pt-4 text-white">Store Api Key's </h1>
                <br/> <br/>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  
                    <form onSubmit={apikeyhandle} >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Api Name
                            </label>
                            <input onChange={inputHandle} value={input.apiname} required name="apiname" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=" api name" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Api key
                            </label>
                            <input onChange={inputHandle} value={input.apikey} required name="apikey" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="api key" />

                        </div>
                        <div className=" ">
                          
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Store Api
                            </button>

                        </div>
                    </form>

                </div>
               
                <Link href="/dashboard/apikey/key"  className="bg-black-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">see key's</Link>

              
            </div>
            <hr />

        </>
    )
}

export default DashSectionWrapper(Apikey)