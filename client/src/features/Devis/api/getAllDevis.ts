import { useQuery } from '@tanstack/react-query';
import { Devis } from '../types';

const fetchAllDevis = async (): Promise<Devis[]> => {
  const response = await fetch('http://127.0.0.1:3001/devis');
  return response.json();
};

export const useGetAllDevis = () => {
  return useQuery({
    queryKey: ['devis'],
    queryFn: fetchAllDevis,
  });
};
