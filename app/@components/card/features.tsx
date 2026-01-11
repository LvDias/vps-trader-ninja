import type { LucideIcon } from "lucide-react"

export interface FeaturesCardProps {
    title: string
    desc: string
    icon: LucideIcon
}

export function FeaturesCard({ title, desc, icon: Icon }: FeaturesCardProps) {
    return (
        <div className="flex flex-col items-start gap-2 rounded border border-white/10 border-solid bg-blue-500/5 p-8">
            <div className="rounded bg-blue-500 p-2 text-white">
                <Icon className="size-4" />
            </div>

            <p className="font-bold text-white">{title}</p>

            <p className="text-base text-white/50">{desc}</p>
        </div>
    )
}
