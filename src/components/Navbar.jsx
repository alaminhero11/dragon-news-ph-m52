import { Link } from "react-router-dom";
import UserIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

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
                    {
                        user && user?.email ? (<div>
                            <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
                            <p>{user.displayName}</p>
                        </div>) : (<img className="" src={UserIcon} alt="" />)
                    }

                </div>
                {
                    user && user?.email ? (<button onClick={logOut} className="bg-slate-800 text-white py-3 px-7">Logout</button>) : (<Link to="/auth/login" className="bg-slate-800 text-white py-3 px-7">Login</Link>)
                }
            </div>
        </div >
    );
};

export default Navbar;