import { Parisienne } from "@next/font/google"

const parisienne = Parisienne({ weight: "400", subsets: ["latin"] })

const FooterGreeting = () => {
    return (
        <div className="flex flex-col p-5 text-center bg-gradient-to-r from-pink-50 via-purple-100 to-pink-50">
        {/* <div className="flex flex-col p-5 text-center bg-gradient-to-t from-white via-yellow-50 to-white"> */}
            
            <div className="mt-10">
                <div className="text-gray-700 mb-10">
                    Atas Kehadiran dan Doa Restu dari Bapak/Ibu/Saudara/i
                    Sekalian. Kami ucapakan Terima Kasih.
                </div>
                <div className="text-xl text-cyan-700 mb-10">
                    Mauliate Godang ❤️
                </div>
            </div>

            <div className="mb-10">
                <div className="mb-10 text-gray-700">Kami Yang Berbahagia</div>
                <div
                    className={`${parisienne.className} text-yellow-500 text-3xl`}
                >
                    Bliss Jaspis Sitanggang
                </div>
                <div
                    className={`${parisienne.className} text-yellow-500 text-3xl`}
                >
                    &
                </div>
                <div
                    className={`${parisienne.className} text-yellow-500 text-3xl`}
                >
                    Lini Br Simamora
                </div>
            </div>
        </div>
    )
}

export default FooterGreeting
