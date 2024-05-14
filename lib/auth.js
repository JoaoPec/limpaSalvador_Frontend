export async function RegisterUser(user) {
    const response = await fetch('https://api.limpasalvador.com.br/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
}