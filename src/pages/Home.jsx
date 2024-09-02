import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import { Link, useNavigate } from "react-router-dom";



const Home = ({user, setUser }) => {
    const [dataBase, setDatabase ] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('secrut_tokken');
        
        fetch('https://posts-nn5j.onrender.com/api/v1/posts')
        .then(res => res.json())
        .then(result => {
           setDatabase(result.results)
           return result;
        });
        
    },[]);

    return(
        <div>
              <Link to='/createpost'>Create YOUR POST</Link>
              <button onClick={() => {
                localStorage.clear();
                return navigate('/login');
              }}>log out</button>
❤            <CardList dataBase = { dataBase }/>
        </div>
    );
}

export default Home;