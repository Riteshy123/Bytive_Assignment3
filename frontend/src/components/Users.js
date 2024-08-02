import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Loader from "./Loader"; // Import the Loader component
import "../App.css";

const Users = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true); // New state for loading

  const getUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();
    setUsersData(json);
    setLoading(false); // Stop loading once data is fetched
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="userDiv">
      {loading ? (
        <Loader /> // Show loader while loading
      ) : (
        usersData?.map((user, index) => (
          <UserCard
            key={user.email}
            user1={user}
            index={index}
          />
        ))
      )}
    </div>
  );
};

export default Users;
