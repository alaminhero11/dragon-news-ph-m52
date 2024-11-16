import Advertise from "../Advertise";
import FindUs from "../FindUs";
import SocialLogin from "../Login/SocialLogin";
import QZone from "../QZone";

const RightNavbar = () => {
    return (
        <div className="*:space-y-5">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
            <Advertise></Advertise>
        </div>
    );
};

export default RightNavbar;