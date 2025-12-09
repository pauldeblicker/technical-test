import { useGetAllDevis } from '../api/getAllDevis';

export function DevisList(): JSX.Element {
  const { data: devisList, isLoading, error } = useGetAllDevis();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading devis</div>;

  return (
    <>
      {devisList?.map((devis) => (
        <div key={devis.id}>
          <div>{devis.title}</div>
        </div>
      ))}
    </>
  );
}
