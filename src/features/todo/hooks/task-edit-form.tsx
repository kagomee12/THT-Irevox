import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  taskEditSchema,
  TTaskEditSchema,
} from "../../../services/validators/task-schema";
import { editTask } from "../../../services/hooks/task/use-task-hooks";

export const taskEditForm = (id: number) => {
  const { control, handleSubmit, reset } = useForm<TTaskEditSchema>({
    resolver: zodResolver(taskEditSchema),
  });
  const { mutateAsync } = editTask();
  const onsubmit = (data: TTaskEditSchema) => {
    mutateAsync({ title: data.title, id: id });
    reset();
  };
  return { control, handleSubmit, reset, onsubmit };
};
