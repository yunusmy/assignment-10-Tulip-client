
import error from '../../assets/Ghost.png'
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className='bg-[#1e0235] min-h-svh'>
           
            <div className="flex flex-col h-[700px] justify-center items-center">
                <img className='h-[300px]' src={error} alt="" />
                <Link to='/'>
                <button className='outline text-white text-xl py-1 px-5 outline-white rounded-full'>Back Home</button>
                </Link>
            </div>
            <div className="">
                
            </div>
        </div>
    );
};

export default Error;