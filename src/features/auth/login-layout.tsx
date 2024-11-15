import { Controller } from "react-hook-form";
import FormAuth from "./components/form-auth";
import { useLoginHookForm } from "./hooks/login-hook-form";

export const LoginLayout = () => {
  const { control, handleSubmit, onsubmit } = useLoginHookForm();
  return (
    <div className="bg-black text-red-100 w-screen h-screen flex">
      <div className="flex m-auto w-[40%] h-fit flex-col bg-primary rounded-lg p-6 gap-y-4">
        <h1 className="text-3xl font-bold text-secondary text-center">Login</h1>
        <FormAuth
          buttonText="Login"
          action={handleSubmit(onsubmit)}
          verifyText1={"Don't have an account?"}
          verifyText2={"register here"}
          goTopage={"/auth/register"}
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
