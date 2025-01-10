import axios from "axios";
interface PropType {
  url: string;
  body?: object;
  headers?: object;
  params?: object;
  method?: "GET" | "PUT" | "DELETE" | "POST";
}

export const useAxios = () => {
  const respons = (props: PropType) => {
    const { url, body, headers, params, method = "GET" } = props;
    return axios({
      url: `${import.meta.env.VITE_BASE_URL}${url}`,
      method,
      data: body,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      params: {
        access_token: "64bebc1e2c6d3f056a8c85b7",
        ...params,
      },
    })
      .then((data) => data.data)
      .catch(() => {
        console.log("Error");
      });
  };
  return respons;
};
