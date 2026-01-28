import { data } from "autoprefixer";
import api from "../api/api";

export const getUsers = () => api.get("/users");
export const createUser = (data) => api.post("/users", data);
export const deleteUser = (id) => api.delete(`/users/${id}`);