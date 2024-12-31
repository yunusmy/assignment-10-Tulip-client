import { useContext } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../../shared/SocislLogin";
import Swal from "sweetalert2";
import LoginInLottieData from '../../assets/lottie/register.json';

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return;
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^\s])(?=.{6,})/; // At least one uppercase, one lowercase, and minimum 6 characters
    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.",
      });
      return;
    }

    // Create user with Firebase or your auth system
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: `Welcome, ${name}!`,
        });

        // Update user profile (e.g., name and photoURL)
        // user.updateProfile({
        //   displayName: name,
        //   photoURL: photoURL,
        // });

        form.reset(); // Reset the form after success
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
        
                    <Lottie animationData={LoginInLottieData}></Lottie>
                
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pb-4">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
                className="input input-bordered"
                name="photoURL"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <SocialLogin />
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/signIn" className="text-blue-500">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
