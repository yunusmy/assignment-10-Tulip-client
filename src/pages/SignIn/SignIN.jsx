import { useContext } from "react";
import Lottie from "lottie-react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../shared/SocislLogin";
import Swal from "sweetalert2"; 
import LoginInLottieData from '../../assets/lottie/signin.json';

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from || "/";

    const handelSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then((result) => {
                Swal.fire({
                    icon: "success",
                    title: "Sign-in successful!",
                    text: `Welcome back, ${result.user.email}!`,
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Sign-in failed",
                    text: "Invalid email or password. Please try again.",
                    footer: `<p>Error details: ${error.message}</p>`,
                });
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    
          
                    <Lottie animationData={LoginInLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handelSignIn}>
                        <div className="form-control">
                            <h1 className="text-5xl font-bold">Sign In now!</h1>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                                name="email"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
