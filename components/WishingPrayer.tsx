import { Parisienne } from "@next/font/google"

const parisienne = Parisienne({ weight: "400", subsets: ["latin"] })

const WishingPrayer = () => {
    return (
        <div className="flex flex-col bg-gradient-to-t from-white via-purple-50 to-white">
            <div className="max-w-xl mx-auto text-center py-10 px-5">
                <div className="font-light text-gray-800 mb-10 leading-relaxed">
                    <div>Terpujilah Tuhan atas segala kemurahan-Nya.</div>
                    <div>
                        Mempertemukan kami dan menumbuhkan kasih di antara kami
                        hingga saat mempersatukan kami dalam pernikahan yang
                        kudus.
                    </div>
                </div>

                <div className="mb-10">
                    <div
                        className={`${parisienne.className} text-3xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 p-2`}
                    >
                        Bliss Jaspis Sitanggang, S.Kom
                    </div>
                    <div className="text-sm text-gray-700">
                        Putra dari Bpk. V. Sitanggang & Ibu P. Sinaga
                    </div>
                </div>

                <div className="mb-10">
                    <div
                        className={`${parisienne.className} text-3xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 p-2`}
                    >
                        Lini Br Simamora
                    </div>
                    <div className="text-sm text-gray-700">
                        Putri dari Bpk. A. Simamora (†) & Ibu S. Simbolon
                    </div>
                </div>

                <div className=" border-2 p-5 bg-clip-content border-pink-600 border-dotted text-gray-700 font-light">
                    <div className="mb-5">
                        Berdua lebih baik dari pada seorang diri, karena mereka
                        menerima upah yang baik dalam jerih payah mereka. Karena
                        kalau mereka jatuh, yang seorang mengangkat temannya,
                        tetapi wai orang yang jatuh, yang tidak mempunyai orang
                        lain untuk mengangkatnya! Juga kalau orang tidur berdua,
                        mereka menjadi panas, tetapi bagaimana seorang saja
                        dapat menjadi panas? Dan bilamana seorang dapat
                        dialahkan, dua orang akan dapat bertahan. Tali tiga
                        lembar tak mudah diputuskan.
                    </div>
                    <div className="text-pink-800 tracking-wider">
                        Pengkhotbah 4:9-12
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishingPrayer
