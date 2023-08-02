import { Suspense } from 'react'
import LoadPort from '../LoadPort';
import NetworkError from "../NetworkError"

async function Ports() {
  const response = await fetch(`http://localhost:3000/api/port`,{
    next:{ revalidate: 10 } 
 });
  if (!response.ok) {
    return <NetworkError />;
  }
  const data = await response.json();
  return data.data
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