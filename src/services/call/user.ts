import { TPromiseResponse, User } from "../../types/stores";
import { api } from "../api";

export const login = async (
  username: string,
  password: string
): Promise<TPromiseResponse<string>> => {
  const response = await api.post("/auth/login", { username, password });
  return response.data;
};

export const register = async (
    username: string,
    password: string,
    role: string
): Promise<TPromiseResponse<string>> => {
  const response = await api.post("/auth/register", { username, password, role });
  return response.data;
};

export const getUser = async (): Promise<TPromiseResponse<User[]>> => {
  const response = await api.get("/users");
  return response.data;
};

export const getUserById = async (
  id: number
): Promise<TPromiseResponse<User>> => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const updateUser = async (
  username: string,
  id: number
): Promise<TPromiseResponse<string>> => {
  const response = await api.patch(`/users/${id}`, username);
  return response.data;
};

export const getMe = async (): Promise<TPromiseResponse<User>> => {
  const response = await api.get("/auth/me");
  return response.data;
};
