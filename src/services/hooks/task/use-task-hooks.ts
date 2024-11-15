import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as taskcalls from "../../call/task";

export const getAllTasks = () => {
  const query = useQuery({
    queryKey: ["tasks"],
    queryFn: taskcalls.getTask,
  });

  return query;
};

export const getTaskById = (id: number) => {
  const query = useQuery({
    queryKey: ["task", id],
    queryFn: () => taskcalls.getTaskById(id),
  });

  return query;
};

export const createTask = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: any) => {
      return taskcalls.createTask(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return mutation;
};

export const updateTask = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: { completed: boolean; id: number }) => {
      return taskcalls.updateTask(data.completed, data.id);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return mutation;
};

export const deleteTask = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: number) => {
      return taskcalls.deleteTask(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return mutation;
};

export const editTask = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: { title: string; id: number }) => {
      return taskcalls.editTask(data.title, data.id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return mutation;
};

export const getTasksByUserId = (userId: number) => {
  const query = useQuery({
    queryKey: ["tasks"],
    queryFn: () => taskcalls.getTasksByUserId(userId),
  });

  return query;
};
