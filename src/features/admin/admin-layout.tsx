import { useEffect } from "react";
import { getAllUsers } from "../../services/hooks/user/use-user-hooks";
import { CardUser } from "./components/card-user";

export const AdminLayout = () => {
  const { data, isLoading } = getAllUsers();

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

  return (
    <div className="w-screen h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-secondary text-center mt-10">
        Users List
      </h1>
      <div className="flex flex-col m-auto w-[30%] gap-3">
        {data?.data.map((card) => (
          <CardUser name={card.username} id={card.id} />
        ))}
      </div>
    </div>
  );
};
