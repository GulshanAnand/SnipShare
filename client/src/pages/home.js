import { useState } from "react";
import axios from "axios";

function Home() {
    
    const [title, setTitle] = useState("");
    const [alias, setAlias] = useState("");
    const [snip, setSnip] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/snip", {
                title,
                alias,
                snip
            });
            // navigate("/");
            console.log(response.data.message);
        } catch(err) {
            console.log(err);
        }
    };

    return (
      <div className="home">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}/>

            <input type="text" placeholder="Alias"
            value={alias}
            onChange={(event) => setAlias(event.target.value)}/>

            <button type="submit">Create Snip</button><br></br>

            <textarea id="sniptext"
            value={snip}
            onChange={(event) => setSnip(event.target.value)}/>
        </form>
      </div>
    );
}
  
export default Home;