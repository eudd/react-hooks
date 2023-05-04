import Axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (options, axiosInstances = Axios) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null
  });
  const [trigger, setTrigger] = useState(0);
  useEffect(() => {
    if (!options?.url) {
      console.error("no url");
      return;
    }
    axiosInstances(options)
      .then((res) => {
        setState({ loading: false, data: res, error: null });
      })
      .catch((error) => {
        setState({ loading: false, error, data: null });
        console.error(error);
      });
  }, [trigger]);
  const refetch = () => {
    setState({ loading: true, data: null, error: null });
    setTrigger(Date.now());
  };
  return { ...state, refetch };
};

export default useAxios;