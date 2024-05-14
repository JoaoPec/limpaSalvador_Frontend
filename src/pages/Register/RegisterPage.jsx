import React, { useState } from 'react';
import classes from './RegisterPage.module.css';
import MainHeader from '../../components/MainHeader/MainHeader';
import MainFooter from '../../components/MainFooter/MainFooter';
import { RegisterUser } from '../../../lib/auth';

const RegisterPage = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        number: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await RegisterUser(user);
        console.log(response);
        if (response.error) {
            alert(response.error);
        }
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
                    <label htmlFor="number">Número de telefone:</label>
                    <input type="text" id="number" name="number" value={user.number} onChange={handleInputChange} required />
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
