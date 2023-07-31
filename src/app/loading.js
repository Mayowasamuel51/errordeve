import Skeleton from 'react-loading-skeleton'

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
      <div className='text-center mt-4'>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
            
        </div>
      </div>
    )
}