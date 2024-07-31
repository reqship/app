import { DotNetRes } from "@/api";
import { useEffect, useState } from "react";

// temporary, this can potentially be a hashed value in the future
const EMPTY_USEAPI_DEPENDENCY_ARRAY = "EMPTY_USEAPI_DEPENDENCY_ARRAY";

export default function useApi<T>(
  apiCall: () => Promise<T>,
  dependency: any = EMPTY_USEAPI_DEPENDENCY_ARRAY
) {
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [lastDependency, setLastDependency] = useState(dependency);

  useEffect(() => {
    if (dependency != lastDependency) {
      setLastDependency(dependency);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependency]);

  useEffect(() => {
    if (lastDependency !== null) {
      apiCall()
        .then((data) => {
          setResponse(data);
          return lastDependency;
        })
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastDependency]);

  return {
    loading,
    response,
    error,
  };
}
