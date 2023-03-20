import {Link} from "react-router-dom";
import {HeaderLinkType} from "../header-nav/header-nav";
import css from './header-link.module.css';

interface HeaderLinkProps {
    link: HeaderLinkType;
}

export function HeaderLink(props: HeaderLinkProps): JSX.Element {
    const {link} = props;

    return (
        <li>
            <Link className={css.link} to={link.to}>{link.name}</Link>
        </li>
    );
}
