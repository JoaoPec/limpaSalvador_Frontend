// external api: https://limpasalvador-backend.onrender.com
// const localApi = "http://localhost:3000/"

const externalApi = "http://localhost:3000";

export async function RegisterUser(user) {
  const res = await fetch(`${externalApi}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (res.error) {
    return new Error(res.error);
  }

  return res.json();
}

export async function CheckAuth() {
  const res = await fetch(`${externalApi}/api/auth/checkAuth`, {
    method: "GET",
    headers: {
      "access-token": localStorage.getItem("token"),
    },
  });

  const data = await res.json();

  if (data.error) {
    console.log(data.error);
  }

  console.log(data);

  if (!data.auth) {
    localStorage.clear();
    console.log("Token removed.");
  }

  return data;
}

export async function LoginUser(user) {
  const res = await fetch(`${externalApi}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (res.error) {
    return new Error(res.error);
  }

  return res.json();
}

export async function Logout() {
  localStorage.clear();
  console.log("Token removed.");
}
