import { getUsernameInitial } from "../../../utils/get-username-initial";
import { useNavigate } from "react-router-dom";

type cardUserProps = {
  name: string;
  id: number;
};
export const CardUser: React.FC<cardUserProps> = ({ name, id }) => {
  const Navigate = useNavigate();
  return (
    <div
      className="bg-primary rounded-lg h-16 flex gap-4 justify-center align-middle w-[100%] items-center hover:opacity-50 active:opacity-100"
      style={{ cursor: "pointer" }}
      onClick={() => Navigate(`/admin/user/${id}`)}
    >
      <div className="flex w-1/4 justify-center ">
        <div className="h-12 w-12 rounded-full bg-gray-600 flex items-center justify-center">
          <p className="text-black font-bold">{getUsernameInitial(name)}</p>
        </div>
      </div>
      <div className="flex w-3/4 justify-center">
        <p>{name}</p>
      </div>
    </div>
  );
};
