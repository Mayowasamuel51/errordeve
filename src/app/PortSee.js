import LoadPort from "./LoadPort"
import NetworkError from "./NetworkError"

async function fetchports() {
    const res = await fetch('http://localhost:3000/api/portfoillo')
    const data = await res.json()
    if (!res.ok) {
        return <NetworkError />
    }
    return data.data
}

const PortSee = async () => {
    const portsee = await fetchports()
    return (
        <>
            <LoadPort port={portsee} />
        </>
    )
}
export default PortSee;