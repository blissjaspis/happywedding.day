import { Parisienne } from "@next/font/google"

const parisienne = Parisienne({ weight: "400", subsets: ["latin"] })

const FirstGreeting = () => {
    return (
        <div className="h-screen bg-gradient-to-t from-white via-yellow-50 to-white">
            <div className="flex flex-col justify-between items-center h-full">
                <div className="mx-auto max-w-xl text-center p-10">
                    <div
                        className={`${parisienne.className} text-2xl mb-5 text-pink-500`}
                    >
                        Shalom!
                    </div>
                    <div
                        className={`${parisienne.className} text-2xl mb-5 text-pink-500`}
                    >
                        We&apos;are Getting Married
                    </div>
                </div>
                <div className="mx-auto max-w-xl text-center p-5">
                    <div
                        className={`${parisienne.className} text-yellow-500 text-6xl py-10 font-bold leading-relaxed`}
                    >
                        Bliss Jaspis & Lini
                    </div>
                </div>
                <div className="mx-auto max-w-xl text-center mb-5">
                    <div className="text-xl mb-3 text-yellow-900">
                        Binjai, Sumatera Utara
                    </div>
                    <div className="text-lg mb-10 text-yellow-900">
                        Kamis, 4 Oktober 2023
                    </div>
                    <div className="text-gray-500 leading-loose">
                        <div>Kepada Yth.</div>
                        <div>Bapak/Ibu/Saudara/i</div>
                        <div className="font-bold">Tamu Undangan</div>
                        <div>Di Tempat</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstGreeting
