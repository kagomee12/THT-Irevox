import { updateTask } from "../../../services/hooks/task/use-task-hooks";

export const TaskUpdatedForm = async ({
  id,
  completed,
}: {
  id: number;
  completed: boolean;
}) => {
  const { mutateAsync } = updateTask(); // Tanpa parameter di sini

  // Memastikan mutasi hanya dipanggil saat `TaskUpdatedForm` dipanggil dengan await
  return await mutateAsync({ id, completed });
};
