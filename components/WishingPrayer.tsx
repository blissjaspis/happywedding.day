import { Parisienne } from "@next/font/google"

const parisienne = Parisienne({ weight: "400", subsets: ["latin"] })

const WishingPrayer = () => {
    return (
        <div className="flex flex-col bg-gradient-to-t from-white via-yellow-50 to-white">
            <div className="max-w-xl mx-auto text-center py-10 px-5">
                <div className="font-light text-gray-800 mb-10 leading-relaxed">
                    <div>Terpujilah Tuhan atas segala kemurahan-Nya.</div>
                    <div>
                        Mempertemukan kami dan menumbuhkan kasih di antara kami
                        hingga saat mempersatukan kami dalam pernikahan yang
                        kudus.
                    </div>
                </div>

                {/* Avatar */}
                <div></div>

                <div className="mb-10">
                    <div
                        className={`${parisienne.className} text-3xl bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-500 p-2`}
                    >
                        Bliss Jaspis Sitanggang, S.Kom
                    </div>
                    <div className="text-sm text-gray-700">
                        Putra dari Bpk. V. Sitanggang & Ibu P. Sinaga
                    </div>
                </div>

                <div className="mb-10">
                    <div
                        className={`${parisienne.className} text-3xl bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-500 p-2`}
                    >
                        Lini Br Simamora
                    </div>
                    <div className="text-sm text-gray-700">
                        Putri dari (†) Bpk. A. Simamora & Ibu S. Simbolon
                    </div>
                </div>

                <div className=" border-2 p-5 bg-clip-content border-amber-300 border-dotted text-gray-700 font-light">
                    <div>
                        Taruhlah aku seperti meterai pada hatimu, seperti
                        meterai pada lenganmu, karena cinta kuat seperti maut,
                        kegairahan gigih seperti dunia orang mati, nyalanya
                        adalah nyala api,seperti nyala api TUHAN!
                    </div>
                    <div className="mb-5">
                        Air yang banyak tak dapat memadamkan cinta,
                        sungai-sungai tak dapat menghanyutkannya. Sekalipun
                        orang memberi segala harta benda rumahnya untuk cinta,
                        namun ia pasti akan dihina.
                    </div>
                    <div className="font-semibold text-gray-600">
                        Kidung Agung 8:6-7
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishingPrayer
