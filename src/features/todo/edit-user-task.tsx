import { Controller } from "react-hook-form";
import { AddTodo } from "./components/add-todo";
import { CardTodo } from "./components/card-todo";
import { taskCreateForm } from "./hooks/task-create-form";
import { getTaskById } from "../../services/hooks/task/use-task-hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const EditUserTask = () => {
  const { control, handleSubmit, onsubmit } = taskCreateForm();
  const { id } = useParams();
  
  const { data, isLoading } = getTaskById(
    id?.toString() ? parseInt(id.toString()) : 0
  );

  useEffect(() => {
    const load = async () => {
      if (isLoading) {
        return (
          <div className="text-center align-middle justify-center flex">
            loading...
          </div>
        );
      }
    };
    load();
  }, [isLoading]);

  return (
    <div className="h-screen w-screen flex flex-col p-4">
      <div className="m-auto w-[70%] gap-4 flex flex-col">
        <CardTodo id={data?.data.id} title={data?.data.title} status={data.data.completed} edit={true} />
        <AddTodo action={handleSubmit(onsubmit)} textButton={"edit"}>
          <Controller
            control={control}
            name="title"
            render={({ field, fieldState }) => (
              <>
                <input
                  {...field}
                  type="text"
                  className="h-12 p-2 rounded-lg w-[100%] bg-white text-black"
                  placeholder="edit todo"
                />
                {fieldState.error && (
                  <p className="text-red-500">{fieldState.error.message}</p>
                )}
              </>
            )}
          />
        </AddTodo>
      </div>
    </div>
  );
};
