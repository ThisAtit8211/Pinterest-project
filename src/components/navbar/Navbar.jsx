import "./navbar.scss"
import { Link } from "react-router-dom";
import PinterestIcon from "../../assets/img/pinterest_logo.png";
import Profileimg from "../../assets/img/profileimg.jpeg";
import { IoIosNotifications } from "react-icons/io";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
    return (
        <nav>
            <ul className="ps-0 mt-3">
                <li>
                    <Link to="/">
                        <img src={PinterestIcon} id="PinterestIcon" className="ms-3 me-0" alt="PinterestIcon" />
                    </Link>
                </li>
                <li>
                    <Link to="/" className="active ms-0">Home</Link>
                </li>
                <li>
                    <Link to="/">Create</Link>
                </li>
                <li className="search-bar">
                    <input type="text" className="search-input" placeholder="Search" />
                </li>
                <li>
                    <button className="btn pb-2 ms-2 borderHover"><IoIosNotifications/></button>
                </li>
                <li>
                    <button className="btn pb-2 borderHover"><IoChatbubbleEllipses/></button>
                </li>
                <li>
                    <Link to="/">
                        <img src={Profileimg} id="ProfileIcon" alt="ProfileIcon" />
                    </Link>
                </li>
                <li>
                    <button className="btn pb-2 m-0 p-0"><RiArrowDropDownLine/></button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;