import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useGetUserID } from "../hooks/useGetUserID";

function SnipList() {
    
    const [snipList, setSnipList] = useState([]);
    const navigate = useNavigate();
    const [cookies] = useCookies(["access_token"]);
    const userid = useGetUserID();

    useEffect(() => {
        axios.get("http://localhost:3001/snip/user/" + userid, {headers: {authorization: cookies.access_token}})
        .then(response => {
            setSnipList(response.data); 
        })
        .catch(error => {
            console.error(error);
        });
    });

    const handleClick = async (item) => {
        navigate("/" + item.alias);
    };

    return (
        <div className="snip-item-container">
            <h2>All Snips</h2>
            <div>
                {snipList.map(item => (
                    <div className="snip-item" key={item.alias}>
                        <div className="horizontal-div">
                            <h3>{item.title}</h3>
                            <div className="snip-item-div">
                                <button className="snip-item-button" onClick={() => handleClick(item)}>View</button>
                                <button className="snip-item-button">Edit</button>
                            </div>
                        </div>
                        <div>
                            <textarea className="item-textarea" value={item.snip} readOnly></textarea>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
  
export default SnipList;