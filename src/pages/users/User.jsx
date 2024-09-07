import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const user = useLoaderData();

  return (
    <div>
      <h1>
        User {params.id} {user.name}
      </h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default User;
