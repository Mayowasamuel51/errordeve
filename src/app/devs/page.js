import { Suspense } from 'react'
import PortSee from '../PortSee'
const Dev = () => {

    return (
        <>
            <div>
                <div className='container mt-4'>
                    <h2 className='text-center text-xl font-bold'>Developer's Portfolios</h2>
{/* 
                    <Suspense fallback={<h2>LOADING PLEASE WAIT............</h2>}>
                        <PortSee />
                    </Suspense> */}
                </div>
            </div>
        </>
    )
}

export default Dev