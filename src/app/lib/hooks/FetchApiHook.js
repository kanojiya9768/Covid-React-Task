import { useCallback, useEffect, useState } from "react";

const useCustomQueryHook = (apiCallFunction, runOnLoad = true) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (data) => {
      setLoading(true);
      setError(null);

      try {
        const result = await apiCallFunction(data);
        setResponse(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [apiCallFunction]
  );

  useEffect(() => {
    if (runOnLoad) {
      fetchData();
    }
  }, [fetchData]);

  return { response, loading, error, fetchData };
};

export default useCustomQueryHook;
