import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import classes from './LoginPage.module.css';
import MainHeader from '../../components/MainHeader/MainHeader';
import MainFooter from '../../components/MainFooter/MainFooter';
import { LoginUser } from '../../../lib/auth';


const LoginPage = () => {

    const navigate = useNavigate();

    const isLoged = localStorage.getItem('token');

    if (isLoged) {
        alert("Você já está logado.");
        navigate("/")
    }

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const res = await LoginUser(user);

        if (res.error == "User does not exist") {
            alert("Usuário não existe.");
            return;
        } else if (res.error == "Invalid password") {
            alert("Senha inválida.");
            return;
        } else if (res.error) {
            alert(res.error);
            return;
        }

        localStorage.setItem('token', res.token);

        alert("Logado com sucesso!");

        navigate("/")

    }

    return (
        <>
            <MainHeader />
            <main className={classes.main}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <h2>Entrar</h2>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={user.email} onChange={handleInputChange} required />
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" value={user.password} onChange={handleInputChange} required />
                    <button type="submit">Login</button>
                    <p>Não possui uma conta? <a href="/register">Faça o seu registro</a></p>
                </form>
            </main>
            <MainFooter />
        </>
    );
}

export default LoginPage;