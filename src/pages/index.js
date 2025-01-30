import {Inter} from "next/font/google"
import Navbar from "./_components/Navbar.jsx"
import {Button} from "./_components/Button.jsx"
import Head from "next/head.js"
import {useState} from "react"

const inter = Inter({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

export default function Home() {
    const [isOpenItem, setIsOpenItem] = useState()
    const url =
        "https://checkout.payt.com.br/a9136794e5b084c915b1470232654802?utm_source=google&utm_medium=organic&utm_domain=SiteImpulse&_gl=1*1lptyj0*_gcl_au*MTA2Njc4OTUwOC4xNzM4MTIxNDY0*_ga*NTkwMzc3NTg4LjE3MzgxMjE0NjQ.*_ga_M14BTWDFM3*MTczODEyMTQ2NC4xLjEuMTczODEyMTQ5OC4yNi4wLjU2NDI5MDQ5MA..*_ga_NPPEP015EB*MTczODEyMTQ2NC4xLjEuMTczODEyMTQ5OC4wLjAuMA.."

    const methodologyItems = [
        {
            title: "Introdução",
            description:
                "Nosso módulo introdutório irá lhe apresentar as principais características da profissão, bem como o conteúdo geral que será abordado em cada módulo. Nele, você terá uma visão ampla sobre as responsabilidades, habilidades e competências necessárias para se destacar na área. Além disso, serão apresentados os temas e tópicos específicos que serão aprofundados ao longo do treinamento, proporcionando uma base sólida para o seu aprendizado e desenvolvimento profissional.",
        },
        {
            title: "Aulas",
            description:
                "Nossas aulas são divididas em módulos que apresentam as habilidades necessárias para desempenhar a profissão e como desenvolvê-las. Abordamos também detalhadamente as plataformas e os meios onde você poderá exercer suas atividades profissionais, garantindo que você esteja bem preparado para o mercado de trabalho.",
        },
        {
            title: "O Profissional",
            description:
                "Ao finalizar os módulos, você estará perfeitamente capacitado para se tornar um profissional na área escolhida. Além disso, terá acesso à nossa seção de trabalhos, que o conecta com diversas oportunidades nas quais você pode se candidatar.",
        },
        {
            title: "Certificado",
            description:
                "você receberá um certificado que comprova sua conclusão e aquisição das competências ensinadas. Este certificado serve como uma validação de suas habilidades e conhecimentos, aumentando sua credibilidade no mercado de trabalho e abrindo portas para novas oportunidades profissionais.",
        },
    ]

    return (
        <div>
            <Head>
                <title>Impulse: Sua porta de entrada para o mundo digital.</title>
                <meta property="og:title" content="Impulse" key="title" />
                <meta
                    name="description"
                    content="A Impulse irá te mostrar como conquistar sua renda pela internet de forma fácil! Através dos nossos treinamentos diretos e uma aba de trabalhos."
                ></meta>
                <meta name="keywords" content="treinamento,desenvolvimento,carreira,educação,tecnologia"></meta>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <main className={inter.className} style={{overflow: "clip"}}>
                <Navbar />
                <section className="box-border h-min flex flex-col justify-center items-center overflow-hidden content-center flex-nowrap gap-10 px-[30px] py-[50px] h-[100dvh]">
                    <h1 className="w-auto h-auto whitespace-pre-wrap [word-wrap:break-word] [word-break:break-word] font-bold not-italic text-[color:var(--orange)] text-4xl leading-none text-center main-title">
                        Profissional de digitação
                    </h1>
                    <img
                        className=" overflow-hidden bg-cover bg-no-repeat bg-center shadow-[0_0_15px_5px_#0003] rounded-[20px] senhor-digitando"
                        src="/senhor-digitando.png"
                    />
                    <p className="font-[500] text-[#888888] text-lg text-center training-explanation">
                        Este treinamento te prepara para uma renda de até R$ 200 por serviço.
                    </p>
                    <Button title={"Comece agora"} url={url} variant="orange" />
                </section>
                <section className="flex flex-col items-center bg-[color:var(--orange)] secao-2">
                    <img className="h-2/5 object-cover mulher-digitando" src="/mulher-digitando.jpg" />
                    <div className="flex flex-col justify-center items-start gap-5 p-[25px] product">
                        <h1 className="font-bold not-italic text-white text-[37px] tracking-[-2px] leading-[1.2] text-left product-title">
                            Profissional de digitação
                        </h1>
                        <p className="font-medium not-italic text-[white] text-lg leading-normal text-left product-description">
                            Aprenda a ser um profissional de digitação com o treinamento da Impulse. Com aulas diretas você irá aprender a
                            desenvolver suas habilidades para digitar e formatar textos e artigos, criar ebooks, transcrever áudios para
                            textos, realizar correções e criar roteiros.
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
                <section className="h-fit flex flex-col gap-5 bg-[#f7f7f7] pt-[30px] h-fit flex flex-col gap-5 bg-[#f7f7f7] pt-[30px] secao-3">
                    <h1 className="font-bold text-[color:var(--orange)] text-[26px] tracking-[-1px] leading-[1.2] text-center development-stages">
                        Etapas de desenvolvimento de carreira
                    </h1>
                    <div className="w-full flex flex-col items-center flex-nowrap gap-5 module-wrapper">
                        <div className="w-[293px] h-[220px] flex flex-col justify-center items-center content-center gap-2.5 p-2.5 rounded-[20px] bg-[color:var(--black)] module-box">
                            <h2 className="text-center font-bold text-[28px] text-[white] title-box">
                                <strong className="text-[color:var(--orange)]">+</strong> de 10 oportunidades
                            </h2>
                            <p className="text-[#ffffff80] text-xl tracking-normal leading-[1.2] text-center box-description">
                                Todos os dias para você se inscrever
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-5 p-[30px]">
                            <h3 className="font-bold not-italic text-[color:var(--orange)] text-[26px] tracking-[-2.1px] leading-[1.2] text-left module-title">
                                Mapeamento de oportunidades de trabalho
                            </h3>
                            <p className="font-medium text-[#888] text-[21px] tracking-[-0.7px] leading-normal text-left module-description">
                                Identifique e aproveite as melhores oportunidades disponíveis no mercado digital.
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center flex-nowrap gap-5 module-wrapper">
                        <div className="w-[293px] h-[220px] flex flex-col justify-center items-center content-center gap-2.5 p-2.5 rounded-[20px] bg-[color:var(--orange)] rounded-[20px] module-box">
                            <h2 className="w-full text-[white] text-[40px] tracking-normal leading-[1.2] text-center title-box">
                                até <strong>R$ 200</strong>
                            </h2>
                            <p className="w-6/12 text-[white] text-xl tracking-normal leading-[1.2] text-center box-description">
                                De renda extra jobs
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-5 p-[30px] ">
                            <h3 className="font-bold not-italic text-[color:var(--orange)] text-[26px] tracking-[-2.1px] leading-[1.2] text-left module-title">
                                Reconhecimento financeiro
                            </h3>
                            <p className="font-medium text-[#888] text-[21px] tracking-[-0.7px] leading-normal text-left module-description">
                                Alcance seus objetivos financeiros e construa uma carreira de sucesso no mundo digital.
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center flex-nowrap gap-5 module-wrapper">
                        <div className="w-[293px] h-[220px] flex flex-col justify-center items-center content-center gap-2.5 p-2.5 rounded-[20px] bg-gray-200 module-box">
                            <h2 className="text-[32px] flex gap-2.5 text-[color:var(--orange)] title-box">
                                8<strong className="text-[black]">módulos</strong>
                            </h2>
                            <p className="text-[rgba(27,27,27,0.5)] text-base tracking-normal leading-[1.2] text-center box-description">
                                de conteúdo para você se desenvolver como profissional de Profissional de digitação.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-5 p-[30px]">
                            <h3 className="font-bold not-italic text-[color:var(--orange)] text-[26px] tracking-[-2.1px] leading-[1.2] text-left module-title">
                                Desenvolvimento
                            </h3>
                            <p className="font-medium text-[#888] text-[21px] tracking-[-0.7px] leading-normal text-left module-description">
                                Aprenda as habilidades necessárias através de nossos módulos de treinamento especializados.
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center flex-nowrap gap-5 module-wrapper">
                        <div className="flex flex-col justify-center items-start gap-5 p-[30px] last-module">
                            <h3 className="font-bold not-italic text-[color:var(--orange)] text-[26px] tracking-[-2.1px] leading-[1.2] text-left module-title">
                                Definição do perfil profissional
                            </h3>
                            <p className="font-medium text-[#888] text-[21px] tracking-[-0.7px] leading-normal text-left module-description">
                                Descubra qual profissão combina mais com você e dê o primeiro passo para impulsionar sua renda.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="h-[262px] flex flex-col justify-center items-center bg-[color:var(--orange)] gap-[25px] px-5 py-[60px] secao-4">
                    <h1 className="responsive-text font-bold text-[white] text-2xl tracking-[-1px] leading-[1.2] text-center">
                        Comece sua jornada de Profissional de digitação agora mesmo
                    </h1>
                    <Button className={"button-start-now"} title={"Clique aqui para começar agora"} url={url} />
                </section>
                <section className="h-min flex flex-col justify-center items-center bg-[#f7f7f7] gap-5 text-[color:var(--black,#1b1b1b)] p-[60px] secao-5">
                    <div className="flex flex-col justify-center items-center gap-[15px] p-0 text-wrapper">
                        <h1 className="font-bold not-italic text-[39px] tracking-normal leading-[1.2]">Metodologia</h1>
                        <p className="text-base tracking-[-0.02em] leading-[1.6] text-left">
                            Nossa metodologia de treinamento proporciona uma abordagem clara e estruturada, garantindo que você aprenda e
                            desenvolva habilidades essenciais para se destacar na profissão escolhida.
                        </p>
                        <p className="text-base tracking-[-0.02em] leading-[1.6] text-left">
                            Com módulos cuidadosamente planejados, vamos levar você de uma abordagem básica ao avançado, proporcionando uma
                            base sólida para o seu aprendizado e desenvolvimento profissional.
                        </p>
                    </div>
                    <ul>
                        {methodologyItems.map((item, index) => (
                            <li key={index} className={`${isOpenItem === index ? "open" : "closed"}`}>
                                <h1
                                    onClick={() => {
                                        setIsOpenItem(isOpenItem == index ? undefined : index)
                                    }}
                                >
                                    <span>
                                        <img src="/x.svg" />
                                    </span>
                                    {item.title}
                                </h1>
                                <p>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="section-6">
                    <div className="section-header">
                        <div className="flex-image-wrapper">
                            <div className="image-header-wrapper">
                                <img src="/mulher-fundo-vermelho.png" />
                            </div>
                            <div className="header-wrapper">
                                <h1>Por que escolher a Impulse?</h1>
                                <p>
                                    Cada passo que você dá hoje pode transformas o seu amanhã. Na Impulse,{" "}
                                    <strong>estamos aqui para te ajudar a construir o seu caminho para o sucesso digital.</strong>
                                </p>
                                <div className="button-wrapper">
                                    <Button title={"Conheça nossos treinamentos"} url={"https://beimpulse.com/treinamentos"} />
                                </div>
                            </div>
                        </div>

                        <p className="reference-text">
                            Somos referência em treinamentos profissionalizantes on-line, com foco em resultados reais para nossos
                            parceiros.
                        </p>
                        <div className="references-wrapper">
                            <div className="reference-box">
                                <div className="reference-box-description">
                                    <img src="/check-circle.svg" />
                                    <h2>Suporte personalizado</h2>
                                </div>
                                <p>Equipe dedicada para auxiliar em todas as etapas do seu aprendizado</p>
                            </div>
                            <div className="reference-box">
                                <div className="reference-box-description">
                                    <img src="/check-circle.svg" />
                                    <h2>Metodologia Comprovada</h2>
                                </div>
                                <p>Método de ensino testado e aprovado por milhares de membros</p>
                            </div>
                            <div className="reference-box">
                                <div className="reference-box-description">
                                    <img src="/check-circle.svg" />
                                    <h2>Oportunidades Reais</h2>
                                </div>
                                <p>Oportunidades oferecidas de acordo com as últimas tendências do mercado digital</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-7">
                    <div className="who-training-description">
                        <h1>Para quem é o treinamento de Profissional de digitação?</h1>
                        <ul>
                            <li>
                                <img className="h-5 bg-cover bg-no-repeat bg-center" src={`/seta-direita-orange.png`} />
                                <p>Digitador Online Remunerado</p>
                            </li>
                            <li>
                                <img className="h-5 bg-cover bg-no-repeat bg-center" src={`/seta-direita-orange.png`} />
                                <p>Profissional de Atendimento ao Cliente</p>
                            </li>
                            <li>
                                <img className="h-5 bg-cover bg-no-repeat bg-center" src={`/seta-direita-orange.png`} />
                                <p> Profissional em Início de Carreira</p>
                            </li>
                            <li>
                                <img className="h-5 bg-cover bg-no-repeat bg-center" src={`/seta-direita-orange.png`} />
                                <p>Redator Freelancer e Autônomo</p>
                            </li>
                            <li>
                                <img className="h-5 bg-cover bg-no-repeat bg-center" src={`/seta-direita-orange.png`} />
                                <p>Beta Reader</p>
                            </li>
                        </ul>
                    </div>
                    <img className="logo-simbolo" src="/logo-simbolo.webp" />
                </section>
                <footer>
                    <div className="footer-copyright">
                        <a target="_blank" href="https://beimpulse.com/">
                            <img src="/impulse-logo-aplicacao-branca.png" />
                        </a>
                        <p>Copyright 2024 Impulse</p>
                    </div>
                    <div className="about-titles">
                        <a target="_blank" href="https://beimpulse.com/a-impulse">
                            A Impulse
                        </a>
                        <a target="_blank" href="https://beimpulse.com/a-impulse/disclousure">
                            Disclosure
                        </a>
                        <a target="_blank" href="https://beimpulse.com/a-impulse/termos-de-uso">
                            Termos de uso
                        </a>
                        <a target="_blank" href="https://beimpulse.com/a-impulse/termos-de-uso">
                            Política de privacidade
                        </a>
                    </div>
                    <div className="social-links">
                        <a target="_blank" href="https://www.linkedin.com/company/sejaimpulse">
                            <img src="/linkedin.svg" />
                        </a>
                        <a target="_blank" href="https://instagram.com/ogrupoimpulse">
                            <img src="/instagram.svg" />
                        </a>
                        <a target="_blank" href="https://www.youtube.com/@grupoimpulsebrasil">
                            <img src="/youtube.svg" />
                        </a>
                    </div>
                </footer>
            </main>
        </div>
    )
}
