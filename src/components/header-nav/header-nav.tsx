import css from './header-nav.module.css';
import {HeaderLogo} from "../header-logo/header-logo";
import {HeaderLinks} from "../header-links/header-links";

export interface HeaderLinkType {
    readonly name: string;
    readonly to: string;
}

const LINKS: HeaderLinkType[] = [
    {name: 'Главная', to: '/'},
    {name: 'О нас', to: '/about'},
    {name: 'Услуги', to: '/services'},
    {name: 'Проекты', to: '/projects'},
    {name: 'Контакты', to: '/contacts'},
];

export function HeaderNav(): JSX.Element {
    return(
        <nav className={css['header-nav']}>
            <HeaderLogo />
            <HeaderLinks links={LINKS}/>
        </nav>
    );
}
