import { Suspense } from "react"
import LoadPort from "./LoadPort"

import NetworkError from "./NetworkError"

async function fetchports() {
    const res = await fetch('http://localhost:3000/api/portfoillo')
    const data = await res.json()
    if (!res.ok) {
        return <NetworkError/>
    }
    return data.data
}

const PortSee = async () => {
    const portsee = await fetchports()
    console.log(portsee)
    return (
        <>
            <Suspense fallback={<h1>loading.......</h1>}>
                    <LoadPort port={portsee}/>
            </Suspense>
        </>
    )
}
export default PortSee;