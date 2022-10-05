import React from 'react'
import { useEffect, useState } from 'react'

const Now = () => {
  const [data, setData] = useState([]);
  async function getData(){
    let res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let result = await res.json();
    setData(result);
  }
  useEffect(()=>{
    getData();
  })
  return (
    <div>
        {data.map((result)=>(
          
            <li key={result.id}>{result.name}</li>
           
        ))}
    </div>
  )
}

export default Now