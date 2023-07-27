'use client'
// import a from 'next/a';
import { useState } from 'react';
function LoadPort({ port }) {
    const [currentpage, setCurrentpage] = useState(1)
    const recordPerpage = 20;
    const lastindex = currentpage * recordPerpage;
    const firstindex = lastindex - recordPerpage;
    const records = port.slice(firstindex, lastindex)
    const npage = Math.ceil(port.length / recordPerpage);
    const number = [...Array(npage + 1).keys()].slice(1)

    function nextPage() {
        if (currentpage !== lastindex) {
            setCurrentpage(currentpage + 1)
        }
    }

    function prePage() {
        if (currentpage !== 1) {
            setCurrentpage(currentpage - 1)
        }
    }

    function changecpage(id) {
        setCurrentpage(id)
    }
    return (
        <>
            <div className="mt-10 max-w-full p-10">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                              portfoillo site 
                            </th>
                            {/* <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Api Key
                            </th> */}
                        

                        </tr>
                    </thead>

                    <tbody >
                        {records.map((item) => {
                            return (

                                <tr key={item.id}>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex">

                                            <div className="ml-3">
                                               
                                                <a href={`${item.portfoillo}`} className="text-gray-900 whitespace-no-wrap">
                                                    {item.portfoillo}
                                                </a>

                                            </div>
                                        </div>
                                    </td>

                                
                                  

                                </tr>


                            )
                        })}
                    </tbody>
                </table>
                <nav className="flex items-center justify-between border-t border-gray-200 bg-black px-4 py-3 sm:px-6">
                    <div className="flex flex-1 justify-between sm:hidde">
                        <a href="#"aria-label="Previous" className="text-white relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-black px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white-50" onClick={prePage}>Previous</a>
                        {
                            number.map((n, i) => {
                                <li className={`  pagination-a text-black ${currentpage === n ? `pagination` : ''}`}>
                                    <a href="#"
                                        className="pagination-linl"
                                        onClick={() => changecpage(n)} >{n}</a>
                                </li>
                            })
                        }
                        <a href="#" aria-label="Previous" className="text-white relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-black px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white-50" onClick={nextPage}>Next</a>
                    </div>
                  
                </nav>

                {/* <nav aria-label="Page navigation example" role="navigation" >
                    <ul className="pagination m-4">
                        <li>
                            <a href="#" className="page-a" aria-label="Previous" onClick={prePage}> prev</a>
                        </li>
                        {
                            number.map((n, i) => {
                                <li className={`pagination-a text-black ${currentpage === n ? `pagination` : ''}`}>
                                    <a href="#"
                                        className="pagination-linl"
                                        onClick={() => changecpage(n)} >{n}</a>
                                </li>
                            })
                        }
                        <li>
                            <a href="#" className="page-a" aria-label="Previous" onClick={nextPage}> next</a>
                        </li>
                    </ul>
                </nav> */}

            </div>

        </>
    )
}

export default LoadPort