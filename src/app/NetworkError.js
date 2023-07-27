


function NetworkError() {

    return (
        <div className="bg-gray-100">
            <div className="flex items-center justify-center h-full">
                <div className="p-6 max-w-sm w-full bg-white rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Network Issue</h1>
                    <p className="text-gray-700 mb-6">Sorry, it seems there is a problem with your network connection. Please check your internet connection and try again.</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                        Retry
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NetworkError;