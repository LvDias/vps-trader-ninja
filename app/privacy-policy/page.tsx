import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Política de Privacidade - VPS Trader Ninja",
    description:
        "Política de privacidade e proteção de dados da VPS Trader Ninja",
}

export default function PoliticaPrivacidade() {
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
                    Política Privacidade
                </h1>
                <p className="text-base text-white/50">
                    Efetiva a partir de 13 de janeiro de 2026
                </p>
            </div>

            <div className="flex flex-col gap-8 text-white/80">
                <section className="flex flex-col gap-4">
                    <p className="text-base leading-relaxed">
                        A sua privacidade é importante para nós. É política do
                        VPS TRADER NINJA respeitar a sua privacidade em relação
                        a qualquer informação sua que possamos coletar no site{" "}
                        <a
                            href="https://vpstrader.ninja"
                            className="text-blue-500 hover:underline"
                        >
                            VPS TRADER NINJA
                        </a>
                        , e outros sites que possuímos e operamos.
                    </p>

                    <p className="text-base leading-relaxed">
                        Solicitamos informações pessoais apenas quando
                        realmente precisamos delas para lhe fornecer um
                        serviço. Fazemo-lo por meios justos e legais, com o seu
                        conhecimento e consentimento. Também informamos por que
                        estamos coletando e como será usado.
                    </p>

                    <p className="text-base leading-relaxed">
                        Apenas retemos as informações coletadas pelo tempo
                        necessário para fornecer o serviço solicitado. Quando
                        armazenamos dados, protegemos dentro de meios
                        comercialmente aceitáveis ​​para evitar perdas e
                        roubos, bem como acesso, divulgação, cópia, uso ou
                        modificação não autorizados.
                    </p>

                    <p className="text-base leading-relaxed">
                        Não compartilhamos informações de identificação pessoal
                        publicamente ou com terceiros, exceto quando exigido
                        por lei.
                    </p>

                    <p className="text-base leading-relaxed">
                        O nosso site pode ter links para sites externos que não
                        são operados por nós. Esteja ciente de que não temos
                        controle sobre o conteúdo e práticas desses sites e não
                        podemos aceitar responsabilidade por suas respectivas
                        políticas de privacidade.
                    </p>

                    <p className="text-base leading-relaxed">
                        Você é livre para recusar a nossa solicitação de
                        informações pessoais, entendendo que talvez não
                        possamos fornecer alguns dos serviços desejados.
                    </p>

                    <p className="text-base leading-relaxed">
                        O uso continuado de nosso site será considerado como
                        aceitação de nossas práticas em torno de privacidade e
                        informações pessoais. Se você tiver alguma dúvida sobre
                        como lidamos com dados do usuário e informações
                        pessoais, entre em contacto connosco.
                    </p>

                    <ul className="ml-6 flex list-disc flex-col gap-3">
                        <li>
                            O serviço Google AdSense que usamos para veicular
                            publicidade usa um cookie DoubleClick para veicular
                            anúncios mais relevantes em toda a Web e limitar o
                            número de vezes que um determinado anúncio é
                            exibido para você.
                        </li>
                        <li>
                            Para mais informações sobre o Google AdSense,
                            consulte as FAQs oficiais sobre privacidade do
                            Google AdSense.
                        </li>
                        <li>
                            Utilizamos anúncios para compensar os custos de
                            funcionamento deste site e fornecer financiamento
                            para futuros desenvolvimentos. Os cookies de
                            publicidade comportamental usados ​​por este site
                            foram projetados para garantir que você forneça os
                            anúncios mais relevantes sempre que possível,
                            rastreando anonimamente seus interesses e
                            apresentando coisas semelhantes que possam ser do
                            seu interesse.
                        </li>
                        <li>
                            Vários parceiros anunciam em nosso nome e os
                            cookies de rastreamento de afiliados simplesmente
                            nos permitem ver se nossos clientes acessaram o
                            site através de um dos sites de nossos parceiros,
                            para que possamos creditá-los adequadamente e,
                            quando aplicável, permitir que nossos parceiros
                            afiliados ofereçam qualquer promoção que pode
                            fornecê-lo para fazer uma compra.
                        </li>
                    </ul>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl text-white">
                        Compromisso do Usuário
                    </h2>
                    <p className="text-base leading-relaxed">
                        O usuário se compromete a fazer uso adequado dos
                        conteúdos e da informação que o VPS TRADER NINJA
                        oferece no site e com caráter enunciativo, mas não
                        limitativo:
                    </p>
                    <ul className="ml-6 flex list-disc flex-col gap-2">
                        <li>
                            A) Não se envolver em atividades que sejam ilegais
                            ou contrárias à boa fé a à ordem pública;
                        </li>
                        <li>
                            B) Não difundir propaganda ou conteúdo de natureza
                            racista, xenofóbica, jogos de sorte ou azar,
                            qualquer tipo de pornografia ilegal, de apologia ao
                            terrorismo ou contra os direitos humanos;
                        </li>
                        <li>
                            C) Não causar danos aos sistemas físicos (hardwares)
                            e lógicos (softwares) do VPS TRADER NINJA, de seus
                            fornecedores ou terceiros, para introduzir ou
                            disseminar vírus informáticos ou quaisquer outros
                            sistemas de hardware ou software que sejam capazes
                            de causar danos anteriormente mencionados.
                        </li>
                    </ul>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl text-white">
                        Mais informações
                    </h2>
                    <p className="text-base leading-relaxed">
                        Esperemos que esteja esclarecido e, como mencionado
                        anteriormente, se houver algo que você não tem certeza
                        se precisa ou não, geralmente é mais seguro deixar os
                        cookies ativados, caso interaja com um dos recursos que
                        você usa em nosso site.
                    </p>
                </section>
            </div>
        </main>
    )
}
