import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TUserSchema,
  userSchema,
} from "../../../services/validators/user-schema";
import { registerUser } from "../../../services/hooks/user/use-user-hooks";

export const useRegisterHookForm = () => {
  const { control, handleSubmit, reset } = useForm<TUserSchema>({
    resolver: zodResolver(userSchema),
  });
  const { mutateAsync } = registerUser();
  const onsubmit = (data: TUserSchema) => {
    data.role = "user";
    mutateAsync(data);
    reset();
  };
  return { control, handleSubmit, reset, onsubmit };
};
