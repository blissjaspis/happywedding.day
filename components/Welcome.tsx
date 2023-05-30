import { Parisienne } from "@next/font/google"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import { Dispatch, SetStateAction } from "react"

const parisienne = Parisienne({ weight: "400", subsets: ["latin"] })

interface WelcomeProps {
    setShow: Dispatch<SetStateAction<boolean>>
}

const Welcome = ({ setShow }: WelcomeProps) => {
    const handleShow = () => {
        setShow(true)
    }

    return (
        <>
            <div className="flex flex-col h-screen justify-around">
                <div
                    className={`p-5 flex justify-center relative ${styles.welcome}`}
                >
                    <Image
                        src="/images/gallery/1-peace.jpeg"
                        alt="Welcome Peace"
                        height={200}
                        width={200}
                    />
                </div>

                <div className="text-gray-500 leading-loose">
                    <div className="text-center mb-2">
                        Kepada Bpk/Ibu/Saudara/i
                    </div>
                    <div
                        className={`mb-5 font-bold text-4xl text-center text-yellow-500 ${parisienne.className}`}
                    >
                        Tamu Undangan
                    </div>
                    <div className="mb-5 text-center text-sm px-5 text-cyan-800">
                        Tanpa mengurangi rasa hormat, kami mengundang anda untuk
                        hadir di acara pernikahan kami.
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={handleShow}
                            type="button"
                            className="text-cyan-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 mr-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                            Buka Undangan
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
