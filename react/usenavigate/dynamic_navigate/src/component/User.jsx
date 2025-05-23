import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

  const goToProfile = (id, name) => {
    navigate("/profile", { state: { userId: id, userName: name } });
  };

  return (
    <div>
      <h1>User List</h1>
      <button onClick={() => goToProfile(5, "John")}>Go to John's Profile</button>
    </div>
  );
};

export default User;
