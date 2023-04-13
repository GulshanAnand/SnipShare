import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SnipList() {
    
    const [snipList, setSnipList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/snip")
        .then(response => {
            setSnipList(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    const handleClick = async (item) => {
        navigate("/" + item.alias);
    };

    return (
        <div className="home">
            <h2>All Snips</h2>
            <div>
                {snipList.map(item => (
                    <div key={item.alias} onClick={() => handleClick(item)}>{item.title}</div>
                ))}
            </div>
        </div>
    );
}
  
export default SnipList;