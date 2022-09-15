import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch'

export default function Second() {
  const [{data, isLoading, hasError}] = useJsonFetch(
    'http://localhost:7070/error',
    []
  );

  return (
    <>
      <p>http://localhost:7070/error</p>
      {isLoading && <p>Loading...</p>}
      {JSON.stringify(data) }
    </>
  );
}