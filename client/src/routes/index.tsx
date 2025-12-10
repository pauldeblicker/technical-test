import { ReactElement } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { Home } from '../components/Home';
import { Layout } from '../components/Layout';
import { devisRoutes } from '../features/Devis';

export function AppRoutes(): ReactElement | null {
  const commonRoutes: RouteObject[] = [{
    element: <Layout />,
    path: '/',
    children: [
      { element: <Home />, index: true },
      ...devisRoutes,
    ],
  }];

  return useRoutes([...commonRoutes]);
}
