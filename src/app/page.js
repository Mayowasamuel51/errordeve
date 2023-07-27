'use client'
import { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import Navbar from "./components/Navbar"
import { useSession, signIn, signOut } from 'next-auth/react'
export default function Home() {
  const session = useSession()
    const router = useRouter()
    useEffect(() => {
      if (session?.status === 'authenticated') {
          // localStorage.setItem('email',session?.)
            router.push('http://localhost:3000/dashboard')
            // router.push('https://kingshiptechnologies.com/dashboard')     
        }
    })
    const handleSignIn = () => {
      // signIn('google',{callbackUrl:'https://kingshiptechnologies.com/dashboard'});
      signIn('google',{callbackUrl:'http://localhost:3000/dashboard'}); // Initiates the Google login flow
    };

  return (
    <>
      <div>
        <Navbar signIn={handleSignIn} />
      </div>
    </>
  )
}
