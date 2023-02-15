import Head from "next/head"
import FirstGreeting from "@/components/FirstGreeting"
import WishingPrayer from "@/components/WishingPrayer"
import EventLocation from "@/components/EventLocation"
import Gallery from "@/components/Gallery"
import Gift from "@/components/Gift"
import FooterGreeting from "@/components/FooterGreeting"
import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Happy Wedding Day</title>
                <meta name="description" content="Happy Wedding Day" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={inter.className}>
                <FirstGreeting />
                <WishingPrayer />
                <EventLocation />
                <Gallery />
                <Gift />
                <FooterGreeting />
            </main>
        </>
    )
}
