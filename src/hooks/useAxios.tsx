import { useState, useEffect } from "react";


const useAxios = (configObg: any) => {
    const {
        axiosInstance,
        method,
        url,
        requestConfig = {}
    } = configObg;

    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const controller = new AbortController();

      const fetchData = async () => {
        try {
          const res = await axiosInstance[method.toLowerCase()](url, {
            ...requestConfig,
            signal: controller.signal
          });
          console.log(res)
          setResponse(res.data)
        } catch (err: any) {
            console.log(err.message)
            setError(err.message)
        } finally {
          setLoading(false)
        }
      }

      fetchData();

      return () => controller.abort();

    },[])

    return [response, error, loading];
}

export default useAxios;