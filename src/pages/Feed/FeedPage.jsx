import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";
import classes from "./FeedPage.module.css";

const FeedPage = () => {
    return (
        <>
            <MainHeader />
            <main>
                <div className={classes.inputContainer}>
                    <label htmlFor="fileInput">Escolha uma imagem</label>
                    <input type="file" id="fileInput" accept="image/*" />
                    <textarea placeholder="Compartilhe a sua denúncia"></textarea>
                    <button>Enviar</button>
                </div>

                <div className={classes.feedContainer}>
                    <div className={classes.feedCard}>
                        <div className={classes.feedHeader}>
                            <img src="https://as1.ftcdn.net/v2/jpg/06/68/13/42/1000_F_668134254_WU6g7U4oelzOwOzRhE84Ok0mliBlkBbl.jpg" alt="Profile" />
                            <div>
                                <h3>Nome do Usuário</h3>
                                <span>1 hora atrás</span>
                            </div>
                        </div>
                        <img src="https://as1.ftcdn.net/v2/jpg/06/68/13/42/1000_F_668134254_WU6g7U4oelzOwOzRhE84Ok0mliBlkBbl.jpg" alt="Post" />
                        <div className={classes.feedFooter}>
                            <button>Denunciar</button>
                            <button>Comentar</button>
                        </div>
                    </div>


                </div>
            </main>
            <MainFooter />
        </>
    );
}

export default FeedPage;
