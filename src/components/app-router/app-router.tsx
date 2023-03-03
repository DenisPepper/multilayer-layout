import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page';
import { AppLayout } from '../app-layout/app-layout';
import { AppPath as To } from './router-config';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={To.Main} element={<AppLayout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
};
