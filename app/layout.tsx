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
            <head>
                <noscript>
                    <iframe
                        title="Google Tag Manager"
                        src="https://stape.vpstrader.ninja/ns.html?id=GTM-NG6RWZV9"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    />
                </noscript>
            </head>
            <body className={`${roboto.variable} bg-slate-950 antialiased`}>
                <Header />
                {children}
                <Footer />

                <Script
                    id="gtm-params-link-checkout"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: Script Checkout Link With Params
                    dangerouslySetInnerHTML={{
                        __html: `let prefix=["https://pay.cakto.com.br"];function getParams(){let t="",e=window.top.location.href,r=new URL(e);if(null!=r){let a=r.searchParams.get("utm_source"),n=r.searchParams.get("utm_medium"),o=r.searchParams.get("utm_campaign"),m=r.searchParams.get("utm_term"),p=r.searchParams.get("fbclid"),c=r.searchParams.get("utm_content");-1!==e.indexOf("?")&&(t="&src="+a+"|"+n+"|"+o+"|"+m+"|"+c);console.log(t)}return t}function getCookie(name){let match=document.cookie.match(new RegExp("(^| )"+name+"=([^;]+)"));if(match){return match[2]}return null}function updateLinks(){var t=new URLSearchParams(window.location.search);var sck=getCookie("lead");if(sck){t.append("sck",sck);t.toString()&&document.querySelectorAll("a").forEach(function(e){for(let r=0;r<prefix.length;r++){if(-1!==e.href.indexOf(prefix[r])){if(-1===e.href.indexOf("?")){e.href+="?"+t.toString()+getParams()}else{e.href+="&"+t.toString()+getParams()}}}})}else{setTimeout(updateLinks,100)}}window.addEventListener("load",function(){updateLinks()});`,
                    }}
                />

                <Script
                    id="gtm-stape-init"
                    strategy="afterInteractive"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: Script GTM Server Side
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
            </body>
        </html>
    )
}
