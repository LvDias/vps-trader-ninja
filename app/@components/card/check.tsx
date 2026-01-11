import { Check } from "lucide-react"

export interface CheckCardProps {
    text: string
}

export function CheckCard({ text }: CheckCardProps) {
    return (
        <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-full bg-green-500">
                <Check className="size-4 text-zinc-950" />
            </div>
            <p className="text-base text-white/50">{text}</p>
        </div>
    )
}
