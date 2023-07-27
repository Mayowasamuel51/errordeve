import Link from "next/link";
import Url from "../../dashboardPages/Url";

function Port() {
    return (
        <div>
            <div className="text-center mt-5">
            <Link href="/dashboard/websiteurl" className=" bg-blue-500 hover:bg-blue-700 text-center  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Back</Link>
           </div>
            {/* < /> */}
            <Url/>
        </div>
    )
}

export default Port;