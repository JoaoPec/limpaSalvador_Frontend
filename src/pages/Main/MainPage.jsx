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
                            O LimpaSalvador é uma solução online que visa promover a participação ativa dos cidadãos na resolução dos problemas ambientais da cidade. Através desta plataforma, os usuários podem relatar problemas ambientais diretamente de seus smartphones.
                        </p>
                        <h2>Nossa Missão</h2>
                        <p>
                            Nosso objetivo é criar uma comunidade engajada na preservação do meio ambiente e na promoção de uma cidade mais limpa e sustentável para todos.
                        </p>
                        <section className={classes.origin}>
                            <h2>Origem do LimpaSalvador</h2>
                            <p>
                                O LimpaSalvador surgiu de um grupo de estudantes preocupados com a causa ecológica. Inspirados pelo desejo de fazer uma diferença positiva em sua comunidade, eles se uniram para criar uma plataforma que permitisse aos cidadãos contribuir ativamente para a melhoria do meio ambiente em Salvador.
                            </p>
                        </section>
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
                    <section className={classes.container}>
                        <h1>Bem-vindo ao LimpaSalvador!</h1>
                        <p>
                            O LimpaSalvador é uma solução online que visa promover a participação ativa dos cidadãos na resolução dos problemas ambientais da cidade. Através desta plataforma, os usuários podem relatar problemas ambientais diretamente de seus smartphones.
                        </p>
                        <h2>Nossa Missão</h2>
                        <p>
                            Nosso objetivo é criar uma comunidade engajada na preservação do meio ambiente e na promoção de uma cidade mais limpa e sustentável para todos.
                        </p>
                        <section className={classes.origin}>
                            <h2>Origem do LimpaSalvador</h2>
                            <p>
                                O LimpaSalvador surgiu de um grupo de estudantes preocupados com a causa ecológica. Inspirados pelo desejo de fazer uma diferença positiva em sua comunidade, eles se uniram para criar uma plataforma que permitisse aos cidadãos contribuir ativamente para a melhoria do meio ambiente em Salvador.
                            </p>
                        </section>
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
