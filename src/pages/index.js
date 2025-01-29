import {Inter} from "next/font/google"
import Navbar from "./_components/Navbar.jsx"
import {Button} from "./_components/Button.jsx"

const inter = Inter({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

export default function Home() {
    const url =
        "https://checkout.payt.com.br/a9136794e5b084c915b1470232654802?utm_source=google&utm_medium=organic&utm_domain=SiteImpulse&_gl=1*1lptyj0*_gcl_au*MTA2Njc4OTUwOC4xNzM4MTIxNDY0*_ga*NTkwMzc3NTg4LjE3MzgxMjE0NjQ.*_ga_M14BTWDFM3*MTczODEyMTQ2NC4xLjEuMTczODEyMTQ5OC4yNi4wLjU2NDI5MDQ5MA..*_ga_NPPEP015EB*MTczODEyMTQ2NC4xLjEuMTczODEyMTQ5OC4wLjAuMA.."

    return (
        <main className={inter.className}>
            <Navbar />
            <section className="box-border h-min flex flex-col justify-center items-center overflow-hidden content-center flex-nowrap gap-10 px-[30px] py-[50px]">
                <h1 className="w-auto h-auto whitespace-pre-wrap [word-wrap:break-word] [word-break:break-word] font-bold not-italic text-[color:var(--orange)] text-4xl leading-none text-center">
                    Profissional de digitação
                </h1>
                <img
                    className="sirImg overflow-hidden bg-cover bg-no-repeat bg-center shadow-[0_0_15px_5px_#0003] rounded-[20px]"
                    src="/senhor-digitando.png"
                />
                <p className="font-[500] text-[#888888] text-lg text-center">
                    Este treinamento te prepara para uma renda de até R$ 200 por serviço.
                </p>
                <Button title={"Comece agora"} url={url} variant="orange" />
            </section>
            <section className="flex flex-col items-center bg-[color:var(--orange)] secao-2">
                <img className="h-2/5 object-cover ladyTyping" src="/mulher-digitando.jpg" />
                <div className="flex flex-col justify-center items-start gap-5 p-[25px]">
                    <h1 className="font-bold not-italic text-white text-[37px] tracking-[-2px] leading-[1.2] text-left">
                        Profissional de digitação
                    </h1>
                    <p className="font-medium not-italic text-[white] text-lg leading-normal text-left">
                        Aprenda a ser um profissional de digitação com o treinamento da Impulse. Com aulas diretas você irá aprender a
                        desenvolver suas habilidades para digitar e formatar textos e artigos, criar ebooks, transcrever áudios para textos,
                        realizar correções e criar roteiros.
                    </p>
                    <div className="flex gap-2.5 items-center">
                        <p className="line-through text-[white]">R$ 129</p>
                        <p className="text-[black] text-[22px]">
                            R$
                            <strong> 49</strong>
                        </p>
                    </div>
                    <Button title={"Comece agora"} url={url} />
                </div>
            </section>
            <section className="h-fit flex flex-col gap-5 bg-[#f7f7f7] pt-[30px] secao-3">
                <h1>Etapas de desenvolvimento de carreira</h1>
                <div className="w-full flex flex-col items-center flex-nowrap gap-5 module-wrapper">
                    <div className="w-[293px] h-[220px] flex flex-col justify-center items-center content-center gap-2.5 p-2.5 rounded-[20px] bg-[color:var(--black)]">
                        <h2 className="text-center font-bold text-[28px] text-[white]">
                            <strong className="text-[color:var(--orange)]">+</strong> de 10 oportunidades
                        </h2>
                        <p className="text-[#ffffff80] text-xl tracking-normal leading-[1.2] text-center">
                            Todos os dias para você se inscrever
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-5 p-[30px]">
                        <h3 className="font-bold not-italic text-[color:var(--orange)] text-[26px] tracking-[-2.1px] leading-[1.2] text-left">
                            Mapeamento de oportunidades de trabalho
                        </h3>
                        <p className="font-medium text-[#888] text-[21px] tracking-[-0.7px] leading-normal text-left">Identifique e aproveite as melhores oportunidades disponíveis no mercado digital.</p>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center flex-nowrap gap-5 module-wrapper">
                    <div className="w-[293px] h-[220px] flex flex-col justify-center items-center content-center gap-2.5 p-2.5 rounded-[20px] bg-[color:var(--orange)] rounded-[20px]">
                        <h2 className="w-full text-[white] text-[40px] tracking-normal leading-[1.2] text-center">
                            até <strong>R$ 200</strong>
                        </h2>
                        <p className="w-6/12 text-[white] text-xl tracking-normal leading-[1.2] text-center">De renda extra jobs</p>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-5 p-[30px] ">
                        <h3 className="font-bold not-italic text-[color:var(--orange)] text-[26px] tracking-[-2.1px] leading-[1.2] text-left">
                            Reconhecimento financeiro
                        </h3>
                        <p className="font-medium text-[#888] text-[21px] tracking-[-0.7px] leading-normal text-left">Alcance seus objetivos financeiros e construa uma carreira de sucesso no mundo digital.</p>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center flex-nowrap gap-5 module-wrapper">
                    <div className="w-[293px] h-[220px] flex flex-col justify-center items-center content-center gap-2.5 p-2.5 rounded-[20px]">
                        <h2 className="text-center">
                            <strong>8</strong>módulos
                        </h2>
                        <p>de conteúdo para você se desenvolver como profissional de Profissional de digitação.</p>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-5 p-[30px]">
                        <h3 className="font-bold not-italic text-[color:var(--orange)] text-[26px] tracking-[-2.1px] leading-[1.2] text-left">
                            Desenvolvimento
                        </h3>
                        <p className="font-medium text-[#888] text-[21px] tracking-[-0.7px] leading-normal text-left">Aprenda as habilidades necessárias através de nossos módulos de treinamento especializados.</p>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center flex-nowrap gap-5 module-wrapper">
                    <div className="w-[293px] h-[220px] flex flex-col justify-center items-center content-center gap-2.5 p-2.5 rounded-[20px]">
                        <h2 className="text-center">
                            <strong>+</strong> de 10 oportunidades
                        </h2>
                        <p>Todos os dias para você se inscrever</p>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-5 p-[30px]">
                        <h3 className="font-bold not-italic text-[color:var(--orange)] text-[26px] tracking-[-2.1px] leading-[1.2] text-left">
                            Definição do perfil profissional
                        </h3>
                        <p className="font-medium text-[#888] text-[21px] tracking-[-0.7px] leading-normal text-left">Descubra qual profissão combina mais com você e dê o primeiro passo para impulsionar sua renda.</p>
                    </div>
                </div>
            </section>
            <section className="h-[50dvh]">
                <h1>Comece sua jornada de Profissional de digitação agora mesmo</h1>
                <a>Clique aqui para começar agora &#8594; </a>
            </section>
            <section className="section-5">
                <h1>Metodologia </h1>
                <p>
                    Nossa metodologia de treinamento proporciona uma abordagem clara e estruturada, garantindo que você aprenda e desenvolva
                    habilidades essenciais para se destacar na profissão escolhida.
                </p>
                <br />
                <p>
                    Com módulos cuidadosamente planejados, vamos levar você de uma abordagem básica ao avançado, proporcionando uma base
                    sólida para o seu aprendizado e desenvolvimento profissional.
                </p>
            </section>
            <section className="section-6">
                <div className="section-header">
                    <div className="image-header-wrapper">
                        <img src="/mulher-fundo-vermelho.png" />
                    </div>
                    <div className="header-wrapper">
                        <h1>Por que escolhera Impulse?</h1>
                        <p>
                            Cada passo que você dá hoje pode transformas o seu amanhã. Na Impulse, estamos aqui para te ajudar a construir o
                            seu caminho para o sucesso digital.
                        </p>
                        <a>Conheça nossos treinamentos &#8594;</a>
                    </div>
                    <p>Somos referência em treinamentos profissionalizantes on-line, com foco em resultados reais para nossos parceiros.</p>
                    <div className="references-wrapper">
                        <div className="reference-box">
                            <img src="/check-circle.svg" />
                            <div>
                                <h2>Suporte personalizado</h2>
                                <p>Equipe dedicada para auxiliar em todas as etapas do seu aprendizado</p>
                            </div>
                        </div>
                        <div className="reference-box">
                            <img src="/check-circle.svg" />
                            <div>
                                <h2>Metodologia Comprovada</h2>
                                <p>Método de ensino testado e aprovado por milhares de membros</p>
                            </div>
                        </div>
                        <div className="reference-box">
                            <img src="/check-circle.svg" />
                            <div>
                                <h2>Oportunidades Reais</h2>
                                <p>Oportunidades oferecidas de acordo com as últimas tendências do mercado digital</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-7">
                <div>
                    <h1>Para quem é o treinamento de Profissional de digitação?</h1>
                    <ul>
                        <li>&#8594; Digitador Online Remunerado</li>
                        <li>&#8594; Profissional de Atendimento ao Cliente</li>
                        <li>&#8594; Profissional em Início de Carreira</li>
                        <li>&#8594; Redator Freelancer e Autônomo</li>
                        <li>&#8594; Beta Reader</li>
                    </ul>
                </div>
                <img src="/logo-simbolo.webp" />
            </section>
            <footer></footer>
        </main>
    )
}
