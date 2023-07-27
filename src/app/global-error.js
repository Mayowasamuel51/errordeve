'use client'
 
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2 className="font-bold text-lg ">Something went wrong!</h2>
        <button  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}