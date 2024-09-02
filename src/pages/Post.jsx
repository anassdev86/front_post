import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = () => {
     const [user, setUser ] = useState({});
     const [msg , setMsg ] = useState('');
     const navigate = useNavigate();

     useEffect(()=>{
       if(!localStorage.secrut_tokken){
         return navigate('/login');
       }
       fetch('https://posts-nn5j.onrender.com/api/v1/users/azdknzkdn', {
         method: 'GET',
         headers: {
             "Content-type": "application/json",
              "authorization": "Bearer " +localStorage.secrut_tokken
         }
       })
       .then(res => res.json()).then(db => {
        console.log(db)
        setUser(db.data.user)
        return db;
       })
       .catch(err => console.log(err))
     },[]);

    const createNewPost = async e => {
      try{
         e.preventDefault();
         setMsg('Please wait...')
         const fm = new FormData(e.target)
         fm.append('fullname', user.name);
         fm.append('photoprofil', user.photo);
          const res = await fetch('https://posts-nn5j.onrender.com/api/v1/posts', {
             method: 'POST',
             body: fm
            });
            const msg = await res.json();
            setMsg('Done')
            navigate('/profil');
      }catch(err){
         console.log(err.message);
      }
      
    }
    
    return(
        <> 
          <form onSubmit={createNewPost}>
             <h4>Create new post for you </h4>
             
             <textarea name="description" id="" cols="30" rows="10" placeholder="write some think"></textarea>
             <input type="file" name="photo" />
             <input type="submit" value='submit' />
             <Link to='/profil'>Home page</Link>
          </form>
          <p>{ msg }</p>
        </>
    )
}

export default Post;