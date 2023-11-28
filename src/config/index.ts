import axios from "axios";
import Cookies from "universal-cookie";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.propasindonesia.com"
    : "http://localhost:8080";

const api = axios.create({
  baseURL: API_URL,
});

const cookie = new Cookies();

export const signIn = async (username: string, password: string) => {
  const { data } = await api.post("/auth/login", {
    username,
    password,
  });

  cookie.set("access_token", data.access_token, {
    path: "/",
    maxAge: data.expires_in,
    secure: process.env.NODE_ENV === "production",
  });

  api.defaults.headers.common["Authorization"] = `Bearer ${data.access_token}`;
};

export const getCurrentUser = async () => {
  try {
    const { data } = await api.get("/auth/profile", {
      validateStatus: (status) => status !== 401,
    });
    return data;
  } catch (error) {
    api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          window.location.href = "/login";
        }
        return Promise.reject(error);
      }
    );
  }
};

export const accessToken = () => {
  return cookie.get("access_token");
};

if (accessToken) {
  api.defaults.headers.common["Authorization"] = `Bearer ${accessToken()}`;
}

export default api;
