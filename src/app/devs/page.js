import { Suspense } from 'react'
import LoadPort from '../LoadPort';
import NetworkError from "../NetworkError"

async function Ports() {
  const res = await fetch(`http://localhost:3000/api/portfoillo`);
  const data = await res.json();
  if (!res.ok) {
    return <NetworkError />;
  }
  return data.data;
}

async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/portfoillo`);
  const data = await res.json();
  if (!res.ok) {
    return {
      props: {
        error: true,
      },
    };
  }
  return {
    props: {
      portsee: data.data,
    },
  };
}
async function Dev(props) {
  const portsee = await Ports()
  return (
    <>
      <div>
        <div className='container mt-4'>
          <h2 className='text-center text-xl font-bold'>Developer's Portfolios</h2>

          {/* <LoadPort port={portsee} /> */}
          {/* <Suspense fallback={<NetworkError />}>
            {error ? <h2>Error loading data</h2> : <LoadPort port={portsee} />}
          </Suspense> */}

        </div>
      </div>
    </>
  )
}

export default Dev