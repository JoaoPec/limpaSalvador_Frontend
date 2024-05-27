import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";
import classes from "./MainPage.module.css";

const MainPage = () => {

    const isLoged = localStorage.getItem('token');

    if (isLoged) {

        return (
            <>
                <MainHeader />
                <main className={classes.main}>
                    <img src="/hero.jpg" alt="Limpa Salvador" />
                    <section className={classes.container}>
                        <h1>Bem-vindo ao LimpaSalvador!</h1>
                        <p>
                            Motivados pelo décimo primeiro Objetivo de Desenvolvimento Sustentável no Brasil, o Limpa Salvador atua para a colaboração de Cidades e Comunidades Sustentáveis:
                            11.6 - Até 2030, reduzir o impacto ambiental negativo per capita das cidades, inclusive prestando especial atenção à qualidade do ar, gestão de resíduos municipais e outros.
                        </p>
                        <div className={classes.odsImages}>
                            <img src="/objetivo.jpg" alt="ODS 11" />
                            <img src="/ods.jpg" alt="ODS" />
                        </div>
                        <h2>Nossa Missão</h2>
                        <p>
                            Como resultado desse contínuo esforço, esse projeto objetiva ser referência no eixo ecológico de Salvador e conquistar importante marcos como: ampliação da consciência ambiental soteropolitana, disposição de um canal de denúncias seguro sobre o descarte inapropriado de lixo, sensibilização popular acerca de questões de sustentabilidade e reconhecimento público como um local expressivo no engajamento de projetos ambientais atuantes na cidade de Salvador.
                        </p>
                        <h2>Origem</h2>
                        <p>O projeto Limpa Salvador é uma organização atuante na grande cidade de Salvador, capital do estado da Bahia, que teve a sua criação iniciada no ano de 2024, com a missão de promover a ação de combate ao descarte inapropriado de resíduos e o incentivo para uma maior sustentabilidade ambiental.</p>
                    </section>

                    <section className={classes.container}>

                        <h2>Áreas da plataforma</h2>

                        <div className={classes.areas}>
                            <div>
                                <h3>Feed</h3>
                                <p>
                                    Veja as postagens de outros usuários e compartilhe suas próprias denúncias.
                                </p>
                            </div>
                            <div>
                                <h3>Ações</h3>
                                <p>
                                    Conheça ações ecológicas em Salvador e participe de eventos para ajudar a manter a cidade limpa e verde.
                                </p>
                            </div>
                            <div>
                                <h3>Perfil</h3>
                                <p>
                                    Acesse o seu perfil para ver suas postagens e editar suas informações.
                                </p>
                            </div>

                        </div>

                    </section>
                    <MainFooter />
                </main>

            </>
        );
    } else {
        return (
            <>
                <MainHeader />
                <main className={classes.main}>
                    <img src="/hero.jpg" alt="Limpa Salvador" />
                    <img src="/hero.jpg" alt="Limpa Salvador" />
                    <section className={classes.container}>
                        <h1>Bem-vindo ao LimpaSalvador!</h1>
                        <p>
                            Motivados pelo décimo primeiro Objetivo de Desenvolvimento Sustentável no Brasil, o Limpa Salvador atua para a colaboração de Cidades e Comunidades Sustentáveis:
                            11.6 - Até 2030, reduzir o impacto ambiental negativo per capita das cidades, inclusive prestando especial atenção à qualidade do ar, gestão de resíduos municipais e outros.
                        </p>
                        <div className={classes.odsImages}>
                            <img src="/objetivo.jpg" alt="ODS 11" />
                            <img src="/ods.jpg" alt="ODS" />
                        </div>
                        <h2>Nossa Missão</h2>
                        <p>
                            Como resultado desse contínuo esforço, esse projeto objetiva ser referência no eixo ecológico de Salvador e conquistar importante marcos como: ampliação da consciência ambiental soteropolitana, disposição de um canal de denúncias seguro sobre o descarte inapropriado de lixo, sensibilização popular acerca de questões de sustentabilidade e reconhecimento público como um local expressivo no engajamento de projetos ambientais atuantes na cidade de Salvador.
                        </p>
                        <h2>Origem</h2>
                        <p>O projeto Limpa Salvador é uma organização atuante na grande cidade de Salvador, capital do estado da Bahia, que teve a sua criação iniciada no ano de 2024, com a missão de promover a ação de combate ao descarte inapropriado de resíduos e o incentivo para uma maior sustentabilidade ambiental.</p>
                    </section>

                    <section className={classes.container}>

                        <h2>Áreas da plataforma</h2>

                        <div className={classes.areas}>
                            <div>
                                <h3>Feed</h3>
                                <p>
                                    Veja as postagens de outros usuários e compartilhe suas próprias denúncias.
                                </p>
                            </div>
                            <div>
                                <h3>Ações</h3>
                                <p>
                                    Conheça ações ecológicas em Salvador e participe de eventos para ajudar a manter a cidade limpa e verde.
                                </p>
                            </div>
                            <div>
                                <h3>Perfil</h3>
                                <p>
                                    Acesse o seu perfil para ver suas postagens e editar suas informações.
                                </p>
                            </div>

                        </div>

                    </section>
                    <div className={classes.buttonsContainer}>
                        <a href="/register">
                            <button>Registrar</button>
                        </a>
                        <a href="/login">
                            <button>Login</button>
                        </a>
                    </div>
                    <MainFooter />
                </main>
            </>
        )
    }
};

export default MainPage;
