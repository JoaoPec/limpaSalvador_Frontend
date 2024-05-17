import classes from './MainHeader.module.css';
import AutocompleteInput from './AutoCompleteInput';
import { Logout } from '../../../lib/auth';

const MainHeader = () => {

    const isLoged = localStorage.getItem('token');


    if (isLoged) {
        return (

            <header className={classes.header}>
                <a href="/">
                    <img src="/logo.jpg" alt="logo" />
                </a>
                <AutocompleteInput />
                <nav>
                    <ul className={classes.navItens}>
                        <li>
                            <a href="/feed">Posts</a>
                        </li>
                        <li>
                            <a href="/post">Publicar</a>
                        </li>
                        <li>
                            <a href="/actions">Conheça ações</a>
                        </li>
                        <li>
                            <a onClick={Logout} href="/">Logout</a>
                        </li>
                    </ul>
                </nav >
            </header>

        );
    }
    return (
        <header className={classes.header}>
            <a href="/">
                <img src="/logo.jpg" alt="logo" />
            </a>
            <AutocompleteInput />
            <nav>
                <ul className={classes.navItens}>
                    <li>
                        <a href="/feed">Posts</a>
                    </li>
                    <li>
                        <a href="/post">Publicar</a>
                    </li>
                    <li>
                        <a href="/actions">Conheça ações</a>
                    </li>
                    <li>
                        <a href="/register">Cadastrar-se</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            </nav >
        </header>
    );
}

export default MainHeader;