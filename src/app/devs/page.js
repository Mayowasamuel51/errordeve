import { Suspense } from 'react'
import LoadPort from "../LoadPort"
import NetworkError from "../NetworkError"
async function fetchports() {
    const res = await fetch(`http://localhost:3000/api/portfoillo`)
    const data = await res.json()
    if (!res.ok) {
        return <NetworkError />
    }
    return data.data
}
const Dev = async () => {
    const portsee = await fetchports()
    return (
        <>
            <div>
                <div className='container mt-4'>
                    <h2 className='text-center text-xl font-bold'>Developer's Portfolios</h2>
                    {/* <Suspense fallback={<h2>LOADING PLEASE WAIT............</h2>}> */}
                        {/* <LoadPort port={portsee} /> */}
                    {/* </Suspense> */}

                </div>
            </div>
        </>
    )
}

export default Dev