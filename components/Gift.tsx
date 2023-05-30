import Image from "next/image"
import ClipboardJS from "clipboard"

const Gift = () => {
    const handleCopyAccountNumber = () => {
        new ClipboardJS('.copyrek', {
            text: () => "20232023"
        });
    }
    
    return (
        <div className="bg-gray-50">
            <svg
                className="h-32 w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#083344"
                    fillOpacity="1"
                    d="M0,192L80,165.3C160,139,320,85,480,96C640,107,800,181,960,218.7C1120,256,1280,256,1360,256L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                ></path>
            </svg>
            <h2 className="font-bold text-3xl mb-10 text-center -mt-5 font-serif uppercase text-cyan-800">
                Kirim Bingkisan
            </h2>
            <div className="p-5">
                <div className="p-5 bg-white flex flex-col justify-center items-center">
                    <Image src={'/images/bca.png'} alt="logo bca" height={80} width={150} />
                    <hr className="w-full border-t-2 border-cyan-900 opacity-70 mb-5" />
                    <div className="font-medium text-xl tracking-wider text-cyan-800 mb-5">20232023</div>
                    <div className="flex justify-center mb-5">
                        <button
                            onClick={handleCopyAccountNumber}
                            type="button"
                            className="copyrek text-cyan-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                            </svg>
                            Copy No Rek
                        </button>
                    </div>
                    <div className="text-cyan-800">A/N Bliss Jaspis</div>
                </div>
            </div>
        </div>
    )
}

export default Gift
