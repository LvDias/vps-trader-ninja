import Link from "next/link"

export function Button({ children }: { children: React.ReactNode }) {
    return (
        <Link
            className="flex items-center justify-center gap-2 rounded bg-blue-600 px-4 py-2 font-bold text-white text-xs uppercase xl:text-sm"
            href="https://pay.cakto.com.br/6kug9q3_721219"
        >
            {children}
        </Link>
    )
}
