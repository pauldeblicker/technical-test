import { AppProvider } from './provider/app';
import { AppRoutes } from './routes';

export const App = (): JSX.Element => (
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);
