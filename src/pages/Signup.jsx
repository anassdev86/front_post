import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = ( {setUser }) => {
    const [ msg , setMsg ] = useState('');

     const navigate = useNavigate();
     if(localStorage.secrut_tokken) {
      return navigate('/profil');
    };


    
    const sendFormData =  e => {
        
         e.preventDefault();
         setMsg('Please wait ...');
         const fm = new FormData(e.target);
         fetch('https://posts-nn5j.onrender.com/api/v1/users/signup', {
            method: 'POST',
            body: fm
         }).then(res => res.json()).then(dataBase => {
           const { data } = dataBase;
           console.log(data)
           localStorage.setItem('secrut_tokken', data.token);
           navigate('/login');
         })
       
         

        
    }
    return(
        <>
          <form onSubmit={sendFormData}>
            <p>{ msg }</p>
            <input type="text" name="name" placeholder="enter your name" />
            <input type="email" name="email" placeholder="example@email.com" />
            <input type="password" name="password" placeholder="password"/>
            <input type="password" name="passwordConfirm" placeholder="confirm password" />
            <input type="file" name="photo" />
            <input type="submit" value="submit"/>
            <Link to='/'>go back</Link>
            <Link to='/login'>I have account</Link>
          </form>
        </>
    )
}

export default Signup;