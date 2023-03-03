import css from './main.module.css';

interface MainProps {
    children: React.ReactNode
}

export const Main = (props: MainProps) => {
    const {children} = props;
    
    return(
        <main className={css.main}>
            {children}
        </main>
    );
}