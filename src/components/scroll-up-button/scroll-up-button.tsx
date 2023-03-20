import css from './scroll-up-button.module.css';

export const ScrollUpButton = () => {

    return (
    <a className={css.up} href={'#header'} >
      <span className='visually-hidden'>Вернуться в начало страницы</span>
    </a>
  );
};
