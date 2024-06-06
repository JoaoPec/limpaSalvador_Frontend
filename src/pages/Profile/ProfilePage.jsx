import React, { useEffect, useState } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import { GetUserProfile } from "../../../lib/userActions";
import classes from "./ProfilePage.module.css";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Assuming you have a way to get the logged in user's ID, e.g., from localStorage or context
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await GetUserProfile(userId);
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
    return <p>No profile data available</p>;
  }

  return (
    <>
      <MainHeader />
      <div className={classes.profileContainer}>
        <div className={classes.profileHeader}>
          <h1>{profile.user.name}</h1>
        </div>

        <div className={classes.section}>
          <h2>Meus Posts</h2>
          {profile.posts.length > 0 ? (
            <ul className={classes.postsList}>
              {profile.posts.map((post) => (
                <li key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                  <span>
                    Postado em {new Date(post.created_at).toLocaleString()}
                  </span>
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
                <li key={comment.id}>
                  <p>{comment.content}</p>
                  <span>
                    {comment.user_name} -{" "}
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
