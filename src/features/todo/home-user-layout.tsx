import { Controller } from "react-hook-form";
import { AddTodo } from "./components/add-todo";
import { CardTodo } from "./components/card-todo";
import { taskCreateForm } from "./hooks/task-create-form";
import { getTasksByUserId } from "../../services/hooks/task/use-task-hooks";
import { getMe } from "../../services/hooks/user/use-user-hooks";
import { Task } from "../../types/stores";
import { useEffect } from "react";

export const HomeUserLayout = () => {
  const { control, handleSubmit, onsubmit } = taskCreateForm();
  const { data: dataMe, isLoading } = getMe();
  useEffect(() => {
    const load = async () => {
      if (isLoading) {
        return (
          <div className="text-center align-middle justify-center flex">
            Loading...
          </div>
        );
      }
    };
    load();
  }, [isLoading]);

  const { data } = getTasksByUserId(dataMe?.data.id ?? 3);
  return (
    <div className="m-auto gap-y-4 flex flex-col pb-7 w-screen h-full">
      <h1 className="text-3xl font-bold text-center text-secondary mt-10">
        My schedule today
      </h1>
      <div className="m-auto w-[50%] flex my-2">
        <AddTodo action={handleSubmit(onsubmit)} textButton="add">
          <Controller
            control={control}
            name="title"
            render={({ field, fieldState }) => (
              <>
                <div className="flex flex-col w-full">
                  <input
                    {...field}
                    type="text"
                    className="h-12 p-2 rounded-lg w-[100%] bg-white text-black"
                    placeholder="add todo"
                  />
                  {fieldState.error && (
                    <p className="text-red-500">{fieldState.error.message}</p>
                  )}
                </div>
              </>
            )}
          />
        </AddTodo>
      </div>
      {data && (
        <div className="w-[50%] m-auto gap-4 flex flex-col">
          {data?.data?.map((data: Task) => (
            <CardTodo
              key={data.id}
              id={data.id}
              title={data.title}
              status={data.completed}
            />
          ))}
        </div>
      )}
    </div>
  );
};
