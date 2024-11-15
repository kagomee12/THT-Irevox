import { Controller } from "react-hook-form";
import { addAdminForm } from "../hooks/add-admin-hook";

export const AdminAddForm = () => {
  const { control, handleSubmit, onSubmit } = addAdminForm();
  return (
    <form className="w-[50%] m-auto flex flex-col gap-y-4">
      <h1 className="text-3xl font-bold text-secondary text-center mt-10    ">
        Add Admin
      </h1>
      <Controller
        control={control}
        name="username"
        render={({ field, fieldState }) => (
          <>
            <input
              type="text"
              className="h-16 p-2 rounded-lg "
              placeholder="username"
              {...field}
            />
            {fieldState.error && (
              <p className="text-red-500">{fieldState.error.message}</p>
            )}
          </>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <>
            <input
              type="password"
              className="h-16 p-2 rounded-lg"
              placeholder="password"
              {...field}
            />
            {fieldState.error && (
              <p className="text-red-500">{fieldState.error.message}</p>
            )}
          </>
        )}
      />
      <button
        onClick={handleSubmit(onSubmit)}
        className="bg-secondary hover:opacity-50 active:opacity-100"
      >
        submit
      </button>
    </form>
  );
};
