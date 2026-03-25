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

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon users">👥</div>
        <div className="card-header-text">
          <h3>User Directory</h3>
          <p>API Users from JSONPlaceholder</p>
        </div>
      </div>

      <button
        onClick={showUsers}
        className={`btn btn-toggle ${userList ? "active" : ""}`}
      >
        {userList ? "👁️ Hide Users" : "📂 Show Users"}
      </button>

      {/* Loading State */}
      {userList && user.loading && (
        <div className="status status-loading">
          <div className="spinner"></div>
          <span>Loading users...</span>
        </div>
      )}

      {/* Error State */}
      {userList && !user.loading && user.error && (
        <div className="status status-error">
          <span>⚠️ {user.error}</span>
        </div>
      )}

      {/* Users List */}
      {userList && !user.loading && !user.error && user.users.length > 0 && (
        <div>
          <p
            style={{
              marginTop: "1.5rem",
              marginBottom: "1rem",
              fontSize: "0.9rem",
              color: "#64748b",
            }}
          >
            Found {user.users.length} users
          </p>
          <div className="users-grid">
            {user.users.map((userItem, index) => (
              <div key={userItem.id} className="user-card">
                <div className="user-header">
                  <div className="user-avatar">{index + 1}</div>
                  <div>
                    <h4 className="user-name">{userItem.name}</h4>
                    <p className="user-username">@{userItem.username}</p>
                  </div>
                </div>
                <div className="user-info">
                  <div className="user-info-item">
                    <span className="user-info-icon">📧</span>
                    <span className="user-info-text">{userItem.email}</span>
                  </div>
                  <div className="user-info-item">
                    <span className="user-info-icon">☎️</span>
                    <span className="user-info-text">{userItem.phone}</span>
                  </div>
                  <div className="user-info-item">
                    <span className="user-info-icon">🌐</span>
                    <span className="user-info-text">{userItem.website}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!userList && (
        <div className="tip">
          💡 Click "Show Users" to fetch and display users from the API. This
          demonstrates async Redux operations with createAsyncThunk.
        </div>
      )}
    </div>
  );
};

export default UserView;
