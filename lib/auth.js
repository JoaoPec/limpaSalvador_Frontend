export async function RegisterUser(user) {

    const res = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    if (res.error) {
        return new Error(res.error);
    }

    return res.json();
}

export async function CheckAuth() {

    const res = await fetch('http://localhost:3000/api/auth/checkAuth', {
        method: 'GET',
        headers: {
            'access-token': localStorage.getItem('token')
        },
    });

    if (res.error) {
        return new Error(res.error);
    }

    return res.json();

}

export async function LoginUser(user) {

    const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    if (res.error) {
        return new Error(res.error);
    }

    return res.json();
}


export async function Logout() {

    localStorage.removeItem('token');

}
