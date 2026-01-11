import Link from "next/link"

export function Footer() {
    return (
        <div className="border-white/20 border-t border-solid">
            <footer className="m-auto flex max-w-7xl flex-col items-center gap-2 p-4">
                <p className="text-center text-white/50 text-xs">
                    © 2026 EDITORA PEPPINELLI LTDA. Todos os direitos
                    reservados.
                </p>
                <div className="flex gap-4">
                    <Link className="text-white/50 text-xs" href="#">
                        Políticas de Privacidade
                    </Link>
                    <Link className="text-white/50 text-xs" href="#">
                        Termos de Uso
                    </Link>
                </div>
            </footer>
        </div>
    )
}
