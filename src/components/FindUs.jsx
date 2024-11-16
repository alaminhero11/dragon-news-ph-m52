import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="mt-5">
            <h2 className="text-lg font-semibold">Find Us On</h2>
            <div className="join join-vertical flex *:bg-base-100">
                <button className="btn join-item justify-start"><FaFacebook className="size-5" />Facebook</button>
                <button className="btn join-item justify-start"><FaTwitter className="size-5" />Twitter</button>
                <button className="btn join-item justify-start"><FaInstagram className="size-5" />Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;