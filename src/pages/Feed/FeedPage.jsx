import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";
import classes from "./FeedPage.module.css";
import { UploadPost, GetPosts, UploadComment } from "../../../lib/userActions";
import { CheckAuth } from "../../../lib/auth";

const FeedPage = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [commentContent, setCommentContent] = useState("");
  const [showComments, setShowComments] = useState({});

  const isLoged = localStorage.getItem("token");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await GetPosts();

      if (res.error) {
        alert(res.message);
        return;
      }

      console.log(res);
      setPosts(res);
    };

    fetchPosts();
  }, []);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [neighborhood, setNeighborhood] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();

    const auth = await CheckAuth();

    if (!auth.auth) {
      alert("Seu token expirou, faça login novamente.");
      navigate("/login");
      return;
    }

    const res = await UploadPost({
      title,
      content,
      image,
      bairro: neighborhood,
    });

    if (res.error) {
      alert(res.message);
      return;
    }

    alert("Postagem realizada com sucesso!");
    window.location.reload();
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCommentChange = (e) => {
    setCommentContent(e.target.value);
  };

  const handleAddComment = async (postId) => {
    if (commentContent.trim() === "") return;

    const auth = await CheckAuth();

    if (!auth.auth) {
      alert("Seu token expirou, faça login novamente.");
      navigate("/login");
      return;
    }

    setComments((prevComments) => ({
      ...prevComments,
      [postId]: [
        ...(prevComments[postId] || []),
        { content: commentContent, created_at: new Date().toISOString() },
      ],
    }));

    await UploadComment(commentContent, postId);

    alert("Comentário adicionado com sucesso!");
    window.location.reload();

    setCommentContent("");
  };

  const toggleComments = (postId) => {
    setShowComments((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  return (
    <>
      <MainHeader />
      <main className={classes.main}>
        {isLoged && (
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
              <select
                id="neighborhoodInput"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
              >
                <option value="">Selecione um bairro</option>
                <option value="Barra">Barra</option>
                <option value="Rio Vermelho">Rio Vermelho</option>
                <option value="Pituba">Pituba</option>
                <option value="Brotas">Brotas</option>
                <option value="Centro">Centro</option>
                <option value="Cajazeiras">Cajazeiras</option>
              </select>
              <button type="submit">Enviar</button>
            </form>
          </div>
        )}

        <div className={classes.feedContainer}>
          {posts
            .slice()
            .reverse()
            .map((post) => (
              <div key={post.id} className={classes.feedCard}>
                <div className={classes.cardHeader}>
                  <div>
                    <h2 className={classes.cardTitle}>{post.title}</h2>
                    <p>{post.content}</p>
                    <h3>Bairro: {post.bairro}</h3>
                    <h3>Autor: {post.user_name}</h3>
                    <span>
                      Post realizado em{" "}
                      {new Date(post.created_at).toLocaleString()}
                    </span>
                  </div>
                </div>
                <img src={post.image_url} alt="Post" />
                <div className={classes.cardFooter}>
                  <button>Denunciar</button>
                  <button onClick={() => toggleComments(post.id)}>
                    {showComments[post.id]
                      ? "Esconder Comentários"
                      : "Mostrar Comentários"}
                  </button>
                </div>
                {showComments[post.id] && (
                  <div className={classes.commentsSection}>
                    <h4>Comentários</h4>
                    <div className={classes.commentList}>
                      {post.comments.map((comment, index) => (
                        <div key={index} className={classes.comment}>
                          <p>{comment.content}</p>
                          <span>
                            {comment.user_name} -{" "}
                            {new Date(comment.created_at).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                    {isLoged && (
                      <div className={classes.commentForm}>
                        <textarea
                          value={commentContent}
                          onChange={handleCommentChange}
                          placeholder="Adicione um comentário"
                        ></textarea>
                        <button onClick={() => handleAddComment(post.id)}>
                          Adicionar Comentário
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
        </div>
      </main>
      <MainFooter />
    </>
  );
};

export default FeedPage;
