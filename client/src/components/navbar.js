import { Link } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router-dom";

export const Navbar = () => {

    // const [cookies, setCookies] = useCookies(["access_token"]);
    // const navigate = useNavigate();

    // const logout = () => {
    //     setCookies("access_token", "");
    //     window.localStorage.removeItem("userID");
    //     navigate("/auth");
    // }

    return (
        <div className="navbar">
            <h2 id="mainHead">Snip Share</h2>
            <div className="navdiv">
                <Link to="/all"> All Snips</Link>
                <Link to="/login"> Login</Link>
            </div>
            {/* {!cookies.access_token ? (<Link to="/auth"> Login/Register</Link>):
            (<button onClick={logout}>Logout</button>)} */}
            
        </div>
    );
}