import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as usercalls from "../../call/user";
import { TUserSchema } from "../../validators/user-schema";

export const getAllUsers = () => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: usercalls.getUser,
  });

  return query;
};

export const getUserById = (id: number) => {
  const query = useQuery({
    queryKey: ["user", id],
    queryFn: () => usercalls.getUserById(id),
  });

  return query;
};

export const registerUser = () => {
  const mutation = useMutation({
    mutationFn: (data: TUserSchema) => {
      return usercalls.register(
        data.username,
        data.password,
        data.role ? data.role : "user"
      );
    },
  });

  return mutation;
};

export const loginUser = () => {
  const userQueryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: TUserSchema) => {
      return usercalls.login(data.username, data.password);
    },
    onSuccess: () => {
      userQueryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });

  return mutation;
};

export const updateUser = () => {
  const mutation = useMutation({
    mutationFn: async (data: { username: string; id: number }) => {
      return usercalls.updateUser(data.username, data.id);
    },
  });

  return mutation;
};

export const getMe = () => {
  const query = useQuery({
    queryKey: ["me"],
    queryFn: usercalls.getMe,
  });

  return query;
};
