"use client"
import { useSession } from 'next-auth/react';
import React from 'react'
import Navabr from './Navabr';
import { redirect, useRouter } from 'next/navigation';
const DashSectionWrapper = (Component) =>
    function Page() {
        const { data: session } = useSession({
            required: true,
            onUnauthenticated() {
                redirect('http://localhost:3000/?callbackUrl=/dashboard')
                // redirect('https://errordeve.vercel.app/?callbackUrl=/dashboard')
            } // to redirect back if user not auth well 
          })
        return (
            <>
                <Navabr profile={session?.user?.image} />
                <Component />
            </>
        );
    };

export default DashSectionWrapper;