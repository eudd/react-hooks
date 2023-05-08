import Axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (options, axiosInstances = Axios) => {
  const [option, setOption] = useState(options);
  const [state, setState] = useState({ loading: true, data: null, error: null });
  const [trigger, setTrigger] = useState(0);
  useEffect(() => {
    if (!option?.url) {
      throw new Error("'url' must be in axios options");
    }
    const call = async()=>{
      try {
        const res = await axiosInstances.request(option);
        setState({ loading: false, data: res, error: null });
      } catch (error) {
        setState({ loading: false, error, data: null });
      }
    }
    call();
  }, [trigger]);
  const refetch = (options) => {
    if(options && options.url){
      if(typeof(options)!=='object'){
        throw new Error("options has to be json type");
      }
      setOption(options)
    }
    setState({ loading: true, data: null, error: null });
    setTrigger(Date.now());
  };
  return { ...state, refetch };
};

export default useAxios;