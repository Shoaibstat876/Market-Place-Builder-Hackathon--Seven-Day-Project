import { useState, useEffect, useCallback } from 'react';

// Custom error type to represent possible errors
class FetchError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FetchError';
  }
}

type UseFetchDataResult<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

const useFetchData = <T>(url: string): UseFetchDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new FetchError(`HTTP Error: ${response.status} - ${response.statusText}`);
      }

      // Check if the response is valid JSON
      const contentType = response.headers.get('Content-Type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new FetchError('Expected JSON, but received non-JSON data');
      }

      const result: T = await response.json();
      setData(result);
    } catch (err) {
      if (err instanceof FetchError) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, fetchData]);

  return { data, loading, error };
};

export default useFetchData;
