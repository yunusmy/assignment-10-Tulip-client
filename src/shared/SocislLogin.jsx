import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";


const SocialLogin = () => {
    const {singInWithGoogle} =useContext(AuthContext);

    const handleGoogleSignIn = () =>{
        singInWithGoogle()
        .then((result)=>{
            console.log(result.user)

        })
        .catch(error=>{
            console.log(error.message)
        })

    }

    return (
        <>
            <button onClick={handleGoogleSignIn} className="btn text-2xl ">Google</button>            
        </>
    );
};

export default SocialLogin;