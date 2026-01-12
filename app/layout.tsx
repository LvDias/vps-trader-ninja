import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

import Script from "next/script"
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

            <Script
                id="gtm-stape-init"
                strategy="afterInteractive"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: Script necessário para GTM Server Side
                dangerouslySetInnerHTML={{
                    __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s);j.async=true;j.src=
              "https://stape.vpstrader.ninja/7kklbyfuwkk.js?"+i;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','7flls0t4=Ag9KMjI0TyIsXSUiPC9bSh1WRVtXXwYCVh0HBhILAwgOGVkbDxcIDQ%3D%3D');
            `,
                }}
            />
            <noscript>
                <iframe
                    title="Google Tag Manager"
                    src="https://stape.vpstrader.ninja/ns.html?id=GTM-NG6RWZV9"
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                />
            </noscript>
        </html>
    )
}
