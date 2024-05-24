import React, { useEffect, useState } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";
import classes from "./FeedPage.module.css";
import { uploadPost } from "../../../lib/userActions";

const FeedPage = () => {


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    const handlePost = (e) => {
        e.preventDefault();
        console.log(title, content, image);

        uploadPost({ title, content, image });
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    return (
        <>
            <MainHeader />
            <main>
                <div>
                    <form className={classes.inputContainer} onSubmit={handlePost}>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className={classes.titleInput}
                            placeholder="Crie um título para a sua postagem"
                        />
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Compartilhe a sua denúncia"
                        />
                        <label htmlFor="fileInput">Escolha uma imagem</label>
                        <input
                            type="file"
                            id="fileInput"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        <button>Enviar</button>
                    </form>
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

            </main >
            <MainFooter />
        </>
    );
}

export default FeedPage;
