export interface SubTextProps {
    text: string
}

export function SubText({ text }: SubTextProps) {
    return (
        <span className="font-bold text-blue-500 text-xs uppercase">
            {text}
        </span>
    )
}
