import React from 'react'
import { Link } from 'react-router-dom';

export const User = () => {
  const [data, setData] = React.useState([]);
  const getData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();

      setData(data);
    } catch (error) {
      console.log(error.message);
      
    }
  }

  React.useEffect(()=>{
    getData();
  }, []);
  return (
    <div>
      {data.map((item) => (
        <Link key={item.id} to={`user/detail/${item.id}`}>
          <h1>{item.name}</h1>
        </Link>
      ))}
    </div>
  )
}

