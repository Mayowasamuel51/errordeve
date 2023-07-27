import Link from "next/link";
import Api from "../../dashboardPages/Api";

function Key() {
    return (
        <div>
            <div className="text-center mt-5">
            {/* <Link href="/dashboard/apikey" className=" bg-blue-500 hover:bg-blue-700 text-center  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Back</Link> */}
           </div>
            <Api />
        </div>
    )
}

export default Key;