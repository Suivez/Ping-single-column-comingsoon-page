import "./Navbar.css";
import logo from "../images/logo.svg";

export default function Navbar() {
    return (
        <div className="navbar-container">
            <picture>
                <img src={logo} alt="logo" />
            </picture>
        </div>
    );
}
