import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { GoogleTagManager } from "@next/third-parties/google"
import { Footer } from "./@components/footer"
import { Header } from "./@components/header"

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "",
    description: "",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${roboto.variable} bg-slate-950 antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>

            <GoogleTagManager gtmId="GTM-NG6RWZV9" />
        </html>
    )
}
