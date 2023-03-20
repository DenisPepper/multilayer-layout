import css from './header.module.css';
import {HeaderNav} from "../header-nav/header-nav";

export const Header = () => {
    return(
        <header className={css.header} id={'header'}>
            <HeaderNav/>
        </header>
    );
};
