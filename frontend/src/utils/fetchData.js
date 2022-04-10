import axios from "axios";

export async function getData(url, coords, q) {
  const params = coords ? { ...coords } : q;
  const options = {
    url: url,
    method: "GET",
    params: params,
  };
  const { data } = await axios.request(options);
  return data;
}
