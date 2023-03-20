import {Link} from "react-router-dom";
import logo from '../../assets/header-logo.png';
import css from './header-logo.module.css';

export function HeaderLogo(): JSX.Element {
    return (
        <Link to={'/'}>
            <img className={css.image} src={logo} alt={'логотип'}/>
        </Link>
    );
}
