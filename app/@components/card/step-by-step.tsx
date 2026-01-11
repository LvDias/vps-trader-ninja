export interface StepByStepCardProps {
    number: number
    title: string
    desc: string
}

export function StepByStepCard({ number, title, desc }: StepByStepCardProps) {
    return (
        <div className="grid grid-cols-[auto_1fr] items-start gap-4 lg:gap-2 xl:grid-cols-1">
            <div className="flex size-12 items-center justify-center rounded-full border border-blue-500 border-solid font-bold text-blue-500">
                <span>{number}</span>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="font-bold text-2xl text-white">{title}</h3>

                <p className="text-base text-white/50">{desc}</p>
            </div>
        </div>
    )
}
