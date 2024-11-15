import { deleteTask } from "../../../services/hooks/task/use-task-hooks";

export const TaskDeletedForm = ({ id }: { id: number }) => {
  const { mutateAsync } = deleteTask();
  return mutateAsync(id);
};
