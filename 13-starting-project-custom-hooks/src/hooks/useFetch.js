import { useEffect, useState } from "react";

export default function useFetch(fetchFunction, initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const fetchedData = await fetchFunction();
        setData(fetchedData);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFunction]);

  return { data, setData, isFetching, error };
}
