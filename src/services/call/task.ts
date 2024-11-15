import { Task, TPromiseResponse } from "../../types/stores";
import { api } from "../api";

export const getTask = async (): Promise<any> => {
  const response = await api.get("/task");
  return response.data;
};

export const getTaskById = async (id: number): Promise<any> => {
  const response = await api.get(`/task/${id}`);
  return response.data;
};

export const createTask = async (
  task: any
): Promise<TPromiseResponse<Task>> => {
  const response = await api.post("/task", task);
  return response.data;
};

export const updateTask = async (
  completed: boolean,
  id: number
): Promise<TPromiseResponse<Task>> => {
  const response = await api.patch(`/task/${id}`, completed);
  return response.data;
};

export const editTask = async (title: string, id: number): Promise<any> => {
  const response = await api.put(`/task/edit/${id}`, title);
  return response.data;
};

export const deleteTask = async (
  id: number
): Promise<TPromiseResponse<Task>> => {
  const response = await api.delete(`/task/${id}`);
  return response.data;
};

export const getTasksByUserId = async (userId: number): Promise<any> => {
  const response = await api.get(`/task/user/${userId}`);
  return response.data;
};
