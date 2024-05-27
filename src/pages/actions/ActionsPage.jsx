import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";
import classes from "./ActionsPage.module.css";

const actions = [
    {
        id: 1,
        title: "Kombi verde",
        description: "O programa Kombi verde utiliza uma Kombi verde equipada com placa solar, sistema de som, e livros para promover atividades de desenvolvimento sustentável nos bairros de Salvador. O projeto envolve mutirões de hortas, eventos artísticos, combate à poluição dos oceanos e promoção da reciclagem, contando com a participação de voluntários.",
        imageUrl: "https://www.noticiasustentavel.com.br/wp-content/uploads/2022/04/Kombi-verde-do-ODS-nas-Ruas-_-Foto-Bruno-Concha-Divulgacao-1024x683.jpg"
    },
    {
        id: 2,
        title: "Praia Massa é Praia Limpa",
        description: "Em celebração ao World Cleanup Day, a 3ª edição do 'Praia Massa é Praia Limpa' será na praia da Barra, Salvador. Promovido pela Secis com Braskem e BASF, o evento mobiliza voluntários para limpar praias e áreas submersas, sensibilizando sobre a conservação dos oceanos. Nas edições anteriores, mais de 460 kg de resíduos foram recolhidos. O projeto inclui a instalação de 'Papa Plásticos' para coleta de resíduos plásticos.",
        imageUrl: "https://www.bnews.com.br/media/_versions/setembro_2022/whatsapp_image_2022-09-15_at_11.19.32_widelg.jpeg"
    },
    {
        id: 3,
        title: "Programa so+ma",
        description: "O programa so+ma facilita a reciclagem e oferece recompensas. Separe seu lixo reciclável, entregue nas casas so+ma, acumule pontos e troque por recompensas incríveis. A iniciativa é gratuita e promove a correta destinação dos resíduos recicláveis, geração de emprego, inclusão social e colaboração com o meio ambiente. O impacto do programa inclui redução de CO2, economia de energia e água, e diminuição do desmatamento. Com mais de 60.000 participantes, o programa é apoiado por patrocinadores como Braskem, Cargill, Heineken e outros.",
        imageUrl: "https://media.licdn.com/dms/image/C4D0BAQFFbe8G1p4iGg/company-logo_200_200/0/1661268698895/so_ma_vantagens_logo?e=2147483647&v=beta&t=eXeIccL4DEZ9sCvya0yHDpBhuJBuMppz1Am3bbZ9YS4"
    }
];

const ActionsPage = () => {
    return (
        <div className={classes.MainPage}>
            <MainHeader />
            <main className={classes.content}>
                <h1>Conheça ações ecológicas em Salvador!</h1>
                <p>Participe de ações ecológicas e ajude a manter Salvador limpa e verde. Veja abaixo as próximas ações e junte-se a nós!</p>
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
