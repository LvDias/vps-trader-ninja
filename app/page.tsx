import { BadgeCheck, Monitor, MoveRight, Shield, Timer } from "lucide-react"
import { Button } from "./@components/button"
import { CheckCard } from "./@components/card/check"
import { FeaturesCard } from "./@components/card/features"
import { StepByStepCard } from "./@components/card/step-by-step"
import { TechnicalSpecsCard } from "./@components/card/technical-specs"
import CleanChart from "./@components/chart"
import { SubText } from "./@components/sub-text"

export default function Home() {
    return (
        <main className="m-auto flex max-w-7xl flex-col gap-8 px-4 py-8">
            <section className="flex flex-col gap-8">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-2 self-center rounded-full border border-blue-500 border-solid bg-blue-500/10 px-4 py-2">
                        <div className="size-2 rounded-full bg-green-400" />
                        <span className="font-bold text-blue-500 text-xs uppercase">
                            Status da Rede: Operacional
                        </span>
                    </div>

                    <div className="flex flex-col gap-2 self-center text-center font-extrabold text-4xl text-white xl:text-7xl">
                        <h2>Latência Zero</h2>
                        <h2 className="text-blue-500">Uptime Infinito</h2>
                        <h2>A Elite da Nuvem</h2>
                    </div>

                    <p className="max-w-2xl self-center text-center text-base text-white/50">
                        Infraestrutura VPS profissional otimizada para
                        estratégias automatizadas, execução de alta frequência
                        (HFT) e performance 24/7 no NinjaTrader.
                    </p>

                    <Button>
                        Começar a Operar <MoveRight className="size-4" />
                    </Button>
                </div>

                <div className="flex aspect-square flex-col gap-4 rounded border border-white/20 border-solid bg-blue-500/5 p-4 xl:aspect-video">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-red-500" />
                            <span className="size-2 rounded-full bg-yellow-500" />
                            <span className="size-2 rounded-full bg-green-500" />
                        </div>

                        <p className="font-bold text-white/50 text-xs uppercase">
                            System Dashboard — TradingView
                        </p>
                    </div>

                    <div className="flex h-full items-center justify-center rounded bg-zinc-950">
                        <CleanChart />
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <SubText text="Arquitetura" />

                    <h2 className="font-bold text-2xl text-white">
                        Projetado para Competir
                    </h2>
                    <p className="text-base text-white/50">
                        Cada milissegundo conta. Nossa infraestrutura é afinada
                        especificamente para os requisitos de baixa latência de
                        futuros e ações.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                    <FeaturesCard
                        title="Latência Ultra-Baixa"
                        desc="Conexão cruzada e co-location próximo às principais bolsas financeiras em Chicago (CH1) e Nova York (NY4) para execução abaixo de 1ms."
                        icon={Timer}
                    />

                    <FeaturesCard
                        title="Pré-Configurado"
                        desc="Sem dores de cabeça na instalação. Seu servidor vem com NinjaTrader 8 e frameworks .NET pré-instalados e otimizados."
                        icon={BadgeCheck}
                    />

                    <FeaturesCard
                        title="Isolamento Total"
                        desc="Tenha recursos de CPU dedicados e memória RAM fixa. Proibimos estritamente o over-provisioning, garantindo que sua estratégia nunca dispute poder de processamento."
                        icon={Shield}
                    />

                    <FeaturesCard
                        title="RDP de Alta Velocidade"
                        desc="Acesso Remoto completo com aceleração H.264. Gerencie seus gráficos de qualquer Windows, Mac, iOS ou Android com lag zero."
                        icon={Monitor}
                    />
                </div>
            </section>

            <section className="flex flex-col gap-8">
                <h2 className="text-center font-bold text-2xl text-white uppercase">
                    Especificações Técnicas
                </h2>

                <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
                    <TechnicalSpecsCard
                        title="4x"
                        desc="vCPUs (3.7GHz+)"
                        sub="Dedicado"
                    />

                    <TechnicalSpecsCard
                        title="8RAM"
                        desc="RAM ECC"
                        sub="Otimizada"
                    />

                    <TechnicalSpecsCard
                        title="NVMe"
                        desc="SSD Storage"
                        sub="RAID-10"
                    />

                    <TechnicalSpecsCard
                        title="1Gbps"
                        desc="Uplink de Rede"
                        sub="Ilimitado"
                    />
                </div>
            </section>

            <section className="grid grid-cols-1 justify-between gap-8 border-white/20 border-t border-b border-solid py-8 xl:grid-cols-3 xl:gap-4">
                <StepByStepCard
                    number={1}
                    title="Configure o Plano"
                    desc="Selecione sua região de preferência e o nível de performance desejado."
                />

                <StepByStepCard
                    number={2}
                    title="Deploy Instantâneo"
                    desc="Nosso sistema automatizado inicializa seu VPS Windows em menos de 30 minutos."
                />

                <StepByStepCard
                    number={3}
                    title="Execute e Lucre"
                    desc="Conecte via RDP, carregue seu setup e inicie as operações automáticas."
                />
            </section>

            <section className="flex flex-col items-center gap-8">
                <div className="flex flex-col gap-2 text-center">
                    <SubText text="Níveis de performance" />
                    <h2 className="font-bold text-2xl text-white uppercase">
                        Preço Simples e Fixo
                    </h2>
                </div>

                <div className="flex flex-col gap-8 rounded border border-white/10 border-solid bg-blue-500/5 p-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-bold text-2xl text-white">
                            Pro Trader
                        </h2>

                        <p className="text-base text-white/50">
                            O padrão da indústria para confiabilidade no
                            NinjaTrader 8.
                        </p>

                        <div className="flex items-end">
                            <span className="font-extrabold text-4xl text-white leading-9">
                                R$150,00
                            </span>
                            <span className="text-sm text-white/50">/Mês</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <CheckCard text="4 vCPU Dedicados / 8GB RAM" />
                        <CheckCard text="60GB NVMe SSD Storage" />
                        <CheckCard text="Locais próxmos: Chicago ou Nova York" />
                        <CheckCard text="Monitoramento de Servidor 24/7" />
                        <CheckCard text="Backups Automáticos Semanais" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Button>
                            Começar Agora
                            <MoveRight className="size-4" />
                        </Button>
                        <p className="text-center text-white/50 text-xs">
                            Sem taxa de setup • Cancele quando quiser
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
