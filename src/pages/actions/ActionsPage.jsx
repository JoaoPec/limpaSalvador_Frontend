import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";
import classes from "./ActionsPage.module.css";

const actions = [
    {
        id: 1,
        title: "Limpeza da Praia da Barra",
        description: "Participe da nossa ação de limpeza na Praia da Barra neste sábado às 9h.",
        imageUrl: "/hero.jpg"
    },
    {
        id: 2,
        title: "Plantio de Árvores no Rio Vermelho",
        description: "Ajude-nos a plantar árvores no bairro do Rio Vermelho no próximo domingo às 8h.",
        imageUrl: "/hero.jpg"
    },
    {
        id: 3,
        title: "Oficina de Reciclagem na Pituba",
        description: "Venha aprender sobre reciclagem em nossa oficina na Pituba na quarta-feira às 14h.",
        imageUrl: "/hero.jpg"
    }
];

const ActionsPage = () => {
    return (
        <div className={classes.MainPage}>
            <MainHeader />
            <main className={classes.content}>
                <h1>Conheça ações ecológicas em Salvador!</h1>
                <p>Participe das nossas ações ecológicas e ajude a manter Salvador limpa e verde. Veja abaixo as próximas ações e junte-se a nós!</p>
                <div className={classes.actionsList}>
                    {actions.map(action => (
                        <div key={action.id} className={classes.actionCard}>
                            <img src={action.imageUrl} alt={action.title} className={classes.actionImage} />
                            <h2>{action.title}</h2>
                            <p>{action.description}</p>
                        </div>
                    ))}
                </div>
            </main>
            <MainFooter />
        </div>
    );
}

export default ActionsPage;
