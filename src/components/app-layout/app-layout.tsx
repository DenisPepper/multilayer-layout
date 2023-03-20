import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Main } from '../main/main';
import { ScrollUpButton } from '../scroll-up-button/scroll-up-button';

export const AppLayout = () => {

  const [withScrollUpButton, setWithScrollUpButton] = useState(() => false);
  
  const handleFooterScroll = (inView: boolean) => {
    setWithScrollUpButton(inView);
  }
  
  return (
    <>
      <Header key={'Header'} />
      <Main  key={'Main'}>
        <Outlet />
      </Main>
      <Footer  key={'Footer'} handleFooterScroll={handleFooterScroll}/>
      {withScrollUpButton && <ScrollUpButton  key={'ScrollUpButton'}/>}
    </>
  );
};
