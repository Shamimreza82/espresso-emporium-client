import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const User = () => {
  const lodedUsers = useLoaderData();
  const [users, setUsers] = useState(lodedUsers)



  const handledeleted = _id => {
    fetch(`http://localhost:5000/user/${_id}`, {
        method: "DELETE", 

    })
    .then(res => res.json()) 
    .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
            console.log('deleted successfully');
            const remaning = users.filter(user => user._id !== _id)
            setUsers(remaning) 
        }
    })
  }

  return (
    <div>
      <h2>Users {lodedUsers.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At </th>
              <th>lastSignInTime
</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id}>
                <th></th>
                <td>{user.email}</td>
                <td>{user.createTime}</td>
                <td>{user.lastSignInTime}</td>
                <td>
                    <button onClick={()=>handledeleted(user._id)}  className="btn">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
