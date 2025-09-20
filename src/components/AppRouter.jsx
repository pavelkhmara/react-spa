import React from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from '../router/routes';

const AppRouter = () => {

  return (
        <RouterProvider router={router} />
  );
};

export default AppRouter;