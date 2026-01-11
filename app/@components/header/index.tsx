import { SquareTerminal } from "lucide-react"
import { Button } from "@/app/@components/button"

export function Header() {
    return (
        <div className="border-b border-b-white/20 border-solid">
            <header className="m-auto grid max-w-7xl grid-cols-2 items-center gap-4 p-4">
                <div className="flex items-center gap-2 text-white">
                    <div className="flex size-6 items-center justify-center rounded bg-blue-600 xl:size-8">
                        <SquareTerminal className="size-4" />
                    </div>
                    <h2 className="font-bold text-sm uppercase">
                        VPS Trader Ninja
                    </h2>
                </div>

                <div className="flex justify-end">
                    <Button>Criar Servidor</Button>
                </div>
            </header>
        </div>
    )
}
