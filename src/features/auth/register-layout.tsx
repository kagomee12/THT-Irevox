import { Controller } from "react-hook-form";
import FormAuth from "./components/form-auth";
import { useRegisterHookForm } from "./hooks/register-hook-form";

export const RegisterLayout = () => {
  const { control, handleSubmit, onsubmit } = useRegisterHookForm();
  return (
    <div className="bg-black text-red-100 w-screen h-screen flex">
      <div className="flex m-auto w-[40%] h-fit flex-col bg-primary rounded-lg p-6 gap-y-4">
        <h1 className="text-3xl font-bold text-secondary text-center">
          Register
        </h1>
        <FormAuth
          buttonText="Register"
          verifyText1={"Already have an account?"}
          goTopage={"/auth/login"}
          verifyText2={"login here"}
          action={handleSubmit(onsubmit)}
        >
          <Controller
            control={control}
            name="username"
            render={({ field, fieldState }) => (
              <>
                <input
                  {...field}
                  type="text"
                  placeholder="Username"
                  className="h-12 p-2 rounded-lg"
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
                  {...field}
                  type="password"
                  placeholder="Password"
                  className="h-12 p-2 rounded-lg"
                />
                {fieldState.error && (
                  <p className="text-red-500">{fieldState.error.message}</p>
                )}
              </>
            )}
          />
        </FormAuth>
      </div>
    </div>
  );
};
