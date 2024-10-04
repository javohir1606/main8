import React from "react";
import { useParams } from "react-router-dom";

export const UserDetail = () => {
  const [data, setData] = React.useState({});
  const params = useParams();

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.email}</h1>
      <h1>{data.username}</h1>
    </div>
  );
};
