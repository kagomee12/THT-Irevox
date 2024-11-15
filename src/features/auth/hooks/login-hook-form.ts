import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TUserSchema,
  userSchema,
} from "../../../services/validators/user-schema";
import { loginUser } from "../../../services/hooks/user/use-user-hooks";
import { setAuthToken } from "../../../services/api";

export const useLoginHookForm = () => {
  const { control, handleSubmit, reset } = useForm<TUserSchema>({
    resolver: zodResolver(userSchema),
  });
  const { mutateAsync } = loginUser();
  const onsubmit = async (data: TUserSchema) => {
    const dataUser = await mutateAsync(data);
    setAuthToken(dataUser.data);
    localStorage.setItem("token", dataUser.data);
    reset();
  };
  return { control, handleSubmit, reset, onsubmit };
};
