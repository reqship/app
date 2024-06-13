import DotsLoader from "@/components/loader";
import { useEffect, useState } from "react";

export function useApi<T>(apiData: Promise<T>) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);

  const Loader = () => <DotsLoader hidden={!loading} />;

  useEffect(() => {
    apiData.then((res) => setData(res)).then(() => setLoading(false));
  }, []);
  return { data, loading, Loader };
}
