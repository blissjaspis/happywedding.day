import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { motion } from "framer-motion"

export default function App({ Component, pageProps }: AppProps) {
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }

    return (
        <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "tween" }}
        >
            <Component {...pageProps} />
        </motion.main>
    )
}
