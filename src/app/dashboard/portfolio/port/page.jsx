import Link from "next/link";
import Api from "../../dashboardPages/Api";
import Ports from "../../dashboardPages/Port";

function Port() {
    return (
        <div>
            <div className="text-center mt-5">
            <Link href="/dashboard/portfolio" className=" bg-blue-500 hover:bg-blue-700 text-center  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Back</Link>
           </div>
            {/* < /> */}
            <Ports/>
        </div>
    )
}

export default Port;