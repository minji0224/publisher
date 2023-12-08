import axios from "axios";
import { config } from "webpack";
import { getCookie } from "./cookie";

const http = axios.create({ baseURL: "http://localhost:8081/api" });

http.interceptors.request.use((config) => {
  const token = getCookie("token");
  console.log(token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;

    if (status === 401 || status === 403) {
      alert("인증이 필요합니다.");
    }

    if (status === 404) {
      alert("데이터가 존재하지 않습니다.");
    }

    return;
  }
);

export default http;

export function getDomain() {
  const currentDomian = window.location.hostname;
  if (currentDomian === "localhost") {
    return `http://${currentDomian}:8081`;
  } else {
    return `https://${currentDomian}`;
  }
}
