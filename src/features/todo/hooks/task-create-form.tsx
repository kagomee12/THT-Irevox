import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TTaskSchema,
  taskSchema,
} from "../../../services/validators/task-schema";
import { createTask } from "../../../services/hooks/task/use-task-hooks";

export const taskCreateForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<TTaskSchema>({
    resolver: zodResolver(taskSchema),
  });
  const { mutateAsync } = createTask();
  const onsubmit = (data: TTaskSchema) => {
    mutateAsync(data);
    reset();
  };
  return { control, handleSubmit, errors, onsubmit };
};
