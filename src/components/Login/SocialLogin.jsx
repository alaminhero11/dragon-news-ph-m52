import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div className="">
            <h2 className='text-lg font-semibold'>Login With</h2>
            <div className="*:w-full space-y-3">
                <button className="btn btn-outline flex items-center">
                    <FcGoogle />
                    <span className="text-blue-600">Login With Google </span>
                </button>
                <button className="btn btn-outline  flex items-center">
                    <FaGithub />
                    <span className="text-blue-600">Login With Github </span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;