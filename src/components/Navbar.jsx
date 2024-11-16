import { Link } from "react-router-dom";
import UserIcon from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className=""></div>
            <div className="space-x-5">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="login flex items-center space-x-3">
                <div>
                    <img className="" src={UserIcon} alt="" />
                </div>
                <Link to="/auth/login" className="bg-slate-800 text-white py-3 px-7">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;