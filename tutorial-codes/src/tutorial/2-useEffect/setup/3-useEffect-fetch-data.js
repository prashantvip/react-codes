import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users,setUsers] = useState([]);


  const getUser = async () =>{
    const response = await fetch(url);
    const data = await response.json();
    // console.log(users);
    setUsers(data);
  }

  useEffect(() =>{
    getUser();
  },[])

  return (
    <>
    <h3>Github users</h3>
    <ul className='users'>
      {users.map((user) =>{
      const {id,login,avatar_url,html_url} = user
      return (
        <li key={id}>
          <img src={avatar_url} alt={login} />
          <div>
            <h4>{login}</h4>
            <a href={html_url}>profile</a>
          </div>

        </li>
      )
    })}
    </ul>
    
    </>
  );
};

export default UseEffectFetchData;