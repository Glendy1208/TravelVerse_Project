import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import AuthLayout from 'layout/Auth';
import Loadable from 'components/Loadable';

const LoginPage = Loadable(lazy(() => import('pages/auth/Login')));
const RegisterPage = Loadable(lazy(() => import('pages/auth/Register')));

const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

const LoginRoutes = {
  path: '/',
  element: <AuthLayout />,
  children: [
    {
      index: true,
      element: isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />
    },
    {
      path: 'login',
      element: isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />
    },
    {
      path: 'register',
      element: isAuthenticated ? <Navigate to="/dashboard" replace /> : <RegisterPage />
    }
  ]
};

export default LoginRoutes;
