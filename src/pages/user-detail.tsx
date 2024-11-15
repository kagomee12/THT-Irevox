import { useParams } from "react-router-dom";
import { UserDetailLayout } from "../features/admin/user-detail-layout";

const UserDetail = () => {
  const { id } = useParams();
  return (
    <UserDetailLayout
      id={id  ? parseInt(id) : -1}
    />
  );
};

export default UserDetail;
