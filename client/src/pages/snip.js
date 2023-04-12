import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

function Snip() {
    
    const [title, setTitle] = useState("");
    const [snip, setSnip] = useState("");
    const [copyButtonText, setCopyButtonText] = useState("Copy");
    const { id } = useParams();

    useEffect(() => {
      
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/snip/" + id);
                setTitle(response.data.title);
                setSnip(response.data.snip);
                console.log(response.data);
            } catch(err) {
                console.log(err);
            }
        };
        fetchData();
      });

      const handleCopy = () => {
        navigator.clipboard.writeText("localhost:3000/" + id);
        setCopyButtonText("Copied!");
      };

    return (
      <div className="home">
        <div className="form-head">            
            <input type="text" value={title} readOnly/>
            <input type="text" value={"localhost:3000/" + id} readOnly/>
            <button onClick={handleCopy}>{copyButtonText}</button>
        </div>
        <textarea id="sniptext"
        value={snip}
        readOnly/>
      </div>
    );
}
  
export default Snip;