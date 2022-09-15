import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch'

export default function First() {
  const [{data, isLoading, hasError}] = useJsonFetch(
    'http://localhost:7070/data',
    []
  );

  return (
    <>
      <p>http://localhost:7070/data</p>
      {isLoading && <p>Loading...</p>}
      {JSON.stringify(data) }
    </>
  );
}