'use client'
import { Suspense, useEffect } from 'react'
import { redirect, useRouter } from "next/navigation"
import Navbar from "./components/Navbar"
import { useSession, signIn } from 'next-auth/react'
import ErrorBoundary from './ErrorBoundary'
import Link from 'next/link'
function Home() {
  const session = useSession()
  const router = useRouter()
  
    useEffect(() => {
      if (session?.status === 'authenticated') {
        // router('http://localhost:3000/dashboard')
        redirect('https://errordeve.vercel.app/dashboard')
      }
    })
  
  const handleSignIn = () => {
    signIn('google', { callbackUrl: 'https://errordeve.vercel.app/dashboard' });
    // signIn('google', { callbackUrl: 'http://localhost:3000/dashboard' }); // Initiates the Google login 
  };

  return (
    <>
      <div>
        {session?.status === "authenticated" ? <Navbar signIn={handleSignIn} /> : <Navbar signIn={handleSignIn} />}

        <div className='container mt-4'>
          <h2 className='text-center text-xl font-bold'>Developer's Portfolios</h2>

          <div className='text-center mt-12'>
            <Link href={`/devs`} className="text-centet bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              View
            </Link>
          </div>

        </div>

      </div>
    </>
  )
}

export default Home;