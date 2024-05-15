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

export async function checkAuth() {

    const res = await fetch('http://localhost:3000/api/auth/checkAuth', {
        method: 'GET',
        headers: {
            'acess-token': localStorage.getItem('token')
        },
    });

    console.log(res)

    if (res.error) {
        return new Error(res.error);
    }

    return res.json();

}