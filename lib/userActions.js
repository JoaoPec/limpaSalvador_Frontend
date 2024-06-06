// const localApi = "http://localhost:3000/"

const externalApi = "https://limpasalvador-backend.onrender.com";

export async function UploadPost(post) {
  console.log(post.bairro);

  const formData = new FormData();
  formData.append("title", post.title);
  formData.append("content", post.content);
  formData.append("image", post.image);
  formData.append("bairro", post.bairro);
  formData.append("user_id", localStorage.getItem("user_id"));

  console.log("formData: ", formData);

  const res = await fetch(`${externalApi}/api/user/post`, {
    method: "POST",
    body: formData,
    headers: {
      "access-token": localStorage.getItem("token"),
    },
  });

  if (!res.ok) {
    const error = await res.json();
    return error;
  }

  return await res.json();
}

export async function UploadComment(content, post_id) {
  console.log("comment: ", content);

  console.log("post_id: ", post_id);

  const res = await fetch(`${externalApi}/api/user/comment`, {
    method: "POST",
    body: JSON.stringify({ content, postId: post_id }),
    headers: {
      "Content-Type": "application/json",
      "access-token": localStorage.getItem("token"),
    },
  });

  if (!res.ok) {
    const error = await res.json();
    return error;
  }

  return await res.json();
}

export async function GetPosts() {
  const res = await fetch(`${externalApi}/api/user/posts`, {
    method: "GET",
    headers: {},
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  return await res.json();
}

export async function GetUserProfile() {
  const res = await fetch(`${externalApi}/api/user/profile`, {
    method: "GET",
    headers: {
      "access-token": localStorage.getItem("token"),
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  return await res.json();
}
