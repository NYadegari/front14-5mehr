import React from "react";

// const UserList = ({users}) => {
//   return (
//     <div>UserList</div>
//   )
// }

function UserList({ users }) {
  return (
    <>
      <h2>Users:</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <span>{user.age}</span>
        </div>
      ))}
    </>
  );
}

export default UserList;
