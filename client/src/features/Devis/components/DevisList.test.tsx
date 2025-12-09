import { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DevisList } from './DevisList';
import * as getAllDevisModule from '../api/getAllDevis';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

const renderWithQueryClient = (component: ReactElement) => {
  const queryClient = createTestQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      {component}
    </QueryClientProvider>
  );
};

describe('<DevisList />', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('Should display loading state', () => {
    jest.spyOn(getAllDevisModule, 'useGetAllDevis').mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
    } as ReturnType<typeof getAllDevisModule.useGetAllDevis>);

    renderWithQueryClient(<DevisList />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('Should display error state', () => {
    jest.spyOn(getAllDevisModule, 'useGetAllDevis').mockReturnValue({
      data: undefined,
      isLoading: false,
      error: new Error('Network error'),
    } as ReturnType<typeof getAllDevisModule.useGetAllDevis>);

    renderWithQueryClient(<DevisList />);

    expect(screen.getByText('Error loading devis')).toBeInTheDocument();
  });

  test('Should display devis list', () => {
    jest.spyOn(getAllDevisModule, 'useGetAllDevis').mockReturnValue({
      data: [
        { id: 1, title: 'Devis 1', codeSms: 'code-1' },
        { id: 2, title: 'Devis 2', codeSms: 'code-2' },
      ],
      isLoading: false,
      error: null,
    } as ReturnType<typeof getAllDevisModule.useGetAllDevis>);

    renderWithQueryClient(<DevisList />);

    expect(screen.getByText('Devis 1')).toBeInTheDocument();
    expect(screen.getByText('Devis 2')).toBeInTheDocument();
  });
});

