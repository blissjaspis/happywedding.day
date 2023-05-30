import Head from "next/head"
import FirstGreeting from "@/components/FirstGreeting"
import WishingPrayer from "@/components/WishingPrayer"
import EventLocation from "@/components/EventLocation"
import Welcome from "@/components/Welcome"
import Gallery from "@/components/Gallery"
import Gift from "@/components/Gift"
import FooterGreeting from "@/components/FooterGreeting"
import { Inter } from "@next/font/google"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    const [show, setShow] = useState(false);
    
    return (
        <>
            <Head>
                <title>Happy Wedding Day</title>
                <meta name="description" content="Happy Wedding Day" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="images/favicon/favicon-32x32.png" sizes="32x32" type="image/png" />
                <link rel="icon" href="img/favicon/favicon-16x16.png" sizes="16x16" type="image/png" />
                <link rel="icon" href="img/favicon/favicon.ico" />
            </Head>
            <main className={inter.className}>
                {
                    show ? <>
                        <FirstGreeting />
                        <WishingPrayer />
                        <EventLocation />
                        <Gallery />
                        <Gift />
                        <FooterGreeting />
                    </> : <Welcome setShow={setShow} />
                }
            </main>
        </>
    )
}
