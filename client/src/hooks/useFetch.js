import { useEffect, useState } from "react";
import { makeRequest } from "../components/makeRequest";

const useFetch =  (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await makeRequest.get(url);
        setData(data.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
