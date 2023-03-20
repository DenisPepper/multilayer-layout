import {HeaderLinkType} from "../header-nav/header-nav";
import {HeaderLink} from "../header-link/header-link";
import css from './header-links.module.css';

interface HeaderLinksProps {
    links: HeaderLinkType[];
}

export function HeaderLinks(props: HeaderLinksProps) {
    const {links} = props;

    return(
        <ul className={css.links}>
            {links.map((link) => <HeaderLink link={link} key={link.to}/>)}
        </ul>
    );
}
