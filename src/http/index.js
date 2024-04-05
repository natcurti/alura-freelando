import axios from "axios";
import { StoreToken } from "../utils/StoreToken";

const http = axios.create({
  baseURL: "http://localhost:8080/",
});

http.interceptors.request.use(
  function (config) {
    const token = StoreToken.accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("Token adicionado ao cabeçalho");
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const RoutesToBeIgnored = ["auth/login", "auth/refresh"];

const tryRefreshToken = async () => {
  const token = StoreToken.refreshToken;
  return axios
    .get("http://localhost:8080/auth/refresh", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) =>
      StoreToken.defineToken(
        response.data.access_token,
        response.data.refresh_token
      )
    );
};

const handleError401 = async (err) => {
  await tryRefreshToken().then(() => http(err.config));
  return Promise.reject(err);
};

http.interceptors.response.use(
  (response) => response,
  function (error) {
    if (
      !RoutesToBeIgnored.includes(error.config.url) &&
      error.response.status === 401
    ) {
      return handleError401(error);
    }

    return Promise.reject(error);
  }
);

export default http;
