// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import {
  deleteTask,
  // updateTask,
} from "../../../services/hooks/task/use-task-hooks";

type CardTodoProps = {
  id: number;
  title: string;
  status: boolean;
  edit?: boolean;
};

export const CardTodo: React.FC<CardTodoProps> = ({
  id,
  title,
  // status,
  edit,
}) => {
  // const Navigate = useNavigate();
  // const [localStatus, setLocalStatus] = useState<boolean>(status);
  // const { mutateAsync } = updateTask();
  const { mutateAsync: deleteMutate } = deleteTask();


  // const handleCheckboxChange = async () => {
  //   setLocalStatus((prevStatus) => !prevStatus);
  //   await mutateAsync(data);
  // };
  return (
    <div
      className="bg-primary rounded-lg p-6 flex gap-4 justify-between align-middle"
      key={id}
    >
      <div
        className="flex gap-4 flex-col"
        style={edit ? { display: "none" } : {}}
      >
        {/* <button
          className="bg-secondary text-center w-24 h-10 p-0"
          onClick={() => Navigate(`/edit/${id}`)}
        >
          edit
        </button> */}
        <button
          className="bg-red-700 w-24 h-10 text-center align-middle p-0"
          onClick={() => deleteMutate(id)}
        >
          delete
        </button>
      </div>
      <div className="flex items-center flex-col align-middle justify-center">
        <p className="self-center ">{title}</p>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="w-8 h-8"
          name="status"
          // onClick={() => mutateAsync({ completed: false, id: id })}
          // onChange={handleCheckboxChange}
          // checked={localStatus}
          style={edit ? { display: "none" } : {}}
        />
      </div>
    </div>
  );
};
