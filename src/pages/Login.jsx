import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ( { setUser }) => {
    
    const [ msg , setMsg ] = useState("");
    const navigate = useNavigate();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handlInputEmail = e => {
      setMsg('')
      setEmail(e.target.value)
    };
    const handlInputPass = e => {
      setMsg('')
      setPassword(e.target.value);
    }
    const sendDataToserver = e => {
        e.preventDefault();
        if(!email || !password) return setMsg('Please enter email and password');
        setMsg('Please wait ...')
        fetch('https://posts-nn5j.onrender.com/api/v1/users/login', {
            method: 'POST',
            headers: {
              "authorization": "Bearer jkhfjkzbfjkebfkjebfjke",
              "Content-type": "application/json"
            },
            body: JSON.stringify({email, password})
        }).then(res => res.json()).then(msg => {
          localStorage.setItem('secrut_tokken', msg.token);
          setMsg(true);
          
          navigate('/profil');
        }).catch(err => setMsg('Invalid email or password'));
    }

    return (
        <>
          <form onSubmit={sendDataToserver}>
            <p>{ msg }</p>
            <input type="email" onChange={handlInputEmail}name="email" placeholder="example@email.com" />
            <input type="password" onChange={handlInputPass} name="password" id="" placeholder="password"/>
            <input type="submit" value='submit' />
            <Link to='/signup'>Create your acount</Link>
          </form>
        </>
    )
}

export default Login;