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
  const { data } = await api.get("/auth/profile");
  return data;
};

export const accessToken = () => {
  return cookie.get("access_token");
};

if (accessToken) {
  api.defaults.headers.common["Authorization"] = `Bearer ${accessToken()}`;
}

export default api;
