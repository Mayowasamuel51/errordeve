"use client"
import DashSectionWrapper from "../components/DashSectionWrapper";
import Button from 'react-bootstrap/Button';
import { Suspense, useState } from "react";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import Link from "next/link";
import { useSession } from 'next-auth/react';
import { redirect } from "next/navigation";

function WebsiteUrl() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('http://localhost:3000/?callbackUrl=/dashboard')
            // redirect('https://kingshiptechnologies.com/signin?callbackUrl=/dashboard')
        }
    })
    const notify = () => toast.error("Error!!!", {
        position: toast.POSITION.TOP_LEFT
    });
    const good = () => toast.success("Added successfully", {
        position: toast.POSITION.TOP_LEFT
    });
    const [input, setInput] = useState({
        websiteurl: '',
        about: '',
        webname: ''
    })
    const inputHandle = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const websiteurlhandle = async (e) => {
        e.preventDefault();
        const data = {
            websiteurl: input.websiteurl,
            webname: input.webname,
            about: input.about,
            email:session?.user?.email,
        }

        axios.post(`http://localhost:3000/api/websiteurl`, data)
            .then((res) => {
                good()
                alert('done!!!')
            }
            ).catch((err) => {
                console.log(err)
                notify()
            }
            )
    }

    return (
        <>
            <div className="bg-black px-5 py-7 md:px-14 md:py-14 ">
                <h1 className="text-center font-semibold pt-4 text-white">Store any website url </h1>

                <div className="w-ful">
                    <form onSubmit={websiteurlhandle} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Website url
                            </label>
                            <input onChange={inputHandle} value={input.websiteurl} required name="websiteurl" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="url" placeholder="Website url" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Website Name
                            </label>
                            <input onChange={inputHandle} value={input.webname} required name="webname" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="  Website Name" />

                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                About the website   (optional)
                            </label>
                            <textarea onChange={inputHandle} value={input.about} required name="about" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder=" About the website   (optional)" />

                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Keep
                            </button>

                        </div>
                    </form>

                </div>
                <Link href="/dashboard/websiteurl/url"  className="bg-black-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view website's</Link>

            </div>
            <hr />

        </>
    )
}

export default DashSectionWrapper(WebsiteUrl)