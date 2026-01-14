import { cookies } from "next/headers"
import Link from "next/link"

export async function Button({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies()
    const lead = cookieStore.get("lead")?.value ?? "cookieLead"

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
