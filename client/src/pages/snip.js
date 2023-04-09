import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

function Snip() {
    
    const [title, setTitle] = useState("");
    const [alias, setAlias] = useState("");
    const [snip, setSnip] = useState("");
    const { id } = useParams();

    useEffect(() => {
      
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/snip/" + id);
                setTitle(response.data.title);
                setAlias(response.data.alias);
                setSnip(response.data.snip);
                console.log(response.data);
            } catch(err) {
                console.log(err);
            }
        };
        fetchData();

      });

    return (
      <div className="home">
        <form>
            <input type="text" placeholder="Title"
            value={title}
            readOnly/>

            <input type="text" placeholder="Alias"
            value={alias}
            readOnly/>

            <textarea id="sniptext"
            value={snip}
            readOnly/>
        </form>
      </div>
    );
}
  
export default Snip;