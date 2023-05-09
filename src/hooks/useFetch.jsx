import { useEffect, useState } from "react";

import { fetchMovieApi } from "../utils/api";

const useFetch = (url) => {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("Loading...");
    setData();
    setError(null);

    fetchMovieApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((error) => {
        setLoading(false);
        setError("Something went wrong");
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
