import { useEffect, useState } from "react";

const User = ( { user }) => {
    const [ users , setUsers ] = useState([]);

    useEffect(() =>{
        if(!localStorage.secrut_tokken) return false;
        fetch('https://posts-nn5j.onrender.com/api/v1/users', {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                 "authorization": "Bearer " +localStorage.secrut_tokken
            }
        }).then(res => res.json()).then(dataBase => {
            const { data } = dataBase;
            const { users } = data;
            setUsers(users);
        }).catch(err => console.log(err))
    }, []);

    return(
        <>
          <div className="users_list">
            {
                users.map(el => <div className="profile_content">
                    <span className="profile_name">{el.name}</span>
                    <img src={el.photo} alt="You beaut" />
                </div>)
            }
          </div>
        </>
    )
}

export default User;