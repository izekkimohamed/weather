import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { context } from "../context";

const useFetch = (url) => {
  const { coords } = useContext(context);
  return useQuery(["weather", url, coords], () =>
    axios.get(url, { params: { ...coords } }).then((res) => res.data),
  );
};
export default useFetch;
