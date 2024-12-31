import { Outlet } from "react-router-dom";
import Footer from "../components/Common/Footer";
import Navber from "../components/Common/Navber";


const LayOut = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>            
        </div>
    );
};

export default LayOut;