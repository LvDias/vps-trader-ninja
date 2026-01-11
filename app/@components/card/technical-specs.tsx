export interface TechnicalSpecsCardProps {
    title: string
    desc: string
    sub: string
}

export function TechnicalSpecsCard({
    title,
    desc,
    sub,
}: TechnicalSpecsCardProps) {
    return (
        <div className="flex flex-col items-center gap-2 rounded border border-white/10 border-solid bg-blue-500/5 p-4 text-center xl:p-8">
            <h3 className="font-bold text-2xl text-white uppercase">{title}</h3>
            <p className="text-base text-white/50">{desc}</p>
            <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-green-500" />
                <p className="text-white text-xs uppercase">{sub}</p>
            </div>
        </div>
    )
}
