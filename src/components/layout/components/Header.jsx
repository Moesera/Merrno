import { Link } from "react-router-dom";
import Nav from "./Nav";


function Header() {
    return (
        <header>
            <Link to="/">Merrno</Link>
            <Nav />
        </header>
    )
};


export default Header