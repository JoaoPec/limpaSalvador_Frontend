import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import classes from './RegisterPage.module.css';
import MainHeader from '../../components/MainHeader/MainHeader';
import MainFooter from '../../components/MainFooter/MainFooter';
import { RegisterUser } from '../../../lib/auth';

const RegisterPage = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();

        if (user.password !== user.confirmPassword) {
            alert("As senhas não coincidem.");
            return;
        }

        const res = await RegisterUser(user);

        if (res.error == "User already exists") {
            alert("Usuário já existe.");
            return;
        } else if (res.error) {
            alert(res.error);
            return;
        }


        localStorage.setItem('token', res.token);
        localStorage.setItem('id', res.id);
        localStorage.setItem('name', res.user.name);
        localStorage.setItem('email', res.user.email);

        alert("Registrado com sucesso!");

        navigate("/")

    }

    return (
        <>
            <MainHeader />
            <main className={classes.main}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <h2>Registrar</h2>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" value={user.name} onChange={handleInputChange} required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={user.email} onChange={handleInputChange} required />
                    <label htmlFor="phone">Número de telefone:</label>
                    <input type="text" id="number" name="phone" value={user.phone} onChange={handleInputChange} required />
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" value={user.password} onChange={handleInputChange} required />
                    <label htmlFor="confirmPassword">Confirmar Senha:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={user.confirmPassword} onChange={handleInputChange} required />
                    <button type="submit">Registrar</button>
                    <p>Já possui uma conta? <a href="/login">Faça login</a></p>
                </form>
            </main>
            <MainFooter />
        </>
    );
}

export default RegisterPage;
