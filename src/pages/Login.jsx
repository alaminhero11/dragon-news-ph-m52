import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const { userLogIn, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    // ----------handleLoginSubmit---------
    const handleLoginSubmit = (e) => {
        e.preventDefault();

        // --- get form data ---
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        userLogIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/")
            })
            .catch((err) => {
                setError({ ...error, login: err.code })
            });
    }

    // ---------- Return ----------
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                <form onSubmit={handleLoginSubmit} className="card-body">
                    <h2 className="text-2xl font-semibold text-center">Login your account</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="input input-bordered"
                            required />
                        {
                            error.login && <label className="label text-red-600">
                                {error.login}
                            </label>
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        <p className="mt-3 text-center">Don’t Have An Account ? <Link to="/auth/register" className="text-green-600 mt-3">Register</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;