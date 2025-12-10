import { ReactElement } from 'react';
import { AppProvider } from './provider/app';
import { AppRoutes } from './routes';

export const App = (): ReactElement => (
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);
