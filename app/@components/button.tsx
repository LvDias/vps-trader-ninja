"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function Button({ children }: { children: React.ReactNode }) {
    const [lead, setLead] = useState<string>("")

    useEffect(() => {
        const checkCookie = () => {
            const match = document.cookie.match(/(^| )lead=([^;]+)/)
            if (match) {
                setLead(match[2])
                return true
            }
            return false
        }

        if (checkCookie()) return

        const interval = setInterval(() => {
            if (checkCookie()) {
                clearInterval(interval)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const url = new URL("https://pay.cakto.com.br/6kug9q3_721219")
    url.searchParams.set("sck", lead)

    return (
        <Link
            className="flex items-center justify-center gap-2 rounded bg-blue-600 px-4 py-2 font-bold text-white text-xs uppercase xl:text-sm"
            href={url.toString()}
        >
            {children}
        </Link>
    )
}
