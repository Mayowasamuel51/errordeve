import React, { Suspense, cache } from "react";
import NetworkError from "../../NetworkError";
import ApiKey from "../components/ApiKey";
import PortLink from "../components/PortLink";
import WebsiteUrl from "../components/WebsiteUrl";
async function fetchurl() {
    const response = await fetch('http://localhost:3000/api/websiteurl', {
        next: { revalidate: 20 }
    })
    try {
        if (!response.ok) {
            if (response.status === 404) {
                return <NetworkError />
                // throw new Error('Resource not found');
            } else if (response.status === 500) {
                return <NetworkError />
                // throw new Error('Internal server error');
            } else {
                return <NetworkError />
                // throw new Error('Unknown server error');
            }
        }
        const data = await response.json()
        return data.data
    } catch (err) {
        return <NetworkError />
    }
}
async function Url() {
    const url = await fetchurl()
    return (
        <>
            <div className="container mx-auto w-full max-w-full">
                <div className="w-full relative top-[4em] p-4">
                    <h2 className="text-2xl text-orange-500 px-8">Your websiteurl's</h2>
                </div>
                <div className="mt-3">
                    <Suspense fallback={<h1 className="text-3xl font-semibold text-center ">LOADING.....</h1>}>
                        <WebsiteUrl url={url} />
                    </Suspense>
                </div>
            </div>
        </>
    )
}
export default Url;