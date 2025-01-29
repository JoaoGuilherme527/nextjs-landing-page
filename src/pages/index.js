import Image from "next/image"
import {Geist, Geist_Mono} from "next/font/google"
import Navbar from "./_components/Navbar"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export default function Home() {
    return (
        <main>
            <Navbar />
            <section className="section-1">
                <h1>Profissional de digitação</h1>
                <img src="/senhor-digitando.png" />
                <p>Este treinamento te prepara para uma renda de até R$ 200 por serviço.</p>
                <a>Comece agora &#8594;</a>
            </section>
            <section className="section-2">
                <img src="/mulher-digitando.jpg" />
                <div className="description-wrapper">
                    <h1>Profissional de digitação</h1>
                    <p>
                        Aprenda a ser um profissional de digitação com o treinamento da Impulse. Com aulas diretas você irá aprender a
                        desenvolver suas habilidades para digitar e formatar textos e artigos, criar ebooks, transcrever áudios para textos,
                        realizar correções e criar roteiros.
                    </p>
                    <div className="cost-wrapper">
                        <p>R$ 129</p>
                        <p>
                            R$
                            <strong> 49</strong>
                        </p>
                    </div>
                    <div>
                        <a>Comece agora &#8594;</a>
                    </div>
                </div>
            </section>
            <section className="section-3">
                <h1>Etapas de desenvolvimento de carreira</h1>
                <div className="module-wrapper">
                    <div className="box-module">
                        <h2>
                            <strong>+</strong> de 10 oportunidades
                        </h2>
                        <p>Todos os dias para você se inscrever</p>
                    </div>
                    <div className="module-description">
                        <h3>Mapeamento de oportunidades de trabalho</h3>
                        <p>Identifique e aproveite as melhores oportunidades disponíveis no mercado digital.</p>
                    </div>
                </div>
                <div className="module-wrapper">
                    <div className="box-module">
                        <h2>
                            até <strong>R$ 200</strong>
                        </h2>
                        <p>De renda extra jobs</p>
                    </div>
                    <div className="module-description">
                        <h3>Reconhecimento financeiro</h3>
                        <p>Alcance seus objetivos financeiros e construa uma carreira de sucesso no mundo digital.</p>
                    </div>
                </div>
                <div className="module-wrapper">
                    <div className="box-module">
                        <h2>
                            <strong>8</strong>módulos
                        </h2>
                        <p>de conteúdo para você se desenvolver como profissional de Profissional de digitação.</p>
                    </div>
                    <div className="module-description">
                        <h3>Desenvolvimento</h3>
                        <p>Aprenda as habilidades necessárias através de nossos módulos de treinamento especializados.</p>
                    </div>
                </div>
                <div className="module-wrapper">
                    <div className="box-module">
                        <h2>
                            <strong>+</strong> de 10 oportunidades
                        </h2>
                        <p>Todos os dias para você se inscrever</p>
                    </div>
                    <div className="module-description">
                        <h3>Definição do perfil profissional</h3>
                        <p>Descubra qual profissão combina mais com você e dê o primeiro passo para impulsionar sua renda.</p>
                    </div>
                </div>
            </section>
            <section className="section-4">
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
