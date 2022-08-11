import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';

const AppRouter: FC = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
