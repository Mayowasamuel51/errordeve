import { Suspense} from 'react'
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
function Dev(props) {
    const { portsee, error } = props;
    // const portsee = await Ports()
    return (
        <>
            <div>
                <div className='container mt-4'>
                    <h2 className='text-center text-xl font-bold'>Developer's Portfolios</h2>

                        {/* <LoadPort port={portsee} /> */}
                        {/* <Suspense fallback={<NetworkError />}>
            {error ? <h2>Error loading data</h2> : <LoadPort port={portsee} />}
          </Suspense> */}
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
                        {portsee.map((item) => {
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

                </div>
            </div>
        </>
    )
}

export default Dev