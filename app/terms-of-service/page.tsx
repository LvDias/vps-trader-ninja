import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Termos de Uso - VPS Trader Ninja",
    description: "Termos e condições de uso do serviço VPS Trader Ninja",
}

export default function TermosUso() {
    return (
        <main className="m-auto flex max-w-4xl flex-col gap-8 px-4 py-8">
            <Link
                href="/"
                className="flex items-center gap-2 text-blue-500 text-sm hover:underline"
            >
                <ArrowLeft className="size-4" />
                Voltar para o início
            </Link>

            <div className="flex flex-col gap-6">
                <h1 className="font-bold text-4xl text-white">
                    Termos de Uso
                </h1>
                <p className="text-base text-white/50">
                    Efetiva a partir de 13 de janeiro de 2026
                </p>
            </div>

            <div className="flex flex-col gap-8 text-white/80">
                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl text-white">
                        1. Termos
                    </h2>
                    <p className="text-base leading-relaxed">
                        Ao acessar ao site{" "}
                        <a
                            href="https://vpstrader.ninja"
                            className="text-blue-500 hover:underline"
                        >
                            VPS TRADER NINJA
                        </a>
                        , concorda em cumprir estes termos de serviço, todas as
                        leis e regulamentos aplicáveis ​​e concorda que é
                        responsável pelo cumprimento de todas as leis locais
                        aplicáveis. Se você não concordar com algum desses
                        termos, está proibido de usar ou acessar este site. Os
                        materiais contidos neste site são protegidos pelas leis
                        de direitos autorais e marcas comerciais aplicáveis.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl text-white">
                        2. Uso de Licença
                    </h2>
                    <p className="text-base leading-relaxed">
                        É concedida permissão para baixar temporariamente uma
                        cópia dos materiais (informações ou software) no site
                        VPS TRADER NINJA, apenas para visualização transitória
                        pessoal e não comercial. Esta é a concessão de uma
                        licença, não uma transferência de título e, sob esta
                        licença, você não pode:
                    </p>
                    <ol className="ml-6 flex list-decimal flex-col gap-2">
                        <li>modificar ou copiar os materiais;</li>
                        <li>
                            usar os materiais para qualquer finalidade
                            comercial ou para exibição pública (comercial ou
                            não comercial);
                        </li>
                        <li>
                            tentar descompilar ou fazer engenharia reversa de
                            qualquer software contido no site VPS TRADER NINJA;
                        </li>
                        <li>
                            remover quaisquer direitos autorais ou outras
                            notações de propriedade dos materiais; ou
                        </li>
                        <li>
                            transferir os materiais para outra pessoa ou
                            'espelhe' os materiais em qualquer outro servidor.
                        </li>
                    </ol>
                    <p className="text-base leading-relaxed">
                        Esta licença será automaticamente rescindida se você
                        violar alguma dessas restrições e poderá ser rescindida
                        por VPS TRADER NINJA a qualquer momento. Ao encerrar a
                        visualização desses materiais ou após o término desta
                        licença, você deve apagar todos os materiais baixados
                        em sua posse, seja em formato eletrónico ou impresso.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl text-white">
                        3. Isenção de responsabilidade
                    </h2>
                    <ol className="ml-6 flex list-decimal flex-col gap-3">
                        <li>
                            Os materiais no site da VPS TRADER NINJA são
                            fornecidos 'como estão'. VPS TRADER NINJA não
                            oferece garantias, expressas ou implícitas, e, por
                            este meio, isenta e nega todas as outras garantias,
                            incluindo, sem limitação, garantias implícitas ou
                            condições de comercialização, adequação a um fim
                            específico ou não violação de propriedade
                            intelectual ou outra violação de direitos.
                        </li>
                        <li>
                            Além disso, o VPS TRADER NINJA não garante ou faz
                            qualquer representação relativa à precisão, aos
                            resultados prováveis ​​ou à confiabilidade do uso
                            dos materiais em seu site ou de outra forma
                            relacionado a esses materiais ou em sites vinculados
                            a este site.
                        </li>
                    </ol>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl text-white">
                        4. Limitações
                    </h2>
                    <p className="text-base leading-relaxed">
                        Em nenhum caso o VPS TRADER NINJA ou seus fornecedores
                        serão responsáveis ​​por quaisquer danos (incluindo, sem
                        limitação, danos por perda de dados ou lucro ou devido
                        a interrupção dos negócios) decorrentes do uso ou da
                        incapacidade de usar os materiais em VPS TRADER NINJA,
                        mesmo que VPS TRADER NINJA ou um representante
                        autorizado da VPS TRADER NINJA tenha sido notificado
                        oralmente ou por escrito da possibilidade de tais
                        danos. Como algumas jurisdições não permitem limitações
                        em garantias implícitas, ou limitações de
                        responsabilidade por danos conseqüentes ou incidentais,
                        essas limitações podem não se aplicar a você.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl text-white">
                        5. Precisão dos materiais
                    </h2>
                    <p className="text-base leading-relaxed">
                        Os materiais exibidos no site da VPS TRADER NINJA podem
                        incluir erros técnicos, tipográficos ou fotográficos.
                        VPS TRADER NINJA não garante que qualquer material em
                        seu site seja preciso, completo ou atual. VPS TRADER
                        NINJA pode fazer alterações nos materiais contidos em
                        seu site a qualquer momento, sem aviso prévio. No
                        entanto, VPS TRADER NINJA não se compromete a atualizar
                        os materiais.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl text-white">6. Links</h2>
                    <p className="text-base leading-relaxed">
                        O VPS TRADER NINJA não analisou todos os sites
                        vinculados ao seu site e não é responsável pelo
                        conteúdo de nenhum site vinculado. A inclusão de
                        qualquer link não implica endosso por VPS TRADER NINJA
                        do site. O uso de qualquer site vinculado é por conta e
                        risco do usuário.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl text-white">
                        Modificações
                    </h2>
                    <p className="text-base leading-relaxed">
                        O VPS TRADER NINJA pode revisar estes termos de serviço
                        do site a qualquer momento, sem aviso prévio. Ao usar
                        este site, você concorda em ficar vinculado à versão
                        atual desses termos de serviço.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl text-white">
                        Lei aplicável
                    </h2>
                    <p className="text-base leading-relaxed">
                        Estes termos e condições são regidos e interpretados de
                        acordo com as leis do VPS TRADER NINJA e você se
                        submete irrevogavelmente à jurisdição exclusiva dos
                        tribunais naquele estado ou localidade.
                    </p>
                </section>
            </div>
        </main>
    )
}
