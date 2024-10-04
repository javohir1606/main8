import React from 'react'

export const UserDetail = () => {
const [data, setData] = React.useCallback.State({});
const params = use.Params();

React.useEffect(() => {
fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`).then((res)=> res.json() )
.then((data) => {
  setData(data);
})

}, [])



return <div>
  <h1>{data.name}</h1>
  <h1>{data.email}</h1>
  <h1>{data.username}</h1>
</div>;
}
 
  


  

