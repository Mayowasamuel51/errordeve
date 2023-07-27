import { Suspense } from "react"
import LoadPort from "./LoadPort"



async function fetchports() {
    const res = await fetch('http://localhost:3000/api/portfoillo')
    const data = await res.json()
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