import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const [userList, setUserList] = useState();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const showUsers = () => {
    if (!userList && user.users.length === 0) {
      dispatch(fetchUsers());
    }
    setUserList((prevState) => !prevState);
  };

    // useEffect(() => {
    //   dispatch(fetchUsers());
    // }, []);
  return (
    <div>
      <h2>List of Users:</h2>
      <button onClick={showUsers}>
        {userList ? "Hide Users" : "Show Users"}
      </button>
      {/* {user.loading && "Loading..."} */}
      {userList && user.loading && "Loading..."}
      {userList && !user.loading && user.error ? user.error : null}
      {userList && !user.loading && !user.error && user.users.length ? (
        <ol>
          {user.users.map((user) => (
            <li key={user.id}><div>Name: {user.username}</div> Phone:{user.phone}</li>
          ))}
        </ol>
      ) : null}
    </div>
  );
};

export default UserView;
