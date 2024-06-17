import React, { useEffect, useState, useNavigate } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import { GetUserProfile } from "../../../lib/userActions";
import classes from "./ProfilePage.module.css";
import { CheckAuth } from "../../../lib/auth";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Assuming you have a way to get the logged in user's ID, e.g., from localStorage or context
  const userId = localStorage.getItem("userId");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const auth = await CheckAuth();

      if (!auth.auth) {
        alert("Seu token expirou, faça login novamente.");
        navigate("/login");
        return;
      }

      try {
        const data = await GetUserProfile();

        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!profile) {
    alert("Você precisa estar logado para acessar essa página.");

    navigate("/login");
  }

  return (
    <>
      <MainHeader />
      <div className={classes.profileContainer}>
        <div className={classes.profileHeader}>
          <h1>{profile.user.name}</h1>
          <span>{profile.user.email}</span>
        </div>

        <div className={classes.section}>
          <h2>Meus Posts</h2>
          {profile.posts.length > 0 ? (
            <ul className={classes.postsList}>
              {profile.posts.map((post) => (
                <li key={post.id} className={classes.postItem}>
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className={classes.postImage}
                  />
                  <div className={classes.postContent}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <span>
                      Postado em {new Date(post.created_at).toLocaleString()}
                    </span>
                    <span>Bairro: {post.bairro}</span>
                  </div>
                  <button
                    className={classes.deleteButton}
                    onClick={() => handleDeletePost(post.id)}
                  >
                    🗑️
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>Você ainda não tem posts.</p>
          )}
        </div>

        <div className={classes.section}>
          <h2>Meus Comentários</h2>
          {profile.comments.length > 0 ? (
            <ul className={classes.commentsList}>
              {profile.comments.map((comment) => (
                <li key={comment.id} className={classes.commentItem}>
                  <p>{comment.content}</p>
                  <span>
                    {comment.post_title} -{" "}
                    {new Date(comment.created_at).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Você ainda não tem comentários.</p>
          )}
        </div>
      </div>

      <a href="/feed" className={classes.returnLink}>
        Ir para o feed
      </a>
    </>
  );
};

export default ProfilePage;
