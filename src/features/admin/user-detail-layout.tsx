import { useEffect } from "react";
import { getTasksByUserId } from "../../services/hooks/task/use-task-hooks";
import { getUserById } from "../../services/hooks/user/use-user-hooks";
import { Task } from "../../types/stores";
import { CardTodo } from "../todo/components/card-todo";

type UserDetailLayoutProps = {
  id: number;
};
export const UserDetailLayout: React.FC<UserDetailLayoutProps> = ({ id }) => {
  const { data, isLoading } = getUserById(id);
  const { data: dataTask, isLoading: isLoadingTask } = getTasksByUserId(id);

  useEffect(() => {
    const load = async () => {
      if (isLoading || isLoadingTask) {
        console.log(data);
        return (
          <div className="text-center align-middle justify-center flex">
            Loading...
          </div>
        );
      }
    };
    load();
  }, [isLoading, isLoadingTask]);
  
  

  return (
    <div className=" gap-y-4 flex flex-col w-screen h-screen items-center ">
      <h1 className="text-3xl font-bold text-secondary text-center mt-10    ">
        Detail {data?.data.username}
      </h1>
      <div className=" w-[50%] flex my-2 flex-col gap-10">
        {dataTask?.data.map((task: Task) => (
          <CardTodo
            id={task.id}
            title={task.title}
            status={task.completed}
            edit={true}
          />
        ))}
      </div>
    </div>
  );
};
