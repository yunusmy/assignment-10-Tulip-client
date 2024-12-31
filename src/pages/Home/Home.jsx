import Carousel from "../../components/Carousel";
import RounningDonation from "../../components/RunningDonation";
import About from "./About";
import Helps from "./Helps";
import HowWork from "./HowWork";
import JoinMovemen from "./JoinMovemen";


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <RounningDonation></RounningDonation>
            <About></About>
            <HowWork></HowWork>
            <JoinMovemen></JoinMovemen>
            <Helps></Helps>
            
        </div>
    );
};

export default Home;