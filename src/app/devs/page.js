import { Suspense } from 'react'
import LoadPort from '../LoadPort';
import NetworkError from "../NetworkError"

async function Ports() {
  const response = await fetch(`http://localhost:3000/api/port`,{
    next:{ revalidate: 10 } 
  });
  try {
    if (!response.ok) {
        if (response.status === 404) {
            // return <NetworkError />
            throw new Error('Resource not found');
        } else if (response.status === 500) {
            // return <NetworkError />
            throw new Error('Internal server error');
        } else {
            // return <NetworkError />
            throw new Error('Unknown server error');
        }
    }
    const data = await response.json()
    return data.data
} catch (err) {
    return <NetworkError />
}

  
}


async function Dev(props) {
  const portsee = await Ports()
  console.log(portsee)
  return (
   
      <div>
        <div className='container mt-4'>
          <h2 className='text-center text-xl font-bold'>Developer's Portfolios</h2>

          <Suspense fallback={<h2>Loading..............</h2>}>
            <LoadPort port={portsee} />
          </Suspense>

        </div>
      </div>
   
  )
}

export default Dev