import { Parisienne } from "@next/font/google"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import { motion } from "framer-motion"

const parisienne = Parisienne({ weight: "400", subsets: ["latin"] })

const FirstGreeting = () => {
    return (
        <div className={`flex flex-col justify-between items-center h-screen`}>
            <Image
                className={styles.leftFloral}
                src="/images/floral.avif"
                alt="and-icon"
                width={120}
                height={120}
            ></Image>
            <Image
                className={styles.rightFloral}
                src="/images/floral.avif"
                alt="and-icon"
                width={120}
                height={120}
            ></Image>
            <Image
                className={styles.leftBottomFloral}
                src="/images/floral.avif"
                alt="and-icon"
                width={120}
                height={120}
            ></Image>
            <Image
                className={styles.rightBottomFloral}
                src="/images/floral.avif"
                alt="and-icon"
                width={120}
                height={120}
            ></Image>

            <div className="mx-auto max-w-xl text-center p-10">
                <div
                    className={`${parisienne.className} text-2xl text-pink-500`}
                >
                    Shalom!
                </div>
                <div
                    className={`${parisienne.className} text-2xl mb-5 text-pink-500`}
                >
                    We&apos;are Getting Married
                </div>
            </div>

            <div className="max-w-xl p-5 flex flex-col justify-center items-center mb-14">
                <div
                    className={`${parisienne.className} text-cyan-800 text-6xl font-bold leading-relaxed`}
                >
                    Bliss Jaspis
                </div>

                <div className="py-2">
                    <Image
                        src="/images/icon-and-&.svg"
                        alt="and-icon"
                        width={40}
                        height={40}
                    ></Image>
                </div>

                <div
                    className={`${parisienne.className} text-cyan-800 text-6xl font-bold leading-relaxed`}
                >
                    Lini Br
                </div>
            </div>

            <div className="mx-auto max-w-xl text-center mb-5">
                <div className="px-5 mb-10 text-cyan-950">
                    Kami mengundang anda untuk menghadiri pernikahan kami
                </div>
                <div className="text-lg text-amber-700">
                    Binjai, Sumatera Utara
                </div>
                <div className="text-lg text-amber-700">
                    Kamis, 20 September 2023
                </div>
            </div>
        </div>
    )
}

export default FirstGreeting
