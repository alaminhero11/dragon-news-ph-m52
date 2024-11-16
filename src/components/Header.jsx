import moment from "moment";
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-5">
            <div>
                <img className="w-[400px]" src={logo} alt="" />
            </div>
            <h2 className="text-lg font-normal">Journalism Without Fear or Favour</h2>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;