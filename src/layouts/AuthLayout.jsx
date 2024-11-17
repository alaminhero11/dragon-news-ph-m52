import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="font-poppins bg-[#F3F3F3]">
            {/* -----Header----- */}
            <header className="w-10/12 mx-auto pt-7">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </header>
        </div>
    );
};

export default AuthLayout;