import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

const user = JSON.parse(localStorage.getItem("persist:root"))?.admin;
const admin = user && JSON.parse(user);
const TOKEN = admin && admin?.token;

export const adminRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
