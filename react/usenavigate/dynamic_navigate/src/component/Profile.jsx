import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const { userId, userName } = location.state || {}; 

  return (
    <div>
      <h1>Profile Page</h1>
      <p>User ID: {userId || "Unknown"}</p>
      <p>User Name: {userName || "Unknown"}</p>
    </div>
  );
};

export default Profile;
