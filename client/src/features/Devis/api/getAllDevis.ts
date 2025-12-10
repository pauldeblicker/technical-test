import { useQuery } from '@tanstack/react-query';
import { Devis } from '../types';


const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const fetchAllDevis = async (): Promise<Devis[]> => {
  const response = await fetch('http://127.0.0.1:3001/devis');

  await delay(1000);

  return response.json();
};

export const useGetAllDevis = () => {
  return useQuery({
    queryKey: ['devis'],
    queryFn: fetchAllDevis,
  });
};
