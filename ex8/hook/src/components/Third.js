import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch'

export default function Third() {
  const [{data, isLoading, hasError}] = useJsonFetch(
    'http://localhost:7070/loading',
    []
  );

  return (
    <>
      <p>http://localhost:7070/loading</p>
      {isLoading && <p>Loading...</p>}
      {JSON.stringify(data) }
    </>
  );
}