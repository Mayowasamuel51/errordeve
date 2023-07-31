'use client'
import { Suspense, useEffect } from 'react'
import { redirect, useRouter } from "next/navigation"
import Navbar from "../components/Navbar"
import { useSession, signIn } from 'next-auth/react'
import PortSee from '../PortSee'
import ErrorBoundary from '../ErrorBoundary'


const JqQ = () => {
    const session = useSession()
    const router = useRouter()
  
      useEffect(() => {
        if (session?.status === 'authenticated') {
          router.push('http://localhost:3000/dashboard')
          // redirect('http://localhost:3000/dashboard')
        }
      })
    
    const handleSignIn = () => {
      signIn('google', { callbackUrl: 'http://localhost:3000/dashboard' }); // Initiates the Google login flow
    };
    return ( 
        <>
         <div>
        {session?.status === "authenticated" ? <Navbar signIn={handleSignIn} /> : <Navbar signIn={handleSignIn} />}

        <div className='container mt-4'>
          <h2 className='text-center text-xl font-bold'>Developer's Portfolios</h2>
          <ErrorBoundary>
            <Suspense fallback={<h2>LOADING PLEASE WAIT............</h2>}>
              <PortSee />
            </Suspense>
          </ErrorBoundary>
        </div>

      </div>
      
        </>
    )
}

export default JqQ